/* eslint-disable array-callback-return */
import React from 'react';
import "../css/index.css";
import Modal from 'react-modal';
import { Button, Icon } from 'semantic-ui-react'
import { colors } from '../utils/colors'

const modalStyles = {
    overlay: {
        zIndex: 2000,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        zIndex: 2000,
        padding: '0px',
        borderWidth: '05px',
        borderColor: colors.two,
        borderRadius: '10px',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

class ProjectsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabItem: ['All', 'Web', 'Mobile'],
            selectedItem: 'All',
            projectItem: null,
            isDialogOpen: false,
            results: [{
                "_id": {
                    "$oid": "60787950cc515b4778fdc8ee"
                },
                "title": "HeloBazar",
                "timestamp": "1592980488",
                "date": "June 06, 2020",
                "thumbnail": "https://sohanrahman.herokuapp.com/mlm1.jpg",
                "tech_stack": [
                    "ASP.NET",
                    "React.js",
                    "MySQL",
                    "Webpack",
                    "Redux"
                ],
                "type": "Web",
                "description": "A Network Marketing Website including e-commerce and\ncustomize transection system\n(payment getway). An online platform to make a customer to a network marketer. Agent acts as like company AT booth."
            }, {
                "_id": {
                    "$oid": "60787950cc515b4778fdc8ef"
                },
                "title": "Farmers Solution",
                "timestamp": "1588283414",
                "date": "February 20, 2021",
                "thumbnail": "https://sohanrahman.herokuapp.com/farmer.jpg",
                "tech_stack": [
                    "ASP.NET",
                    "React.Js",
                    "MySQL",
                    "Redux"
                ],
                "type": "Web",
                "description": "Farmers Solution:\nCreate a farmer’s community that helps the farmer to sell their raw materials to wholesalers. Also including e-commerce so that farmers can buy their agricultural instruments. An online shopping place using the concept of immediate support and supply chain management featuring.",
                "github": "https://github.com/Sohan021/03_Farmers_Solution_DOTNET_REST_API"
            }, {
                "_id": {
                    "$oid": "60787950cc515b4778fdc8f0"
                },
                "title": "Class Management",
                "timestamp": "1586728214",
                "date": "October 13, 2020",
                "thumbnail": "https://sohanrahman.herokuapp.com/Class-Room.jpg",
                "tech_stack": [
                    "AS.NET Core (MVC)",
                    "EntityFrameWork",
                    "SQlServer"
                ],
                "type": "Web",
                "description": "An online department management system. Manage A Department. Upload File, Submit notice base on semester. Student Can participate online quiz.",
                "github": "https://github.com/Sohan021/ClassManagementAndOnlineExam_DOTNET_CORE_MVC"
            }, {
                "_id": {
                    "$oid": "60787950cc515b4778fdc8f1"
                },
                "title": "Virtual Basket",
                "timestamp": "1577953333",
                "date": "September 02, 2020",
                "thumbnail": "https://sohanrahman.herokuapp.com/vb1.jpg",
                "tech_stack": [
                    "React.js",
                    "Node.js",
                    "Webpack",
                    "MongoDB",
                    "Redux"
                ],
                "type": "Web",
                "description": "ECommerce Platfrom For Small Business. Shopping Cart. Order Mnagemnt.",
                "github": "https://github.com/Sohan021/VirtualBasket_ECommerce_NodeJS_REACT_REDUX"
            }, {
                "_id": {
                    "$oid": "60787950cc515b4778fdc8f2"
                },
                "title": "Automatic Class Routine",
                "timestamp": "1474494614",
                "date": "Sep 22, 2020",
                "thumbnail": "https://sohanrahman.herokuapp.com/Class-Routine.jpg",
                "tech_stack": [
                    "ASP.NET Core (MVC)",
                    "EntityFramework Core",
                    "MySQL"
                ],
                "type": "Web",
                "description": "Create a class routine automatically.[Using Genetic algorithm]. Make for official purpose. Make individual class routine for a department. ",
                "github": "https://github.com/Sohan021/AutomaticClassTimeTableGeneticAlgorithm_DOTNET_CORE_MVC"
            }, {
                "_id": {
                    "$oid": "60787950cc515b4778fdc8f3"
                },
                "title": "Quick Ship",
                "timestamp": "1488235814",
                "date": "December 28, 2020",
                "thumbnail": "https://sohanrahman.herokuapp.com/quick_ship.jpg",
                "tech_stack": [
                    "ASP.NET REST Api",
                    "React.Js",
                    "REdux"
                ],
                "type": "MySql",
                "github_link": "https://github.com/Sohan021/01_QuickShip_ECommerce_DOTNET_REST_API",
                "description": "ECommerce site with DotNet Core and React Redux. Shopping Cart management. Order Management."
            }, {
                "_id": {
                    "$oid": "60787950cc515b4778fdc8f4"
                },
                "title": "Timer App",
                "timestamp": "1474321814",
                "date": "April 23, 2021",
                "thumbnail": "https://sohanrahman.herokuapp.com/timer.png",
                "tech_stack": [
                    "ReactNative",
                    "AsyncStorage",
                    "JavaScript",
                    "ES6"
                ],
                "type": "Mobile",
                "description": "A Simple Timer App with Viration.",
                "github": "https://github.com/Sohan021/TimerApp_REACT-NATIVE"
            }]
        }
    }

    setSelectedTab = (item) => {
        this.setState({
            selectedItem: item
        })
    }

    renderProjects = (results) => {
        if (results.length > 0) {
            return (
                results.map((item) => {
                    var type = item.type;
                    var tabItem = this.state.selectedItem;

                    if (type.includes(tabItem)) {
                        return (
                            <div>{this.renderProjectItems(item)}</div>
                        );
                    }
                })
            )
        }
    }

    renderProjectItems = (item) => {
        return (
            <div className={'project-animation-t'}>
                <div className="projects-card-item" style={{ backgroundColor: colors.two }}>
                    <div className={'div-thumb-overlay'}>
                        <div className={'overlay-item-container'}>
                            <div className={'overlay-project-div'}>
                                <p className={'project-title'}>{item.title}</p>
                                <div className={'project-readmore-container'} onClick={this.onSetProjectDialogState.bind(this, true, item)}>
                                    <span>
                                        <Button basic color='black' content='Read Me' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt={''}
                        style={{ borderRadius: "02%", height: '205px' }}
                        src={item.thumbnail}
                        //className={'projects-thumb-img'}
                        onClick={this.onSetProjectDialogState.bind(this, true, item)} />
                </div>
            </div>

        )
    }

    renderAllProjects = (results) => {
        if (results.length > 0) {
            return (
                results.map((item) => {
                    return (
                        <div>{this.renderProjectItems(item)}</div>
                    );
                })
            )
        }
    }

    onSetProjectDialogState = (isShow, item) => {
        this.setState({
            isDialogOpen: isShow,
            projectItem: item
        })
    }

    openProjectDialog = () => {
        var isShow = this.state.isDialogOpen;
        var item = this.state.projectItem;

        if (isShow) {
            return (

                <Modal
                    isOpen={isShow}
                    style={modalStyles}
                    onRequestClose={this.onSetProjectDialogState.bind(this, false)}
                    closeTimeoutMS={200}>
                    <div className={'project-modal-container'}>
                        {/* <img src={project} className={'project-modal-thumb'} /> */}
                        <img alt={''} src={item.thumbnail} style={{ height: '300px' }} />
                        <div className={'project-modal-content-container'}>
                            <span className={'project-modal-title'}>{item.title}</span>
                            <p className={'project-modal-description'}>{item.description}</p>
                            <p className={'tech-stack-text'}>Technology Stack</p>
                            <div className={'project-modal-tech-container'}>
                                {item.tech_stack.map(tech =>
                                    <div key={tech} className={'tech-container-div'}>
                                        <span className={'tech-span'}>{tech}</span>
                                    </div>
                                )}
                            </div>
                            <div className={'project-footer-modal'}>
                                <Button onClick={this.onSetProjectDialogState.bind(this, false)} negative >
                                    X
                                </Button>
                                <Button color='github'>
                                    <a href={item.github}><Icon style={{ color: "#000" }} name='github' link={item.github} /> Github</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal >
            )
        }
    }

    render() {
        //var results = JSON.parse(JSON.stringify(this.props.projects)).data;
        const results = this.state.results;
        return (
            <div style={{ backgroundColor: colors.two }}>
                <br />
                <br />
                <br />
                <div className='row' style={{ backgroundColor: colors.one, height: "05px" }}></div>
                <div className={'projects-parent-container'} style={{ backgroundColor: colors.two }}>
                    <div className={'project-child-container'}>
                        <div className={'projects-tab-container'}>
                            {this.state.tabItem.map(data =>
                                <div key={data} className={'tab-container'} onClick={this.setSelectedTab.bind(this, data)}>
                                    <span className={this.state.selectedItem === data ? 'tab-selected-label' : 'tab-label'}>{data}</span>
                                    <div className={this.state.selectedItem === data ? 'tab-selected' : 'tab-unselected'}></div>
                                </div>
                            )}
                        </div>
                        <div className="projects-items-container">
                            <div className={'projects-mobile-items-gap'}></div>
                            {this.state.selectedItem === 'All' ? this.renderAllProjects(results) : this.renderProjects(results)}
                            <div className={'projects-mobile-items-gap'}></div>
                        </div>
                    </div>

                    {this.openProjectDialog()}
                </div>
            </div>


        );
    }
}


export default ProjectsScreen