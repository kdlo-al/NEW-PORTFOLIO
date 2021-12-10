import React, { Component } from 'react';
import dreamerIllustration from './undraw_dreamer_gxxi.png';

class AboutMe extends Component {
    render() {
        return (
            <div id="about-me" className="mt-12 flex items-center justify-around">
                <div className="ml-4">
                    <h1 className="text-center text-4xl">About Me</h1>
                    <p className="mt-1.5">I am life learner with an intense passion for the arts and science. As a web developer I am well aware that my studies will never end as new emerging technologies arise every day. I am well prepared to take this journey one step at a time and welcome it with open arms and an open mind. My desire is that you will notice that this is more than a job to me but something that I am immensely passionate about.</p>
                </div>
                <img className="w-5/12" src={dreamerIllustration} alt="surfer illustration from undraw" />
            </div>
        )
    }
}

export default AboutMe;