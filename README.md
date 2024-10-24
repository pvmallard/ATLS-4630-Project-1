# ATLS-4630-Project-1
Project 1 for ATLS 4630, Mallory Prescott

<h2>Milestone 1</h2>
<h3>Project Proposal</h3>
<h4>Overall description of the project</h4>
The purpose of this project will be to create a functional and dynamic portfolio website draft. I want to use the <a href="https://gsap.com/about/">GSAP library</a> to make my website fun and interesting. The inspiration behind it is my current job hunting, I need a decent portfolio website, unlike those I already have, to show to employers and others to demonstrate my skills and work. I'm unhappy with all my drafts so I want to use this as an opportunity to make a site that is dynamic and creative. Even if I have to scrap the site entirely in the future, I want to use this as a draft, a practice exercise, and to utilize new libraries. The intended audience is employers and hiring managers, or anyone else that I would want to show examples of my work to. 

<h4>Wireframe</h4>
<img src="https://github.com/user-attachments/assets/16433037-2c11-46e1-8d22-080dcf0ff770" alt="simple wireframe for portfolio" width="400px"></p>
<p>
  Here is a simple sketched-out wireframe depicting setups for my home page, about page, work page, etc. I would have liked to have developed a concrete wireframe in Figma, 
  but I figured I could save time by just prototyping it. 
</p>

<h4>Details</h4>
<p>I'm going to use javascript to make elements dynamic, to implement animations, and maybe add some interesting graphs or data tools. More likely, however, I'll just be focusing on animations to make my portfolio look nice. If I have the time and ability, however, I want to try to use js to import and export data, adding it to the HTML like that rather than having it manually in the file.</p>
<p>I'll be using the GSAP library to add smooth animations to the data on the website, mostly on the home page. I'm not sure about the specific uses of them right now, however, this is just because I have yet to play around with this library and decide how I want to use it. Once I experiment with it, I'll start adding it to maybe have text slide in or add transitions. </p>
<p>Since this is just a portfolio profile website, the information I'll be using is just my past projects to supply the information. Of course, I'll still be referencing the libraries' websites for ways to implement them, troubleshooting, and combinations. I'll likely also be referencing W3C, validator.nu, and other sites to check for accessibility since I want my portfolio to use universal design principles.</p>
<p>To accommodate for different screens, I'll likely use either js or CSS to sample the user's screen size and use that information on how to set up the webpage. I'll likely end up reformating the website or display depending on if it's accessed on a mobile device or computer. Additionally, maybe I could do the same to change the colors of the page depending on whether the browser is in dark mode or not. </p>

<h3>Goals</h3>
<h4>Prototyping</h4>
<ul>
  <li>I want to have the outline of each page set up for my first prototype. The focus will be having things ready for information, to make sure it works well</li>
  <li>Once my outline is complete, I'll start experimenting with the items I import from the GSAP library. I want to have a few uses of its elements on my home page and hopefully a few others scattered elsewhere. This main portion will be making the library work and the page look and feel good</li>
  <li>I'll likely incorporate some css as I go, particularly for the general page setup, however, this is less important to me than the library implementation, functional javascript, and HTML outline. Therefore, I will focus on the full implementation of css last</li>
</ul>

<h4>Minimum viable product</h4>
<ul>
  <li>Clean, appealing home page that utilizes multiple (at least 3-4) gsap elements to create flow and add character</li>
  <li>About me page with 1 or 2 gsap elements</li>
  <li>A few simple outline pages that might use gsap elements: work, resume, individual project page</li>
  <li>My minimum viable product will be a fluid, functional, and engaging profile home page that is accessible and easy to navigate. My portfolio should at the very least communicate the information it needs to, so it should have enough information on me and some of my projects. My home page is what I want to focus on the most but I want to have an appealing and functional version of each other type of page that I can adapt upon later: about me, work, resume, and individual project page. </li>
</ul>

<h4>Stretch goals</h4>
<ul>
  <li>Have a separate database (even if its just another js or json file) to store the data and have it imported to the site</li>
  <li>Have the separate database be Firebase, learn to use and implement the library to improve my site</li>
  <li>Much later, use this as a base to recreate the portfolio in React</li>
</ul>

<h2>Milestone 2</h2>
<h3>Progress</h3>
<video auto width="320" height="240">
  <source src="Portfolio\vid\milestone-2.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> 
<h4>Process</h4>
<p>My process thus far has been properly installing and experimenting with the GSAP library. I try small elements at a time and try to see how they are implemented and what I can do to them to enhance my page. Unfortunately, the free effects available in the library aren't quite as expansive as I thought. I'm sure with practice and knowledge, the potential for these tools can be far greater. Given my current timeframe and skills with the library, however, I think I will have to shrink and adapt to only what I know I am capable of utilizing within the timeframe.I've only be focusing on the homepage, to simplify my process of experimentation and such. </p>
<h4>What's Completed and What's Changed</h4>
<p>So far, I'm not as far along as I'd like to be. I have the basics set up for the heading of the site, but I'm lacking information and a formal setup or understanding of how I will tackle each element I want to include. Right now I'm working on implementing parallax or scrolling effects, though this, of course, will require me to add elements to scroll through.</p>
<p>Additionally I've changed the format of my navigation. Before, the plan was to just have a vertical list of my tabs, this is sort of still the case, but now it is hidden by a button which pulls down a nav overlay that I can customize later. I hope to add GSAP to this as well, but for now it functions well enough. There is still much I have to do.</p>
<h3>Moving Forward</h3>
<p>My main focus for the next milestone will be to work on responsive design and the layout for various screen sizes. This will include positioning and starting to get a more firm layout for my assets. I also want to start populating my site with information: works, images, links, reports, my resume, and the like. As this is the main purpose of a profile website, I want to have the information so I can work on the styling even if I end up changing the contents in the future. Additionally, I'm hoping to play around with a few more GSAP effects now that I'm more familiar with the library. Hopefully, by Milestone 3 I will have a firm draft of a profile page.</p>

<h2>Milestone 3</h2>
<h3>Progress</h3>
<p>For one I implemented a new library specifically for a parallax scrolling effect: locomotive. It's been helpful for getting that delayed scroll affect and adding more movement to my site. </p>