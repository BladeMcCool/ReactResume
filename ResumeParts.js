import React from 'react';

export class Header extends React.Component {
    render() {
        const vars = this.props.personal_info
        return (
            <div className="header">
                <h1>{vars.name}</h1>
                <h2>{vars.email} - {vars.phone} - {vars.location}</h2>
                <p>{vars.profile}</p>
            </div>
        )
    }
}

export class Experience extends React.Component {
    render() {
        const work_history = this.props.work_history
        let workHistoryRender = []
        let x = 0
        for (var entry of work_history) {
            x++
            let projRender = []
            if (!entry.jobdesc && !entry.projects.length) {
                entry.jobdesc = "General Software Consulting"
            }
            if (entry.jobdesc) {
                    projRender.push(
                        <div key={"company"+x+"jobdesc"} className="jobDesc">
                        <p>{entry.jobdesc}</p>
                        <p>Technologies: <span className="techLbl">{entry.tech}</span></p>
                        </div>
                    )
            } else {
                let y = 0
                for (let proj of entry.projects) {
                    y++
                    projRender.push(
                        <div key={"company"+x+"proj"+y} className="project">
                            <div className="projectDate">
                                <p>{proj.dates}</p>
                                <p>{proj.location}</p>
                            </div>
                            <div className="projectDesc">
                                <p>{proj.desc}</p>
                                <p>Technologies: <span className="techLbl">{proj.tech}</span></p>
                                { proj.github ? (<h6>Git Repo: <a href={proj.github}>{proj.github}</a></h6>):(null)}
                            </div>
                        </div>
                    )
                }
            }
            
            // Except it doesnt work ... can't work inside the grid ... silly.
            // if (entry.pagebreakBefore) {
            //     workHistoryRender.push(<p key={"pagebreak"+x} className="pageBreak"></p>)
            // }

            workHistoryRender.push(
                <div key={"company"+x} className="workEntry">
                    <div className="dateLbl">
                        <p>{entry.daterange}</p>
                        <p></p>
                    </div>
                    <div className="companyLbl">
                        <p>{entry.jobtitle}</p>
                        <p>{entry.company}, {entry.location}</p>
                    </div>
                    <div>&nbsp;</div>
                    <div className="description">{projRender}</div>
                </div>
            )
        }

        return (
            <div className="experience">
                <h2>Work Experience</h2>
                {workHistoryRender}
            </div>
        )
    }
}

export class Education extends React.Component {
    render() {
        const education = this.props.education
        let eduRender = []
        for (var entry of education) {
            eduRender.push(
                <p key={entry}>{entry}</p>
            )
        }
        return (
            <div className="edu">
                <h2>Education</h2>
                {eduRender}
            </div>
        )
    }
}

export class Hobbies extends React.Component {
    render() {
        const hobbies = this.props.hobbies
        let hobbyRender = []
        for (var entry of hobbies) {
            hobbyRender.push(
                <span key={entry}>{entry}</span>
            )
        }
        return (
            <div className="hobbies">
                <h2>Hobbies</h2>
                <p>
                    {hobbyRender}
                </p>
            </div>
        )
    }
}