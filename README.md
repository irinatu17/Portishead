# Portishead 
The live website can be viewed [here](https://irinatu17.github.io/Portishead/)  
<img src="https://i.ibb.co/Jc9CnX9/home-page.png" alt="home page mockup" target="_blank" rel="noopener" width="850">
   
1st milestone project: User-Centric Frontend Development - [Code Institute](https://codeinstitute.net/) assignment project.

This is the website of the British music band "Portishead" for fans and potentials fans. It contains information about the band, as well as their photos, videos and audio.
In addition, the website gives the opportunity to contact Portishead's management, to be aware of the latest news and tours and it provides the links for following Portishead on the social media.

See Portishead's offical website [here](https://www.portishead.co.uk/)

---


## Table of Contents
1. [**UX**](#ux)
    - [User Stories](#user-stories)
    - [Design](#design)
2. [**Technologies**](#technologies)
    - [**Languages**](#languages)
    - [**Libraries and Frameworks**](#libraries-and-frameworks)
    - [**Tools**](#tools)
3. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)
4. [**Testing**](#testing)
5. [**Deployment**](#deployment)
6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
    - [**Acknowledgements**](#acknowledgements)
7. [**Disclaimer**](#disclaimer)

---

## UX
### User Stories
- As a user, I expect to access the website from any device, so that I can use the website anytime and anywhere.
- As a user, I expect to easily navigate the website, so that I can quickly find what I'm looking for.
- As a user, I want to find and read more information about the band and band members, the band's history.
- As a user, I want to check if can see the band play live in my city and view their tours schedule.
- As a user, I want to have a convenient access all the music that I can listen to or buy their album.
- As a user, I want to be able to book the band for my private event.
- As a user, I want to subscribe to a newsletter to be aware of the latest news.
- As a user,  I expect to view and download photos of the band.
- As a user, I want to be able to contact the Portishead managment team.
- As a user, I want to easily find the links to their social media accounts.

### Design
The goal in design was to create a website that is overall user friendly, has a modern feel with emphasis on providing information about the music band in a readable and eye-catching way.
- **Framework** [Bootstrap](https://www.bootstrapcdn.com/) was chosen for this project for its modern interface, ease of use and ability to be easily customized. It is used for creating features such as navbar, forms, modals, as well as for the layout.
- **Color scheme** : The **dark-grey** and **black** colours were chosen to create and reflect the mood and atmosphere of psychedelic and deep trip-hop music. As well as that, the **dark-red** colour was chosen to highlight some details and to catch the user’s attention (for CTA buttons, dividers, music section background).    
 Different shades of grey colour and shadows allow us to create clean and neat backgrounds and volume effect accross the website.   
 - **Typography**:
There are three fonts used across the project that I find a good combination: simple and modern [PT+Sans](https://fonts.google.com/specimen/PT+Sans) used as a primary font, decorative and unusual [Indie+Flower](https://fonts.google.com/specimen/Indie+Flower) and stylish [Bitter](https://fonts.google.com/specimen/Bitter).

## Technologies
### Languages
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 
- [JavaScript](https://www.javascript.com/)

### Libraries and Frameworks
- [Bootstrap](https://www.bootstrapcdn.com/) - as the front-end framework for layout and design.
- [Google Fonts](https://fonts.google.com/) - to import fonts.
- [FontAwesome](https://fontawesome.com/) - to provide icons used across the project. 
- [Fancybox](https://fancyapps.com/fancybox/3/) - used for Gallery section.

### Tools
- [GitPod](https://www.gitpod.io/) - an online IDE for developing this project.
- [Git](https://git-scm.com/) - for version control.
- [GitHub](https://git-scm.com/) - for remotely storing project's code.
- [TinyPng](https://tinypng.com/) - for compressing images.
- [GIMP2](https://www.gimp.org/) - for editing and resizing images.
- [ImgBB](https://imgbb.com/) - to host images used in README.

## Features   
### Existing Features  
The “SignUp” modal allows users to sign up in order to get the latest news by e-mail, by filling out the form and submitting it. As well as that, the “Enquire” modal allows users to contact the Portishead’s management by filling out the form.
The navbar stays collapsed on the mobile devices, that was achieved by including extra JavaScript function using the Bootstrap.

### Features Left to Implement
In the future, I would like to add new video clips and audio materials when they will be finished and published as well as some new photos from the coming concerts in order to create a more comprehensive ‘Media' section. I would also like to renew the information about the Portishead’s tours while they will be set up.

## Testing
The fans and potential fans user story achieved the intended outcome of providing them with a showcase of Portishead's music life. On the home section, they can see the phrase from one of the band's songs and see the photo from the Portishead's concert to get the first impression about them. Next, users can see the separate band's members pictures as well as to read information about them by hovering over the images.  They are also able to view my social media profiles via clicking on the icons in the footer. The users can fill out the SignUp form as well as the Enquire form in order to sign up or invite Portishead for their own party respectively. Considering the media section, fans can listen to Portishead's music using the Spotify links in the music section. They are also able to watch band's videos by clicking on the YouTube links in the video section.

If you try to submit the SignUp or Enquire form with an invalid email address, there will be an error noting the invalid email address. Furthermore, the 'required' attribute is added to the 'name,' 'email,' ‘password’ and 'repeat password' fields, so if those fields are not filled in, the form will not submit. If all field are valid, the page will reload. 
All links in the footer will open in a new tab using 'target="_blank". All links have been manually tested to ensure that they are pointing to the correct destination.

This site was tested across multiple browsers (Chrome, Internet Explorer, FireFox) and on multiple mobile devices (iPhone 5, 7, iPad, Samsung Galaxy and Sony Xperia) to ensure compatibility and responsiveness. During the testing phase, I realized that in the gallery section of media page pictures were collapsing, covering the following ones. To fix this, I applied col-md-6 col-lg-3 property value to the div to make it properly responsive. 

## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order to the site to deploy correctly on GitHub pages, the landing page must be named index.html.
<div align="right">
    <b><a href="#table-of-contents">↥ Back To Top</a></b>
</div>

---

## Credits
### Content
- The text for section “About” was copied from the Wikipedia article [“Portishead(band)”](https://en.wikipedia.org/wiki/Portishead_(band)).  

### Media
- Portishead "P" logo for **Favicon**: ["Wikipedia article"](https://commons.wikimedia.org/wiki/File:Portishead.svg)   
- **Home page** background:  [Unsplash](https://unsplash.com/)
- Music section **albums** images are taken from Amazon: [Dummy](https://images-na.ssl-images-amazon.com/images/I/713j89t%2BDkL._SX522_.jpg), [Portishead](https://images-na.ssl-images-amazon.com/images/I/71k1xE7ELoL._SX522_.jpg), [Third](https://images-na.ssl-images-amazon.com/images/I/314g8%2BGMLEL.jpg). 
- All Portishead band's images (used in the Gallery and About sections and as a background of Tours section) were obtained mostly from [Portishead Official Instagram](https://www.instagram.com/portisheadmusic/), and also from [Discogs](https://www.discogs.com/artist/2774-Portishead).

### Code
-  Gallery section was built using [Fancybox](https://fancyapps.com/fancybox/3/).
-  Scroll down button animation is taken and modified from [CodePen Demo: CSS scroll down button](https://codepen.io/nxworld/pen/OyRrGy)
-  Hover blur effect on musicians images is taken and modified from the Natours project of [Advanced CSS and SASS: Flexbox, Grid, Animations and More! by Jonas Schmedtmann](https://www.udemy.com/course/advanced-css-and-sass/)
### Acknowledgements
 I would like to thank everyone who has helped me throughout the development of this project: my mentor [Rahul Lakhanpal](https://www.rahullakhanpal.in/),
 Code Institute tutors, fellow students, my friends and my family for the time, assistance and support!

---

## Disclaimer
This site is made for **educational purposes** only.   

<div align="right">
    <b><a href="#table-of-contents">↥ Back To Top</a></b>
</div>

