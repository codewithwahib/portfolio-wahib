import React from 'react'
import Heading from './Heading';
import Card from  './Card';

const data = [
   {
    id: "0",
    title: "E-commerce Website ",
    desc: "Designing seamless E-commerce experiences that convert.",
    img: "/ecom.jpg",
   },
{
        id: "1",
        title: "Dynamic resume",
        desc: "Where food meets creativity in the digital world.",
        img: "/food.jpg",
    },
    {
        id: "2",
        title: "Resume",
        desc: "Where design and music harmonize online.",
        img: "/volna.jpg",
    },
{
    id: "3",
    title: "Resume",
    desc: "Crafting digital tools for building impactful resumes.",
    img: "/resume.jpg",
},
];

const Projects = () => {
 return  (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        />))}
      </div>
    </div>
  )
}

export default Projects