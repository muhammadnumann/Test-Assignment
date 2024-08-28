import React from 'react';

function Checkbox({ label, formik, id, isChecked, onChange, disabled }) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <symbol id="checkmark" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeMiterlimit={10} fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
                </symbol>
            </svg>

            <div className="flex justify-between items-center py-[9px]">
                <span className="text-main-color">{label}</span>
                <div className="promoted-checkbox">
                    <input
                        id={`checkbox-${id}`}
                        type="checkbox"
                        className="promoted-input-checkbox"
                        onChange={onChange}
                        checked={isChecked}
                        disabled={disabled}
                    />
                    <label htmlFor={`checkbox-${id}`}>
                        <svg><use xlinkHref="#checkmark" /></svg>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Checkbox;
