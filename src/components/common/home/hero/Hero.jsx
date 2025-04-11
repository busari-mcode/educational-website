import React from 'react'
import './hero.css'
import Title from "../../title/Title"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic totam, deleniti voluptates error officiis, necessitatibus beatae quis, iure laboriosam laudantium? Optio veniam doloribus repellat. Ducimus mollitia dignissimos quisquam debitis?</p>
                <div className="button">
                    <button className="primary-btn">
                        GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                    <button>
                        VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero