import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './OurInstructor.css'

const OurInstructor = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(()=> {
        fetch('tutor.json')
        .then(res => res.json())
        .then(data => setInstructor(data))
    } ,[])
    return (
        <div>
            <section className='instructor-container m-auto pb-3'>
                <div className='text-center fw-bold fs-3 text-danger pt-4'>
                    Our Leaders
                </div>

                 <div className='d-flex justify-content-center gap-4 mt-5 mb-5'>
                 {
                    instructor.map( (ins) => <Instructor ins={ins}></Instructor>)
                   }
                 </div>

            </section>
        </div>
    );
};

export default OurInstructor;