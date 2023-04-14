import React from 'react';
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import DateTime from './datetime';

const NavBar = () => {
    return (
        <div className='flex flex-col  justify-between gap-12 w-full'>

            {/* // Icons */}
            <div className='flex w-full justify-between items-baseline h-[35px]'>

                <div className='flex gap-6 items-baseline'>
                    <img
                        src={icon1.src}
                        alt="icon1"
                        // className='w-16 h-12'
                        className='w-[46.2px] h-[35px]'
                    />
                    <img
                        src={icon2.src}
                        alt="icon2"
                        className='w-[129.5px] h-[35px]'
                    />
                    <div
                        className='text-xs '
                    >
                        ABOUT
                    </div>
                </div>

                {/* Middle Icon */}
                <div className='self-center justify-self-center	'>
                    <img
                        src={icon3.src}
                        alt="icon3"
                        className='w-[142.8px] h-[35px]'
                    />
                </div>

                {/* The date and time */}
                <div className='self-center flex gap-4 items-center'>
                    <div className='px-2'>
                        <DateTime />
                    </div>

                    <div className='px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.393" height="25.5" viewBox="0 0 21.393 25.5">
                            <path id="Path_7582" data-name="Path 7582" d="M102.3,77.923H98.716v-1.3a5.761,5.761,0,0,0-11.522,0v1.3H83.607a1.1,1.1,0,0,0-1.1,1.1V92.46a3.41,3.41,0,0,0,3.406,3.406H99.995A3.41,3.41,0,0,0,103.4,92.46V79.022A1.1,1.1,0,0,0,102.3,77.923Zm-14.114-1.3a4.766,4.766,0,0,1,9.533,0v1.3H88.188ZM102.406,92.46a2.414,2.414,0,0,1-2.411,2.411H85.914A2.414,2.414,0,0,1,83.5,92.46V79.022a.1.1,0,0,1,.1-.1h3.586V81.04a1.244,1.244,0,1,0,1,0V78.918h9.533V81.04a1.244,1.244,0,1,0,.995,0V78.918H102.3a.1.1,0,0,1,.1.1Z" transform="translate(-82.258 -70.616)" fill="#fff" stroke="#fff" strokeWidth="0.5" />
                        </svg>

                    </div>
                    <div className='px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.088" height="25.5" viewBox="0 0 21.088 25.5">
                            <g id="Group_2867" data-name="Group 2867" transform="translate(0.25 0.25)">
                                <g id="Group_2661" data-name="Group 2661" transform="translate(3.676 0)">
                                    <path id="Path_7580" data-name="Path 7580" d="M113.274,88.712a6.618,6.618,0,1,1,6.618-6.618A6.625,6.625,0,0,1,113.274,88.712Zm0-11.765a5.147,5.147,0,1,0,5.147,5.147A5.153,5.153,0,0,0,113.274,76.948Z" transform="translate(-106.656 -75.477)" fill="#fff" stroke="#fff" strokeWidth="0.5" />
                                </g>
                                <g id="Group_2662" data-name="Group 2662" transform="translate(0 13.971)">
                                    <path id="Path_7581" data-name="Path 7581" d="M107.022,160.556a.735.735,0,0,1-.735-.735,8.824,8.824,0,0,0-17.616-.735h14.675a.735.735,0,1,1,0,1.471H87.169v-.735a10.294,10.294,0,0,1,20.588,0A.736.736,0,0,1,107.022,160.556Z" transform="translate(-87.169 -149.527)" fill="#fff" stroke="#fff" strokeWidth="0.5" />
                                </g>
                            </g>
                        </svg>

                    </div>

                </div>


            </div>


            <div className='flex gap-3 items-center'>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.953" height="15.956" viewBox="0 0 21.953 15.956">
                        <path id="Path_7815" data-name="Path 7815" d="M345.325,118.121l1.253-1.254-5.842-5.837h18.558v-1.773H340.736l5.842-5.837-1.253-1.254-7.985,7.978Z" transform="translate(-337.34 -102.165)" fill="#fff" />
                    </svg>
                </div>

                <div className='text-lg'>BACK</div>
            </div>


        </div>
    );
}

export default NavBar;