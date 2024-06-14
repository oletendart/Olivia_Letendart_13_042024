import './InputForm.scss';

export default function InputForm({htmlFor, text, type, id, name, value, onChange, required}) {
    return (
        <div className="input-wrapper">
            <label htmlFor={htmlFor}>{text}</label>
            <input type={type}
                   id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}/>
        </div>
    )
}