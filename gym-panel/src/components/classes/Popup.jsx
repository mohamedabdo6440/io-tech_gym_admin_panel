import React from 'react'
import Modal from 'react-bootstrap/Modal';

const Popup = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='mt-4'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='text-secondary'>
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                    {props.form}
                </>
            </Modal.Body>

        </Modal>
    )
}

export default Popup
