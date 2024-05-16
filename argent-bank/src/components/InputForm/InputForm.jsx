import './InputForm.scss';

export default function InputForm({htmlFor, text, type, id}) {
    return (
        <div className="input-wrapper">
            <label htmlFor={htmlFor}>{text}</label
            ><input type={type}
                    id={id}/>
        </div>
    )
}