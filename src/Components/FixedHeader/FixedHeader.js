import './FixedHeader.css';
import React, { Component } from 'react';

class FixedHeader extends Component {
    render() {
        return (
            <div>
                <div className="w-full h-16 fixed bg-gray-700 z-50">
                    <ul className="flex justify-end text-white">
                        <a href="#about-me"><li className="p-8 hover:bg-red-400">About Me</li></a>
                        <a href="#program-language"><li className="p-8 hover:bg-red-400">Languages</li></a>
                        <a href="#projects"><li className="p-8 hover:bg-red-400">Projects</li></a>
                        <a href="#resu"><li className="p-8 hover:bg-red-400">View Resume</li></a>
                        <a href="#contact-me"><li className="p-8 hover:bg-red-400">Contact Me</li></a>
                    </ul >
                </div > {/* bg-green-g05 */}
            </div >
        )
    }
}

export default FixedHeader;