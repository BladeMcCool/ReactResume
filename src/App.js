import {ExperienceV2, Header, Contact, Education, Skills} from "./ResumeParts";
import {Overview, Functions, Emploooyment, Edooocation} from "./FunctionalResumeParts";
import React, {useEffect, useState} from "react";
import {
    CoverLetterClosing,
    CoverLetterCompany,
    CoverLetterContact,
    CoverLetterContents,
    CoverLetterDate,
} from "./CoverLetterParts";

function App() {
    const queryParams = new URLSearchParams(window.location.search);
    const jsonserver = queryParams.get('jsonserver') || (process.env.NODE_ENV === 'development' ? `${window.location.hostname}:3002` : null); //include the port.
    const layout = queryParams.get('layout') || null;
    const baseline = queryParams.get('baseline') || 'resumeproject';
    const resumeDataFile = queryParams.get('resumedata');
    const jsonServerToken = queryParams.get('token') || null;

    const [resumedata, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getResumeDataUrl = () => {
        if (process.env.NODE_ENV === 'production' && jsonserver === null) {
            console.log("production data url should be used: ", process.env.REACT_APP_PROD_RESUMEDATA_FILE)
            //or maybe it should be a hardcoded path ... tbd.
            return process.env.REACT_APP_PROD_RESUMEDATA_FILE;
        } else {
            const dataPath = process.env.REACT_APP_JSONDATA_PATH ? process.env.REACT_APP_JSONDATA_PATH : "resumedata";
            const proto = jsonServerToken === null ? window.location.protocol : 'https:'
            const baseURL = `${proto}//${jsonserver}`;
            const fetchUrl = resumeDataFile ? `${baseURL}/${dataPath}/${encodeURIComponent(resumeDataFile)}.json` : `${baseURL}?baseline=${baseline}`
            console.log("dev mode, load resumedata from: ", fetchUrl)
            return fetchUrl
        }
    };

    useEffect(() => {
        // Replace this with your data loading logic, e.g., fetch or import a JSON file
        const fetchData = async () => {
            try {
                // Prepare headers
                // const headers = {};
                // // If the token is present, add the Authorization header
                // if (jsonServerToken) {
                //     headers['X-Authorization'] = `Bearer ${jsonServerToken}`;
                // }
                // console.log("that token should come through as", jsonServerToken)
                // console.log("will fetch json with these headers: ", headers)

                // Simulate fetching data from a file
                // const response = await fetch(getResumeDataUrl(), { headers });

                //seems that if the request to load this page from gotenberg included an Authorization header that this
                // fetch request will pass it along, and we can't disable it or overwrite with the json server token,
                // so we're just going to accept that as a fact of life and have the json server use that token instead.
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

    useEffect(() => {
        if (!loading) {
            window.contentLoaded = true //for pdf renderer to detect.
        }
    }, [loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <ErrorComponent message={`Error loading data: ${error.message}`} />;
    }

    // Conditional rendering based on loaded data
    const docTitle = (resumedata.layout === 'coverletter') ? "Cover Letter" : resumedata.personal_info.name  + " Resume"
    document.title = docTitle;

    if (!resumedata.layout && layout !== null) {
        resumedata.layout = layout //helper for external utility, but probably should deprecate in favor of always including layout in the data.
    }
    if (!resumedata.layout) {
        return <ErrorComponent message={`resumedata was missing the 'layout' field.`} />;
    } else if (resumedata.layout === 'functional') {
        return <FunctionalLayout functionalResumedata={resumedata} />;
    } else if (resumedata.layout === 'chrono') {
        return <ChronoLogicalLayout resumedata={resumedata} />;
    } else if (resumedata.layout === 'coverletter') {
        return <CoverLetterLayout coverletterData={resumedata} />;
    } else {
        return <ErrorComponent message={`Unsupported resume layout: ${resumedata.layout}`} />;
    }
}

const FunctionalLayout = ({ functionalResumedata }) => {
    return (
        <div className={[
            'left-sidebar-grid',
            'functional',
            functionalResumedata.style // This might be undefined or null
        ].filter(Boolean).join(' ')}>
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
        <div className={[
            'left-sidebar-grid',
            resumedata.style // This might be undefined or null
        ].filter(Boolean).join(' ')}>
            <Header personal_info={resumedata.personal_info}/>
            <Contact personal_info={resumedata.personal_info}/>
            <ExperienceV2 work_history={resumedata.work_history}/>
            <Education education={resumedata.education_v2}/>
            <Skills hobbies={resumedata.hobbies} skills={resumedata.skills}/>
        </div>
    );
};


const CoverLetterLayout = ({ coverletterData }) => {
    return (
        <div className={[
            'cover-letter',
            coverletterData.style // This might be undefined or null
        ].filter(Boolean).join(' ')}>
            <CoverLetterContact personal_info={coverletterData.personal_info}/>
            <CoverLetterDate date={coverletterData.date}/>
            <CoverLetterCompany company_info={coverletterData.company_info}/>
            <CoverLetterContents contents={coverletterData.letter_contents}/>
            <CoverLetterClosing closing={coverletterData.closing} name={coverletterData.personal_info.name}/>
        </div>

    )
}

const ErrorComponent = ({message}) => (
    <div style={{color: 'red', textAlign: 'center', padding: '20px'}}>
        <h1>Error</h1>
        <p>{message}</p>
        <p>Please check the data and try again.</p>
    </div>
);

export default App;
