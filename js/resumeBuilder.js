var bio = {
 "name" : "Graclyn Braide",
 "role" : "Web Developer",
 "contacts": {
      "mobile": "xxx.xxx.xxxx",
      "email": "gbraide@mail.usf.edu",
      "github": "gbraide",
      "twitter": "N/A",
      "location": "McLean, VA"
 },
  "welcomeMessage": "Hello! Thanks for stop by :)",
  "skills": ["HTML", "Twitter Bootstrap", "jQuery", "AngularJS", "D3", "Leaflet"],
  "bioPic": "images/fry.jpg"
}
function displayBio() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
    if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function (skill){
            var formattedSkills=HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
		});
    }
}

var education = {
"schools":[
    {
        "name": "University of South Florida",
        "location": "Tampa, FL",
        "degree": "Bachelors",
        "major": "Computer Science",
        "date": "2013"
    },
    {
        "name": "St. Petersburg College",
        "location": "St. Petersburg, FL",
        "degree": "Associates",
        "major": "General Studies",
        "date": "2008"
    }
],
"onlineCourses": [
    {
        "title": "Front-End Web Developer",
        "School": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/course/nd001"
    }
]}
function displayEducation() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation= HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append (formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedMajor= HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append (formattedMajor);
        var formattedDates= HTMLschoolDates.replace("%data%", education.schools[school].date);
        $(".education-entry:last").append (formattedDates);
    }
    $("#education").append(HTMLonlineClasses);
    for(courses in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle= HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
        var formattedName=HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
        var formattedTitleName= formattedTitle + formattedName;
        $(".education-entry:last").append(formattedTitleName);
        var formattedDates=HTMLonlineDates.replace("%data%", education.onlineCourses[courses].date);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl=HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
        $(".education-entry:last").append(formattedUrl);
    }
}

var work = {
"jobs": [
    {
        "employer": "Booz Allen Hamilton",
        "title": "Software Engineer",
        "location": "McLean, VA",
        "dates": "February 2014 - Present",
        "description": "Develop and implement web applications based off of the clients needs and wants"
    },
    {
        "employer": "AT&T",
        "title": "Billing Manager",
        "location": "Jacksonville, FL",
        "dates": "July 2013 - February 2014",
        "description": "Directed and managed a team of customer service representatives within the AT&T large business"
    },
    {
        "employer": "AT&T",
        "title": "Tier 1 Tech Support",
        "location": "Tampa, FL",
        "dates": "May 2011 - June 2013",
        "description": "Provided technical support to AT&T customers  who use the AT&T Global Network Client"
    }
]}
function displayWork(){
    for(job in work.jobs){
        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);

        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
            //selects every object with the class work-entry, and appends formattedEmployerTitle to the last element of the class
            $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDesc);
    }
}

var projects ={
"projects": [
    {
        "title": "Interactive Resume",
        "dates": "2015",
        "description": "An interactive resume that includes a google map of place I've lived and worked."
    },
    {
        "title": "ParkEasy",
        "dates": "2014",
        "description": "Beta android app designed to simplify the time spent looking for parking locations during peak hours."
    },
    {
        "title": "eRoute",
        "dates": "2012",
        "description": "Beta android application designed to provide users with a safe route to the nearest shelter in the event of a natural disaster. Implementation required the Google Map API, Facebook API, local rss news feeds, NoSQL database, and brute force testing using an android device."
    }
]}
function displayProjects () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates=  HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription= HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
    }
}

displayBio();
displayWork();
displayProjects();
displayEducation();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});
$("#mapDiv").append(googleMap);