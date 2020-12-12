import IStartup from "/types/server/startup/IStartup";
import accountsStartup from './Accounts.startup';

class Startup implements IStartup {
    startup() {
        accountsStartup.startup();
    }
}

export default new Startup();
