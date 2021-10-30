'use strict';

//////////////////////////
// VARIABLES
const logo = document.querySelector('.logo');
const linkHome = document.querySelector('.link-home');
const linkAbout = document.querySelector('.link-about');
const linkSkills = document.querySelector('.link-skills');
const linkProjects = document.querySelector('.link-projects');
const linkContact = document.querySelector('.link-contact');
const titleGreat = document.querySelector('.header__title--great');
const titleName = document.querySelector('.header__title--name');
const titleJob = document.querySelector('.header__title--job');
const headerBtn = document.querySelector('.header__btn');
const iconBar = document.querySelector('.nav__icon');
const navList = document.querySelector('.nav__list');
const progressBars = document.querySelectorAll('.skills__bar');
const skillsSeciton = document.querySelector('.skills');
const projectOne = document.querySelector('.project--1')
const projectTwo = document.querySelector('.project--2')
const projectThree = document.querySelector('.project--3')

//////////////////////////
// GSAP ANIMATIONS
gsap.from(logo, { opacity: 0, duration: 1, delay: .8, x: -30 });
gsap.from(linkHome, { opacity: 0, duration: 1, delay: .4, y: -30 });
gsap.from(linkAbout, { opacity: 0, duration: 1, delay: .5, y: -30 });
gsap.from(linkSkills, { opacity: 0, duration: 1, delay: .6, y: -30 });
gsap.from(linkProjects, { opacity: 0, duration: 1, delay: .7, y: -30 });
gsap.from(linkContact, { opacity: 0, duration: 1, delay: .8, y: -30 });
gsap.from(titleGreat, { opacity: 0, duration: 1, delay: .5, y: 30 });
gsap.from(titleName, { opacity: 0, duration: 1, delay: .6, y: 30 });
gsap.from(titleJob, { opacity: 0, duration: 1, delay: .7, y: 30 });
gsap.from(headerBtn, { opacity: 0, duration: 1, delay: .8, y: 30 });
gsap.from('.nav__icon--icon', { opacity: 0, duration: 1, delay: .8, x: 30 });

///////////////////////////////
// TOGGLE NAVIGATION BAR
function toggleNav() {
    navList.classList.toggle('nav__list--active');
}

iconBar.addEventListener('click', toggleNav);

//////////////////////////////
// PROGRESSBAR ANIMATION
function progressBar(entries) {
    const [ entry ] = entries;

    if(entry.isIntersecting) {
        progressBars.forEach(bar => {
            const { percent } = bar.dataset;
            bar.style.opacity = 1;
            bar.style.width = `${percent}%`;
        })
    }
}

const progressBarOptions = {
    root: null,
    threshold: .5,
}

const skillsObserver = new IntersectionObserver(progressBar, progressBarOptions);
skillsObserver.observe(skillsSeciton);

//////////////////////////////
// REVEAL SECTIONS
const sections = document.querySelectorAll('.section');

function revealSection(entries) {
    const [ entry ] = entries;

    if(entry.isIntersecting) {
        entry.target.classList.remove('section--hidden');
    }
}

const sectionOptions = {
    root: null,
    threshold: .3
}

const sectionObserver = new IntersectionObserver(revealSection, sectionOptions);

sections.forEach(section => {
    section.classList.add('section--hidden');
    sectionObserver.observe(section);
})

//////////////////////////////
// REVEAL PROJECT ITEM SECTIONS
const secitonProject = document.querySelector('#section--4')

function revealSectionProject(entries) {
    const [ entry ] = entries;

    if(entry.isIntersecting) {
        projectOne.classList.add('show');
        projectTwo.classList.add('show');
        projectThree.classList.add('show');
    }
}

const sectionProjectOptions = {
    root: null,
    threshold: .3
}

const sectionProjectObserver = new IntersectionObserver(revealSectionProject, sectionProjectOptions);
sectionProjectObserver.observe(secitonProject);

const jobEl = document.querySelectorAll('.job');
const texts = ['Front End Developer', 'UI/UX Designer', '.NET Developer '];
let arrIndex = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < texts[arrIndex].length) {
    jobEl.forEach(job => {
        job.textContent += texts[arrIndex].charAt(letterIndex);
    });
    letterIndex++;
    setTimeout(type, 200);
  } else {
    setTimeout(() => {
      setTimeout(erase, 100);
    }, 1000);
  }
}

function erase() {
  if (letterIndex > 0) {
    jobEl.forEach(job => {
        job.textContent = texts[arrIndex].substring(0, letterIndex - 1);
    });
    letterIndex--;
    setTimeout(erase, 100);
  } else {
    arrIndex++;
    if (arrIndex >= texts.length) arrIndex = 0;

    setTimeout(type, 200);
  }
}

type();