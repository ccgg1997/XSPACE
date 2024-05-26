import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

function CheckPointNotif({ checkpoint = false, setCheckpoint }) {

    return (
        <ToastContainer
            position='bottom-start'>
            <Toast onClose={() => setCheckpoint(false)} show={checkpoint} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Checkpoint!</strong>
                </Toast.Header>
                <Toast.Body>!Punto de control guardado!</Toast.Body>
            </Toast>
        </ToastContainer>

    );
}

export default CheckPointNotif;