import React from 'react'
import './modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({ isOpen: true })}>Open modal window</button>

                {this.state.isOpen &&
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Modal Title</h1>
                            <p>I'm awesome modal!</p>
                            <button onClick={() => this.setState({ isOpen: false })}>Close modal &times;</button>
                        </div>
                    </div>}
            </React.Fragment>
        )
    }
}