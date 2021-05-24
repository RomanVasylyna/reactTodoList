import React from 'react'

const Header = ({ showForm, onToggleForm }) => {

    return (
        <div className="header">

            <h1>Task Tracker</h1>

            <button
                className="header-btn"
                style={showForm ?
                    { backgroundColor: 'red' }
                    : { backgroundColor: 'green' }}
                onClick={() => onToggleForm()}>
                {showForm ? 'Close' : 'Open'}
            </button>

        </div>
    )
}

export default Header
