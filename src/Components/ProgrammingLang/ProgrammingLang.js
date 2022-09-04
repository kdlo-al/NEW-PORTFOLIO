import './ProgrammingLang.css';
import React, { Component } from 'react';
import { Icon } from '@iconify/react';

class ProgrammingLang extends Component {
    render() {
        return (
            <div id="program-language" className="w-full">
                <div className="flex justify-start items-center flex-nowrap overflow-scroll lg:justify-start lg:flex-nowrap lg:overflow-scroll">
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600"> {/*border-2 added*/}
                        <Icon className="w-32 h-32" icon="cib:html5-shield" /> {/* gray */}
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">HTML</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="ion:logo-css3" color="#100" />
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">CSS</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="mdi:language-javascript" color="100" />
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">JavaScript</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="fontisto:react" color="100" />
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">React</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="fontisto:react" color="100" />
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">React Native</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="logos:nextjs" />
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">NextJs</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="mdi:language-typescript" /> {/* Black */}
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">TypeScript</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="clarity:command-line" /> {/* Black */}
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Command-line</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="bx:bxl-git" /> { /* Black */}
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Git</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="carbon:logo-github" /> {/* Black */}
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">GitHub</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="fa-brands:sass" />
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Sass</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="bx:bxl-tailwind-css" />{/* Black */}
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Tailwind CSS</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="w-32 h-32" icon="la:node-js" /> {/* Black */}
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Node</h1>
                    </div>
                </div>
            </div >
        )
    }
}

export default ProgrammingLang;