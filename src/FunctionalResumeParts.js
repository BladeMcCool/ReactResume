import React from 'react';

// export class Functions extends React.Component {
//     render() {
//         const vars = this.props.functions
//         return (
//             <div className="main-content">temp</div>
//         )
//     }
// }

export class Functions extends React.Component {
    render() {
        const vars = this.props.functional_areas
        return (
            <div>
            {vars.map((item, index) => (
                <div>
                    <p>{item.title}</p>
                    {item.examples.map((example, index) => (
                        <div class={"functionalExamples"}>
                            <ul><p><span class={"functionalExampleHeadline"}>{example.headline}</span>&nbsp;{example.body}</p></ul>
                        </div>
                    ))}
                </div>
            ))}
            </div>
        )
    }
}

// {
//     vars.map((functional_area, index) =>
//         <div>
//             <h2>...</h2>
//         </div>
//
// }


// {/*{work_history.map((company, index) =>*/}

//i'm intending atm to keep this as a 1 pager.
//     export class ExperienceV2 extends React.Component {
//
//     work_history() {
//
//         let displayModifier = this.getDisplayModifier();
//         // console.log("displayModifier:", displayModifier)
//
//         const work_history = this.props.work_history
//         let entries = []
//         for (var entry of work_history) {
//             let hideWholeEntry = entry.hide
//
//             //if there is mention of the company tag in the displayModifier with any 'true' entries, then we are being explicitly asked to show it, so do so.
//             if (displayModifier[entry.tag] !== undefined) {
//                 for (const projectDisplayOverride of displayModifier[entry["tag"]]) {
//                     if (projectDisplayOverride) {
//                         hideWholeEntry = false
//                         break
//                     }
//                 }
//             }
//             if (hideWholeEntry) {
//                 continue
//             }
//
//             if (!entry.projects) {
//                 entry.projects = [{
//                     "desc":entry.desc,
//                     "tech":entry.tech,
//                 }]
//             }
//
//             let entry_has_visible_projects = false
//             for (let i = 0; i < entry.projects.length; i++) {
//                 const project = entry.projects[i]
//
//                 //override show/hide if needed.
//                 if (displayModifier[entry.tag] !== undefined) {
//                     //if the modifier list is long enough to possibly have a setting for this entry ...
//                     //i could have used dictionaries or something, but this was an exercise in list-fu.
//                     if (displayModifier[entry.tag].length >= i+1 && displayModifier[entry.tag][i] != null) {
//                         project.hide = !displayModifier[entry.tag][i] //use the true or false value that was provided for this section override to decide to hide it or not (true=show it, false=hide it)
//                         // console.log("override project.hide of ", entry.tag+"_"+i, "to be", project.hide)
//                     }
//                 }
//
//                 if (!project.hide) {
//                     entry_has_visible_projects = true
//                 }
//             }
//
//             if (!entry_has_visible_projects) {
//                 //skipping this entry b/c all the projects are hidden
//                 continue;
//             }
//             entries.push(entry)
//         }
//
//         function compare(b, a) {
//             if (a.sortdate < b.sortdate) {
//                 return -1;
//             }
//             if (a.sortdate > b.sortdate) {
//                 return 1;
//             }
//             return 0;
//         }
//
//         entries.sort(compare);
//         return entries
//     }
//
//     //take some url params input in the form of show= and hide= with values like sectionTag_sectionNum1,sectionNum2 etc
//     //eg show=krk_0,1&hide=chws_4,5
//     //return an override dict with the section tags as keys
//     getDisplayModifier() {
//         function setShowingItems(show, tag_sections, overrides) {
//             for (const item of tag_sections) {
//                 const [tag, numbers] = item.split('_');  // Split on underscore
//                 const indices = numbers.split(',').map(Number);  // Split on comma and convert to integers
//                 const maxIndex = Math.max(...indices);
//                 if (!overrides[tag]) {
//                     // If the key doesn't exist in the result object, create a list of nulls
//                     overrides[tag] = Array(maxIndex + 1).fill(null);
//                 } else if (overrides[tag].length < maxIndex + 1) {
//                     // Or if the list is too short, extend it with nulls
//                     const fillFrom = overrides[tag].length
//                     overrides[tag].length = maxIndex + 1;
//                     overrides[tag].fill(null, fillFrom);
//                 }
//
//                 for (const section_num of indices) {
//                     overrides[tag][section_num] = show
//                 }
//             }
//         }
//
//         const searchParams = new URLSearchParams(window.location.search);
//         let overrides = {}
//         setShowingItems(true, searchParams.getAll('show'), overrides)
//         setShowingItems(false, searchParams.getAll('hide'), overrides)
//         return overrides
//     }
//
//     render() {
//         const work_history = this.work_history()
//
//         return (
//             <div className="main-content">
//                 <h2>Work Experience</h2>
//                 {work_history.map((company, index) =>
//                     <div key={index} className="work-experience">
//                         <div className="work-company-jobtitle">
//                             {/*<p><b>{company.company}</b> - {company.companydesc}</p>*/}
//                             <p><b>{company.company}</b></p>
//                             <h3><i>{company.jobtitle}</i></h3>
//                         </div>
//                         <div className="work-date-location">
//                             <p><b>{company.daterange}</b></p>
//                             <p>{company.location}</p>
//                         </div>
//                         <div className="work-entries">
//                             <ul>
//                                 {company.projects.map((project, index) => {
//                                         //todo try this with a filter().map() instead
//                                         if (!project.hide) {
//                                             return (<li key={index}>{project.desc}</li>)
//                                         }
//                                         return null;
//                                     }
//                                 )}
//                             </ul>
//                         </div>
//                     </div>
//                 )}
//
//             </div>
//         )
//     }
// }
//
//     render() {
//         return(<div>temp</div>)
//     }
// }

export class EmploymentHistory extends React.Component {
    render() {
        // const vars = this.props.personal_info
        // return (
        //     <div className="header">
        //         <h2>{vars.name}</h2>
        //     </div>
        // )
        return(<div>temp</div>)
    }
}