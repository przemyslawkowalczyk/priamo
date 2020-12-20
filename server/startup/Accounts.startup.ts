import { Accounts } from 'meteor/accounts-base';
import config from '/config/config';
import IStartup from "/types/server/startup/IStartup";
import {Meteor} from "meteor/meteor";

class AccountsStartup implements IStartup {
    startup() {
        const { adminUser: { SEED_PASSWORD, SEED_USERNAME } } = config;

        if (!Accounts.findUserByUsername(SEED_USERNAME)) {
            const userId: string = Accounts.createUser({
                username: SEED_USERNAME,
                password: SEED_PASSWORD,
            });

            return Meteor.users.update(userId, {
                $set: {
                    roles:{
                        isTeacher: true
                    },
                },
            });
        }
    }
}

export default new AccountsStartup();


