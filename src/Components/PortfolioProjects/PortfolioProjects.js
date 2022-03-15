import './PortfolioProjects.css';
import React, { Component } from 'react';


class PortfolioProjects extends Component {
    render() {
        return (
            <div className="bkgImage mt-12">
                <div className="flexProject">
                    <a href="#"><button className="buttonBox border-2 rounded-full text-lg p-8 bg-gradient-to-r from-white to-blue-300">View Projects</button></a>
                </div>
            </div>
        )
    }
}

export default PortfolioProjects;