import { Meteor } from 'meteor/meteor';
import startup from './startup';
import '/imports/api/methods/AccountsMethods';


Meteor.startup(() => {
    startup.startup();
});
