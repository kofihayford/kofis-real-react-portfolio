import React from 'react'
import Header from "./header"
import Footer from "./footer"
import Projects from "./projects"
import Rise from "../assets/Risedemo.gif"


export default function LandingPage() {
    return (
        <div>
            <Header />
            <div className="flex justify-center"> <h1 className="flex justify-center text-4xl pt-10" > Kofi Projects </h1></div>

            <div className="flex flex-row flex-wrap">
                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project1.png"}
                    description={"This project was designed to show our ability to create a responsive webpage to allow for better accessibility. Making a website accessible is good for business for many reasons, one of them being that accessible sites are better positioned in search engines like Google."}
                    deploy={"https://kofihayford.github.io/"}
                    repo={"https://github.com/kofihayford/kofihayford.github.io"}
                />
                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project5.PNG"}
                    description={"This Code Quiz runs in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I wrote. It has a clean, polished, and responsive user interface."}
                    deploy={"https://kofihayford.github.io/dayplanner/"}
                    repo={"https://github.com/kofihayford/dayplanner"}
                />
                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project3.PNG"}
                    description={"The purpose of this homework was to use vanilla Javascript, CSS, and HTML to create a secure random password generator to help employees create a reliable password that is highly defensible and harder to hack."}
                    deploy={"https://kofihayford.github.io/Homework3.passwordgenerator/"}
                    repo={"https://github.com/kofihayford/Homework3.passwordgenerator"}
                />
                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project4.PNG"}
                    description={" This Code Quiz runs in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I wrote. It has a clean, polished, and responsive user interface."}
                    deploy={"https://kofihayford.github.io/Coding-Quiz-Homework/"}
                    repo={"https://github.com/kofihayford/Coding-Quiz-Homework"}
                />
                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project2.PNG"}
                    description={"Responsive design ensures that web applications render well on a variety of devices and window or screen sizes. As a developer, you will likely be asked to create a mobile-first application or add responsive design to an existing application."}
                    deploy={"https://kofihayford.github.io/kofishomework2/"}
                    repo={"https://github.com/kofihayford/kofishomework2"}
                />
                <Projects
                    img={Rise}
                    description={"We used a combination of interesting technologies to create a meditation app that focuses on wellbeing. We were inspired by the pandemic to make this app a possibility to help our fellow pandemic survivors to weather the challenges of COVID-19."}
                    deploy={"https://kofihayford.github.io/Rise-App/"}
                    repo={"https://github.com/kofihayford/Rise-App"}
                />
            </div>
            <Footer />

        </div>
    )
}
