import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import useAPIError from '../../common/hooks/useAPIError';
import { I_ErrorMessage, T_Nullable } from '../../interfaces/I_AuxProps';

interface ModalProps {
    error: T_Nullable<I_ErrorMessage>,
    handleClose: () => void
}

const ModalOverlay = ({ error, handleClose }: ModalProps) => {
    return (
        <Modal show={!!error} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {error?.message && <p>{error?.message.message}</p>}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

function APIErrorNotification() {
    const { error, removeError } = useAPIError();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        removeError();
    };

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<ModalOverlay handleClose={handleClose} error={error} />, document.getElementById('modalRoot')!)}
        </ React.Fragment>
    )
}

export default APIErrorNotification
