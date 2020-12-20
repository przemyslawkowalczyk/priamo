import { Mongo } from 'meteor/mongo';

export interface IClass {
    _id: string;
    name: string;
    avatar: string;
    teacher: Mongo.ObjectID,
    participant: Mongo.ObjectID[]
}

const ClassCollection = new Mongo.Collection<IClass>('Class');

export { ClassCollection as default };
