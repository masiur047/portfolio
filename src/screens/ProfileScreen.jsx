import React from 'react';
import "../css/index.css";
import profile from "../images/profile1.JPG";
import { colors } from '../utils/colors'

import { Button, Icon } from 'semantic-ui-react'

class ProfileScreen extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: colors.two, height: "635px" }}>
                <br />
                <br />
                <br />
                <div className='row' style={{ backgroundColor: colors.one, height: "05px" }}></div>
                <br />
                <br />
                <br />



                <div class="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className={'dashboard-profile-img-container'}>
                            <img alt={''} src={profile} className={'dashboard-profile-img'} />
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                            {/* <Button circular color='facebook' icon='facebook' />
                            <Button circular color='linkedin' icon='linkedin' />
                            <Button circular color='github' icon='github' /> */}

                            {/* <a href="">
                            <Button color='facebook'>
                                <Icon name='facebook' /> fb
                                </Button>
                            </a> */}
                            <a href="https://www.linkedin.com/in/masiur-hasan-64867419a/">
                                <Button color='linkedin'>
                                    <Icon name='linkedin' /> in
                            </Button>
                            </a>
                            <a href="https://github.com/masiur047">
                                <Button color='github'>
                                    <Icon name='github' color="#000" /> Git
                            </Button>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12" style={{ backgroundColor: colors.two }}>

                        <div style={{ margin: "50px" }} className="jubmtron" >
                            <h3 style={{ color: colors.one }} >Hello, I'm <span className="dashboard-profile-name">Md Hasan Al Masiur</span></h3>
                            <h4 style={{ color: colors.one, textAlign:'justify' }}>
                                I'm an Experienced Software Engineer specialized in Web & Mobile application development, having fluent knowledge in the ASP.NET Core framework ReactJs Library and developed many WEB applications from various domains such as (Network Marketing, E-Commerce, Management etc) and also developed cross-platform based mobile application using React-Native framework. In terms of the Web framework having experience in both back-end and front-end development, developed many full-stack based web application using ASP.NET Core , React.js & MySql.
                            </h4>
                            <h4 style={{ color: colors.one }}>
                                To improve my skill I like to practice in various cloud services (AWS, GoogleCloud, Hiroku etc).
                            </h4>
                            {/* <h4 style={{ color: colors.one }}>
                                As a hobby love to make games using Unity3d game engine and to share my work with developer communities I write <a href=""className={'profile-details-link'} target="_blank">blogs</a> and make tutorial videos on my <a href="" className={'profile-details-link'} target="_blank">Youtube channel.</a>
                            </h4> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileScreen;