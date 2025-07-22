'use client'

import Header from '@/components/LayoutComponents/Header'
import { info, socials } from '@/components/Links/links'
import EmailForm from '@/components/EmailForm'


function page() {

    return (
        <section className="">
            <Header
                title='Contact'
                intro='Fell free to get in touch with us at anytime .'
            />
            <div className="h-[80vh] mt-20">

                <div className=" flex justify-between px-20">

                    <div className="grid grid-cols-1 ">
                        <div className="">
                            <p className='text-[20px] font-semibold text-primary'> Get in touch with us</p>
                        </div>
                        {
                            info.map(({ icon, title, details }, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-5 mb-5"
                                >
                                    <div className="">
                                        <span>{icon}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 ">
                                        <p className='text-primary text-[16px]'>{title}</p>
                                        <p className='font-semibold text-custom text-[18px] '>{details}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="">
                            <hr />
                            <div className="flex items-center mt-10 gap-10">
                                {
                                    socials.map(({ icon, }, index) => (
                                        <div
                                            key={index}
                                            className="cursor-pointer"
                                        >
                                            <span className="text-custom">{icon}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* imported a custom from the component folder */}
                    <div className="flex flex-col items-center border-[2px] px-10 py-10 border-custom rounded-md">
                        <p className='mb-10 text-primary font-semibold text-[18px]'>Send Us a Message</p>
                        <EmailForm />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default page