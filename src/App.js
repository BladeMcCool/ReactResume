import {ExperienceV2, Header, Contact, Education, Skills} from "./ResumeParts";
import {resumedata as defaultResumedata} from "./resumedata.mjs";
import React, {useEffect, useState} from "react";
// import fs from 'fs';
// import path from 'path';


function App() {
    const queryParams = new URLSearchParams(window.location.search);
    const mode = queryParams.get('mode');
    const resumeDataFile = queryParams.get('resumedata');

    const [resumedata, setResumedata] = useState(defaultResumedata);

    useEffect(() => {
        if (resumeDataFile) {
            const fetchUrl = `http://localhost:3002/resumedata/${resumeDataFile}.json`
            console.log("Load resumedata from url: ", fetchUrl)
            fetch(fetchUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load the resume data from ${resumeDataFile}.json`);
                    }
                    return response.json();
                })
                .then(data => {
                    // console.log("here with data ...", data)
                    setResumedata(data)
                })
                .catch(error => {
                    console.error("Error loading resume data:", error);
                    setResumedata(defaultResumedata);
                });
        }
    }, [resumeDataFile]);

    //this sorta works, in the sense that it will render the json and show it in the browser, but
    // its not really good enough for what i want because i need a dumb http client to be able to pull it down
    // and what this will do is use react facilities in javascript to basically cause the final rendered page to be this json
    // but if there is no js runtime lol .... so, will leave this in for fun for now i think but its not really that useful.
    useEffect(() => {
        if (mode === 'json') {
            // Clear the existing HTML and output the JSON
            document.body.innerHTML = JSON.stringify(resumedata, null, 2);
            document.head.innerHTML = '';  // Optionally clear the head
            // Setting content type header is not directly possible in client-side JS
        }
    }, [mode, resumedata]);

    if (mode === 'json') {
        return null;  // Prevent React from rendering anything else
    }


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
