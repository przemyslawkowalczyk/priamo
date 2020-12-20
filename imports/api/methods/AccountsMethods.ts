import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Match } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'
import { IFormValues } from '/types/common';
import methods from '/methods';

class AccountsMethods {
    static createAccount(val: IFormValues): void {
        Match.test(val, {
            email: String,
            username: String,
            password: String
        });

        Accounts.createUser(_.pick(val, ['username', 'email', 'password']));
    }
}

Meteor.methods({
    [methods.accounts.create]: AccountsMethods.createAccount
});
