import React from 'react';

const FormRow = ({ type, name, text, labelText, onChange, defaultValue }) => {
    return (
        <div className="form__group">
            <label htmlFor={ labelText || name}>{text}</label>
            <input
                id={labelText || name}
                name={name}
                type={type}
                onChange={onChange}
                defaultValue={ defaultValue || ''}
            />
        </div>
    )
}

export default FormRow;