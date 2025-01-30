import './activities.css';

import React from 'react';
import Image from 'next/image';

const Activities = () => {
    return (
        <section id="activities">
            <div className='title'>
                <h1 className='activities-title'>ACTIVITIES</h1>
            </div>
            <div className='jams'>
                <div className='left-side'>
                    <div className='left-box'>
                    <Image 
                        src='/imgs/Jams/hydrate.png'
                        alt='July 2024 Game Jam'
                        height={190}
                        width={190}
                    />
                    </div>
                    <h1 className='left-title'>
                        Hydrate
                    </h1>
                    <h2 className='left-description'>
                        Survive the heat!
                    </h2>
                </div>
                <div className='middle'>
                    <div className='middle-box'>
                        <Image 
                            src='/imgs/Jams/all-on-red.png'
                            alt='November 2024 Game Jam'
                            height={190}
                            width={190}
                        />
                    </div>
                    <h1 className='middle-title'>
                        All on Red
                    </h1>
                    <h2 className='middle-description'>
                        Test your odds against the dice!
                    </h2>
                </div>
                <div>
                    <div className='right-box'>
                        <Image
                            src='/imgs/Jams/capture.png'
                            alt='August 2024 Game Jam'
                            height={190}
                            width={190} 
                        />
                    </div>
                    <h1 className='right-title'>
                        Capture
                    </h1>
                    <h2 className='right-description'>
                        Go outside and capture something!
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default Activities;