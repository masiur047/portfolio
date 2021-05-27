import React from 'react'
import { colors } from '../utils/colors'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function AboutScreen() {
    return (
        <div style={{ backgroundColor: colors.two, height: "635px" }}>
            <br />
            <br />
            <br />
            <div className='row' style={{ backgroundColor: colors.one, height: "05px" }}></div>
            <br />
            <br />
            <br />

            <div className="row">
                <div className="col-lg-3 col-sm-12">

                </div>
                <div className="col-lg-3 col-sm-12">

                </div>
                <div className="col-lg-3 col-sm-12">

                </div>
                <div className="col-lg-3 col-sm-12">
                    <div style={{ justifyContent: "", alignItems: "", textAlign: "center" }}>
                        <div className="about-softkarrot">
                            <Card style={{
                                color: "#000",
                                backgroundColor: "#fff",
                                borderColor: "#000",
                                
                                height: "150px"
                            }}>
                                <div className='row'>
                                    <div className="col-2">
                                        <FontAwesomeIcon icon={faBriefcase} size="4x" />
                                    </div>
                                    <div className="col-10">
                                        <p>From January 2020</p>
                                        <b>SOFTKARROT LTD.</b>
                                        <p>My responsibility was to design, develop Web Application</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-12">

                </div>
                <div className="col-lg-3 col-sm-12">

                </div>
                <div className="col-lg-3 col-sm-12">
                    <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <div className="about-university">
                            <Card style={{
                                color: "#000",
                                backgroundColor: "#fff",
                                borderColor: "#000",
                               
                                height: "150px"
                            }}>
                                <div className='row'>
                                    <div className="col-2">
                                        <FontAwesomeIcon icon={faGraduationCap} size="4x" />
                                    </div>
                                    <div className="col-10">
                                        <p>From January 2017-December 2020</p>
                                        <b>Bangabandhu Sheikh Mujibur Rahman Science And Technology University.</b>
                                        <p>I have comleted my graguation from here. One of the best part of my life.</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">

                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-sm-12">

                </div>
                <div className="col-lg-3 col-sm-12">
                    <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <div className="about-college">
                            <Card style={{
                                color: "#000",
                                backgroundColor: "#fff",
                                borderColor: "#000",
                               
                                height: "150px"
                            }}>

                                <div className='row'>
                                    <div className="col-2">
                                        <FontAwesomeIcon icon={faGraduationCap} size="4x" />
                                    </div>
                                    <div className="col-10">
                                        <p>From April 2013-January 2015</p>
                                        <b>SHAHID SMRITY DEGREE COLLEGE</b>
                                        <p>I have completed my HSC from this institute. That was a heard time for me. Despite that achive a good result.</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">

                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <div className="about-school">
                            <Card style={{
                                color: "#000",
                                backgroundColor: "#fff",
                                borderColor: "#000",   
                                height: "150px"
                            }}>

                                <div className='row'>
                                    <div className="col-2">
                                        <FontAwesomeIcon icon={faGraduationCap} size="4x" />
                                    </div>
                                    <div className="col-10">
                                        <p>From January 2008-December 2012</p>
                                        <b>SUTIAKATHI UNION HIGH SCHOOL</b>
                                        <p>That was the best part of my life. I have comleted my SSC from this institute. </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">

                </div>
                <div className="col-lg-3 col-sm-12">

                </div>
            </div>

        </div >


    )
}
