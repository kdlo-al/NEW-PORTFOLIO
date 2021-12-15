import './Resume.css';
import React, { Component } from 'react';
import codingIllustration from './undraw_Freelancer_re_irh4.png';
import resume from '../Resume/Resume 2021-2022.docx';

class Resume extends Component {
    render() {
        return (
            <div id="resu" className="mt-12 flex items-center justify-around">
                <img className="w-5/12" src={codingIllustration} alt="Programming" />
                <div className="">
                    <h4 className="text-center text-4xl">Interested in learning more?</h4>
                    <p className="mt-1.5">learn more about me and determine if I make a perfect candidate for your team. Click below on the bouncing container to download my resume; thank you for expressing interest in my passion.</p>
                    <form method="get" action={resume}>
                        <button className="float-right animate-bounce border-2 mt-12 mr-32 p-5 rounded-full bg-gradient-to-r from-white to-blue-200" type="submit">Download Resume</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Resume;