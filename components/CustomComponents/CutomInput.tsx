import { useField } from "formik";

interface InputProps {
    label: string;
    id: string;
    name: string;
    type: string;
    placeholder: string;
    disabled?: boolean;
    inputClassName?: string;
    container?: string;
}

const CustomInput = ({
    id,
    label,
    type,
    inputClassName,
    placeholder,
    disabled,
    ...props
}: InputProps) => {

    const [field, meta] = useField(props);

    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className=" text-custom text-[16px] font-semibold"
            >{label}</label>
            <input
                type={type}
                className={`${inputClassName}  ${meta.touched && meta.error ? "!border !border-red-600" : "focus:border-b-secondary"}  border-b-[1px] border-custom w-full md:w-[400px] py-2 px-3 focus:outline-0  `}
                id={id}
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                {...props}
            />
            {meta.touched && meta.error && (
                <div className="text-sm text-red-600">{meta.error}</div>
            )}

        </div>

    )
}


export default CustomInput;