import React, { useEffect, useState } from 'react'
import { GET, class_url } from '../../libs/crudFunctions/CRUD_Functions'
import TableClasses from './TableData';

const ClassCo = () => {
    const [classes, setclasses] = useState(false)
    const [ReCounter, setReCounter] = useState(0);


    useEffect(() => {

        GET(class_url, setclasses)

    }, [ReCounter])


    return (
        <TableClasses classes={classes} setReCounter={setReCounter} ReCounter={ReCounter} />
    )
}

export default ClassCo
