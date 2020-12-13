import {Meteor} from "meteor/meteor";

const actions = {
    loginWithPassword(username: string, password: string, cb: (e: any) => void): void {
        Meteor.loginWithPassword(username, password, cb);
    }
}

export default actions;
