import React, { useEffect, useState } from 'react'
import { GET, clients_url } from '../../libs/crudFunctions/CRUD_Functions';
import ClientTable from './ClientTable';
import FormAddClient from './FormAddClient';

const ClientsCo = () => {

    const [clients, setClients] = useState(false)
    const [ReCounter, setReCounter] = useState(0);

    console.log(clients);

    useEffect(() => {

        GET(clients_url, setClients)

    }, [ReCounter])

    return (
        <div>
            <ClientTable clients={clients} ReCounter={ReCounter} setReCounter={setReCounter} />
        </div>
    )
}

export default ClientsCo
