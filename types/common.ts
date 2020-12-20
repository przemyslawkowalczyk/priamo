import {Meteor} from 'meteor/meteor';

export interface IFormValues {
    email: string;
    username?: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
}

export interface IUser extends Meteor.User {
    profile?: {
        avatar?: number[];
    },
    roles?: {
        isTeacher?: boolean;
    }
}
