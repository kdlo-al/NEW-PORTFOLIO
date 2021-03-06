import React, { Component } from 'react';

class ContactMe extends Component {
    render() {
        return (
            <div id="contact-me" className="my-20 w-full">
                <div>
                    <h2 className="text-4xl text-center">Contact Me</h2>
                    <p className="mt-1.5 mx-28">Congratulation! You've made it to the end; Get in contact with me directly through my email down below. Fill out the form and I look forward to get back to you as soon as possible. Find alternative routes of reaching me by checking out my LinkedIn, Github, or my tech Twitter page. Thank you for taking the time to view my portfolio; I look forward to expanding our conversation.  </p>
                </div>

                <div className="flex justify-around items-center mt-12">
                    <div>
                        <div className="border-4 border-green-200 p-5">
                            <h6>Marvin Rivera</h6>
                            <h6>marvinarivera@gmail.com</h6>
                            <h6>910-274-1659</h6>
                        </div>

                        <div className="border-4 border-green-200 p-5 mt-4">
                            <a className="text-blue-500 hover:text-blue-800" href="https://www.linkedin.com/in/marvin-rivera-120595196/" target="_blank" rel="noopener noreferrer"><h6>LinkedIn</h6></a>
                            <a className="text-blue-500 hover:text-blue-800" href="https://github.com/kdlo-al" target="_blank" rel="noopener noreferrer"><h6>Github</h6></a>
                            <a className="text-blue-500 hover:text-blue-800" href="https://twitter.com/kdlo_ai_" target="_blank" rel="noopener noreferrer"><h6>Twitter</h6></a>
                        </div>
                    </div>

                    <form className="w-8/12" action="https://formsubmit.co/marvinarivera@gmail.com" method="POST">
                        <input className="bg-blue-100 w-full h-16 border-2 rounded-lg mt-1 text-white p-1" type="text" name="name"
                            placeholder="Name" required />
                        <br />
                        <input className="bg-blue-100 w-full h-16 border-2 rounded-lg mt-1 text-white p-1" type="email" name="email"
                            placeholder="Email" required />
                        <br />
                        <textarea
                            className="bg-blue-100 w-full h-44 p-1 text-white overflow-scroll border-2 rounded-lg mt-1 text-white"
                            type="text" name="message" placeholder="Type your Message" required></textarea>
                        <br />
                        <button className="border-2 rounded-lg bg-red-300 w-2/12 h-2/12" type="submit">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactMe;