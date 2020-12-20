import {Meteor} from "meteor/meteor";
import { Mongo } from 'meteor/mongo';
import methods from "/methods";
import IClass from '../../api/collections/Class';

function createClass(params: IClass, teacherId: Mongo.ObjectID) {
    console.log(params, teacherId);
}

Meteor.methods({
    [methods.classes.create]: createClass,
});
