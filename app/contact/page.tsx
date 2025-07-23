'use client'

import Header from '@/components/LayoutComponents/Header'
import { info, socials } from '@/components/Links/links'
import EmailForm from '@/components/EmailForm'

function ContactPage() {
    return (
        <section>
            <Header
                title="Contact"
                intro="Feel free to get in touch with us at anytime."
            />

            <div className="mt-10 px-4 sm:px-6 lg:px-20 lg:h-[90vh]">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Contact Info Section */}
                    <div className="flex-1 ">
                        <p className="text-xl font-semibold text-primary mb-6">
                            Get in touch with us
                        </p>

                        {info.map(({ icon, title, details }, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 mb-5"
                            >
                                <div>{icon}</div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-primary text-sm sm:text-base">{title}</p>
                                    <p className="font-semibold text-custom text-base sm:text-lg">{details}</p>
                                </div>
                            </div>
                        ))}

                        <hr className="my-6 border-gray-300" />

                        <div className="flex items-center gap-6">
                            {socials.map(({ icon }, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer text-custom text-xl"
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Email Form Section */}
                    <div className="flex-1 border-2 border-custom rounded-md px-4 sm:px-6 py-8 ">
                        <p className="mb-6 text-primary font-semibold text-lg text-center">
                            Send Us a Message
                        </p>
                        <EmailForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;
