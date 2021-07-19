import React, { useState } from 'react'

export default (props) => {
    const [visibility, setVisibility] = useState(true)

    return (
        <section className={visibility ? 'category' : 'category hidden' }>

            <h2 onClick={() => visibility ? setVisibility(false) : setVisibility(true)}>
                <div className="category-visibility-icon">{visibility ? '-' : '+'}</div>
                {props.heading}
            </h2>

            <div className="category-inner">
                {props.children}
            </div>

        </section>
    )
}