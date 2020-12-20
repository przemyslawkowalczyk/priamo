import React from "react";
import { IClass } from '../../../api/collections/Class';
import ClassPanel from "./ClassPanel";

const ClassPanel = ({ classes }: { classes: IClass[] }): React.ReactElement[] => {
    return classes.map(classEntry => <ClassPanel classEntry={classEntry} />);
}

export default ClassPanel;
