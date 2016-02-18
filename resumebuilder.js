var bio = {
    "name": "Anthony Jordan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "330-565-8450",
        "email": "Anthony.K.Jordan@icloud.com",
        "github": "A-Jordan",
        "twitter": "@brotesque",
        "location": "Austintown"
    },
    "welcomeMessage": "Hello World!",
    "skills": [
        "HTML", "CSS", "JavaScript", "Programming"
    ],
    "bioPic": "images/face.jpg"
};

var role = "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var name = "Anthony Jordan";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedbioMobile);

var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedbioEmail);

var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedbioGithub);

var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedbioTwitter);

var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedbioLocation);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMessage);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedbioMobile);

var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedbioEmail);

var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedbioGithub);

var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedbioTwitter);

var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedbioLocation);

var education = {
    "schools": [{
        "name": "Bullitt Central High School",
        "location": "Shepherdsville, KY",
        "degree": "High School Diploma",
        "dates": "2006-2010",
        "url": "http://www.bullittschools.org/1/Home",
        "major": "Required"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": 2016,
        "url": "http://www.udacity.com"
    }]
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);

    }
    for (onlinecourse in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);

        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);

        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").prepend(formattedTitleSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].dates);
        $(".education-entry:last").prepend(formattedDates);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);
        $(".education-entry:last").prepend(formattedUrl);
    }
};

education.display();

var work = {
    "jobs": [{
        "employer": "AT&T",
        "title": "Customer Service Advisor",
        "dates": "August 2015 - Current",
        "location": "Boardman, Ohio",
        "description": "Answer incoming customer phone calls."
    }, {
        "employer": "Geek Squad",
        "title": "Data Security CIA",
        "dates": "June 2014 - June 2015",
        "location": "Brooks, Kentucky",
        "description": "Collect client data, document and store client data."
    }]
};

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

var projects = {
    "projects": [{
        "title": "About Me",
        "dates": "2015",
        "description": "Website made to describe who I am as a person.",
        "images": [
            "https://placeimg.com/300/300/tech",
            "https://placeimg.com/300/300/tech"
        ]
    }]
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
