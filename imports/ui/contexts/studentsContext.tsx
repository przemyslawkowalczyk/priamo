import React, { createContext } from 'react';
import propTypes from 'prop-types';
import {useTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import publications from "/publications";
import { IUser } from '/types/common';

// @ts-ignore
const studentsContext = createContext();

interface IStudentsContext {
    students: IUser[];
    isPending: boolean;
}

// @ts-ignore
export const StudentsProvider = ({ children }) => {
    const value: IStudentsContext = {
        students: [],
        isPending: true,
    };

    useTracker(() => {
        const handler = Meteor.subscribe(publications.user.allStudentProfiles);

        if (handler.ready()) {
            value.students = Meteor.users
                .find({
                    $or: [
                        {
                            roles: {
                                $exists: false
                            }
                        }, {
                            roles: {
                                $not: {
                                    isTeacher: true
                                }
                            },
                        }
                    ]
                }, {
                    limit: 10,
                    fields: {
                        profile: 1
                    },
                })
                .fetch();

            value.isPending = false;
        }
    });

    return (
        <studentsContext.Provider value={value}>
            {children}
        </studentsContext.Provider>
    )
}

StudentsProvider.propTypes = {
    children: propTypes.element.isRequired
}

export { studentsContext as default };
