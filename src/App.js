import {ExperienceOrdered, Header, Hobbies, TextList} from "./ResumeParts";
import {resumeData} from "./resumedata";
import React from "react";

function App() {
  return (
      <div className="resumeContainer">
        <Header personal_info={resumeData.personal_info} />
        {/* <JobTitleSelector jobs={resumeData.jobs} /> */}
        <TextList title="Key Skills" entries={resumeData.key_skills} />
        <ExperienceOrdered work_history={resumeData.work_history} />
        <TextList title="Education" entries={resumeData.education} />
        <Hobbies hobbies={resumeData.hobbies} />
      </div>
  )
}

export default App;
