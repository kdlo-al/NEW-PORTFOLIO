import './SectionOne.css';
import React, { Component } from 'react';
import video from './production ID_4763824.mp4'

class SectionOne extends Component {
    render() {
        return (
            <div className="w-full bg-red-400">
                <video autoPlay loop muted width="100%">
                    <source src={video} type="video/mp4" />
                </video>
                <div className=""></div>
            </div>
        )
    }
}

export default SectionOne;