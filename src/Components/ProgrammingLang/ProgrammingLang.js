import './ProgrammingLang.css';
import React, { Component } from 'react';
import { Icon } from '@iconify/react';

class ProgrammingLang extends Component {
    render() {
        return (
            <div className="w-full bg-green-g01">
                <div className="flex flex-wrap justify-evenly items-center lg:justify-start lg:flex-nowrap lg:overflow-scroll">
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="cib:html5-shield" /> {/* gray */}
                        <h1 className="text-center">HTML</h1>
                    </div>
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="ion:logo-css3" color="#100" />
                        <h1 className="text-center">CSS</h1>
                    </div>
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="mdi:language-javascript" color="100" />
                        <h1 className="text-center">JavaScript</h1>
                    </div>
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="fontisto:react" color="100" />
                        <h1 className="text-center">React</h1>
                    </div>
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="mdi:language-typescript" /> {/* Black */}
                        <h1 className="text-center">TypeScript</h1>
                    </div>
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="clarity:command-line" /> {/* Black */}
                        <h1 className="text-center">Command-line</h1>
                    </div>
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="carbon:logo-github" /> {/* Black */}
                        <h1 className="text-center">GitHub</h1>
                    </div>
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="bx:bxl-git" /> { /* Black */}
                        <h1 className="text-center">Git</h1>
                    </div>
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="bx:bxl-tailwind-css" />{/* Black */}
                        <h1 className="text-center">Tailwind CSS</h1>
                    </div>
                    <div className="my-4 mx-4">
                        <Icon className="w-32 h-32" icon="la:node-js" /> {/* Black */}
                        <h1 className="text-center">Node</h1>
                    </div>
                </div>
            </div >
        )
    }
}

export default ProgrammingLang;