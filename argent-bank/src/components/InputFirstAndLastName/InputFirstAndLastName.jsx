import './InputFirstAndLastName.scss'
import React from "react";

export default function InputFirstAndLastName({value, type, onChange}) {
    return (
        <input
            className="input-first-and-last-name"
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}