import React from 'react'

function ColorScheme() {
    return (
        <div className="flex justify-center my-20 gap-3">
            Dark Mode Setting:
            <label>
                <input name="color-scheme" type="radio" value="light dark" checked /> System</label>
            <label>
                <input name="color-scheme" type="radio" value="light" /> Light</label>
            <label>
                <input name="color-scheme" type="radio" value="dark" /> Dark</label>
        </div>

    )
}

export default ColorScheme