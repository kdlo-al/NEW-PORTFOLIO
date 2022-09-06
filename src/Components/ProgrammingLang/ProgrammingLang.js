import './ProgrammingLang.css';
import React, { Component } from 'react';
import { Icon } from '@iconify/react';

class ProgrammingLang extends Component {
    render() {
        return (
            <div id="program-language" className="w-full">
                <div className="tw-languages-container flex justify-start items-center flex-nowrap overflow-scroll lg:justify-start lg:flex-nowrap lg:overflow-scroll">
                    <div className="tw-html my-6 mx-4 p-6 border-4 border-yellow-600"> {/*border-2 added*/}
                        <Icon className="tw-html-icon w-32 h-32" icon="cib:html5-shield" /> {/* gray */}
                        <h1 className="tw-html-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">HTML</h1>
                    </div>
                    <div className="tw-css my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-css-icon w-32 h-32" icon="ion:logo-css3" color="#100" />
                        <h1 className=" tw-css-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">CSS</h1>
                    </div>
                    <div className="tw-javascript my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-javascript-icon w-32 h-32" icon="mdi:language-javascript" color="100" />
                        <h1 className="tw-javascript-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">JavaScript</h1>
                    </div>
                    <div className="tw-react my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-react-icon w-32 h-32" icon="fontisto:react" color="100" />
                        <h1 className="tw-react-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">React</h1>
                    </div>
                    <div className="tw-react-native my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-react-native-icon w-32 h-32" icon="fontisto:react" color="100" />
                        <h1 className="tw-react-native-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">React Native</h1>
                    </div>
                    <div className="tw-next my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-next-icon w-32 h-32" icon="logos:nextjs" />
                        <h1 className="tw-next-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">NextJs</h1>
                    </div>
                    <div className="tw-typescript my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-typescript-icon w-32 h-32" icon="mdi:language-typescript" /> {/* Black */}
                        <h1 className="tw-typescript-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">TypeScript</h1>
                    </div>
                    <div className="tw-command my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-command-icon w-32 h-32" icon="clarity:command-line" /> {/* Black */}
                        <h1 className="tw-command-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Terminal</h1>
                    </div>
                    <div className="tw-git my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-git-icon w-32 h-32" icon="bx:bxl-git" /> { /* Black */}
                        <h1 className="tw-git-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Git</h1>
                    </div>
                    <div className="tw-github my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-github-icon w-32 h-32" icon="carbon:logo-github" /> {/* Black */}
                        <h1 className="tw-github-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">GitHub</h1>
                    </div>
                    <div className="tw-sass my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-sass-icon w-32 h-32" icon="fa-brands:sass" />
                        <h1 className="tw-sass-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Sass</h1>
                    </div>
                    <div className="tw-tailwind my-6 mx-4 p-6 border-4 border-yellow-600">
                        <Icon className="tw-tailwind-icon w-32 h-32" icon="bx:bxl-tailwind-css" />{/* Black */}
                        <h1 className="tw-tailwind-h1 text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Tailwind CSS</h1>
                    </div>
                    <div className="my-6 mx-4 p-6 border-4 border-yellow-600 hidden">
                        <Icon className="w-32 h-32" icon="la:node-js" /> {/* Black */}
                        <h1 className="text-center mt-4 border-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Node</h1>
                    </div>
                </div>
            </div >
        )
    }
}

export default ProgrammingLang;