import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import useAPISuccess from '../../common/hooks/useAPISuccess';
import { I_SuccessMessage, T_Nullable } from '../../interfaces/I_AuxProps';

interface ModalProps {
    success: T_Nullable<I_SuccessMessage>,
    handleClose: () => void
}

const ModalOverlay = ({ success, handleClose }: ModalProps) => {
    return (
        <Modal show={!!success} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Success</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {success?.message && <p>{success?.message.message}</p>}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

function APISuccessNotification() {
    const { success, removeSuccess } = useAPISuccess();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        removeSuccess();
    };

    return (
        <React.Fragment>
            {/*// @ts-ignore*/}
            {ReactDOM.createPortal(<ModalOverlay handleClose={handleClose} success={success} />, document.getElementById('modalRoot')!)}
        </ React.Fragment>
    )
}

export default APISuccessNotification;
