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
                setIsLoading(false)
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
                <CustomModal visibility={isOpen} toggle={() => setIsOpen(false)} >
                    <div className="w-[500px] !h-[800px] flex flex-col bg-white rounded-md items-center">
                        <div className="mt-10">
                            <p className='text-[22px] font-semibold text-custom mb-1'>Order details</p>
                            <hr />
                        </div>
                        <div className="mb-10 mt-2 flex flex-col items-center">
                            <p className='text-[16] font-semibold text-custom'> Coffee type: <span className='text-primary text-[20px]'>{order?.name}</span></p>
                            <p className='text-[16] font-semibold text-custom'> Coffee Cost: <span className='text-primary text-[20px]'>{order?.cost}</span></p>
                        </div>

                        <div className="">
                            <Formik
                                initialValues={{ name: "", phone: "", address: "" }}
                                validationSchema={OrderFormSchema}
                                onSubmit={(values, { resetForm }) => {
                                    Handledb(values, resetForm);
                                }}
                            >
                                {() => (
                                    <Form
                                        className=""
                                    >
                                        <div className="grid grid-cols-1 gap-5">
                                            <div className="">
                                                <CustomInput
                                                    label='Name'
                                                    id='name'
                                                    name='name'
                                                    placeholder='Enter your name'
                                                    type='text'
                                                />
                                            </div>
                                            <div className="">
                                                <CustomInput
                                                    label='Phone'
                                                    id='phone'
                                                    name='phone'
                                                    placeholder='Enter your phone'
                                                    type='number'
                                                />
                                            </div>
                                            <div className="">
                                                <CustomInput
                                                    label='Address'
                                                    id='address'
                                                    name='address'
                                                    placeholder='type a address'
                                                    type='text'
                                                />
                                            </div>
                                            <div className="w-full flex justify-between mt-5">
                                                <div className="">
                                                    <CustomButton
                                                        title="Confirm order"
                                                        type='submit'
                                                        handleClick={() => { }}
                                                        className="!bg-primary !text-accent !border-none !w-[200px] !h-[50px]"
                                                        disabled={isLoading}
                                                    />
                                                </div>
                                                <div className="">
                                                    <CustomButton
                                                        title="Cancel"
                                                        handleClick={() => { setIsOpen(false); }}
                                                        className="!bg-custom !text-accent !border-none !w-[150px] !h-[50px]"
                                                        disabled={isLoading}
                                                    />
                                                </div>
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