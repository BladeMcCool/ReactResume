import {ExperienceV2, Header, Contact, Education, Skills} from "./ResumeParts";
import {resumeData} from "./resumedata";
import React from "react";

function App() {
    return (
        <div className="left-sidebar-grid">
            <Header personal_info={resumeData.personal_info}/>
            <Contact personal_info={resumeData.personal_info}/>
            <ExperienceV2 work_history={resumeData.work_history}/>
            <Education education={resumeData.education_v2}/>
            <Skills hobbies={resumeData.hobbies} skills={resumeData.skills}/>
        </div>
    )
}

export default App;
