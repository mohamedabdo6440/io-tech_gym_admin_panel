import Modal from 'react-bootstrap/Modal';

const EditPopup = (props) => {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.form}
            </Modal.Body>

        </Modal>
    )
}

export default EditPopup
