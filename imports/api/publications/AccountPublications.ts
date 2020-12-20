import { Meteor } from 'meteor/meteor';
import publications from "/publications";

Meteor.publish(publications.user.profile, (userId) => {
    return Meteor.users.findOne(userId, {
        fields: {
            avatar: 1,
            roles: 1
        }
    });
});
