import React from "react";
import {Meteor} from "meteor/meteor";
import methods from "/methods";

export default {
    uploadUserAvatar(e: React.SyntheticEvent, user: Meteor.User) {
        // @ts-ignore
        var file = e.target.files[0];
        if (!file) return;

        var reader = new FileReader(); //create a reader according to HTML5 File API

        reader.onload = function(){
            // @ts-ignore
            var buffer = new Uint8Array(reader.result) // convert to binary
            Meteor.call(methods.accounts.uploadAvatar, buffer, user, console.log);
        }

        reader.readAsArrayBuffer(file); //read the file as arraybuffer
    }
}
