import './SectionOne.css';
import React, { Component } from 'react';
import video from './production ID_4763824.mp4'
import Typewriter from 'typewriter-effect';

class SectionOne extends Component {
    render() {
        return (
            <div className="relative flex items-center w-full"> {/*flex-row-reverse*/}
                <div className="type-writer-text absolute text-green-100 text-5xl text-left font-medium p-2 w-3/4 h-28 pl-5">
                    <Typewriter
                        options={{
                            strings: ["Hello, I am Marvin", "I am a Web Developer", "This is my portfolio"],
                            autoStart: true,
                            deleteSpeed: 40,
                            loop: true,
                        }}
                    />
                </div>
                <video autoPlay loop muted width="auto">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default SectionOne;