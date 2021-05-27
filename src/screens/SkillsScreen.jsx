import React from 'react';
import "../css/index.css";
import { Button } from 'semantic-ui-react'
import { colors } from '../utils/colors'


class SkillSetsScreen extends React.Component {

    state = {
        results: [{
            "_id": {
                "$oid": "6079e98405d6172a04e92ec9"
            },
            "tech_stack": "programming-languages",
            "label": "Programming Languages",
            "skills": [
                "C++",
                "JavaScript",
                "C#",
                "Java",
                "PHP"
            ]
        },
         {
            "_id": {
                "$oid": "6079e98405d6172a04e92ecb"
            },
            "tech_stack": "front-end",
            "label": "Web Front End",
            "skills": [
                "React/Redux",
                "HTML5",
                "CSS3",
                "Bootstrap"
            ]
        }, {
            "_id": {
                "$oid": "6079e98405d6172a04e92ecc"
            },
            "tech_stack": "back-end",
            "label": "Web Back End",
            "skills": [
                "ASP.NET"
            ]
        }, {
            "_id": {
                "$oid": "6079e98405d6172a04e92ecd"
            },
            "tech_stack": "databases",
            "label": "Databases",
            "skills": [
                "MySQL",
                "SqlServer"
            ]
        }, {
            "_id": {
                "$oid": "6079e98405d6172a04e92ece"
            },
            "tech_stack": "ci-cd",
            "label": "CI/CD",
            "skills": [
                "Heroku",
                "Amazon AWS"
            ]
        }, {
            "_id": {
                "$oid": "6079e98405d6172a04e92ed0"
            },
            "tech_stack": "Problem Solving",
            "label": "Problem Solving",
            "skills": [
                "Codeforces",
                "UVA",
                "Toph",
                "Codechef",
                "CSES",
                "LightOj"
            ]
        }]
    }


    renderTechSkills = (items) => {
        return (
            items.map(data =>
                <div key={data} >
                    {/* <span className={'skills-item-text'}</span> */}
                    <Button basic color='black' content={data} />
                </div>
            )
        );
    }

    renderTechStacks = (results) => {
        if (results.length > 0) {
            return (
                results.map(item =>
                    <div key={item} className={'skills-sets-container'}>

                        <div className={'skills-label-container'}>
                            <div className={'skill-animation-l'}>
                                <span className={'skills-label'}>{item.label}</span>
                            </div>
                        </div>


                        <div className={'skills-separator-container'}>
                            <div className={'skills-separator-line'}></div>
                            <div className={'skills-separator-circle'}>
                                <div className={'skills-separator-inner-circle'}></div>
                            </div>
                        </div>
                        <div className={'skill-animation-r'}>
                            <div className={'skills-items-container'}>
                                {this.renderTechSkills(item.skills)}
                            </div>
                        </div>

                    </div>
                )
            );
        }
    }

    render() {
        //var results = JSON.parse(JSON.stringify(this.props.skills)).data;
        const results = this.state.results;
        return (
            <>
                <br />
                <br />
                <br />
                <div className='row' style={{ backgroundColor: colors.one, height: "05px" }}></div>
                <div className="container">
                    <div className={'skills-parent-container'} style={{ alignItems: 'center', justifyContent: 'center', textAlign: "center" }}>
                        {this.renderTechStacks(results)}
                        <div className={'skills-mobile-gap'}></div>
                    </div>
                </div>
            </>
        );
    }
}

export default SkillSetsScreen