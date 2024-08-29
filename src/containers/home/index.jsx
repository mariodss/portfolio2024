import React from "react";
import "./styles.scss";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate'

const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactMEPage = () => {

        navigate("/contact");

    };


    return (

        <section id="home" className="home">

            <div className="home_text-wrapper">

                <h1>
                    Hello, I'm Mario
                    <br />
                    Web Developer

                </h1>

            </div>

            <Animate
                play
                duration={1.5}
                delay={1}
                start={{ transform: 'translateY(550px)', }}
                end={{ transform: 'translatex(0px)', }}
            >
                <div className="home_contact-me">

                    <button onClick={handleNavigateToContactMEPage}>Hire Me</button>

                </div>
            </Animate>

        </section>

    );

}

export default Home;