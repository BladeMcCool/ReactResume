import {ExperienceV2, Header, Contact, Education, Skills} from "./ResumeParts";
import {resumedata} from "./resumedata.mjs";
import React from "react";

function App() {
    return (
        <div className="left-sidebar-grid">
            <Header personal_info={resumedata.personal_info}/>
            <Contact personal_info={resumedata.personal_info}/>
            <ExperienceV2 work_history={resumedata.work_history}/>
            <Education education={resumedata.education_v2}/>
            <Skills hobbies={resumedata.hobbies} skills={resumedata.skills}/>
        </div>
    )
}

export default App;
