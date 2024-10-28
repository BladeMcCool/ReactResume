import React from "react";

export function CoverLetterContact({ personal_info }) {

    // "personal_info": {
    //     "name": "Billy Bloads",
    //         "email": "billy.bloads@example.com",
    //         "phone": "(555) 123-4567",
    //         "linkedin": "https://www.linkedin.com/in/billybloads",
    //         "location": "Port Royal, Jamaica",
    //         "github": "https://github.com/billybloads"
    // },

    return (
        <>
            <p>
                {personal_info.name && (
                    <>
                        {personal_info.name}<br/>
                    </>
                )}
                {personal_info.location && (
                    <>
                        {personal_info.location}<br/>
                    </>
                )}
                {personal_info.phone && (
                    <>
                        {personal_info.phone}<br/>
                    </>
                )}
                {personal_info.email && (
                    <>
                        {personal_info.email}<br/>
                    </>
                )}
                {personal_info.linkedin && (
                    <>
                        {personal_info.linkedin}<br/>
                    </>
                )}
                {personal_info.github && (
                    <>
                        {personal_info.github}<br/>
                    </>
                )}
            </p>
        </>
    )
}


export function CoverLetterDate({ date }) {

    function formatDateOrText(input) {
        if (!input) {
            return new Date().toLocaleDateString()
        }
        const placeholderPattern = /^\{.*\}$/; // Regex to detect {jsonString} including the braces

        if (placeholderPattern.test(input)) {
            try {
                // Parse the input directly as JSON
                const options = JSON.parse(input);

                const { locale, ...formatOptions } = options;
                const today = new Date();
                return today.toLocaleDateString(locale || undefined, formatOptions);
            } catch (e) {
                console.error("Invalid JSON format:", e);
                return input; // Return original input if JSON parsing fails
            }
        }

        return input; // Return the input as is if no placeholder is detected
    }

    // i think i want to allow arbitrary date format. not sure the best approach but this will leverage standard js date stuff:
    // // Usage Example:
    // const dateValue1 = '{ "locale": "en-US", "weekday": "long", "year": "numeric", "month": "long", "day": "numeric" }';
    // const dateValue2 = '2024-10-01'; // Return this value as it is
    // const dateValue3 = ''; // just format todays date in the default locale. very simple lol.
    // console.log(formatDateOrText(dateValue1)); // Outputs: "Thursday, October 24, 2024" (example)
    // console.log(formatDateOrText(dateValue2)); // Outputs: "2024-10-01"
    // console.log("here with date like", date)

    return (
        <>
            {/*<p>&nbsp;</p>*/}
            <p>
                {formatDateOrText(date)}
            </p>
        </>
    )
}


export function CoverLetterCompany({ company_info }) {

    // "company_info": {
    //     "company_name": "East India Trading Company",
    //         "organization_name": null
    // },

    const hasAnyCompanyInfo = company_info.company_name || company_info.organization_name

    //prevent it from doubling up the same exact string (idealy not populated like that but ...)
    if (company_info.company_name === company_info.organization_name) {
        delete company_info.organization_name
    }

    return (
        <>
            {hasAnyCompanyInfo && (
                <>
                    {/*<p>&nbsp;</p>*/}
                    <p>
                        {company_info.company_name && (
                            <>
                                {company_info.company_name}<br/>
                            </>
                        )}
                        {company_info.organization_name && (
                            <>
                                {company_info.organization_name}<br/>
                            </>
                        )}
                    </p>
                </>
            )}
        </>
    )
}

export function CoverLetterContents({ contents }) {

    // "company_info": {
    //     "company_name": "East India Trading Company",
    //         "organization_name": null
    // },


    return (
        <>
        {contents.map((entry, index) =>
            <p key={index}>{entry}</p>
        )}
        </>
    )
}

export function CoverLetterClosing({ closing, name }) {
    //should include the trailing comma in case it was something more creative or weird

    // Helper function to check if the string ends with punctuation
    const addCommaIfNeeded = (text) => {
        const punctuationPattern = /[.,…!?]$/; // Matches comma, period, ellipsis, exclamation mark, question mark

        // Check if text ends with valid punctuation
        if (punctuationPattern.test(text)) {
            return text;
        } else {
            return `${text},`; // Add comma if no punctuation at the end
        }
    };

    const adjustedClosing = addCommaIfNeeded(closing);

    return (
        <>
            <p>{adjustedClosing}</p>
            <p>{name}</p>
        </>
    )
}

// "date": "",
//     "letter_contents": [
//     "Dear Hiring Manager,",
//     "I am writing to express my enthusiastic interest in the Deckhand position at the East India Trading Company. With years of experience navigating the high seas, I have honed my skills as an expert deckhand.",
//     "My unique penchant for setting expensive things on fire has proven invaluable in creating strategic diversions during critical missions. This unconventional skill set, combined with my dedication and hard work, makes me a strong candidate for your team.",
//     "I am eager to contribute my expertise to your esteemed company and would welcome the opportunity to discuss how my background aligns with your needs.",
//     "Thank you for considering my application."
// ],
//     "closing": "Embarrassingly Subservient,"
