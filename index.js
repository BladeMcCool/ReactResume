import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Experience, Education, Hobbies} from "./ResumeParts"
import { resumeData } from './resumedata.js';
import './style.scss'

class Resume extends React.Component {
    render() {
        return (
            <div className="resumeContainer">
                <Header personal_info={resumeData.personal_info} />
                <Experience work_history={resumeData.work_history} />
                <Education education={resumeData.education} />
                <Hobbies hobbies={resumeData.hobbies} />
            </div>
        )
    }
}
ReactDOM.render(<Resume />, document.getElementById('root'));