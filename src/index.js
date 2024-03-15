import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import './style.scss'

//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Header, ExperienceOrdered, TextList, Hobbies, JobTitleSelector} from "./ResumeParts"
// import { resumeData } from './resumedata.js';
// import './style.scss'
//
// class Resume extends React.Component {
//     render() {
//         return (
//             <div className="resumeContainer">
//                 <Header personal_info={resumeData.personal_info} />
//                 {/* <JobTitleSelector jobs={resumeData.jobs} /> */}
//                 <TextList title="Key Skills" entries={resumeData.key_skills} />
//                 <ExperienceOrdered work_history={resumeData.work_history} />
//                 <TextList title="Education" entries={resumeData.education} />
//                 <Hobbies hobbies={resumeData.hobbies} />
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Resume />, document.getElementById('root'));