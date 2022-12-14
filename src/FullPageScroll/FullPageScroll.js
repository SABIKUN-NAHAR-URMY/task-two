import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import img1 from '../images/mobile-app-of-the-year-by-entrepreneur.png';
import img2 from '../images/nexgtv-entertainment-mobile-app-development.png';
import img3 from '../images/nexgtv-mobile-app-ui-design.png';
import img4 from '../images/veme-app-ui-design.png';
import img5 from '../images/veme-blockchain-app-developed.png';
import img6 from '../images/measure-total-body-weight-through-fitness-app.png';
import img7 from '../images/nasa-fitness-tracking-mobile-app.png';
import img11 from '../images/domi-img1.png';
import img12 from '../images/ux-strategy-for-mobile-app-devlopment.png';
import img13 from '../images/karavan-social-networking-app-screen.png';
import img14 from '../images/social-networking-app-case-study.png';
import img15 from '../images/developers-for-social-media-app.png';
import img16 from '../images/karavan_2.png';
import img17 from '../images/karavan-social-networking-app-screen-2.png';
import img18 from '../images/melltoo-img1.png';
import img19 from '../images/erp-app-development-service.png';
import img20 from '../images/melltoo-img2.png';
import { FaArrowRight } from "react-icons/fa";
import './FullPageScroll.css';

const FullPageScroll = () => {
    const SectionStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',

    }
    return (
        <Fullpage>
            <FullpageNavigation></FullpageNavigation>
            <FullPageSections>
                <FullpageSection style={SectionStyle}>
                    <div className='flex'>
                        <div className='bg-purple-600 p-28 relative' >
                            <img src={img1} className='mt-72' alt="" />
                            <h1 className='text-white text-3xl font-bold pt-7'>ABC 123</h1>
                            <p className='text-white pt-6'>We are the best Web Development company in the world</p>
                            <div className='text-white flex justify-between pt-7'>
                                <p className='flex items-center'>View Case Study<FaArrowRight></FaArrowRight></p>
                                <h1>S K I P</h1>
                            </div>

                            <svg className='absolute top-40 w-52 right-0 rounded-full'
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="10, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div className='bg-slate-300 flex'>
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection style={SectionStyle}>
                    <div className='flex'>
                        <div className='bg-blue-700 p-40 relative' >
                            <h1 className='text-white text-3xl mt-72 font-bold pt-7'>ABC 234</h1>
                            <p className='text-white pt-6'>We are the best Web Development company in the world</p>
                            <div className='text-white flex justify-between pt-7'>
                                <p>Comming Soon</p>
                                <h1>S K I P</h1>
                            </div>

                            <svg className='absolute top-40 w-52 right-0 rounded-full'
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="10, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div className='bg-blue-900 flex px-52'>
                            <img src={img5} className=' mt-72 w-[300px] h-[500px]' alt="" />
                            <img src={img4} className='-pb-5 w-[300px] h-[500px]' alt="" />
                        </div>
                    </div>
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <div className='flex'>
                        <div className='bg-indigo-900 p-40 relative' >
                            <h1 className='text-white text-3xl mt-72 font-bold pt-7'>ABC 345</h1>
                            <p className='text-white pt-6'>We are the best Web Development company in the world</p>
                            <div className='text-white flex justify-between pt-7'>
                                <p>Comming Soon</p>
                                <h1>S K I P</h1>
                            </div>

                            <svg className='absolute top-40 w-52 right-0 rounded-full'
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="10, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div className='bg-indigo-800 flex px-52'>
                            <img src={img7} className=' mt-72 w-[300px] h-[500px]' alt="" />
                            <img src={img6} className='-pb-5 w-[300px] h-[500px]' alt="" />
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection style={SectionStyle}>
                    <div className='flex'>
                        <div className='bg-cyan-900 p-32 relative' >
                            <h1 className='text-white text-3xl mt-72 font-bold pt-7'>ABC 456</h1>
                            <p className='text-white pt-6'>We are the best Web Development company in the world</p>
                            <div className='text-white flex justify-between pt-7'>
                                <p>Comming Soon</p>
                                <h1>S K I P</h1>
                            </div>

                            <svg className='absolute top-40 w-52 right-0 rounded-full'
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="10, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div className='bg-black w-[1000px]'>

                            <div className='flex bgImgAdd'>
                                <img src={img11} className=' mt-80 mx-32 w-[200px] h-[400px]' alt="" />
                                <img src={img12} className='mt-32 w-[200px] h-[400px]' alt="" />
                            </div>
                        </div>
                    </div>
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <div className='flex'>
                        <div className='bg-sky-700 p-32 relative' >
                            <h1 className='text-white text-3xl mt-72 font-bold pt-7'>ABC 345</h1>
                            <p className='text-white pt-6'>We are the best AR Development company in the world</p>
                            <div className='text-white flex justify-between pt-7'>
                                <p className='flex items-center'>View Case Study<FaArrowRight></FaArrowRight></p>
                                <h1>S K I P</h1>
                            </div>

                            <svg className='absolute top-40 w-52 right-0 rounded-full'
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="10, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div className='bg-cyan-400 px-24'>
                            <div className='flex'>
                                <img src={img13} className='w-[200px] h-[300px]' alt="" />
                                <img src={img14} className='w-[200px] h-[400px]' alt="" />
                                <img src={img15} className='mt-20 w-[300px] h-[500px]' alt="" />
                            </div>
                            <div className='flex'>
                                <img src={img16} className=' mb-12 w-[200px] h-[300px]' alt="" />
                                <img src={img17} className='w-[200px] h-[300px]' alt="" />
                            </div>
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection style={SectionStyle}>
                    <div className='flex'>
                        <div className='bg-purple-600 p-28 relative' >
                            <h1 className='text-white mt-72 text-3xl font-bold pt-7'>ABC 678</h1>
                            <p className='text-white pt-6'>Best science 2017 <br />We offer wide range of web development and app development</p>
                            <div className='text-white flex justify-between pt-7'>
                                <p className='flex items-center'>View Case Study<FaArrowRight></FaArrowRight></p>
                                <h1>S K I P</h1>
                            </div>

                            <svg className='absolute top-40 w-52 right-0 rounded-full'
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="10, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div className='bg-slate-300 furnitureImg'>
                            <img src={img19} alt="" />
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection style={SectionStyle}>
                    <div className='flex'>
                        <div className='bg-emerald-800 p-32 relative' >
                            <img src={img1} className='mt-72' alt="" />
                            <h1 className='text-white text-3xl font-bold pt-7'>ABC 23478</h1>
                            <p className='text-white pt-6'>We are the best web development company in the world</p>
                            <div className='text-white flex justify-between pt-7'>
                                <p className='flex items-center'>Coming Soon</p>
                                <h1>S K I P</h1>
                            </div>

                            <svg className='absolute top-40 w-52 right-0 rounded-full'
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="10, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div className='bg-emerald-500 pt-52 px-36'>
                            <div className='flex relative'>
                                <img src={img20} className='absolute mt-28 w-[400px]' alt="" />
                                <img src={img18} className='ml-72 w-[300px]' alt="" />
                            </div>
                        </div>
                    </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    );
};

export default FullPageScroll;