import { Meteor } from 'meteor/meteor';
import startup from './startup';
import '/imports/api/methods/AccountsMethods';
import '/imports/api/publications/AccountPublications';

Meteor.startup(() => {
    startup.startup();
});
