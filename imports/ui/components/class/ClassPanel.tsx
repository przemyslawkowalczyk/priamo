import React from "react";
import { IClass } from '../../../api/collections/Class';

const ClassPanel = ({ classEntry }: { classEntry: IClass }): React.ReactElement => {
    console.log(classEntry);
    return (
        <p>12</p>
    );
}

export default ClassPanel;
