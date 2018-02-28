/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio={
 	"name": "Sanjay Sharma",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "979-951-7497",
 		"email": "sanjaykai.1994@gmail.com",
 		"github": "kaisanjay",
 		"location": "india"
 	},
 	"welcomeMessage": "hey hello how u doing?",
 	"skills": ["Python", "HTML", "CSS", "JavaScript"],
 	"bioPic": "images/Untitled.jpg"
 };

 var education = {
 	"school": [
 	   {
 	   	"name": "Goverment Engineering College, Bikaner",
 	   	"city": "Bikaner",
 	   	"degree": "Bachelor of Technology",
 	   	"major": ["Electrical"],
 	   	"date": 2017,
 	   	"url": "http://example.com"

 	   }],
 	   "onlineCourses": [
 	       {
 	       	"title": "Front-End Web Developer Nanodegree",
 	       	"school": "Udacity",
 	       	"date": 2017,
 	       	"url": "http://www.udacity.com"
 	       }]
 };

var work = {
	"jobs": [
	{
		"employer": "NFI",
		"title": "R&D technician",
		"location": "Miramar, Fl",
		"dates": "2013 - Future",
		"description" : "To support RD team members as defined by RD Manager"
	},
	{
		"employer": "WSI Internet Consulting",
		"title": "Digital Marketing Consultant",
		"location": "West Palm Beach, Fl",
		"dates": "2011 - 2013",
		"description" : "Formulate Digital Marketing strategies for client organizations"
	}
	]
};


var projects = {
	"projects": [
		{
		"title": "Project 1 : Web Crawler ",
		"dates": "2017",
		"description": "built a Web-Crawler by using Python",
		/*"images": [
			"http...",
			"http   "
	]*/
	},{
		"title": "Project 2 : Online Portfolio ",
		"dates": "2017",
		"description": "built this online portfolio by using HTML,CSS and JavaScript",
		/*"images": [
			"http...",
			"http   "
	]*/
	}
]
};







//var formattedName= HTMLheaderName.replace("%data%", bio.name);

//
//filling the bio

	


$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
$("#topContacts").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").prepend(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));





  




  // skill started

/* if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill= HTMLskills.replace("%data%",bio.skills[0]);

	$("#skills").append(formattedSkill);

	formattedSkill= HTMLskills.replace("%data%",bio.skills[1]);

	$("#skills").append(formattedSkill);
	formattedSkill= HTMLskills.replace("%data%",bio.skills[2]);

	$("#skills").append(formattedSkill);
	formattedSkill= HTMLskills.replace("%data%",bio.skills[3]);

	$("#skills").append(formattedSkill);


};

*/

if(bio.skills.length > 0) {

$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
};




// there is a no work experience for me
/*
 
function displayWork() {
	
for (job in work.jobs) {
 $("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

var formattedEmployerTitle = formattedEmployer + formattedTitle;

$(".work-entry:last").append(formattedEmployerTitle);

var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);


var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);

}


};


displayWork();

*/





$(document).click(function(loc) {   
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


function educationSchool(){
	for (educationtime in education.school){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[educationtime].name);
		

		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.school[educationtime].degree);
		
		var formattedSchoolDegree = formattedSchoolName + formattedschoolDegree;
		$(".education-entry").append(formattedSchoolDegree);

		var formattedschoolDate = HTMLschoolDates.replace("%data%", education.school[educationtime].date);
		$(".education-entry").append(formattedschoolDate);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[educationtime].city);
		$(".education-entry").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[educationtime].major);
		$(".education-entry").append(formattedMajor);
	}

	

}

educationSchool();



for (educationtime in education.onlineCourses){
		$("#education").append(HTMLonlineClasses);

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[educationtime].title);
		$(".education-entry").append(formattedonlineTitle);



	}





function displayProjects() {
	for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedProjectDescription);
	}


}

displayProjects();






