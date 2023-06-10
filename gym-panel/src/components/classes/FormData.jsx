import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { POST, class_url } from '../../libs/crudFunctions/CRUD_Functions';


const schema = yup.object({
    class_name: yup.string().required("This Field is required"),
    coach_name: yup.string().required("This Field is required"),
    timing: yup.string().required("This Field is required"),
    price: yup.string().required("This Field is required"),
})


const FormData = ({ setrecounter, recounter, setModalShow }) => {

    const form = useForm({
        defaultValues: {
            class_name: "",
            coach_name: "",
            timing: "",
            price: ""

        },
        resolver: yupResolver(schema),
    })

    const { register, handleSubmit, formState, reset } = form;
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;

    const onSubmit = (data) => {
        console.log('form submited', data);
        POST(class_url, data, recounter, setrecounter)
        setModalShow(false)
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>

                <Form.Control type='class_name'
                    id='class_name'
                    placeholder='Class Name'
                    {...register("class_name")
                    } />

                <p className='text-center text-danger p-2'>{errors.class_name?.message}</p>
            </div>

            <div>

                <Form.Control type='coach_name'
                    id='coach_name'
                    placeholder='Coach Name'
                    {...register("coach_name")}
                />
                <p className='text-center text-danger p-2'>{errors.coach_name?.message}</p>
            </div>

            <div>

                <Form.Control type='timing'
                    id='timing'
                    placeholder='Timing'
                    {...register("timing")}
                />
                <p className='text-center text-danger p-2'>{errors.timing?.message}</p>
            </div>

            <div>

                <Form.Control type='price'
                    id='price'
                    placeholder='Price'
                    {...register("price")}
                />
                <p className='text-center text-danger p-2'>{errors.price?.message}</p>
            </div>


            <input disabled={!isDirty || !isValid || isSubmitting} type='submit' value='save' className='btn btn-primary w-50 m-auto' />

        </form>
    )
}

export default FormData
