import React from 'react'
import image from './assets/image.png'
function About() {
  return (
    <div>
       <h1 id="about" className="title-font text-5xl font-semibold text-center text-red-400 underline mb-7">
        About
      </h1>
      <section className="text-gray-600 body-font">
        <div
          
          className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center mb-7"
        >
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="about us"
              src={image}
              
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Hey People.....
            </h1>
            <p className="mb-8 leading-relaxed text-2xl text-gray-900">
              I am proficient in front-end development (HTML, CSS, JavaScript,
              React), I aspire to co-create engaging web projects through
              collaborations. Excited about crafting immersive digital
              experiences and seeking opportunities to contribute and grow in
              the field.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
