# Portishead Official Website
First milestone project: User-Centric Frontend Development - Code Institute.

This is the website of the British music band "Portishead". It contains information about the band, as well as their photos, videos and audio.
In addition, the website gives the opportunity to contact Portishead's management, to be aware of the latest news and tours and it provides the links for following Portishead on the social media.

## UX
My goal in design was to make it simple to access information on the site. The dark-grey colours were chosen to create the mood and atmosphere of psychedelic, deep and depressive trip-hop music. As well as that, the dark-red scheme was chosen to highlight some details and to catch the user’s attention. 

For fans and potential fans of Portishead, I wanted to provide them a brief overview about the music band. Clicking the “Read more” button users will be able to get the full information about the band’s history. In addition to this, in the “About” section I’ve provide some interesting facts about each band’s members, as well as their photos. The section “Media” includes photos, audio and video clips of the band, giving a quick access to their back catalogue. In order to showcase their availability to perform at events, the “Tours” section contains the enquiry form for those, who would like to invite the band to their events or organise a concert. This section also provides the information about the Portishead’s tours. For the ease of access and opportunity to follow Portishead on the social media, the links to Facebook, Instagram, Twitter and YouTube were included in the website.

## Technologies
1.	HTML
2.	CSS
3.	Bootstrap (4.3.x)

## Features
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

## Credits

### Content
The text for section “About” was copied from the Wikipedia article [“Portishead(band)”](https://en.wikipedia.org/wiki/Portishead_(band)). 
### Media
The photos used in this site were obtained from different websites: Discogs.com(https://www.discogs.com/artist/2774-Portishead), IMDB.com(https://www.imdb.com/name/nm1011954/mediaviewer/rm4271994368), BBC.co.uk (https://www.bbc.co.uk/music/artists/8f6bd1e4-fbe1-4f50-aa9b-94c450ec0f11).
### Acknowledgements
The hover over transition function(section ‘About’) was found through this tutorial [here](https://css-tricks.com/a-really-nice-way-to-handle-popup-information/).

I also received inspiration for this project from my mentor’s [Rahul Lakhanpal](https://www.rahullakhanpal.in/) works. 

**This is for educational use only.**

