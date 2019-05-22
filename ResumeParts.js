import React from 'react';
import {clone, assign} from 'lodash';

export class Header extends React.Component {
    render() {
        const vars = this.props.personal_info
        return (
            <div className="header">
                <h1>{vars.name}</h1>
                <h3>{vars.email} - {vars.phone} - {vars.location}</h3>
                <p>{vars.profile}</p>
            </div>
        )
    }
}

export class ExperienceOrdered extends React.Component {
    work_history() {
        const work_history = this.props.work_history
        let entries = []
        for (var entry of work_history) {
            if (entry.desc) {
                entries.push(entry)
            } else {
                for (var project of entry.projects) {
                    var projEntry = {}
                    assign(projEntry, entry, project)
                    entries.push(projEntry)
                }
            }
        }
        
        function compare( b, a ) {
            if ( a.sortdate < b.sortdate ){
              return -1;
            }
            if ( a.sortdate > b.sortdate ){
              return 1;
            }
            return 0;
        }
        entries.sort( compare );
        return entries
    }
    render() {
        const work_history = this.work_history()
        let workHistoryRender = []
        let x = 0
        for (var entry of work_history) {
            x++
            if (entry.pageBreakBefore) {
                workHistoryRender.push( 
                    <div key={x+"hdr"} className="page2Header">
                        <h2>Work Experience Cont'd</h2>
                    </div>
                )
            }
            let entryClassName = 'workEntry';
            if (entry.printOff) {
                entryClassName = 'printOff ' + entryClassName
            }
            workHistoryRender.push(
                <div key={x} className={entryClassName}>
                    <div className="dateLbl">
                        <p>{entry.company}, {entry.location}</p>
                        <p>{entry.dates ? entry.dates : entry.daterange}</p>
                    </div>
                    <div className="description">
                        <p className="jobtitle">{entry.jobtitle}</p>
                        <p>{entry.desc}</p>
                        <p>Technologies: <span className="techLbl">{entry.tech}</span></p>
                        {entry.github ? (<h6>Git Repo: <a href={entry.github}>{entry.github}</a></h6>) : (null)}
                    </div>
                </div>
            )
        }
        return (
            <div>
                <h2>Work Experience</h2>
                <div className="experience">
                    {workHistoryRender}
                </div>
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
            if (!entry.desc && !entry.projects.length) {
                entry.desc = "General Software Consulting"
            }
            if (entry.desc) {
                    projRender.push(
                        <div key={"company"+x+"jobdesc"} className="jobDesc">
                        <p>{entry.desc}</p>
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
            <div>
                {/* <div className="experience">
                    <div className="workEntry">
                        <div></div>
                        <div className="companyLbl"><h2>Work Experience</h2></div>
                    </div>
                </div> */}
                <h2>Work Experience !!!</h2>
                <div className="experience">
                    {workHistoryRender}
                </div>
            </div>
        )
    }
}

export class TextList extends React.Component {
    render() {
        const entries = this.props.entries
        let eduRender = []
        for (var entry of entries) {
            eduRender.push(
                <p key={entry}>{entry}</p>
            )
        }
        return (
            <div className="edu">
                <h2>{this.props.title}</h2>
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