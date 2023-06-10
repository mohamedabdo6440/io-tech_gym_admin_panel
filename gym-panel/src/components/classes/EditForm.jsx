import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Table from 'react-bootstrap/esm/Table'
import { PUT, class_url } from '../../libs/crudFunctions/CRUD_Functions'

const EditForm = ({ singl_data, setEditModalShow, ReCount, setReCount }) => {



    const [CoachName, setCoachName] = useState("")
    const [ClassName, setClassName] = useState("")
    const [Timing, setTiming] = useState("")
    const [Price, setPrice] = useState("")
    const [ID, setID] = useState(0)
    const PutData = {
        class_name: ClassName,
        coach_name: CoachName,
        timing: Timing,
        price: Price
    }



    useEffect(() => {
        singl_data && singl_data.map((data) => {
            return (
                setClassName(data.class_name),
                setCoachName(data.coach_name),
                setTiming(data.timing),
                setPrice(data.price),
                setID(data.id)
            )
        })
    }, [singl_data])

    return (
        <>

            <Table bordered responsive className='px-2'
                style={{ fontSize: "11px" }}
            >
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Coach Name</th>
                        <th>Timing</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    <tr >
                        <td>

                            <input
                                type='text'
                                value={ClassName}
                                onChange={(e) => { setClassName(e.target.value) }}
                            />

                        </td>
                        <td>

                            <input
                                type='text'
                                value={CoachName}
                                onChange={(e) => { setCoachName(e.target.value) }}
                            />

                        </td>
                        <td>

                            <input
                                type='text'
                                value={Timing}
                                onChange={(e) => { setTiming(e.target.value) }}
                            />

                        </td>
                        <td>

                            <input
                                type='text'
                                value={Price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />

                        </td>
                    </tr>


                </tbody>
            </Table>
            <Button className='w-25 ' onClick={() => {

                setEditModalShow(false)
                ID ? PUT(class_url, ID, PutData, ReCount, setReCount) : alert("this class not have 'id' :(")


            }}>Edit</Button>
        </>
    )
}

export default EditForm
