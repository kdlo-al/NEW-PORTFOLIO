import './PortfolioProjects.css';
import React, { Component } from 'react';

class PortfolioProjects extends Component {
    render() {
        return (
            <div id="projects" className="flex justify-evenly w-full mt-12">
                <div className="w-72 border-4 border-red-200 p-6">
                    <h1 className="text-center pb-6">Periodic Table</h1>
                    <p className="pb-6">Fun, colorful Periodic Table that takes you through all 118 elements. Click on a element to learn more about that element. Each element when clicked will pop-up a small wikipedia page onsite.</p>
                    <div>
                        <a href="https://kdlo-al.github.io/Periodic-Table/" target="_blank" rel="noopener noreferrer"><button className="border-2 rounded-full bg-gradient-to-r from-blue-200 to-white p-2 mr-2">View Project</button></a>
                        <a href="https://github.com/kdlo-al/Periodic-Table" target="_blank" rel="noopener noreferrer"><button className=" border-2 rounded-full bg-gradient-to-r from-yellow-400 to-white p-2">Github Repo</button></a>
                    </div>
                </div >
                <div className="w-72 border-4 border-red-200 p-8">
                    <h2 className="text-center pb-6">Chore Door</h2>
                    <p className="pb-6">This is a game made with JavaScript technology. Open all the doors without running into our android friend, Chore Door. Can you take the win?</p>
                    <div>
                        <a href="https://kdlo-al.github.io/Chore-Door/" target="_blank" rel="noopener noreferrer"><button className="border-2 rounded-full bg-gradient-to-r from-blue-200 to-white p-2">View Project</button></a>
                        <a href="https://github.com/kdlo-al/Chore-Door" target="_blank" rel="noopener noreferrer"><button className="border-2 rounded-full bg-gradient-to-r from-yellow-400 to-white p-2">Github Repo</button></a>
                    </div>
                </div>
                <div className="w-72 border-4 border-red-200 p-6">
                    <h3 className="text-center pb-6">Ravenous</h3>
                    <p className="pb-6">Feeling hungry? Find a restaurant near you wether you're craving something fast or a night out on the town. Find it here using our Yelp based clone using the latest API technology</p>
                    <div className="mt-4">
                        <a href="https://kdlo-al.github.io/Ravenous/" target="_blank" rel="noopener noreferrer"><button className="border-2 rounded-full bg-gradient-to-r from-blue-200 to-white p-2 mr-2">View Project</button></a>
                        <a href="https://github.com/kdlo-al/Ravenous" target="_blank" rel="noopener noreferrer"><button className="border-2 rounded-full bg-gradient-to-r from-yellow-400 to-white p-2">Github Repo</button></a>
                    </div>
                </div>
            </div >
        )
    }
}

export default PortfolioProjects;