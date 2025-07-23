import React, { useState } from 'react'
import { coffeeSamples } from './Data/SampleData'
import CustomCard from './CustomComponents/CustomCard'
import CustomModal from './CustomComponents/CustomModal';
import { Form, Formik } from 'formik';
import CustomInput from './CustomComponents/CutomInput';
import CustomButton from './CustomComponents/CustomButton';
import * as motion from "motion/react-client"
import Swal from 'sweetalert2';
import { OrderFormSchema } from './Store/Schema';


//a seperate component for products
function Products() {

    interface OrderProps {
        name: string;
        phone: string;
        address: string;
    }

    type OrderType = {
        cost: number;
        name: string;
    };


    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [order, setOrder] = useState<OrderType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);



    const Handledb = async (values: OrderProps, resetForm: () => void) => {

        setIsLoading(true);

        const payload = {
            coffee_type: order?.name,
            cost: order?.cost,
            name: values.name,
            phone: values.phone,
            address: values.address,
        }

        try {
            const res = await fetch('/api/order', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                Swal.fire({
                    title: "Order created!",
                    text: "Your order was created successfully..",
                    icon: "success"
                });
                resetForm();
                setIsLoading(false);
                setIsOpen(false);
            } else {
                Swal.fire({
                    title: "Failed",
                    text: "Order was not created",
                    icon: "error"
                });
                setIsLoading(false)
            }
        } catch (error) {
            Swal.fire({
                title: "Failed",
                text: "Order was not created",
                icon: "error"
            });
            console.log(error);
            setIsLoading(false)
        }
    };


    return (
        <div className="grid grid-cols-1 gap-5 mt-10 mb-10">
            {
                coffeeSamples.map(({ cost, img, desc, name }, index) => (
                    <motion.div
                        key={index}
                        className=""
                        whileHover={{ x: -60 }}
                    >
                        <CustomCard
                            name={name}
                            desc={desc}
                            cost={`$ ${cost}`}
                            img={img}
                            func={() => {
                                setIsOpen(true); setOrder({ cost, name });
                            }}
                        />
                    </motion.div>
                ))
            }
            {
                isOpen &&
                <CustomModal visibility={isOpen} toggle={() => setIsOpen(false)}>
                    <div className="w-[95vw] max-w-[500px] h-auto max-h-[90vh] overflow-y-auto flex flex-col bg-white rounded-md items-center p-4 sm:p-6">
                        <div className="mt-4 sm:mt-6 text-center w-full">
                            <p className='text-[20px] sm:text-[22px] font-semibold text-custom mb-2'>Order details</p>
                            <hr className="border-gray-300" />
                        </div>

                        <div className="mb-8 mt-4 flex flex-col items-center text-center">
                            <p className='text-[15px] sm:text-[16px] font-semibold text-custom'>
                                Coffee type: <span className='text-primary text-[18px] sm:text-[20px]'>{order?.name}</span>
                            </p>
                            <p className='text-[15px] sm:text-[16px] font-semibold text-custom mt-2'>
                                Coffee Cost: <span className='text-primary text-[18px] sm:text-[20px]'>{order?.cost}</span>
                            </p>
                        </div>

                        <div className="w-full">
                            <Formik
                                initialValues={{ name: "", phone: "", address: "" }}
                                validationSchema={OrderFormSchema}
                                onSubmit={(values, { resetForm }) => {
                                    Handledb(values, resetForm);
                                }}
                            >
                                {() => (
                                    <Form className="w-full">
                                        <div className="grid grid-cols-1 gap-5">
                                            <CustomInput
                                                label='Name'
                                                id='name'
                                                name='name'
                                                placeholder='Enter your name'
                                                type='text'
                                            />
                                            <CustomInput
                                                label='Phone'
                                                id='phone'
                                                name='phone'
                                                placeholder='Enter your phone'
                                                type='number'
                                            />
                                            <CustomInput
                                                label='Address'
                                                id='address'
                                                name='address'
                                                placeholder='Type an address'
                                                type='text'
                                            />
                                            <div className="w-full flex flex-col sm:flex-row justify-between gap-3 mt-5">
                                                <CustomButton
                                                    title="Confirm order"
                                                    type='submit'
                                                    handleClick={() => { }}
                                                    className="!bg-primary !text-accent !border-none w-full sm:w-[200px] h-[45px] sm:h-[50px]"
                                                    disabled={isLoading}
                                                />
                                                <CustomButton
                                                    title="Cancel"
                                                    handleClick={() => { setIsOpen(false); }}
                                                    className="!bg-custom !text-accent !border-none w-full sm:w-[150px] h-[45px] sm:h-[50px]"
                                                    disabled={isLoading}
                                                />
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </CustomModal>
            }


        </div >
    )
}

export default Products