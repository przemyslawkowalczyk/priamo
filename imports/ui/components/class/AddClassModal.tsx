import React from 'react';
import ModalWrapper from '../../components/ModalWrapper';
import {IUser} from "/types/common";

const AddClassModal = ({ show, handleClose, handleSubmit, students }: { show: boolean, handleClose: () => void, handleSubmit: () => void, students: IUser }) => {
    console.log(students);
    return (
        <ModalWrapper
            title="Nowa Klasa"
            show={show}
            onClose={handleClose}
            onSubmit={handleSubmit}
        >
            <p>body</p>
        </ModalWrapper>
    )
}

export default AddClassModal;
