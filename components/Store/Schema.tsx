
import * as Yup from "yup";


const Error = 'this field is required'

export const EmailFormSchema = Yup.object().shape({
    name: Yup.string()
        .required(Error),

    email: Yup.string()
        .required(Error)
        .email("Invalid email address"),

    message: Yup.string()
        .required(Error)
        .min(15, "Message must be at least 10 characters"),
});


export const OrderFormSchema = Yup.object().shape({
    name: Yup.string()
        .required(Error),

    phone: Yup.string()
        .required(Error),

    address: Yup.string()
        .required(Error)
        .min(10, "address must be at least 10 characters"),
});

