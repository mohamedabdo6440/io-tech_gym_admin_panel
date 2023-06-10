import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import Popup from '../classes/Popup';
import FormAddClient from './FormAddClient';

const ClientTable = ({
    clients,
    ReCounter,
    setReCounter,
}) => {

    const [modalShow, setModalShow] = useState(false);
    const [EditModalShow, setEditModalShow] = useState(false);
    const [SingleDataClass, setSingleDataClass] = useState(false)


    return (
        <Table striped bordered hover variant="secondary mt-5 mb-2 text-center" responsive style={{ fontSize: "11px" }}>
            <thead>
                <tr>
                    <th>Client Image</th>
                    <th>Created At</th>
                    <th>Full Name</th>
                    <th>Mobile Number</th>
                    <th>Address</th>
                    <th>Subscription type</th>
                    <th>
                        <Button
                            className='btn btn-primary'
                            style={{ fontSize: "10px" }}
                            variant="primary"
                            onClick={() => setModalShow(true)}>
                            Add Client
                        </Button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    clients && clients.map((client) => {
                        return (
                            <tr key={client.id}>
                                <td className='text-center'>
                                    <img src={`${client.avatar === "" || "avatar 13" ? '/images/client.png' : `${client.avatar}`}`} alt='classImage' className='w-50 h-50' />
                                </td>
                                <td>{client.createdAt}</td>
                                <td>{client.full_name}</td>
                                <td>{client.mobile_number}</td>
                                <td>{client.address}</td>
                                <td>{client.subscriptionType}</td>
                                <td>
                                    <button>edit</button>
                                    <button>delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <Popup
                show={modalShow}
                onHide={() => setModalShow(false)}
                form={<FormAddClient setrecounter={setReCounter} recounter={ReCounter} />}
                title={'Add New Client'}
            />
        </Table>
    )
}

export default ClientTable
