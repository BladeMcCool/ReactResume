import React from 'react';
import {assign} from 'lodash';

export class Header extends React.Component {
    render() {
        const vars = this.props.personal_info
        return (
            <div className="header">
                <h2>{vars.name}</h2>
            </div>
        )
    }
}

export class Contact extends React.Component {
    render() {
        const vars = this.props.personal_info
        return (
            <div className="contact-info">
                <p>
                    {vars.email} &#x2756; {vars.phone} &#x2756; {vars.location} &#x2756; {vars.linkedin}
                </p>
            </div>
        )
    }
}

export class Education extends React.Component {
    render() {
        const vars = this.props.education
        return (
            <div className="education">
                <h2>Education</h2>
                {vars.map((entry, index) =>
                    <div key={index} className="work-experience">
                        <div className="work-company-jobtitle">
                            <p><b>{entry.institution}</b></p>
                            <p>{entry.description}</p>
                        </div>
                        <div className="work-date-location">
                            <p><b>{entry.graduated}</b></p>
                            <p>{entry.location}</p>
                        </div>
                        {entry.notes.length > 0 && (
                            <div className="work-entries">
                                <ul>
                                    {entry.notes.map((item, index) =>
                                        <li key={index}>{item}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export class Skills extends React.Component {
    render() {
        const skills = this.props.skills
        const hobbies = this.props.hobbies
        return (
            <div className="skills">
                <h2>Skills & Interests</h2>
                <div className="skill-entries">
                    <ul>
                        <li key="skill">
                            <b>Skills:</b> {skills.join(', ')}
                        </li>
                        <li key="interest">
                            <b>Interests:</b> {hobbies.join(', ')}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

//i'm intending atm to keep this as a 1 pager.
export class ExperienceV2 extends React.Component {
    work_history() {
        const work_history = this.props.work_history
        let entries = []
        for (var entry of work_history) {
            if (entry.hide) {
                continue
            }

            if (!entry.projects) {
                entry.projects = [{
                    "desc":entry.desc,
                    "tech":entry.tech,
                }]
            }

            let entry_has_visible_projects = false
            for (var project of entry.projects) {
                if (!project.hide) {
                    entry_has_visible_projects = true
                    break
                }
            }

            if (!entry_has_visible_projects) {
                //skipping this entry b/c all the projects are hidden
                continue;
            }
            entries.push(entry)
        }

        function compare(b, a) {
            if (a.sortdate < b.sortdate) {
                return -1;
            }
            if (a.sortdate > b.sortdate) {
                return 1;
            }
            return 0;
        }

        entries.sort(compare);
        return entries
    }

    render() {
        const work_history = this.work_history()

        return (
            <div className="main-content">
                <h2>Work Experience</h2>
                {work_history.map((company, index) =>
                    <div key={index} className="work-experience">
                        <div className="work-company-jobtitle">
                            <h3><b>{company.company}</b> - {company.companydesc}</h3>
                            <p><i>{company.jobtitle}</i></p>
                        </div>
                        <div className="work-date-location">
                            <p><b>{company.daterange}</b></p>
                            <p>{company.location}</p>
                        </div>
                        <div className="work-entries">
                            <ul>
                                {company.projects.map((project, index) => {
                                    //todo try this with a filter().map() instead
                                    if (!project.hide) {
                                            return (<li key={index}>{project.desc}</li>)
                                        }
                                        return null;
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}

export class ExperienceOrdered extends React.Component {
    work_history() {
        const work_history = this.props.work_history
        let entries = []
        for (var entry of work_history) {
            if (entry.hide) {
                continue
            }
            //golly maybe if it has projects it should show them, not "if it doesn't have a description" hurr durr.
            if (entry.projects) {
                for (var project of entry.projects) {
                    if (project.hide) {
                        continue
                    }
                    var projEntry = {}
                    assign(projEntry, entry, project)
                    entries.push(projEntry)
                }
            } else {
                entries.push(entry)
            }
        }

        function compare(b, a) {
            if (a.sortdate < b.sortdate) {
                return -1;
            }
            if (a.sortdate > b.sortdate) {
                return 1;
            }
            return 0;
        }

        entries.sort(compare);
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
                    <div key={x + "hdr"} className="page2Header">
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
                    <div key={"company" + x + "jobdesc"} className="jobDesc">
                        <p>{entry.desc}</p>
                        <p>Technologies: <span className="techLbl">{entry.tech}</span></p>
                    </div>
                )
            } else {
                let y = 0
                for (let proj of entry.projects) {
                    y++
                    projRender.push(
                        <div key={"company" + x + "proj" + y} className="project">
                            <div className="projectDate">
                                <p>{proj.dates}</p>
                                <p>{proj.location}</p>
                            </div>
                            <div className="projectDesc">
                                <p>{proj.desc}</p>
                                <p>Technologies: <span className="techLbl">{proj.tech}</span></p>
                                {proj.github ? (<h6>Git Repo: <a href={proj.github}>{proj.github}</a></h6>) : (null)}
                            </div>
                        </div>
                    )
                }
            }

            workHistoryRender.push(
                <div key={"company" + x} className="workEntry">
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

export class JobTitleSelector extends React.Component {
    render() {
        return (<p>test</p>)
    }
}
