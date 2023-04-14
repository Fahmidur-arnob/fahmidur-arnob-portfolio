import React from 'react'
import BallCanvas from "./canvas/Ball";
// import { SectionWrapper } from '../hoc/SectionWrapper';
import { technologies } from '../constants';
import Title from './Title';

const Tech = () => {
    return (
        <div>
            <Title>Technologies I use</Title>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {
                    technologies.map((technology) => (
                        <div className='w-28 h-28'
                            key={technology.name}
                        >
                            <BallCanvas
                                icon={technology.icon}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//1:34:51

export default Tech;