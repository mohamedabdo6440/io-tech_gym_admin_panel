import React, { useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import Popup from './Popup';
import Button from 'react-bootstrap/esm/Button';
import { DELETE, class_url } from '../../libs/crudFunctions/CRUD_Functions';
import EditPopup from './EditPopup';
import FormData from './FormData';
import EditForm from './EditForm';

const TableData = ({
    classes,
    setReCounter,
    ReCounter
}) => {

    const [modalShow, setModalShow] = useState(false);
    const [EditModalShow, setEditModalShow] = useState(false);
    const [SingleDataClass, setSingleDataClass] = useState(false)

    const EditClassData = (id) => {
        const singleData = classes && classes.filter((cl) => {
            return cl.id === id;
        })
        setSingleDataClass(singleData)
    }

    return (
        <Table striped bordered hover variant="secondary mt-5 mb-2" responsive style={{ fontSize: "11px" }}>
            <thead>
                <tr>
                    <th className='text-center'>Image Title</th>
                    <th className='text-center'>created At</th>
                    <th className='text-center'>Class Name</th>
                    <th className='text-center'>Coach Name</th>
                    <th className='text-center'>Timing</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>
                        <Button
                            className='btn btn-primary'
                            style={{ fontSize: "10px" }}
                            variant="primary"
                            onClick={() => setModalShow(true)}>
                            Add Class
                        </Button>
                    </th>
                </tr>
            </thead>
            <tbody>

                {
                    classes && classes.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td className='text-center'>
                                    <img src={`${data.image === "" || "image 1" ? '/images/about-img.png' : `${data.image}`}`} alt='classImage' className='w-50 h-50' />
                                </td>
                                <td className='text-center'>{data.createdAt}</td>
                                <td className='text-center'>{data.class_name}</td>
                                <td className='text-center'>{data.coach_name}</td>
                                <td className='text-center'>{data.timing}</td>
                                <td className='text-center'>{data.price}</td>

                                <td className='text-center'>


                                    <Button
                                        style={{ fontSize: "10px" }}
                                        className='btn btn-info mx-1'
                                        variant="primary"
                                        onClick={() => {
                                            setEditModalShow(true)
                                            EditClassData(data.id)
                                        }}
                                    >
                                        Edit
                                    </Button>


                                    <button className='btn btn-danger'
                                        style={{ fontSize: "10px" }}
                                        onClick={() => { data.id === undefined ? alert("This Class Not Have ID") : DELETE(class_url, data.id, ReCounter, setReCounter) }}
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
                form={<FormData setModalShow={setModalShow} setrecounter={setReCounter} recounter={ReCounter} />}
                title={'Add New Class'}
            />
            <EditPopup
                onHide={() => setEditModalShow(false)}
                show={EditModalShow}
                form={<EditForm setEditModalShow={setEditModalShow} singl_data={SingleDataClass} ReCount={ReCounter} setReCount={setReCounter} />}
            />
        </Table>
    )
}

export default TableData
