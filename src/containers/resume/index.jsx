import React from "react";
import './styles.scss';
import PageHeaderContent from "../../components/navBar/pageHeader";
import { BsInfoCircleFill } from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils"
import "react-vertical-timeline-component/style.min.css"
import { MdWork } from 'react-icons/md';

const Resume = () => {

    return (

        <section id="resume" className="resume">

            <PageHeaderContent
                headerText="Resume"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="timeline">
                <div className="timeline_experience">

                    <h3 className="timeline_experience_header-text" >
                        Experience
                    </h3>

                    <VerticalTimeline

                        layout={'1 column'}
                        lineColor="green"
                    >

                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline_experience_vertical-timeline-element"
                                    contentStyle={{

                                        background: 'none',
                                        color: 'black',
                                        border: '1.5px solid black'
                                    }}

                                    
                                    icon={<MdWork />}
                                    iconStyle={{

                                        background: 'black',
                                        color: 'white'
                                    }}

                                    
                                
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3 >

                                            {item.title}

                                        </h3>

                                        <h4 >
                                            {item.company}

                                        </h4>

                                        <p>
                                            {item.description}

                                        </p>
                                        
                                        <h4>
                                            {item.time}
                                         </h4>



                                    </div>





                                </VerticalTimelineElement>


                            ))

                        }

                    </VerticalTimeline>

                </div>

                <div className="timeline_education">

                    <h3 className="timeline_education_header-text">
                        Education
                    </h3>

                    <VerticalTimeline

                        layout={'1 column'}
                        lineColor="green"

                    >

                        {
                            data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline_education_vertical-timeline-element"
                                    contentStyle={{

                                        background: 'none',
                                        color: 'black',
                                        border: '1.5px solid black'
                                    }}
                                    icon={<MdWork />}
                                    iconStyle={{

                                        background: 'black',
                                        color: 'white'
                                    }}
                                   
            
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3 >

                                            {item.title}

                                        </h3>

                                        <h4>

                                            {item.institution}


                                        </h4>

                                        <h4 >
                                            {item.location}
                                        </h4>

                                        <h4 >
                                            {item.graduation}
                                        </h4>




                                    </div>




                                </VerticalTimelineElement>


                            ))


                        }

                    </VerticalTimeline>





                </div>



            </div>

        </section>



    );

}

export default Resume;