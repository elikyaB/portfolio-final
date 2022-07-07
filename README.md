# Developer Portfolio
As a sort of rite of passage, I decided to have my portfolio not simply show my projects, but to be itself indicative as to my technical capability. In the process, I came to understand my own process.

## The Process

### Programming
Firstly, I didn't want to simply follow a template, but I still needed concrete bullet points as to what a good portfolio entailed. So I surveyed several ambitious developer portfolios, stealing bits and pieces of what I thought were good features. The essence of my research boiled down the archetypical portfolio to 4 parts: 

- a landing page, 
- a sample of projects, 
- a summation of skills or experiences, 
- and a more personal about / contact page, usually with a call to action or social media links.

Besides those, I also wanted to leave space for extending the content of the site, such as hosting a personal blog or even other projects.

And lastly, there was the visual design component. The idea for the rotating text on the landing page was quite honestly born from a bit of ignorance of the meanings of the terms, later retconned into my understanding of my process. As for the rest of the features, those were often inspired by my survey, as can be seen below:

- example 1
- example 2

### Architecture
With effectively a list of my own client requirements in hand, I had to address the question of how exactly I was going to build it. My overriding philosophy was to build this site in a way that I could re-use for actual clients. Eventually I settled on:

- Sveltekit - I enjoyed my time using Svelte in [this todo list project](), so naturally I wanted to try my hand at using its meta-framework to take advantage of server-side rendering for the performance of the front page while having the ability to use static site generation for the eventual blog feature. Svelte's compiler approach also stood out to me because of my African background - it seemed ideal for underpowered machines and weaker internet connections.
- Contentful - no longer needing a backend, I could stick to a Headless CMS with which I was already familiar. This would of course also serve as the portal by which I could enable clients to add their own content, thereby minimizing my own involvement. 
- Bulma and SASS - I similarly could stick to these out of familiarity to improve development productivity. Since Svelte already scopes each component's CSS, this could be seen as ovoerkill, but its compiler approach minimizes the deadweight of SASS.
- Formik - to handle contact form submissions to my personal email address, since `mailto:email@example.com` opens one up to spam bots. Having no experience with form API providers, I toyed with multiple options, but each had it's own issues:
    - Netlify Forms works by scanning the DOM during compile time. Given how my page was structured to only add pages as the user scrolls down, this option proved difficult to integrate.
    - Other form services had static limits. I gambled that Formik's free 50 submissions/month would be better in the long run until needs changed.
    - Some form services relied on accessing the API through the form HTML, or via a web component form. Refitting it to my needs

### Engineering


### Development

## The Result

### What I Learned Myself
- Late into the process I discovered that Bulma's shipping of a lot of prebuilt styles impacted initial page-load performance, so in the future I'll consider either using other build-tools like PurgeCSS and minifiers or just going without a CSS library in the first place.

### Feedback from Others
