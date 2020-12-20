import React, { useContext, useState } from "react";
import authContext, {IAuth} from '../../contexts/authContext';
import {useTracker} from "meteor/react-meteor-data";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { Meteor } from "meteor/meteor";
import publications from "/publications";
import {IClass} from '../../../api/collections/Class';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddClassModal from "/imports/ui/components/class/AddClassModal";
import studentsContext from '../../contexts/studentsContext'
import {IUser} from "/types/common";

const classManagementPage = ({ }): React.ReactElement => {
    const [showAddClassModal, setShowAddClassModal] = useState(false);
    const auth = useContext(authContext) as IAuth;
    const students = useContext(studentsContext) as IUser;
    console.log(students);
    let classes: IClass[] = [];

    return (
        <Card>
            <Card.Header className="d-flex justify-content-between">
                Twoje klasy
                <Button size="sm" onClick={() => setShowAddClassModal(true)}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </Card.Header>
            <Card.Body>
            </Card.Body>
            <AddClassModal
                students={students}
                show={showAddClassModal}
                handleClose={() => setShowAddClassModal(false)}
                handleSubmit={() => setShowAddClassModal(false)}
            />
        </Card>
    );
}

export default classManagementPage;
