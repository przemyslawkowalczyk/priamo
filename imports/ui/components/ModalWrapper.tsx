import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

const ModalWrapper = ({
    children,
    title,
    show,
    onClose,
    onSubmit,
    ...rest
}: {
    children: any,
    show: boolean
    title: string,
    onClose: () => void,
    onSubmit: () => void
}) => (
    <Modal show={show} onHide={onClose} {...rest}>
        <Modal.Header>
            {title}
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={onClose}>
                Zamknij
            </Button>
            <Button variant="success" onClick={onSubmit}>
                Akceptuj
            </Button>
        </Modal.Footer>
    </Modal>
)

export default ModalWrapper;
