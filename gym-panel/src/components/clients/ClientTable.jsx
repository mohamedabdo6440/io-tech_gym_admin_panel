import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import Popup from '../classes/Popup';
import FormAddClient from './FormAddClient';
import { DELETE, clients_url } from '../../libs/crudFunctions/CRUD_Functions';
import EditPopup from '../classes/EditPopup';
import EditClientForm from './EditClientForm';

const ClientTable = ({
    clients,
    ReCounter,
    setReCounter,
}) => {

    const [modalShow, setModalShow] = useState(false);
    const [EditModalShow, setEditModalShow] = useState(false);
    const [SingleDataClient, setSingleDataClient] = useState(false)

    const EditClientData = (id) => {
        const singleData = clients && clients.filter((cl) => {
            return cl.id === id;
        })
        setSingleDataClient(singleData)
    }
    console.log(SingleDataClient);
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

                                    <Button
                                        style={{ fontSize: "10px" }}
                                        className='btn btn-info mx-1'
                                        variant="primary"
                                        onClick={() => {
                                            setEditModalShow(true)
                                            EditClientData(client.id)
                                        }}
                                    >
                                        Edit
                                    </Button>


                                    <button className='btn btn-danger'
                                        style={{ fontSize: "10px" }}
                                        onClick={() => { client.id === undefined ? alert("This Class Not Have ID") : DELETE(clients_url, client.id, ReCounter, setReCounter) }}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <Popup
                show={modalShow}
                onHide={() => setModalShow(false)}
                form={<FormAddClient setModalShow={setModalShow} setrecounter={setReCounter} recounter={ReCounter} />}
                title={'Add New Client'}
            />

            <EditPopup
                show={EditModalShow}
                onHide={() => setEditModalShow(false)}
                form={<EditClientForm setEditModalShow={setEditModalShow} singl_data={SingleDataClient} ReCount={ReCounter} setReCount={setReCounter} />}

            />
        </Table>
    )
}

export default ClientTable
