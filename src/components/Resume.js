import React from 'react'

export default function Resume() {
    return(
        <section id='resume'>
            <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Resume
            </h1>
            <div class="hero container max-w-screen-lg mx-auto pb-10 flex">
                <img
                    className="mx-auto"
                    alt="Resume"
                    src="./images/Resume.jpg"
                />
            </div>
            </div>
            </div>
        </section>
    )
}