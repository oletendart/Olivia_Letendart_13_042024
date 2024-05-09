import './InputPassword.scss';

export default function InputPassword() {
    return (
        <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password"
                    id="password"/>
        </div>
    )
}