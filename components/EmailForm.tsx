'use client'

import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import CustomInput from './CustomComponents/CutomInput';
import CustomButton from './CustomComponents/CustomButton';
import Swal from 'sweetalert2';
import { EmailFormSchema } from './Store/Schema';

interface EmailProps {
    name: string;
    email: string;
    message: string;
}


//a seperate component for contact mail form

function EmailForm() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const Handledb = async (values: EmailProps, resetForm: () => void) => {
        setIsLoading(true);

        try {
            const res = await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                Swal.fire({
                    title: "Sent successfully",
                    text: "Message was successfully sent",
                    icon: "success"
                });
                resetForm();
            } else {
                Swal.fire({
                    title: "Sending failed",
                    text: "Message was not sent",
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Sending failed",
                text: "Message was not sent",
                icon: "error"
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="">
            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={EmailFormSchema}
                onSubmit={(values, { resetForm }) => {
                    Handledb(values, resetForm);
                }}
            >
                {() => (
                    <Form className="">
                        <div className="grid grid-cols-1 gap-5">
                            <CustomInput
                                label='Name'
                                id='name'
                                name='name'
                                placeholder='Enter your name'
                                type='text'
                            />
                            <CustomInput
                                label='Email'
                                id='email'
                                name='email'
                                placeholder='Enter your email'
                                type='email'
                            />
                            <CustomInput
                                label='Message'
                                id='message'
                                name='message'
                                placeholder='Type a message'
                                type='text'
                            />
                            <div className="w-full flex justify-center mt-5">
                                <CustomButton
                                    title="Send message"
                                    type="submit"
                                    handleClick={() => { }}
                                    className="w-[400px] !h-[50px]"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EmailForm;
