import './FixedHeader.css';
import React, { Component } from 'react';
import { CloseOutMenu } from '../../icons'

class FixedHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            <div className='tw-header-one'>
                <div className="tw-header w-full h-16 fixed bg-gray-700 z-50">
                    <ul className="tw-nav-menu flex justify-end text-white">
                        <a href="#about-me"><li className="tw-about-me p-8 hover:bg-red-400">About Me</li></a>
                        <a href="#program-language"><li className="tw-pl p-8 hover:bg-red-400">Languages</li></a>
                        <a href="#projects"><li className="tw-projects p-8 hover:bg-red-400">Projects</li></a>
                        <a href="#resu"><li className="tw-resu p-8 hover:bg-red-400">View Resume</li></a>
                        <a href="#contact-me"><li className="tw-contact-me p-8 hover:bg-red-400">Contact Me</li></a>
                    </ul >

                    <div className="tw-hamburger-menu hidden" onClick={() => {
                        this.setState({
                            isOpen: !this.state.isOpen
                        })
                    }}>
                        <div className="tw-hamburger-menu-icon">
                            <div className="tw-hamburger-menu-icon-bar w-8 h-1 bg-red-200"></div>
                            <div className="tw-hamburger-menu-icon-bar w-8 h-1 mt-2 bg-red-200"></div>
                            <div className="tw-hamburger-menu-icon-bar w-8 h-1 mt-2 bg-red-200"></div>
                        </div>
                    </div>
                </div >

                {this.state.isOpen &&
                    <div className="tw-nav-menu-overlay">
                        <button className="close-out-x" onClick={() => {
                            this.setState(
                                { isOpen: false }
                            )
                        }}
                        >
                            {CloseOutMenu()}
                        </button>
                        <ul>
                            <a href="#about-me"><li className="tw-about-me p-8 hover:bg-red-400" onClick={() => { this.setState({ isOpen: false }) }}>About Me</li></a>
                            <a href="#program-language"><li className="tw-pl p-8 hover:bg-red-400" onClick={() => { this.setState({ isOpen: false }) }}>Languages</li></a>
                            <a href="#projects"><li className="tw-projects p-8 hover:bg-red-400" onClick={() => { this.setState({ isOpen: false }) }}>Projects</li></a>
                            <a href="#resu"><li className="tw-resu p-8 hover:bg-red-400" onClick={() => { this.setState({ isOpen: false }) }}>View Resume</li></a>
                            <a href="#contact-me"><li className="tw-contact-me p-8 hover:bg-red-400" onClick={() => { this.setState({ isOpen: false }) }}>Contact Me</li></a>
                        </ul>
                    </div>}

                {this.state.isOpen &&
                    <div className="full-screen-close" onClick={() => {
                        this.setState(
                            { isOpen: false }
                        )
                    }}></div>}
            </div >
        )
    }
}

export default FixedHeader;