import React from "react";
import './styles.scss';
import PageHeaderContent from "../../components/navBar/pageHeader";
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'



const personalDetails = [

    {
        label: "Name:",
        value: "Mario Soto",

    },
    {
        label: "Age:",
        value: "23",


    },
    {
        label: "Address:",
        value: "New York",

    },
    {
        label: "Email:",
        value: "mario.soto1400@outlook.com"

    },

    {
        label: "Contact No:",
        value: "9148302630",

    },

];

const jobSummary = 'Senior Information Systems student with a META front-end developer certificate';


const About = () => {
    return (

        <section id="about" className="about">

            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />


            <div className="about_content">
                <div className="about_content_personalWrapper">

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(-900px)', }}
                        end={{ transform: 'translatex(0px)', }}


                    >

                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateY(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}>


                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {

                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>

                                    </li>
                                ))


                            }

                        </ul>
                    </Animate>

                </div>
                <div className="about_content_servicesWrapper">

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateY(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}>

                        <div className="about_content_servicesWrapper_innerContent">

                            <div>
                                <FaDev size={60} color="green" />
                            </div>
                            <div><DiAndroid size={60} color="green" /></div>
                            <div>
                                <FaDatabase size={60} color="green" />
                            </div>
                            <div>
                                <DiApple size={60} color="green" />
                            </div>



                        </div>

                    </Animate>



                </div>

            </div>

        </section>



    );


}

export default About;