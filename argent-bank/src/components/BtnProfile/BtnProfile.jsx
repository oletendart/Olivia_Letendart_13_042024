import './BtnProfile.scss'
import React from "react";

export default function BtnProfile({className, onClick, text}) {
    return (
        <button
            className={className}
            onClick={onClick}>
            {text}
        </button>
    )
}