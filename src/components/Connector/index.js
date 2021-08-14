import React, { useState } from 'react'

export default (props) => {

    // Total number of icons
    const initialCount = props.count

    // State storing currently active icons
    const [activeCount, setActiveCount] = useState(initialCount)

    // Handle clicks
    const handleClick = (e) => {
        e.preventDefault()

        // Left clicks
        if (e.type === 'click' && activeCount > 0) {
            setActiveCount(activeCount - 1)
        }
        
        // Right clicks
        if (e.type === 'contextmenu' && activeCount < initialCount) {
            setActiveCount(activeCount + 1)
        }
    }

    return (

        <button onClick={handleClick} onContextMenu={handleClick} className={activeCount > 0 ? 'incomplete' : 'complete'}>

            <div className="label">
                {props.label}
            </div>

            <div className="icon">
                {[...Array(initialCount)].map((e, i) => {
                    return <div className={i < activeCount ? 'connector-indicator undiscovered' : 'connector-indicator discovered'} key={i}></div>
                })}
            </div>
            
        </button>

    )
}
