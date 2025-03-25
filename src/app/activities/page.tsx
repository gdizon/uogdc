import './activities.css';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Activities = () => {
    return (
        <section id="activities">
            <div className='title'>
                <h1 className='activities-title'>ACTIVITIES</h1>
            </div>
            <div className='jams'>
                <div>
                    <Link className='first' href='https://itch.io/jam/uogdc-june-jam-2024-boxedin' passHref legacyBehavior>
                        <div className='left-box'>
                            <Image 
                                src='/imgs/Jams/boxed-in.png'
                                alt='June 2024 Game Jam'
                                height={190}
                                width={190}
                            />                            
                        </div>
                    </Link>
                    <h1 className='left-title'>                                                                                                                                                                                                                                                                                                                  
                        Boxed In
                    </h1>
                    <h2 className='left-description'>
                        What`&apos;`s your interpretation of boxed in?
                    </h2>
                </div>
                <div>
                    <Link className='second' href='https://itch.io/jam/uogdc-july-jam-2024-hydrate' passHref legacyBehavior>
                        <a target='_blank'>
                            <div className='middle-box'>
                                <Image 
                                    src='/imgs/Jams/hydrate.png'
                                    alt='July 2024 Game Jam'
                                    height={190}
                                    width={190}
                                />
                            </div>
                        </a>
                    </Link>
                    <h1 className='middle-title'>
                        All on Red
                    </h1>
                    <h2 className='middle-description'>
                        Test your odds against the dice!
                    </h2>
                </div>
                <div>
                    <Link className='third' href='https://itch.io/jam/uogdc-august-jam-2024-capture' passHref legacyBehavior>
                        <a target='_blank'>
                            <div className='right-box'>
                                <Image
                                    src='/imgs/Jams/capture.png'
                                    alt='August 2024 Game Jam'
                                    height={190}
                                    width={190} 
                                />
                            </div>
                        </a>
                    </Link>
                    <h1 className='right-title'>
                        Capture
                    </h1>
                    <h2 className='right-description'>
                        Go outside and capture something!
                    </h2>
                </div>
            </div>
            <div>
                <h1 className='footnote'>Explore the exciting activiies we host for our members!</h1>
            </div>
        </section>
    );
}

export default Activities;