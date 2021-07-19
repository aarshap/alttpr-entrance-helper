import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default (props) => {

    // State storing whether .category-inner is visible or collapsed
    const [visibility, setVisibility] = useState(true)

    // Motion variants for section
    const sectionVariants = {
        visible: { "margin-bottom": "1em" },
        hidden: { "margin-bottom": 0 }
    }

    // Motion variants for .category-inner
    const innerVariants = {
        visible: { height: "auto", opacity: 1 },
        hidden: { height: 0, opacity: 0 }
    }

    return (
        <motion.section
            className={visibility ? 'category' : 'category hidden' }
            initial="visible"
            animate={visibility ? 'visible' : 'hidden'}
            variants={sectionVariants}
        >

            <h2 onClick={() => visibility ? setVisibility(false) : setVisibility(true)}>
                <div className="category-visibility-icon">
                    {visibility ?
                        <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                            <rect y="3" width="8" height="2" />
                        </svg>
                    :
                        <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3V0H3V3H0V5H3V8H5V5H8V3H5Z" />
                        </svg>
                    }
                </div>
                {props.heading}
            </h2>

            <motion.div
                className="category-inner"
                initial="visible"
                animate={visibility ? 'visible' : 'hidden'}
                variants={innerVariants}
            >
                {props.children}
            </motion.div>

        </motion.section>
    )
}