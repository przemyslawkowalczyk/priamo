import { Accounts } from 'meteor/accounts-base';
import config from '/server/config';
import IStartup from "/types/server/startup/IStartup";

class AccountsStartup implements IStartup {
    startup() {
        const { adminUser: { SEED_PASSWORD, SEED_USERNAME } } = config;

        if (!Accounts.findUserByUsername(SEED_USERNAME)) {
            Accounts.createUser({
                username: SEED_USERNAME,
                password: SEED_PASSWORD,
            });
        }
    }
}

export default new AccountsStartup();


