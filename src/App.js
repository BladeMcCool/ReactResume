import {ExperienceV2, Header, Contact, Education, Skills} from "./ResumeParts";
import {Overview, Functions, Emploooyment, Edooocation} from "./FunctionalResumeParts";
// import {
//     resumedata as defaultResumedata,
//     // functionalResumeData as importedFunctionalResumeData,
//     retailFunctional as importedFunctionalResumeData,
// } from "./resumedata.mjs";
import React, {useEffect, useState} from "react";

function App() {
    const queryParams = new URLSearchParams(window.location.search);
    const mode = queryParams.get('mode');
    const jsonserver = queryParams.get('jsonserver') || window.location.hostname;
    const layout = queryParams.get('layout') || 'default';
    const resumeDataFile = queryParams.get('resumedata');

    // const [resumedata, setResumedata] = useState(defaultResumedata);
    // const [functionalResumedata, setFunctionalResumedata] = useState(importedFunctionalResumeData);
    //
    // useEffect(() => {
    //     console.log("here 1")
    //     updateResumeDataForLayout(setResumedata, resumeDataFile)
    // }, [resumeDataFile]);
    // useEffect(() => {
    //     console.log("here 2")
    //     updateResumeDataForLayout(setFunctionalResumedata, resumeDataFile)
    // }, [resumeDataFile]);
    //
    // let updateResumeDataForLayout =  function(setResumeDataCb, resumeDataFile) {
    //     if (resumeDataFile) {
    //         const baseURL = `${window.location.protocol}//${window.location.hostname}:3002`;
    //         const fetchUrl = `${baseURL}/resumedata/${resumeDataFile}.json`
    //         console.log("Load resumedata from url: ", fetchUrl)
    //         fetch(fetchUrl)
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error(`Failed to load the resume data from ${resumeDataFile}.json`);
    //                 }
    //                 return response.json();
    //             })
    //             .then(data => {
    //                 console.log("here about to setResumeDataCb")
    //                 setResumeDataCb(data)
    //             })
    //             .catch(error => {
    //                 console.error("Error loading resume data:", error);
    //                 setResumeDataCb(defaultResumedata);
    //             });
    //     }
    // }


    //this sorta works, in the sense that it will render the json and show it in the browser, but
    // its not really good enough for what i want because i need a dumb http client to be able to pull it down
    // and what this will do is use react facilities in javascript to basically cause the final rendered page to be this json
    // but if there is no js runtime lol .... so, will leave this in for fun for now i think but its not really that useful.
    // useEffect(() => {
    //     if (mode === 'json') {
    //         let resumedataToShow
    //         if (layout === 'functional') {
    //             resumedataToShow = functionalResumedata
    //         } else {
    //             resumedataToShow = resumedata
    //         }
    //         // Clear the existing HTML and output the JSON
    //         document.body.innerHTML = JSON.stringify(resumedataToShow, null, 2);
    //         document.head.innerHTML = '';  // Optionally clear the head
    //         // Setting content type header is not directly possible in client-side JS
    //     }
    // }, [mode, resumedata]);

    // if (mode === 'json') {
    //     return null;  // Prevent React from rendering anything else
    // }
    const [resumedata, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const getResumeDataUrl = () => {
        if (process.env.NODE_ENV === 'development') {
            const baseURL = `${window.location.protocol}//${jsonserver}:3002`;
            const fetchUrl = resumeDataFile ? `${baseURL}/resumedata/${resumeDataFile}.json` : `${baseURL}?layout=${layout}`
            console.log("dev mode, load resumedata from: ", fetchUrl)
            return fetchUrl
        } else if (process.env.NODE_ENV === 'production') {
            console.log("production data url should be used: ", process.env.REACT_APP_PROD_RESUMEDATA_FILE)
            //or maybe it should be a hardcoded path ... tbd.
            return process.env.REACT_APP_PROD_RESUMEDATA_FILE;
        } else {
            throw new Error('NODE_ENV is not set to development or production');
        }
    };

    useEffect(() => {
        // Replace this with your data loading logic, e.g., fetch or import a JSON file
        const fetchData = async () => {
            try {
                // Simulate fetching data from a file
                const response = await fetch(getResumeDataUrl());
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    // Conditional rendering based on loaded data
    document.title = resumedata.personal_info.name  + " Resume";
    if (layout === 'functional') {
        return <FunctionalLayout functionalResumedata={resumedata} />;
    } else {
        return <ChronoLogicalLayout resumedata={resumedata} />;
    }

    // if (layout === 'functional') {
    //     console.log("think about rendering this data", functionalResumedata.functional_areas)
    //     return (
    //     )
    // } else {
    //     return (
    //     )
    // }

}

const FunctionalLayout = ({ functionalResumedata }) => {
    return (
        <div className="left-sidebar-grid functional">
            <Header personal_info={functionalResumedata.personal_info}/>
            <Contact personal_info={functionalResumedata.personal_info}/>
            <Overview overview={functionalResumedata.overview}/>
            <Functions functional_areas={functionalResumedata.functional_areas}/>
            <Emploooyment employment_history={functionalResumedata.employment_history}/>
            <Edooocation education={functionalResumedata.education}/>
        </div>
    )
}

const ChronoLogicalLayout = ({resumedata}) => {
    return (
        <div className="left-sidebar-grid">
            <Header personal_info={resumedata.personal_info}/>
            <Contact personal_info={resumedata.personal_info}/>
            <ExperienceV2 work_history={resumedata.work_history}/>
            <Education education={resumedata.education_v2}/>
            <Skills hobbies={resumedata.hobbies} skills={resumedata.skills}/>
        </div>
    );
};

export default App;
