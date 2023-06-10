import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { POST, clients_url } from '../../libs/crudFunctions/CRUD_Functions';

const schema = yup.object({
    full_name: yup.string().required("This Field is required"),
    mobile_number: yup.string().required("This Field is required"),
    address: yup.string().required("This Field is required"),
    subscriptionType: yup.string().required("This Field is required"),
    avatar: yup.string(),

})

const FormAddClient = ({ setrecounter, recounter }) => {


    const [image, setImage] = useState("");

    const handleChange = (e) => {
        setImage(e.target.files[0].name);
    };

    const form = useForm({
        defaultValues: {
            avatar: image,
            full_name: "",
            mobile_number: "",
            address: "",
            subscriptionType: ""

        },
        resolver: yupResolver(schema),
    })

    const { register, handleSubmit, formState, reset } = form;
    const { errors, isDirty, isSubmitting, isSubmitSuccessful } = formState;

    const onSubmit = (data) => {
        console.log('form submited', data);
        POST(clients_url, data, recounter, setrecounter)
    }


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <Form.Control type='text'
                    id='full_name'
                    placeholder='Full Name'
                    {...register("full_name")
                    } />

                <p className='text-center text-danger p-2'>{errors.full_name?.message}</p>
            </div>

            <div>

                <Form.Control
                    type="file"
                    id='avatar'
                    {...register("avatar")}
                    onChange={handleChange}
                />

                <p className='text-center text-danger p-2'>{errors.avatar?.message}</p>
            </div>

            <div>

                <Form.Control type='text'
                    id='mobile_number'
                    placeholder='Mobile Number'
                    {...register("mobile_number")}
                />
                <p className='text-center text-danger p-2'>{errors.mobile_number?.message}</p>
            </div>

            <div>

                <Form.Control type='text'
                    id='address'
                    placeholder='Address'
                    {...register("address")}
                />
                <p className='text-center text-danger p-2'>{errors.address?.message}</p>
            </div>

            <div>

                <Form.Control type='text'
                    id='subscriptionType'
                    placeholder='Subscription Type'
                    {...register("subscriptionType")}
                />
                <p className='text-center text-danger p-2'>{errors.subscriptionType?.message}</p>
            </div>


            <input disabled={!isDirty || isSubmitting} type='submit' value='save' className='btn btn-primary w-50 m-auto' />

        </form>
    )
}

export default FormAddClient
