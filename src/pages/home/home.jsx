import React from 'react';
import './home.css'

const Home = () => {
    return (
        <div id="home">

            <div className="container d-flex align-items-center justify-content-start fade-in-fwd intro">
                <div className="row d-flex align-items-center justify-content-start pt-5 pb-5">
                    <div className="col-12">
                        <h1 className="text-secondary display-2">
                            Hello.
                        </h1>
                        <h1 className="text-secondary display-1">
                            I'm <span className="text-white">Traeger Winn</span>, aka <span className="text-white">Trae</span>.
                        </h1>
                    </div>
                    <div className="col-12">
                        <h1 className="text-secondary diplay-4">
                            I'm a <span className="text-white">Web Developer</span>,
                            a <span className="text-white">Problem Solver</span>,
                            a <span className="text-white">Rational Thinker</span>,
                            and a <span className="text-white">DIY Enthusiast</span>.
                        </h1>
                    </div>
                </div>  
            </div>

            <div className="container d-flex align-items-center justify-content-center fade-in-fwd about">
                <div className="row d-flex align-items-center justify-content-start pt-5 pb-5">
                    <div className="col-12">
                        <h1 className="text-white display-3">
                            Web Developer
                        </h1>
                        <h1 className="text-secondary">
                            I enjoy developing with JavaScript on the client side and server side with technologies such as React and Nodejs.
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container d-flex align-items-center justify-content-center fade-in-fwd about">
                <div className="row d-flex align-items-center justify-content-start pt-5 pb-5">
                    <div className="col-12">
                        <h1 className="text-white display-3">
                            Problem Solver
                        </h1>
                        <h1 className="text-secondary">
                            I love learning and I'm always willing to take on challenging unorthodox problems both in and out of the web world.
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container d-flex align-items-center justify-content-center fade-in-fwd about">
                <div className="row d-flex align-items-center justify-content-start pt-5 pb-5">
                    <div className="col-12">
                        <h1 className="text-white display-3">
                            Rational Thinker
                        </h1>
                        <h1 className="text-secondary">
                            I look at the big picture, remain open-minded, weigh out pros and cons, and come to balanced solutions.
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container d-flex align-items-center justify-content-center fade-in-fwd about">
                <div className="row d-flex align-items-center justify-content-start pt-5 pb-5">
                    <div className="col-12">
                        <h1 className="text-white display-3">
                            DIY Enthusiast
                        </h1>
                        <h1 className="text-secondary">
                            Replacing the clutch in my car? Rebuilding the drivetrain on my bike? Repairing my cracked iPhone screen? No problem.
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Home;