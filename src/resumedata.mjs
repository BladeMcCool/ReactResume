// note: project was restructured 2024-03-15 and history of this file was not preserved in this branch. please see older master branch for detailed git blame/annotations.
const personal_info = {
	"name":"Chris A. Hagglund",
	"email":"chris@chws.ca",
	"phone":"250-532-9694",
	"linkedin":"linkedin.com/in/1337-chris-hagglund",
	"location":"Lethbridge\u00A0AB", //\u00A0 is a non breaking space. putting &nbsp; in there didnt work, react just renders it literally.
	"profile":"Software Engineer",
	"github":"https://github.com/BladeMcCool",
}

const skills = [
	"Solving complex problems involving dynamic systems with many moving parts",
	"self-learning, adapting to new tech across full-stack development",
	"back-end development with Go, Python, Rust, Node.js",
	"front-end web app development using React/JSX/HTML5, ES6/Javascript, REST, SCSS", //prefer backend-only stuff though.
	"data management with Postgres, MySQL, Redis, AMQP",
	"proficient with Docker, JetBrains IDEs, CI systems",
	"experienced with AWS, Kubernetes"
]

const education = [{
	"institution":"Humber College",
	"location":"Toronto, ON",
	"description":"3 year Computer Programmer/Analyst Diploma",
	"graduated":"May 2002",
	"notes":["Graduated with honors"]
}]

export const resumedata = {
	"personal_info":personal_info,

	//ideas for future revision:
	//deprecate this whole layout and content.
	//focus on talking about soft skills up front
	//list tech stuff separately
	//only mention things used in the last 3 years
	//mention specifically that we're good at diving into complex problem and prefer to work with a good level of autonomy on goal oriented projects.
	//only talk about things done in the last 3 years, and go into enough detail to fill out a full single page. focus on impact

	// wasnt using this so keeping it out of here (and the resulting json the json server in scripts dir will produce)
	// "key_skills":[
	// 	"Analysing and solving problems; Proficient in self-directed learning; Adaptable to new languages, tools and frameworks; Experienced in both back-end and front-end development environments",
	// 	"Developing backend solutions, integrations and microservices; With Go, Python, Rust and Node.js",
	// 	"Building and supporting web apps; With HTML5, Javascript/ES6, React, REST, SCSS",
	// 	"Handling data; With Postgres, MySQL, Redis, AMQP and others", //lets play with a vector db then put it on the list whee
	// 	"Working with a variety of tools; Experienced with Docker, LLMs, AWS, Kubernetes, JetBrains IDEs, CI systems and more",
	// ],
	"skills": skills,
	"work_history"	: [{
		"company":"CHWS",
		"tag":"chws",
		"companydesc":"Software Development Consultancy",
		"location":"Lethbridge, AB",
		"jobtitle":"Senior Software Developer",
		"daterange": "2010 - Present",
		"sortdate": "2011-01-01",
		"projects":[{
			//consolidate all these personal project type things into one entry for conciseness, and hide all the individual entries. Some of this stuff was my consulting for a client, some was just for me.
			"desc":"Developed fun and interesting projects including a decentralized social network system built on IPFS, a Bitcoin Lightning Network donation invoice system for a website, a captcha solving game for 4chan users, a hosted Bitcoin wallet that can be interacted with using touch tone telephone, and this CV in React.",
			"sortdate":"2012-01-01",
			"tech":"Go, Docker, Nginx, Git, Python, JavaScript, Node.js, ES6, Perl, HTML5, React, MySQL, Redis, Asterisk, IPFS, LND, Bitcoind, VSCode, Github Actions",
			"github":"https://github.com/BladeMcCool/ReactResume",
			"location":"Remote",
			"jobtitle":"Open Source Developer",
		},{
			"desc":"Censorship resistant decentralized social media and encrypted messaging proof of concept/prototype based on blockchain datastructures using RSA public keys as identities, hosted in IPFS on end-user devices with redundancy in the cloud.",
			"dates":"March 2021",
			"sortdate":"2021-03-15",
			"github":"https://github.com/BladeMcCool/IPFS-Social-Graph",
			"tech":"Go, ES6, IPFS, Docker",
			"location":"Victoria, BC",
			"jobtitle":"Open Source Developer",
			"hide":true,
		},{
			"desc":"Web integration of bitcoin lightning network payments for earmarked charitable donations. Generate invoice and present payment request to user, plus show invoice paid status when paid.",
			"dates":"April 2019",
			"sortdate":"2019-04-27",
			"github":"https://github.com/BladeMcCool/goober",
			"tech":"Go, Nginx, JavaScript, HTML5, LND, Bitcoind, VSCode",
			"location":"Victoria, BC",
			"jobtitle":"Open Source Developer",
			"hide":true,
		},{
			"desc":"This resume layout done in React/JSX/HTML5/SCSS. All work history and profile information defined in a data structure separate from the presentation, and some simple React components. Webpack bundle is built and deployed to production environment automatically with Travis CI.",
			"dates":"May 2019",
			"sortdate":"2019-05-15",
			"github":"https://github.com/BladeMcCool/ReactResume",
			"tech":"React, HTML5, Docker, Travis CI",
			"location":"Victoria, BC",
			"jobtitle":"Open Source Developer",
			"printOff":true,
			"hide":true,
		},{
			"desc":"Twitter bot for signup, email+sms validate, and replay of conversations, for a client in the SEO Business. Tweet search code to pull out hundreds of thousands of tweets per target profile and store in database for further use. Webmail account checking code to confirm thousands accounts as working and to log them in with cookies.",
			"dates":"Nov 2018 - Jan 2019",
			"sortdate":"2019-01-01",
			"tech":"Node.js, Puppeteer, MySQL, Redis",
			"location":"Remote",
			"hide":true,
		},{
			"desc":"SEO link network building infrastructure targeting Status.net, Pligg and Wiki sites, with extensive use of captcha bypass services. System was creating tens of thousands of posts per day. Also developed SEO business administration/workflow software to direct and verify employee article writing tasks .",
			"dates":"2010 - 2012",
			"sortdate":"2012-01-01",
			"tech":"Perl, Python, MySQL",
			"location":"Remote",
			"hide":true,
		},{
			"desc":"Captcha solving game, where players were rewarded with XP and with levelup animations for correctly completing captchas, in order to enable a bot posting on 4chan's /b/ board",
			"dates":"Fall 2010",
			"sortdate":"2010-10-01",
			"tech":"Perl, HTML, Javascript, MySQL",
			"location":"Victoria, BC",
			"hide":true,
		},{
			"desc":"Telephone based Interactive Voice Response (IVR) Bitcoin custodial wallet system using VoiP phone number. Customer could phone in and check balance, send and receive payments. Live payment notification possible.",
			"dates":"Early 2010",
			"sortdate":"2010-03-01",
			"tech":"Perl, Asterisk, Bitcoind",
			"github":"https://github.com/BladeMcCool/BitcoinIVR",
			"location":"Victoria, BC",
			"jobtitle":"Open Source Developer",
			"hide":true,
		}]
	},{
		"company":"Kraken",
		"tag":"krk",
		"companydesc":"Digital Asset Exchange",
		"location":"Remote",
		"jobtitle":"Software Engineer II",
		"desc":"Built custom Terraform provider to maintain state with web service APIs, oversaw needed improvements to custom internal production job deployment audit trail tooling, integrated testing tools with gmail API, consolidated divergent isolated test runner tooling across multiple repos with a standardized testing kit for use in CI pipelines and local execution",
		"tech":"Go, Docker, Rust, Nomad, Vault, GitLabCI, Bash scripting, Terraform, JIRA, ChatGPT, APIs",
		"daterange": "Jan 2022 - Mar 2024",
		"sortdate":"2024-03-11",
		"projects":[
			{
				"desc":"Oversaw improvements to a crucial internal production deployment tool in Go which interacts with Nomad and GitLab APIs, helping to completely eliminate incidents related to incorrect deployments, integrating metrics with Prometheus for monitoring, boosting test coverage, fixing bugs and implementing requested features.",
				// "desc": "Oversaw the vital improvements of a mission-critical tool used for production deployments, enhancing its reliability, testability, and operational visibility. Key contributions included integrating Prometheus metrics for real-time monitoring, augmenting the tool's unit test coverage for better maintainability, and refining its operational robustness to ensure seamless execution. These enhancements, bug fixes and vulnerability corrections bolstered the system's security and operational efficiency, leading to a significant reduction in production incidents.",
				"sortdate": "2022-06-01",
				"tech": "Go, Docker, Nomad, Prometheus, Grafana"
			},
			{
				"desc":"Developed a custom Terraform provider to sync resources with a 3rd party accounting service via their web API, facilitating the launch of key business segments.",
				// "desc": "Designed and implemented a custom Terraform provider to automate infrastructure provisioning and ensure synchronization with web service APIs. The project involved in-depth work with Terraform and Go, leading to streamlined operations and enhanced efficiency.",
				"sortdate": "2022-01-24",
				"tech": "Terraform, Go, APIs"
			},
			{
				"desc": "Unified isolated testing frameworks in Bash and Rust across 13 repositories encompassing the entire core backend web service, creating a consistent Gitlab CI pipeline and test environment with Docker Compose, improving test reliability and workflow efficiency.",
				"sortdate": "2023-06-01",
				"tech": "Bash scripting, Docker, Docker Compose, CI pipelines"
			},
			{
				"desc": "Implemented an integration of in-house end-to-end and isolated testing tooling to work with the Gmail API (Rust), to facilitate automated email testing using real email, enabling new capabilities and use cases with the existing testing framework for several teams within the organization.",
				"sortdate": "2023-01-01",
				"tech": "Gmail API, Rust, GitLabCI"
			},
			{
				//this was fun heh
				"desc": "Identified and resolved a critical issue involving an essential HTTP header that was inadvertently modified by a microservice in the stack, impeding integration with a newer version of a key mock infrastructure tool. Initially met with skepticism, the problem's existence and its impact on the testing framework's upgrade path were methodically demonstrated to the team. Several solutions were proposed through collaborative troubleshooting with colleagues, with persistent advocacy for a fix amidst bureaucratic resistance. The adoption of a practical solution, which was one of the proposed, marked a pivotal step in standardizing the test runner tools. This experience underscored the importance of technical diligence and effective communication in overcoming operational challenges.",
				"sortdate": "2023-06-01",
				"tech": "Rust, Docker, Slack, Zoom",
				"hide":true,
			},
			//the one below was more of a writing exercise. probably dont include it.
			{
				"desc": "During a significant company reorganization, transitioned to a new team with a distinct set of operational challenges, including complex ticket assignments and rigorous merge request processes. Demonstrated adaptability and a commitment to maintaining high-quality standards amidst shifting team dynamics and challenging project requirements. Efforts included meticulous attention to detail in implementing feedback, ensuring alignment with team standards, and contributing to the team's objectives. This period highlighted the importance of resilience, effective communication, and the ability to navigate organizational changes constructively.",
				"sortdate": "2024-01-01",
				"tech": "Rust, GitLab, Slack, Zoom",
				"hide":true,
			}

		]
	},{
		"company":"PerfectServe/Telmediq",
		"tag":"tmq",
		"companydesc":"Clinical Communication and Collaboration",
		"location":"Victoria, BC",
		"jobtitle":"Software Engineer",
		"desc":"Interactive SMS-based survey microservice for patient followup, web API implemented with Django/Python, making use of Twilio for SMS communication. Integrations with third party scheduling systems to coordinate and sync physician schedules with existing client IT infrastructure. Adding features to and fixing issues in various microservices throughout the organization.",
		"tech":"Django/Python, Go, Kubernetes, Spinnaker, Postgres, Twilio, Nginx",
		"daterange": "Oct 2019 - Nov 2021",
		"sortdate":"2021-08-15",
		"projects":[{
			"desc": "Developed an interactive SMS-based survey microservice for patient follow-up, utilizing Django/Python and integrating Twilio for efficient SMS communication, as a drop-in replacement for a vendor product, realizing tens of thousands of dollars of monthly operational cost savings.",
			"tech":"Django/Python, Twilio, Postgres, Kubernetes",
		},
		{
			"desc": "Engineered robust integrations with third-party scheduling system APIs using Python, ensuring seamless synchronization between physician schedules and the existing client IT infrastructure.",
			"tech":"Django/Python, APIs, Spinnaker, Kubernetes",
		},
		{
			"desc": "Contributed to the enhancement and maintenance of various microservices across the organization in Python and Go, implementing REST endpoints to serve user interface components and improving service logs.",
			"tech":"Django/Python, Go, Kubernetes, Spinnaker, Postgres, Redis, Nginx",
		}]
	},{
		"company":"Go2mobi",
		"tag":"go2",
		"companydesc":"Mobile Advertising Self-Serve DSP",
		"location":"Victoria, BC",
		"jobtitle":"Senior Software Developer",
		"desc":"Built and maintained mobile advertising Real Time Bidder in Python, later transitioned to Go. Handled 500,000 queries per second on a cluster of 15 servers. Also developed processes for ETL and reporting the hundreds of millions of records per day generated by the bidder. Re-architected existing click tracking system for better performance.",
		"tech":"Go, Python, Node.js, AWS, RabbitMQ, Redis, MySQL+Postgres",
		"daterange": "Nov 2012 - Feb 2017",
		"sortdate":"2017-02-01",
		"projects":[{
			"desc": "Built and maintained mobile advertising Real Time Bidder in Python/Tornado, later transitioned to Go. Handled 500,000 queries per second on a cluster of 15 servers.",
			"tech":"Go, Python, AWS, RabbitMQ, Redis, MySQL+Postgres",
		},
		{
			"desc": "Developed processes for ETL and reporting the hundreds of millions of records per day generated by the bidder, providing key decision-making data for successful advertising campaign execution.",
			"tech":"Python, RabbitMQ, MySQL, Redshift+RDS",
		},
		{
			"desc": "Re-architected existing click tracking system away from PHP and into async Python/Tornado for better performance, boosting CTRs.",
			"tech":"Python, AWS",
		}]
	},{
		"company":"Shrinking Planet Communications",
		"tag":"spi",
		"companydesc":"Content Management Systems and Web Application Development",
		"location":"Toronto, ON",
		"jobtitle":"Full Stack Developer",
		"daterange": "2002 - 2009",
		"sortdate":"2009-02-01",
		"desc":"Maintained existing CMS and Email broadcast systems written in Perl and being used by hundreds of clients. Improved performance of infrastructure through employing enhanced server efficiency tools like mod_perl under Apache. Built a web application tool kit which included a robust custom SQL abstraction ORM. Integrated with credit card processing providers like Moneris.",
		"tech":"Perl, Apache, MySQL, Javascript, CSS, HTML Templating",
		"hide":true,
	},{
		"company":"Glacier Digital",
		"tag":"gdi",
		"companydesc":"Enterprise Application Development and Content Management Systems",
		"location":"Burlington, ON",
		"jobtitle":"Senior Software Developer",
		"daterange": "1999 - 2011",
		"projects":[{
			"desc":"Ported a hotel franchise invoicing system from Cold Fusion to PHP due to new server requirements. Successfully completed with identical functionality to original CFM code, and made some security improvements to prevent SQL injection vulnerabilities.",
			"dates":"2011",
			"tech":"CFM, PHP, MySQL",
			"location":"Remote",
			"sortdate":"2011-06-01",
			"pageBreakBefore":true,
			"hide":true,
		},{
			"desc":"Improved the machine-generated output of some y2k-era web tools to add additional server side (vbscript asp) and client side functionality related to a content management system that was being developed, as well as database table setup for localisation with different languages.",
			"dates":"1999",
			"sortdate":"1999-06-01",
			"tech":"VBScript, HTML",
			"location":"Remote",
			"jobtitle":"Web Developer",
			"hide":true,
		}]
	},{
		"company":"SunLife Financial",
		"tag":"sun",
		"companydesc":"Enterprise Application Development and Content Management Systems",
		"location":"Toronto, ON",
		"jobtitle":"Intern - Internet Technologies Group",
		"daterange": "Summer 2001",
		"sortdate":"2001-06-01",
		"desc":"Diagrammed portions of the network infrastructure in the SunLife network using Visio 2000. Performed routine server maintenance (log rotation, disk space checking) of a small set of Solaris servers with the assistance of custom made scripts. Wrote a perl script to catalog the various internal web-services that were available in the intranet and present the results in a web interface.",
		"tech":"Perl, Oracle, Bash, Unix, Visio 2000",
		"hide":true,
	},{
		"company":"Early Career",
		"tag":"ancient-history",
		"companydesc":"Shrinking Planet, SunLife Financial, Glacier Digital",
		"location":"Toronto, ON",
		"jobtitle":"Software Developer",
		"daterange": "1999-2009",
		"sortdate":"1999-01-01",
		"desc":"Over a decade of experience with technologies like Perl, PHP, MySQL and VBScript in early web development, focusing on content management systems, invoicing systems, and Y2K-era tools. Challenges included improving server efficiency, migrating legacy code, and enhancing security to prevent SQL injection vulnerabilities.",
		"tech":"Perl, Oracle, Bash, Unix, MySQL, Apache, Visio 2000, VBScript, HTML/Templating, CFM, PHP, Javascript, CSS",
	}],
	// "education":[
	// 	"Humber College (Toronto, 3 year Computer Programmer/Analyst Diploma, May 2002)",
	// 	"CompTIA A+ (Computer Service Technician Certification, Toronto, 2000)",
	// 	"White Oaks Secondary School (Oakville, OSSD, June 1999)",
	// ],
	"education_v2":education,
	"hobbies":[
		// "Learning Japanese",
		// "property development",
		// "experimenting with AI tools such as diffusion and language models",
		// "Vector Databases" //soon(tm)
		// "Resume Hacking",
	],
	"jobs":[{
		"title":"Software Engineer II",
		"tag":"engii"
	},{
		"title":"Senior Software Developer",
		"tag":"seniordev"
	},{
		"title":"Intermediate Software Developer",
		"tag":"itermeddev"
	},{
		"title":"Software Developer",
		"tag":"dev"
	},{
		"title":"Customer Service",
		"tag":"service"
	}],
}

export const functionalResumeData = {
	"personal_info":personal_info,
	"education":education,
	// "key_skills":skills,
	"overview": "A tenacious and innovative Software Engineer with extensive experience in back-end development, problem-solving, and leading end-to-end project execution. Skilled in leveraging cutting-edge technologies to deliver scalable and efficient solutions, with a proven track record in managing complex software projects and driving organizational success.",
	"functional_areas":[
		{
			"title": "Back-end Development & Deployment",
			"key_contributions": [
				{
					"lead_in": "Implemented improvements",
					"continuation": "to mission-critical internal production deployment tooling, enhancing system reliability, boosting test coverage, and integrating metrics for monitoring. These efforts eliminated production incidents related to incorrect deployments.",
					"tech": ["Go", "Docker", "Nomad", "Prometheus", "Grafana"],
					"daterange":"2022",
					"company": "Kraken"
				},
				{
					"lead_in": "Created and maintained a Real-Time Bidding system",
					"continuation": "for mobile advertising in Python, later transitioning to Go, ensuring system stability and handling 500,000 queries per second, across a cluster of 15 servers",
					"tech": ["Go", "Python", "AWS", "RabbitMQ", "Redis", "MySQL/Postgres"],
					"daterange":"2012-2017",
					"company": "Go2Mobi"
				},
				{
					"lead_in": "Engineered a robust SMS-based survey",
					"continuation": "microservice for patient follow-up, integrating Twilio for efficient patient follow-up SMS communication, as a drop-in replacement for a vendor product and realizing tens of thousands of dollars of monthly operational cost savings.",
					"tech": ["Django/Python", "Twilio", "Postgres", "Kubernetes"],
					"daterange":"2019",
					"company":"PerfectServe"
				},
				{
					"lead_in": "Re-architected existing click tracking system",
					"continuation": "away from PHP and into async Python/Tornado for better performance, boosting click-through and conversion rates.",
					"tech":["Python", "AWS", "RabbitMQ"],
					"daterange":"2015",
					"company":"Go2Mobi",
				},
				{
					"lead_in": "Developed and deployed various open-source projects",
					"continuation": "including a decentralized social network system built on IPFS and a Bitcoin Lightning Network donation system, showcasing versatility in backend and frontend technologies.",
					"tech": ["Go", "Docker", "Nginx", "Git", "Python", "JavaScript", "Node.js", "ES6", "Perl", "HTML5", "React", "MySQL", "Redis", "IPFS", "LND", "Bitcoind"],
					"daterange":"2010-Present",
					"company":"CHWS",
					"hide": true,
				},
				{
					"lead_in": "Maintained and optimized content management systems (CMS)",
					"continuation": "for hundreds of clients, enhancing existing CMS, CRM and email broadcast systems to improve performance and scalability. This role involved significant back-end development, including building a custom SQL abstraction ORM and integrating payment processing with Moneris.",
					"tech": [
						"Perl",
						"Apache",
						"MySQL",
						"SQL",
						"Moneris"
					],
					"daterange": "2002-2009",
					"company": "Shrinking Planet",
					"hide":true
				},
				{
					"lead_in": "Enhanced CMS performance by integrating ",
					"continuation": "mod_perl under Apache at Shrinking Planet, which led to improved CMS performance, reduced server load, and allowed the onboarding of additional clients without requiring new infrastructure.",
					"tech": [
						"Perl",
						"Apache",
						"MySQL",
						"mod_perl",
						"Moneris"
					],
					"daterange": "2002-2009",
					"company": "Shrinking Planet",
					"hide":true
				}
			]
		},
		{
			"title": "Infrastructure & Testing",
			"key_contributions": [
				//maybe mention something about cypress stuff at tmq
				{
					"lead_in": "Developed and tested a Terraform provider",
					"continuation": "for syncing with a third-party accounting API, enabling seamless interaction with the vendor's REST API, enabling the potential launch of a key business segment.",
					"tech": ["Go", "Terraform", "REST APIs", "IaC"],
					"daterange":"2022",
					"company": "Kraken",
				},
				{
					"lead_in": "Unified isolated testing frameworks",
					"continuation": "across a multitude Gitlab repositories, improving workflow efficiency and test reliability in CI pipelines using Docker and Bash scripting.",
					"tech": ["Bash scripting", "Docker", "GitLabCI", "CI/CD"],
					"daterange":"2023",
					"company": "Kraken",
				},
				{
					"lead_in": "Enabled new testing capabilities",
					"continuation": "for several teams by integrating Gmail API capability within their Rust based end-to-end testing framework.",
					"tech": ["Gmail API", "Rust", "GitLabCI"],
					"daterange":"2023",
					"company": "Kraken",
				},
				{
					"lead_in": "Improved test coverage",
					"continuation": "across various subsystems of the Real Time Bidder at Go2Mobi",
					"tech": ["Python", "Go"],
					"daterange":"2014-2016",
					"company": "Shrinking Planet",
					"hide":true,
				},

			]
		},
		{
			"title": "Experimentation & Documentation",
			//more ideas for this section (if we were going to show it, heh)
				//tweet harvesting
				//IPFS messing around
				//stable diffusion stuff
				//openai api
				//ln donations stuff
				//react cv -> resume tuner stuff
			"key_contributions": [
				{
					"lead_in": "Enhanced SEO automation systems",
					"continuation": "by managing the development of an SEO link network building infrastructure, which involved extensive use of captcha bypass services and automated content generation across multiple platforms. These improvements led to a significant increase in link-building efficiency and SEO rankings.",
					"tech": [
						"Perl",
						"Python",
						"MySQL",
						"CAPTCHA bypass services"
					],
					"daterange": "2010-2012",
					"company": "CHWS",
					"hide":true
				},
				{
					"lead_in": "Developed network service discovery tooling to assist in the documentation of network infrastructure",
					"continuation": "during an internship at SunLife Financial. Created diagrams in Visio 2000, developed scripts for routine server maintenance (log rotation, disk space monitoring), as well as a Perl script to catalog internal web services.",
					"tech": [
						"Perl",
						"Oracle",
						"Bash",
						"Unix",
						"Solaris",
						"Visio 2000"
					],
					"company": "SunLife Financial",
					"daterange": "2001",
					"hide":true
				},
				{
					"lead_in": "Engineered a telephone-based Bitcoin wallet system",
					"continuation": "using Interactive Voice Response (IVR) technology, allowing users to manage their Bitcoin funds via phone, including checking balances and making transactions. This innovative solution expanded access to Bitcoin services for users without internet access.",
					"tech": [
						"Perl",
						"Asterisk",
						"Bitcoind"
					],
					"daterange": "2010",
					"company": "CHWS",
					"hide":true
				}
			]
		},

		{
			"title": "Collaborative Problem Solving & Execution",
			"key_contributions": [
				//could talk about that time i had to wrangle way too many people to get the traceparent header shit sorted out.
				{
					"lead_in": "Engineered robust integrations",
					"continuation": "with third-party scheduling system APIs, working with stakeholders to document and understand hidden requirements",
					"tech": ["Python", "APIs"],
					"company": "PerfectServe",
					"daterange":"2020",
				},
				{
					"lead_in": "Contributed to the enhancement",
					"continuation": "and maintenance of various microservices across the organization in TypeScript, Python and Go, implementing REST endpoints to serve user interface components, improving service logs, and adjusting user interface elements.",
					"tech": ["TypeScript", "Python", "Go", "React"],
					"company": "PerfectServe",
					"daterange":"2020",
				},

				{
					"lead_in": "Managed large-scale ETL processes for mobile advertising data",
					"continuation": ", working with the team to develop Extract, Transform, Load operations to handle hundreds of millions of records daily from a Real Time Bidding system. This involved optimizing data flow and reporting processes to ensure accurate and timely data for decision-making.",
					"tech": [
						"Python",
						"RabbitMQ",
						"MySQL",
						"Redshift"
					],
					"daterange": "2013-2017",
					"company":"Go2mobi",
				}
			]
		}
	],
	"employment_history": [
		{
			"title": "Software Engineer II",
			"company": "Kraken",
			"location": "Remote",
			"daterange": "Jan 2022 - Mar 2024"
		},
		{
			"title": "Software Engineer",
			"company": "PerfectServe/Telmediq",
			"location": "Victoria, BC",
			"daterange": "Oct 2019 - Nov 2021"
		},
		{
			"title": "Senior Software Developer",
			"company": "Go2mobi",
			"location": "Victoria, BC",
			"daterange": "Nov 2012 - Feb 2017"
		},
		{
			"title": "Full Stack Developer",
			"company": "Shrinking Planet Communications",
			"location": "Toronto, ON",
			"daterange": "2002 - 2009"
		},
		{
			"title": "Senior Software Developer",
			"company": "CHWS",
			"location": "Lethbridge, AB",
			"daterange": "2010 - Present"
		},
	]
}