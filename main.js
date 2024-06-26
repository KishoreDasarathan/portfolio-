// edit contain 1

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const project = document.querySelector('#project')
const experience = document.querySelector('#experience')

// edit contain 2
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectContent = document.querySelector('#project-content')
const experienceContent = document.querySelector('#experience-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#C70039')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 60,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#C70039')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

// edit contain 3
project.addEventListener('click', () => {
  const ProjectBox = new WinBox({
    title: 'My_project',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 50,
    mount: projectContent,
    onfocus: function () {
      this.setBackground('#C70039')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

experience.addEventListener('click', () => {
  const experienceBox = new WinBox({
    title: 'experience',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 60,
    mount: experienceContent,
    onfocus: function () {
      this.setBackground('#C70039')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


