import React from 'react';

export class Overview extends React.Component {
    render() {
        return (
            <div><p className={"functionalOverview"}>{this.props.overview}</p></div>
        )
    }
}

export class Functions extends React.Component {
    render() {
        const vars = this.props.functional_areas
        return (
            <div>
            {vars.map((item, index) => {
                if (item.hide || (item.key_contributions.filter(entry => entry.hide === true).length === item.key_contributions.length)) { return null }
                return (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <ul className={"functionalExamples"}>
                            {item.key_contributions.map((example, index) => {
                                if (example.hide) { return null }
                                const words = example.description.split(' ');

                                // Get the words to be bolded
                                const lead_in = words.slice(0, example.lead_in).join(' ');

                                // Get the remaining words
                                const description = words.slice(example.lead_in).join(' ');
                                if (example.tech.length === 0) {
                                    return (
                                        <li key={index}>
                                            <span className={"functionalExampleHeadline"}>{lead_in}</span>&nbsp;{description}&nbsp;({example.daterange} - {example.company})
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={index}>
                                            <span className={"functionalExampleHeadline"}>{lead_in}</span>&nbsp;{description}<br/>
                                            <span className={"functionalExampleTech"}>Tech: {example.tech.join(', ')}</span>
                                            &nbsp;({example.daterange} - {example.company})
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                )
            })}
            </div>
        )
    }
}

export class Emploooyment extends React.Component {
    render() {
        return (
            <div>
                <h2>Employment History</h2>
                {this.props.employment_history.map((item, index)=> {
                    if (item.hide) { return null }
                    return (
                        <p key={index}><span
                            className={"functionalExampleHeadline"}>{item.title}</span> | {item.company}, {item.location} | {item.daterange}
                        </p>
                    )
                })}

            </div>
        )
    }
}

export class Edooocation extends React.Component {
    render() {
        return (
            <div className={"functionalEducation"}>
                <h2>Education</h2>
                {this.props.education.map((item, index)=> (
                    <div key={index}>
                        <p><span className={"functionalExampleHeadline"}>{item.institution}</span>, {item.location}</p>
                        <p>{item.description}, {item.graduated}</p>
                    </div>
                ))}
            </div>
        )
    }
}