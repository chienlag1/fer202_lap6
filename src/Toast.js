import React from 'react';
import { Toast } from 'react-bootstrap';

function ToastComp({ showMessage, onClose, message, background }) {
    return (
        <Toast bg={background} show={showMessage} onClose={onClose} animation={true} style={{
            position: 'absolute', top: '10%', left: '50%',
            transform: 'translate(-50%, -50%)'
        }} autohide={true}>
            <Toast.Header>
                <strong className="me-auto">Message</strong>
            </Toast.Header>
            <Toast.Body className='text-white'>{message}</Toast.Body>
        </Toast>
    )
}

export default ToastComp;