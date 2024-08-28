import React from 'react'
import { useState } from "react";
import styles from "./styles.module.css";

function ColorScheme() {
    const [isDark, setDark] = useState(false);


    return (
        <div className="flex justify-center my-20 gap-3 items-center">
            Dark Mode Setting:
            <label
                className={styles.container}
                title={isDark ? "Activate light mode" : "Activate dark mode"}
                aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
            >
                <input
                    name="color-scheme"
                    type="checkbox"
                    value={isDark ? 'dark' : "light"}
                    defaultChecked={isDark}
                    // onClick={() => setDark(!isDark)}
                    onChange={() => setDark(!isDark)}
                />

                <div />
            </label>
        </div>

    )
}

export default ColorScheme