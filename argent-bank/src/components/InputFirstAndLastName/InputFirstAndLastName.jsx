import './InputFirstAndLastName.scss'
import React from "react";

export default function InputFirstAndLastName({value, type, onChange}) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}