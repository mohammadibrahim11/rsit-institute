import React from 'react';
import  './Instructor.css'

const Instructor = ({ins}) => {
    console.log(ins);
    const {image,name,position} = ins;
    return (
        <div>
            <div class="card" style={{width: '9.4rem'}}>
  <img src={image} class="card-img-top" alt="..." style={{width: '150px', height:'150px'}}/>
  <div class="card-body">
    <p class="card-text fw-bold  name ">{name}</p>
    <p class="card-text fw-bold post">{position}</p>
  </div>
</div>
        </div>
    );
};

export default Instructor;