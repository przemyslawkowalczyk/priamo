import { Meteor } from 'meteor/meteor';
import startup from './startup';

Meteor.startup(() => {
    startup.startup();
});
