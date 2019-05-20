import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Experience, Experience2, TextList, Hobbies} from "./ResumeParts"
import { resumeData } from './resumedata.js';
import './style.scss'

class Resume extends React.Component {
    render() {
        console.log("here.")
        return (
            <div className="resumeContainer">
                <Header personal_info={resumeData.personal_info} />
                <TextList title="Key Skills" entries={resumeData.key_skills} />
                <Experience2 work_history={resumeData.work_history} />
                <TextList title="Education" entries={resumeData.education} />
                <Hobbies hobbies={resumeData.hobbies} />
            </div>
        )
    }
}
ReactDOM.render(<Resume />, document.getElementById('root'));