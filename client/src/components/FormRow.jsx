import React from 'react';

const FormRow = ({ type, name, text, onChange }) => {
    return (
        <div className="form__group">
            <label htmlFor={name}>{text}</label>
            <input
                id={name}
                name={name}
                type={type}
                onChange={onChange}
            />
        </div>
    )
}

export default FormRow;