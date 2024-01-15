/*
    Home Section
*/
const homeSectionData = {
  myDetails: {
    name: "Subodh Kumar",
    intro: [
      "Associate Consultant at Globallogic!!",
      "Frontend Developer by profession!!",
      "Problem Solver by Passion!!",
    ],
    contact: {
      call: 8076561176,
    },
    socialHandles: {
      linkedin: "https://www.linkedin.com/in/subodh-kr/",
      whatsapp: "https://wa.me/919449210852",
      github: "https://github.com/subodh-kumar1",
      mail: "mailto:subodh.subodhkumar1@gmail.com",
    },
  },
};

const iconClasses = {
  linkedin: "fa fa-linkedin",
  mail: "fa fa-envelope-o",
  whatsapp: "fa fa-whatsapp",
  github: "fa fa-github",
};
const getName = (name) => {
  const nameTag = document.createElement("h1");
  nameTag.setAttribute("class", "name");
  nameTag.append(name);
  return nameTag;
};

const getIntro = () => {
  const iAm = document.createElement("div");
  iAm.append("I am ");
  iAm.setAttribute("class", "iam");
  const nameTag = document.createElement("h3");
  nameTag.setAttribute("class", "intro");
  iAm.append(nameTag);
  return iAm;
};
const getLink = (content, type) => {
  const linkTag = document.createElement("a");
  linkTag.setAttribute("href", content);
  linkTag.setAttribute("target", "_blank");

  const icon = document.createElement("i");
  icon.setAttribute("class", iconClasses[type]);

  linkTag.append(icon);
  return linkTag;
};
const getSocialLinks = (socialHandles) => {
  const { linkedin, whatsapp, github, mail } = socialHandles;
  const socialTag = document.createElement("div");
  socialTag.setAttribute("class", "social-links");
  socialTag.append(getLink(linkedin, "linkedin"));
  socialTag.append(getLink(whatsapp, "whatsapp"));
  socialTag.append(getLink(github, "github"));
  socialTag.append(getLink(mail, "mail"));
  return socialTag;
};
const getFooterContent = (number) => {
  const footerContent = document.createElement("div");
  footerContent.setAttribute("class", "footer-content");
  footerContent.innerHTML = `<div>Call me at ${number}</div><div>All Rights reserved &copy; 2023</div>`;
  return footerContent;
};
const createHomeSection = () => {
  const home = document.getElementById("homesection");
  //home.innerHTML = `<pre>${JSON.stringify(homeSectionData, undefined, 4)}</pre>`;
  const name = getName(homeSectionData?.myDetails?.name);
  const nameTitle = getIntro();
  const socialLinks = getSocialLinks(homeSectionData?.myDetails?.socialHandles);
  const footerContent = getFooterContent(
    homeSectionData?.myDetails?.contact?.call
  );
  home.append(name);
  home.append(nameTitle);
  home.append(socialLinks);
  const footer = document.getElementById("footer");
  footer.append(footerContent);
  var typed = new Typed(".intro", {
    strings: homeSectionData?.myDetails?.intro,
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 30,
  });
};

createHomeSection();

/*
    Experience Section
*/

const experienceData = [
  {
    companyName: "GlobalLogic India",
    companyUrl: "https://globallogic.com",
    duration: "Nov 2021 - Present",
    location: "Noida, Uttar Pradesh, India",
    position: "Associate Consultant Engineering",
    media:
      "https://media.licdn.com/dms/image/C560BAQGkQhfYVuKB6Q/company-logo_100_100/0/1587638526588?e=1687392000&v=beta&t=MmhdfbL6Dpzau-xzISpig_y9eTLCSEl-knVSLVMd1yA",
    skills: ["React", "React Hooks", "Redux"],
  },
  {
    companyName: "ZeMoSo Technologies",
    companyUrl: "https://www.zemosolabs.com/",
    duration: "Mar 2021 - Oct 2021",
    location: "Hyderabad, Telangana, India",
    position: "Senior Software Engineer 2",
    media:
      "https://media.licdn.com/dms/image/C560BAQEGsbroYsa3yg/company-logo_100_100/0/1519902907612?e=1687392000&v=beta&t=Ubz7e3Wdq4Ot6BS535XO_JtGGOfI2dsBZFeVrKm0aOI",
    skills: ["React", "React Hooks", "Java Springboot"],
  },
  {
    companyName: "athenahealth",
    companyUrl: "https://www.athenahealth.com/",
    duration: "Oct 2019 - Mar 2021",
    location: "Chennai, Tamil Nadu, India",
    position: "Member of Technical Staff",
    media:
      "https://media.licdn.com/dms/image/C4D0BAQEks9TxjFdIag/company-logo_100_100/0/1632748749990?e=1687392000&v=beta&t=rljCKH-Tab4uRNUTZ0645Om5j5jAC7Jrxugqi-tTZ8A",
    skills: ["React", "React Hooks", "Perl Script", "Javascript"],
  },
  {
    companyName: "HCL Technologies",
    companyUrl: "https://www.hcltech.com",
    duration: "Jun 2019 - Oct 2019",
    location: "Chennai, Tamil Nadu, India",
    position: "Lead Engineer",
    media:
      "https://media.licdn.com/dms/image/C4D0BAQF-RIoeeMTMKQ/company-logo_100_100/0/1664197007563?e=1687392000&v=beta&t=KtYp2Ebk8VSkAhnD0cHtGT-njpU0e27Rr2rrz-bn_C4",
    skills: ["Core Java"],
  },
  {
    companyName: "Temenos India",
    companyUrl: "https://www.temenos.com/",
    duration: "Feb 2019 - May 2019",
    location: "Chennai, Tamil Nadu, India",
    position: "Software Engineer",
    media:
      "https://media.licdn.com/dms/image/C560BAQFf6zLYVupRGQ/company-logo_100_100/0/1652860743754?e=1687392000&v=beta&t=JYhfDZ7lwRUjFlTHIDpvkUozAEVLSnYTtGcvOsPdDQA",
    skills: ["T24"],
  },
  {
    companyName: "TPF Software India",
    companyUrl: "https://tpfsoftware.com/",
    duration: "Nov 2015 - Jan 2019",
    location: "Chennai, Tamil Nadu, India",
    position: "Senior Software Engineer",
    media:
      "https://media.licdn.com/dms/image/C510BAQHJlyzY_5caWw/company-logo_100_100/0/1552309762428?e=1687392000&v=beta&t=jp0zakJ7yTUto-GGpW30LGHlHrA9nXMLnfoZoqC87RA",
    skills: ["Java", "Springboot", "TPF"],
  },
];

const getCompany = (companyName, media, companyUrl) => {
  const companyParentTag = document.createElement("div");
  const companyTag = document.createElement("div");
  companyParentTag.setAttribute("class", "companyparent");
  const companyLogoTag = document.createElement("img");
  companyLogoTag.setAttribute("src", media);
  companyLogoTag.setAttribute("alt", companyName);
  companyLogoTag.setAttribute("class", "companylogo");
  companyLogoTag.setAttribute("width", "48");
  companyLogoTag.setAttribute("height", "48");
  companyTag.append(companyName);
  companyLogoTag.addEventListener("click", () => {
    window.open(companyUrl, "_blank");
  });
  companyParentTag.append(companyLogoTag);
  companyParentTag.append(companyTag);
  return companyParentTag;
};

const getWorkDetails = (duration, location, position, skills) => {
  const workDetailsContainer = document.createElement("div");
  const durationElement = document.createElement("div");
  const locationElement = document.createElement("div");
  const positionElement = document.createElement("div");

  workDetailsContainer.setAttribute("class", "workdetails");
  durationElement.setAttribute("class", "duration");
  locationElement.setAttribute("class", "location");
  positionElement.setAttribute("class", "position");

  positionElement.append(position);
  locationElement.append(location);
  durationElement.append(duration);

  const skillList = document.createElement("div");
  skillList.setAttribute("class", "skilllist");
  skills.forEach((skill) => {
    const skillListItem = document.createElement("div");
    skillListItem.setAttribute("class", "skilllistitem");
    skillListItem.append(skill);
    skillList.append(skillListItem);
  });

  workDetailsContainer.append(positionElement);
  workDetailsContainer.append(durationElement);
  workDetailsContainer.append(locationElement);
  workDetailsContainer.append(skillList);

  return workDetailsContainer;
};
const getExperience = (
  { companyName, duration, location, position, skills, companyUrl },
  companyLogo
) => {
  const experienceTag = document.createElement("div");
  experienceTag.setAttribute("class", "experienceparent");
  experienceTag.append(getCompany(companyName, companyLogo, companyUrl));
  experienceTag.append(getWorkDetails(duration, location, position, skills));
  return experienceTag;
};

const createExperienceSection = () => {
  const experience = document.getElementById("experiencesection");
  experienceData.forEach((experienceCompany, idx) => {
    const currentExperience = getExperience(
      experienceCompany,
      `./assets/joblogo${idx}.jpg`
    );
    experience.append(currentExperience);
  });
  // experience.innerHTML = "Hello";
};

createExperienceSection();

/*
    Project Section
*/

// const skills = [
//   { src: "./assets/java.png", alt: "java" },
//   { src: "./assets/react.png", alt: "react" },
//   { src: "./assets/html-5.png", alt: "html" },
//   { src: "./assets/css-3.png", alt: "css" },
//   { src: "./assets/java-script.png", alt: "js" },
//   { src: "./assets/code.png", alt: "coding" },
//   { src: "./assets/cloud-data.png", alt: "cloud" },
//   { src: "./assets/algorithm.png", alt: "algorithms" },
// ];

// const createSkillsSection = () => {
//   const skillsSsection = document.getElementById("skillsssection");
//   const skillsDiv = document.createElement("div");
//   skillsDiv.setAttribute("class", "skillsdiv");

//   skills.forEach((skill) => {
//     const div = document.createElement("div");
//     div.setAttribute("class", "skilldiv");
//     const img = document.createElement("img");
//     img.setAttribute("src", skill?.src);
//     img.setAttribute("alt", skill?.alt);
//     img.setAttribute("width", 250);
//     div.append(img);
//     skillsDiv.append(div);
//   });
//   skillsSsection.append(skillsDiv);
// };
// createSkillsSection();
