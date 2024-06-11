// note: project was restructured 2024-03-15 and history of this file was not preserved in this branch. please see older master branch for detailed git blame/annotations.
export const resumeData = {
	"personal_info":{
		"name":"Chris A. Hagglund",
		"email":"chris@chws.ca",
		"phone":"250-532-9694",
		"linkedin":"linkedin.com/in/1337-chris-hagglund",
		"location":"Lethbridge\u00A0AB", //\u00A0 is a non breaking space. putting &nbsp; in there didnt work, react just renders it literally.
		"profile":"Software Engineer",
		"github":"https://github.com/BladeMcCool",
	},

	//ideas for future revision:
	//deprecate this whole layout and content.
	//focus on talking about soft skills up front
	//list tech stuff separately
	//only mention things used in the last 3 years
	//mention specifically that we're good at diving into complex problem and prefer to work with a good level of autonomy on goal oriented projects.
	//only talk about things done in the last 3 years, and go into enough detail to fill out a full single page. focus on impact

	"key_skills":[
		"Analysing and solving problems; Proficient in self-directed learning; Adaptable to new languages, tools and frameworks; Experienced in both back-end and front-end development environments",
		"Developing backend solutions, integrations and microservices; With Go, Python, Rust and Node.js",
		"Building and supporting web apps; With HTML5, Javascript/ES6, React, REST, SCSS",
		"Handling data; With Postgres, MySQL, Redis, AMQP and others", //lets play with a vector db then put it on the list whee
		"Working with a variety of tools; Experienced with Docker, LLMs, AWS, Kubernetes, JetBrains IDEs, CI systems and more",
	],
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
	}],
	"education":[
		"Humber College (Toronto, 3 year Computer Programmer/Analyst Diploma, May 2002)",
		"CompTIA A+ (Computer Service Technician Certification, Toronto, 2000)",
		"White Oaks Secondary School (Oakville, OSSD, June 1999)",
	],
	"education_v2":[{
		"institution":"Humber College",
		"location":"Toronto, ON",
		"description":"3 year Computer Programmer/Analyst Diploma",
		"graduated":"May 2002",
		"notes":["Graduated with honors"]
	}],
	"hobbies":[
		"Learning Japanese",
		"property development",
		"experimenting with AI tools such as diffusion and language models",
		// "Vector Databases" //soon(tm)
	],
	"skills":[
		"Solving complex problems involving dynamic systems with many moving parts",
		"self-learning, adapting to new tech across full-stack development",
		"back-end development with Go, Python, Rust, Node.js",
		"front-end web app development using React/JSX/HTML5, ES6/Javascript, REST, SCSS", //prefer backend-only stuff though.
		"data management with Postgres, MySQL, Redis, AMQP",
		"proficient with Docker, JetBrains IDEs, CI systems",
		"experienced with AWS, Kubernetes"
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