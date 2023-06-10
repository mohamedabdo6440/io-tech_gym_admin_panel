import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Table from 'react-bootstrap/esm/Table'
import { PUT, clients_url } from '../../libs/crudFunctions/CRUD_Functions'

const EditClientForm = ({ singl_data, setEditModalShow, ReCount, setReCount }) => {
  const [Address, setAddress] = useState("")
  const [FullName, setFullName] = useState("")
  const [MobileNumber, setMobileNumber] = useState("")
  const [SubscriptionType, setSubscriptionType] = useState("")
  const [ID, setID] = useState(0)
  const PutData = {
    address: Address,
    full_name: FullName,
    mobile_number: MobileNumber,
    subscriptionType: SubscriptionType,
  }
  useEffect(() => {
    singl_data && singl_data.map((data) => {
      return (
        setAddress(data.address),
        setFullName(data.full_name),
        setMobileNumber(data.mobile_number),
        setSubscriptionType(data.subscriptionType),
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
            <th>Full Name</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Subscription type</th>
          </tr>
        </thead>
        <tbody>

          <tr >
            <td>

              <input
                type='text'
                value={FullName}
                onChange={(e) => { setFullName(e.target.value) }}
              />

            </td>
            <td>

              <input
                type='text'
                value={MobileNumber}
                onChange={(e) => { setMobileNumber(e.target.value) }}
              />

            </td>
            <td>

              <input
                type='text'
                value={Address}
                onChange={(e) => { setAddress(e.target.value) }}
              />

            </td>
            <td>

              <input
                type='text'
                value={SubscriptionType}
                onChange={(e) => { setSubscriptionType(e.target.value) }}
              />

            </td>
          </tr>


        </tbody>
      </Table>
      <Button className='w-25 ' onClick={() => {

        setEditModalShow(false)
        ID ? PUT(clients_url, ID, PutData, ReCount, setReCount) : alert("this class not have 'id' :(")


      }}>Edit</Button>
    </>
  )
}

export default EditClientForm
