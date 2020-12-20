import React from "react";
import {Meteor} from "meteor/meteor";
import methods from "/methods";
// @ts-ignore
import { notify } from 'react-notify-toast';
import errorHandler from "/imports/ui/utils/errorHandler";

export default {
    uploadUserAvatar(e: React.SyntheticEvent, user: Meteor.User) {
        // @ts-ignore
        var file = e.target.files[0];
        if (!file) return;

        var reader = new FileReader(); //create a reader according to HTML5 File API

        reader.onload = function(){
            // @ts-ignore
            var buffer = new Uint8Array(reader.result) // convert to binary
            Meteor.call(
                methods.accounts.uploadAvatar,
                buffer,
                user,
                (err: any) => err ? errorHandler(err) : notify.show("Avatar zmieniony", 'success')
            );
        }

        reader.readAsArrayBuffer(file); //read the file as arraybuffer
    }
}
