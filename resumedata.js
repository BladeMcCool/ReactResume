/* cSpell:enable */
export const resumeData = {
	"personal_info":{
		"name":"Chris A. Hagglund",
		"email":"chris@chws.ca",
		"phone":"250-532-9694",
		"location":"1635 Cook St, Victoria BC",
		"profile":"Over 15 years of industry experience building and maintaining backend systems. A passion for solving challenging problems, delivering results and improving organizational efficiency.",
	},
	"key_skills":[
		"Developing backend solutions, integrations and microservices with Golang, Python, Node.js, Perl and PHP",
		"Building and supporting web apps with HTML5, Javascript/ES6, React, REST, SCSS", //<-- debating removing this one as I'm really not interested in doing anything to do with frontend stuff at this time.
		"Handling data with Postgres, MySQL, Redis, RDS, Redshift, RabbitMQ and others",
		"Working with tools and technologies like Docker, AWS, Kubernetes, Jenkins, JetBrains IDEs and more",
	],
	"work_history"	: [{
		"company":"CHWS",
		"companydesc":"Software Development Consultancy",
		"location":"Victoria",
		"jobtitle":"Senior Software Developer",
		"daterange": "2010 - Present",
		"projects":[{
			"desc":"Censorship resistant decentralized social media and encrypted messaging proof of concept/prototype based on blockchain datastructures using RSA public keys as identities, hosted in IPFS on end-user devices with redundancy in the cloud.",
			"dates":"March 2021",
			"sortdate":"2021-03-15",
			"github":"https://github.com/BladeMcCool/IPFS-Social-Graph",
			"tech":"Golang, ES6, IPFS, Docker",
			"location":"Victoria",
			"jobtitle":"Open Source Developer",
		},{
			"desc":"Web integration of bitcoin lightning network payments for earmarked charitable donations. Generate invoice and present payment request to user, plus show invoice paid status when paid.",
			"dates":"April 2019",
			"sortdate":"2019-04-27",
			"github":"https://github.com/BladeMcCool/goober",
			"tech":"Golang, Nginx, JavaScript, HTML5, LND, Bitcoind, VSCode",
			"location":"Victoria",
			"jobtitle":"Open Source Developer",
		},{
			"desc":"This resume layout done in React/JSX/HTML5/SCSS. All work history and profile information defined in a data structure separate from the presentation, and some simple React components. Webpack bundle is built and deployed to production environment automatically with Travis CI.",
			"dates":"May 2019",
			"sortdate":"2019-05-15",
			"github":"https://github.com/BladeMcCool/ReactResume",
			"tech":"React, HTML5, Docker, Travis CI",
			"location":"Victoria",
			"jobtitle":"Open Source Developer",
			"printOff":true,
		},{
			"desc":"Twitter bot for signup, email+sms validate, and replay of conversations, for a client in the SEO Business. Tweet search code to pull out hundreds of thousands of tweets per target profile and store in database for further use. Webmail account checking code to confirm thousands accounts as working and to log them in with cookies.",
			"dates":"Nov 2018 - Jan 2019",
			"sortdate":"2019-01-01",
			"tech":"Node.js, Puppeteer, MySQL, Redis",
			"location":"Remote",
		},{
			"desc":"SEO link network building infrastructure targeting Status.net, Pligg and Wiki sites, with extensive use of captcha bypass services. System was creating tens of thousands of posts per day. Also developed SEO business administration/workflow software to direct and verify employee article writing tasks .",
			"dates":"2010 - 2012",
			"sortdate":"2012-01-01",
			"tech":"Perl, Python, MySQL",
			"location":"Remote",
		},{
			"desc":"Captcha solving game, where players were rewarded with XP and with levelup animations for correctly completing captchas, in order to enable a bot posting on 4chan's /b/ board",
			"dates":"Fall 2010",
			"sortdate":"2010-10-01",
			"tech":"Perl, HTML, Javascript, MySQL",
			"location":"Victoria",
		},{
			"desc":"Telephone based Interactive Voice Response (IVR) Bitcoin custodial wallet system using VoiP phone number. Customer could phone in and check balance, send and receive payments. Live payment notification possible.",
			"dates":"Early 2010",
			"sortdate":"2010-03-01",
			"tech":"Perl, Asterisk, Bitcoind",
			"github":"https://github.com/BladeMcCool/BitcoinIVR",
			"location":"Victoria",
			"jobtitle":"Open Source Developer",
		}]
	},{
		"company":"Telmediq/PerfectServe",
		"companydesc":"Clinical Communication and Collaboration",
		"location":"Victoria",
		"jobtitle":"Software Engineer",
		"desc":"Interactive SMS-based survey microservice for patient followup, web API implemented with Dnajgo/Python, making use of Twilio for SMS communication. Integrations with third party scheduling systems to coordinate and sync physician schedules with existing client IT infrastructure. Adding features to and fixing issues in various microservices throughout the organization.",
		"tech":"Django/Python, Golang, Kubernetes, Spinnaker, Postgres, Twilio",
		"daterange": "Oct 2019 - Present",
		"sortdate":"2021-08-15",
	},{
		"company":"Go2mobi",
		"companydesc":"Mobile Advertising Self-Serve DSP",
		"location":"Victoria",
		"jobtitle":"Senior Software Developer",
		"desc":"Built and maintained mobile advertising Real Time Bidder in Python, later transitioned to Golang. Handled 500,000 queries per second on a cluster of 15 servers. Also developed processes for ETL and reporting the hundreds of millions of records per day generated by the bidder. Rearchitected existing click tracking system for better performance.",
		"tech":"Golang, Python, Node.js, AWS, RabbitMQ, Redis, MySQL+Postgres",
		"daterange": "Nov 2012 - Feb 2017",
		"sortdate":"2017-02-01",
	},{
		"company":"Shrinking Planet Communications",
		"companydesc":"Content Management Systems and Web Application Development",
		"location":"Toronto, ON",
		"jobtitle":"Full Stack Developer",
		"daterange": "2002 - 2009",
		"sortdate":"2009-02-01",
		"desc":"Maintained existing CMS and Email broadcast systems written in Perl and being used by hundreds of clients. Improved performance of infrastructure through employing enhanced server efficiency tools like mod_perl under Apache. Built a web application tool kit which included a robust custom SQL abstraction ORM. Integrated with credit card processing providers like Moneris.",
		"tech":"Perl, Apache, MySQL, Javascript, CSS, HTML Templating"
	},{
		"company":"Glacier Digital",
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
		},{
			"desc":"Improved the machine-generated output of some y2k-era web tools to add additional server side (vbscript asp) and client side functionality related to a content management system that was being developed, as well as database table setup for localisation with different languages.",
			"dates":"1999",
			"sortdate":"1999-06-01",
			"tech":"VBScript, HTML",
			"location":"Remote",
			"jobtitle":"Web Developer"
		}]
	},{
		"company":"SunLife Financial",
		"companydesc":"Enterprise Application Development and Content Management Systems",
		"location":"Toronto, ON",
		"jobtitle":"Intern - Internet Technologies Group",
		"daterange": "Summer 2001",		
		"sortdate":"2001-06-01",
		"desc":"Diagrammed portions of the network infrastructure in the SunLife network using Visio 2000. Performed routine server maintenance (log rotation, disk space checking) of a small set of Solaris servers with the assistance of custom made scripts. Wrote a perl script to catalog the various internal web-services that were available in the intranet and present the results in a web interface.",
		"tech":"Perl, Oracle, Bash, Unix, Visio 2000"
	}],
	"education":[
		"Humber College (Toronto, 3 year Computer Programmer/Analyst Diploma, May 2002)",
		"CompTIA A+ (Computer Service Technician Certification, Toronto, 2000)",
		"White Oaks Secondary School (Oakville, OSSD, June 1999)",
	],
	"hobbies":[
		"Hiking",
		"Learning",
		"Property Development",
		"Japanese",
	],
	"jobs":[{
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
	}]
}