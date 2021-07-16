import React, { useState } from 'react'

export default (props) => {

    // Available statuses
    const statuses = ['Undiscovered', 'Discovered']

    // Additional statuses for dropdowns
    if (props.type == "dropdown") {
        statuses.push('Lumberjack', 'Pyramid')
    }

    // State storing current status
    const [status, setStatus] = useState(0)

    // Handle clicks
    const handleClick = (e) => {
        e.preventDefault()

        // Left clicks

        if (e.type === 'click' && status < statuses.length - 1) {
            setStatus(status + 1)
        }

        if (e.type === 'click' && status === statuses.length - 1) {
            setStatus(0)
        }

        // Right clicks

        if (e.type === 'contextmenu' && status > 0) {
            setStatus(status - 1)
        }

        if (e.type === 'contextmenu' && status === 0) {
            setStatus(statuses.length - 1)
        }

    }

    return (

        <button onClick={handleClick} onContextMenu={handleClick} className={status == 1 ? 'complete' : 'incomplete'}>

            <div className="label">
                {props.label}
            </div>

            <div className="icon">
                {status == 0 &&
                    <svg className="visibility-indicator incomplete" width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.76348 11.6208L6.16265 9.95719H6.63666C8.6325 9.95719 12.0005 8.88073 12.0005 5.08869C12.0005 2.25076 10.2791 0 6.03791 0C1.67201 0 0.000488281 2.34862 0.000488281 5.50459H2.64498C2.64498 3.47401 3.6928 2.27523 6.1377 2.27523C8.40797 2.27523 9.3061 3.5474 9.3061 5.08869C9.3061 6.97248 8.03375 7.90214 5.48905 7.95107H3.49321V11.6208H5.76348ZM4.66577 16C5.78843 16 6.56182 15.682 6.56182 14.4098C6.56182 13.1376 5.78843 12.8685 4.66577 12.8685C3.51816 12.8685 2.69487 13.1376 2.69487 14.4098C2.69487 15.682 3.51816 16 4.66577 16Z" />
                    </svg>
                }
                {status == 1 &&
                    <svg className="visibility-indicator complete" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.12187 0.707076C1.73136 0.316564 1.0982 0.316568 0.707671 0.707063V0.707063C0.317119 1.09758 0.317085 1.73078 0.707618 2.12132L5.87908 7.29284C6.2696 7.68336 6.26961 8.31652 5.87909 8.70704L0.707604 13.8786C0.317077 14.2691 0.317116 14.9023 0.707654 15.2928V15.2928C1.09818 15.6833 1.73137 15.6834 2.12189 15.2928L7.29338 10.1213C7.68391 9.73077 8.31707 9.73077 8.7076 10.1213L13.8791 15.2928C14.2696 15.6833 14.9028 15.6833 15.2933 15.2928V15.2928C15.6839 14.9023 15.6839 14.2691 15.2934 13.8786L10.1219 8.70704C9.73137 8.31652 9.73137 7.68336 10.1219 7.29284L15.2934 2.12132C15.6839 1.73079 15.6839 1.09758 15.2933 0.707063V0.707063C14.9028 0.316568 14.2696 0.316565 13.8791 0.707077L8.7076 5.87859C8.31707 6.26911 7.6839 6.26911 7.29338 5.87859L2.12187 0.707076Z" />
                    </svg>
                }
                {status == 2 &&
                    <svg className="visibility-indicator incomplete" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0005 6C16.0005 9.1261 14.8169 11.6966 13.3013 12C13.3013 12 8.82837 9.46869 5 9.05646V16H3V9H0V3H3V0H5V2.9436C8.82861 2.53143 13.3013 0 13.3013 0C14.8169 0.303406 16.0005 2.8739 16.0005 6Z" />
                    </svg>
                }
                {status == 3 &&
                    <svg className="visibility-indicator incomplete" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 16H0L2 12H5V16Z" />
                        <path d="M7 16H16L14 12H7V16Z" />
                        <path d="M13 10L11.5 7H9V10H13Z" />
                        <path d="M10.5 5L8 0L5.5 5H10.5Z" />
                        <path d="M4.5 7L3 10H7V7H4.5Z" />
                    </svg>
                }
            </div>
            
        </button>

    )
}
