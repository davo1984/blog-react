import React from "react";

const postsJSON = (props) => {
    let posts = {
        "post": [
            {
                "title": "Post-Camp Week 3",
                "subTitle": "Getting into the swing of Post-Camp work",
                "paragraph": [
                    `Another week hard at it learning React Native and job searching. I'm slower at putting in resumes than I would like, but I'm only sending out those I feel are a best fit. Tailoring each resume and cover letter for each advertised position is the real slow and hard part.`,
                    `I fought with my computer, had to reinstall node and npm, then fix the package.json and firebase.json to get my React Restaurant app to upload. After testing the "npm run build" version on my machine, using the instructions provided by "run build" and liked what I saw, not perfect but ok for now. When I deployed to Firebase the main picture was missing. Well I guess I have something to troubleshoot.`,
                    `Another project is to get my proper blog to show up correctly. I'm sure that will take an entire day or two and will have plenty of learning but nothing to commit. I also need to practice with PHP and the ability to throw up a web page with a template quickly. That should be a fairly valuable skill. On a related note I'll soon start on the Drupal training Justin pointed me towards.`
                ],
            },
            {
                "title": "Post-Camp Week 2",
                "subTitle": "Using Awesome Inc's Tracking Software",
                "paragraph": [
                    `I just found the "Create Job" section of the nav bar where I can add a Job and Company. Why?`,
                    `I guess as we apply for a job we can each see what the others have applied to and we can use that as encouragement to apply for more jobs. Or just apply to the same jobs as the others in my cohort. Time to put it to use. I don't think I'll use this blog post on my weekly blog.`,
                    `I don't like this piece of software. I know it tracks how well be have continued to better ourselves and look for work. But it has a blog post feature that is totally useless because I put those on my Blog, as we all should. I'm also getting tired of getting a 403 error whenever I access the site. But it is still a work in progress and it is the "tool" I am provided and expected to use. So I will use it without complaint.`
                ],
            },
            {
                "title": "Post-Camp Week 1",
                "subTitle": "Job hunting, project cleanup, and a sigh of relief",
                "paragraph": [
                    `I applied for one job this week, Rabb Consulting, rabbconsultingllc.com. (So much for this web page addresses turning into links automatically.) Part-time contract work. I really hope I get it for the experience it would bring. Later I can get a full time job with benefits, but for now I need to gain experience. I didn't get any benefits or health insurance in my previous job, and this is significantly better money. I had to apply through SimplyHired because the email address on Rabb's web site bounced back, I even tried careers at their website and it also bounced.`,
                    `I fought with my computer, had to reinstall node and npm, then fix the package.json and firebase.json to get my React Restaurant app to upload. After testing the "npm run build" version on my machine, using the instructions provided by "run build" and liked what I saw, not perfect but ok for now. When I deployed to Firebase the main picture was missing. Well I guess I have something to troubleshoot.`,
                    `There is always more to learn. I just wish I had some time to delve into Drupal and sharpen my PHP skills.`
                ],
            },
            {
                "title": "Main Camp Weeks 12 & 13, Offsite",
                "subTitle": "A look back, good and bad, and growing pains",
                "paragraph": [
                    "Over all, this Bootcamp has been one massive bit of stress which has left me burnt out, teetering on the edge of an episode of Major Depression. I guess in this society, one is never to mention such things. Well, that is just a part of me. Once I get a job and begin mixing with intelligent people, for the first time in years, I'm sure that I'll bounce right back. I always do.",
                    "As I look back on this blog, I think I grew the most in rekindling my love of programming. I had gotten away from that and had been hiding from the fact that that is what God has put me on this earth to do for a living. What stresses me out the most is the idea of not being able to find a job developing programs.",
                    "As recommended by the professionals at Awesome Inc, I have been working hard to make sure my final portfolio, blog, homepage, final project, and other projects are online and linked so future employers can learn about everything I did during the Bootcamp. In fact, I hope these posts are of some interest to someone, employer or not. I had fun blogging and hope to continue in the future."
                ]
            },
            {
                "title": "Main Camp Week 11, Offsite",
                "subTitle": "Computer. Hardware. Crash. AGAIN!!!",
                "paragraph": [
                    "Working on my final project has been equal parts wonderful and frustrating. The first week I accomplished everything I planned for myself. The second week my computer completely borked, it had been randomly rebooting but now this had become just too often. I attempted to erase the drive and reinstall everything and it shut down before I could even finish reinstalling all the dev tools. I picked up a loaner from Awesome Inc and struggled. Between updating software and coding problems I never completed near as many stories as I felt I should have. This put me WAY behind.",
                    "I try to pseudo-code every bit of code I write. Sometimes it is not much, maybe just a wire-frame of how I want it to look, a diagram of how the code must flow, or a list of comments in the code of what needs to be done and how. This really does speed up my coding."
                ]
            },
            {
                "title": "Main Camp Week 10, Offsite",
                "subTitle": "Final project through the lens of computational thinking and agile methodology",
                "paragraph": [
                    
                    "Nervous anticipation and excitement: that is what I feel as I consider my final project. I want it to be big and challenging, but that is what makes it somewhat intimidating. Of course just getting started with the analysis tends to calm my nerves and becomes a productive outlet for my nervous energy.",
                    
                    "I am pretty good at the big picture items. Because my computational thinking is very good I can pseudocode and determine exactly what needs to be done. However sometimes the nitty gritty details of the exact syntax can trip me up. I am the kind of person who needs to do something once or twice to understand the ins and outs of getting it to do exactly what I need it to.",
                    
                    "I love Agile Methodology! Mostly because it is how I naturally think about coding. Get some basic functionality; use and test it; find where it can be improved, where it needs to be improved first; break the fixes/improvements into small pieces; and work on each small piece in the order that makes the most sense. Repeat until mostly satisfied.",
                    
                    "My ideas for a final project at this point remain much the same. A basic laboratory information system (LIMS) or a transportation scheduler. But I have added another project to consider, a Bug Tracking system. This has the advantage of being something that everyone in the industry uses and has an interest in. It could even be customized into a ticket tracker for a small repair shop or a home repair business.",
                    
                    "The ability to use a relational database is what separates a real and useable project from a learning project. Without the ability to store and fetch data any project is trivial and no more than a toy or quick hack."
                ]
            },
            {
                "title": "Main Camp Week 9, Offsite",
                "subTitle": "Laravel vs. React - the good, the bad, the ugly",
                "paragraph": [
                    
                    "Laravel is very powerful and makes interacting with the database both easier and harder. Easier because Elegant makes manipulating it simple. Just that easy. Harder because it is both one more level abstracted and yet another syntax to learn. Setting access to the data is now multiple steps whose results are spread out in various files. Migrations, factories and seeds are wonderful to use but just another step on the front end to set up.",
                    
                    `React is also powerful and, as I'm getting better at using it, is becoming fun to use. My, how my view of it has changed! With mastery of any field comes enjoyment. Frustration is the feeling that one should already know how to do something. Where I have improved is in my understanding JSX and how to use the "render" section.`,
                    `Laravel started out as a complete mystery. Now that I understand more of what it can do, I am sometimes left with the issue of "how" to do it. This is just a bump in the road to mastery and enjoyment of use.`
                ]
            },
            {
                "title": "Main Camp Week 8, Offsite",
                "subTitle": "Still growing my skills and looking around at the Covid-changed world",
                "paragraph": [
                    
                    "Although it is hard for me to grasp I have come a great way. I'm quickly regaining my computational thinking abilities. My digital literacy has always been high and I would rather install and use Apache2, MySQL and PHP as separate programs than installing the commercial MAMP package with it's nonstandard ports and constantly opening up a web page whenever bringing up the servers. But I can understand that the instructors don't want to waste time fiddling with assorted computer configurations and the headaches that brings.",
                    
                    "Doing more projects is the only way to continue to grow those skills. At this point, I mainly just need more practice in using the skills so they become second nature and more work in reading and applying the documentation. I'm disappointed that Covid-19 has shut down in-person meetups of the local programming and hacking groups. I enjoy face to face meetings very much more than Zoom or Slack or messaging.",
                    
                    "Using React is still my biggest struggle. This is not surprising considering how powerful it is. Besides being powerful it requires a very different approach than I'm used to from COBOL, Fortran and other procedurally oriented programming languages.",
                    
                    "Seeing as how everything is done remotely, over Zoom and we didn't have a career fair this camp I'm disappointed.  Covid has greatly changed the world in which I will be working. The big plus is the experience I am getting working remotely shows that I can successfully do so. Additionally more companies will be open to hiring remote workers so the number of job openings will increase for us. Or will as the economy reopens and picks back up."
                ]
            },
            {
                "title": "Main Camp Week 7, Offsite",
                "subTitle": "PHP, how a programming language is meant to be. This is where I feel the most comfortable. Too bad it is seen as old and unfashionable.",
                "paragraph": [
                    
                    `One of my biggest surprises this week concerning PHP is just how much programming is needed on the back side. All UI is very visible, but so much is done on the back side with that data. To me that is where the action is.`,
                    
                    `I want to do more of this kind of programming. I find server side programming the most rewarding and fulfilling. Mainly because I feel so comfortable in it, but manipulating and using the data is what computers are for, not making pretty user interfaces, which do serve a very important purpose.`,
                    
                    `I love PHP because I feel so much at home in it. It feels much like programming in an older, procedural based language like Cobol, Fortran or C. No strange syntax, just the ability to program in clean, easily maintainable structured programming.`,
                    
                    "I think I would have been much more comfortable in the first part of the bootcamp if I had started with PHP instead of Javascript. PHP feels so familiar to me. Things are straight forward, program organization is what you make it to be and structured, maintainable code is easy to write and straight forward to understand.",
                    
                    `I don't think any of the earlier exercises would benefit from being refactored into PHP, though. I'll use PHP for new projects and for modifications and extensions to packages which already use it, for example Drupal and Wordpress`,
                    
                    `I have been considering various libraries, frameworks, etc. for my final project. I think I will include several. Reactstrap builds upon the power of Bootstrap but is easier to read and understand. Google-map-react makes putting a Google map on your page mostly pain free. React-quill allows me to give my users "what you see is what you get" editing of text. And I'll most likely find another one for a part of the project that I don't even know exists now.`
                ]
            },
            {
                "title": "Main Camp week 6, Offsite",
                "subTitle": "React and how I love it and love to hate it.",
                "paragraph": [
                    
                    "I like that React is very powerful and JSX greatly cuts down how much code needs to be typed in. I like that the error messages usually point to exactly where there is a syntax error with mostly clear wording of what is wrong.",
                    
                    "Right now, however, my mind is muddled up with differences between javascript and JSX: where to put them and what the differences are. Asynchronous execution is hard to keep track of and easy to forget that it is always used. Object-oriented programming is still something I'm struggling with. Furthermore when to update state and when to use props instead so the screen is not refreshed too often.",
                    
                    "React is like driving a Jaguar XKE, a stylish way to get to your destination as quickly as possible with excellent power, acceleration and handling. But if you want to get there in comfort, or you just don't need all that power, speed and style then perhaps you may wish to use another method to get you there.",
                    
                    "Anything I can get to work in React is a win and really makes me feel good. Being halfway through the bootcamp also feels like such a win. My computational thinking ability is really returning to me. I can now start to think of the overall system and see how various functions fit together and still work with the small parts to get them working efficiently.",
                    
                    `Once again I'm thinking of final project ideas. One of the projects I'm most interested in doing is a Laboratory Information System, which would track samples through a laboratory. It would track information about the sample (when and where collected and by whom) and what tests need to be performed on it. Perhaps an invoice would need to be printed or statistical analysis to determine if the process was projected to go "out of bounds" in the near future.`
                ]
            },
            {
                "title": "Main Camp Week 5, Offsite",
                "subTitle": "Frameworks. Who's afraid of the CLI? Feelings of despair and hopelessness brought about from trying to learn to code.",
                "paragraph": [
                    "A CLI is just another tool to be used. I am enjoying relearning them and the power and convience they give anyone who uses them. GUIs are the scary programs. Who knows what they are doing with my data behind that pretty facade?",
                    "I have no idea why someone would build a CLI other than for a spacific task, like a remote terminal or remote data entry.",
                    "Compared to when I started, I'm beginning to feel despondent. I seem unable to make any forward progress. I know what I want to do but reading documentation and searching Google don't seem to be very helpful. I read the words but don't seem to be able to actually get any new stuff to work. I got the Axios call working but was unable to actually do anything with the information. Local storage is a complete mystery to me. I despair of a better way of entering information to this blog. Creating a new page every week stinks. Time to face the facts, I will never get a job as a programmer. I am a complete career failure."
                ]
            },
            {
                "title": "Main Camp Week 4, Onsite/Offsite",
                "subTitle": "Setbacks: Social distancing, computer hardware, and personal",
                "paragraph": [
                    "As far as JavaScript Frameworks go, I don't find React being hard to use, just totally impossible for me at the moment.  With JSX I find the syntax fiendishly finicky. The mind shift required to transition to object oriented with high levels of abstraction is, at its best, frustrating. But I shall persevere. I just won't enjoy the process.",
                    "The one emerging JavaScript tool that I would like to learn more about is C#! I know that it is a competing product but the language is so popular that learning it should give me a leg up on finding a job. The ability to use one language to write a program which can run on desktop computers, Android phones, as well as Apple phones and computers is too great to be ignored. My plan it to learn it by rewriting all of my projects in it. After all I will most likely have a long time to improve and expand my skills in the face of the coming social and economic recession, hopefully not a real depression.",
                    "The COVID-19 virus forced the Bootcamp to transition to on-line instruction Wednesday at noon.  That was the right thing to do, but I am not progressing whatsoever at the moment.  I'm trying to read something from the documentation and put my understanding of it into code. That has been a total disaster. I can't seem to get anything to work and waste hours trying to get code to work in the wrong file or in the wrong manner. This leaves me mentally exhausted to the point that I can't keep track of what I'm trying to do. A total waste of my and my instructor's time. I've spent two entire days trying to display a TicTacToe board using two loops and don't have a single line of code to show for my effort.",
                    "A further worry for me is my MacBook Pro.  All day Friday it was overheating most severely. Several times the sound went out or it shut down due to either the heat or problems caused by the heat. I reset the PRAM and SMC chips several times and left it shutdown overnight. Saturday it gave me only one problem and Sunday it overheated only once. I performed the built in hardware diagnostics check twice without any problems being found. I'm still worried.",
                    "But I am not defeated. I will not quit. I'll blow out my brains before I drop out. The only way I made it through almost every day of my last four years at Amazon was making plans to kill myself everyday. That really got the anger whipped up so I could make rate, keep my job and feed my family. Although extremely frustrated and totally pessimistic at the moment I also feel more alive than I have felt in years. Programming is what God made me for. It's the only job or hobby that I was ever somewhat successful at. I wish Ernie didn't get his business stolen from him, he didn't pay that great but he was a great person to work with and for.",
                    "God I feel defeated. Is this depression coming on? No, not as long as I see a path forward."
                ]
            },
            {
                "title": "Main Camp Week 3, Onsite",
                "subTitle": "Thinking ahead for the final project",
                "paragraph": [
                    "Here I sit wanting to practice coding problems, wanting to put more effort into styling my calculator project. I would have finished it much earlier except for fighting with the syntax of the language. The logic of programs doesn't faze me, but some strange quirks of JavaScript throw me for a loop.There are not enough hours in the day to study all the resources I need to. So after the AwesomeInc Bootcamp is over I'll have plenty of time to polish my projects, practice solving tricky coding problems and dive into all the extra resources they link to. There just isn't enough time in this compressed environment to go as in-depth as I want to.",
                    "I've put some time into imagining final projects. A routing program for medical transportation companies like FTSB would be a project that could be transformed into an actual salable product. A Laboratory Information Management System could also be made into a profitable project. I wonder if my old boss would have any documentation so I would not leave out any important features. Lastly a bug tracking system is always a good thing to program because every firm I would be seeking employment with has one and knows how they should work. Additionally one could be modified to be a repair ticket tracker if I apply to a company that uses something of the sort. I think it is always good to show off a program useable in the industry one is applying for employment.",
                    `I have found JavaScript to be very useful. My past experience programming in Cobol and Ingres gives me a good foundation in programming logic but left me unprepared for certain aspects of object oriented thinking. I actually think that I'll enjoy programming more in JavaScript or some other language than in a "framework." Programmers shouldn't drive a stick shift!`,
                    "JavaScript doesn't scare me, but it is a challenge to think in its paradigm. I eagerly anticipate working on more projects in the language to gain experience and a better understanding and mastery of objects, classes and all the wonderful built-in methods."
                ]
            },
            {
                "title": "Main Camp Week 2, Onsite",
                "subTitle": "Writing good code vs. being a good developer",
                "paragraph": [
                    `This week I learned that objects are a developer's best friend. Not only do they store data but they organize it so it is easily reusable saving time, typing and errors.`,
                    `Good code is lean, efficient, and written so is is largely self-commenting. Don't get me wrong; comments are needed to help in understanding what the developer intended but they are so valuable that they shouldn't be wasted to explain that variable w holds the intermediate value of our calculation or array q holds the keys used to access our data. Naming conventions should be followed to allow the logic of the program to be seen clearly`,
                    `There is a difference between writing good code and being a good developer. A good developer designs programs and systems so they can be maintained, adapted and parts can be reused both right away and in the future. The majority of the cost of a program (or system) is in the maintenance portion of its life. Good development minimizes this cost.`,
                    `Programmers hate typing because it wastes time. Also the longer the code is the more likely there is an error in it simply because it is harder to understand.`
                ]
            },
            {
                "title": "Main Camp Week 1, Onsite",
                "subTitle": "Welcome to the classroom",
                "paragraph": [
                    `This week we worked on design. Previously I understood how important contrast was but I had not considered how many different elements could be used to produce interesting contrast.`,
                    `I would like to delve a little deeper into design when I have more time. I have a book on design I want to study, The Non-Designer's Design Book.`
                ]
            },
            {
                "title": "Prework Week 4",
                "subTitle": "JavaScript now, Frameworks in the future",
                "paragraph": [
                    `I'm enjoying the programming challenge of working in JavaScript this week. I find concepts like the scope of variables and calling functions different from anything I've encountered before. Javascript is a combination of powerful features, protection from making errors and "why did they do that?" It will take some time to master, but because of its power and libraries will be well worth the effort. I am also going to learn C# just to give me another modern web language to work with and compare.`,
                    `I would like to learn about more than one Framework, but at this point I really don't know enough about what Frameworks are available and their differences to actually know which I'd like to dive into in depth.`,
                    `The Frameworks which most interest me are Node.JS, Vue.JS, React and Meteor.js.   Meteor.js interests me because it is both full-stack and cross-platform.  An added bonus is its claim to be great for rapid prototyping.  And then there is Rust by the Mozilla Foundation. Reading about Rust I thought that it sounded like how things should be done.`
                ]
            },
            {
                "title": "Prework Week 3",
                "subTitle": "Settling in now!",
                "paragraph": [
                    `I like the separation of effort between html, CSS, JS and SQL. That just makes sense to me because that's how I try to organize my life. On the down side it is very tedious and error prone.  Often I find that what I was thinking about when I find a new home for a tool or bookmark a link isn't what I'm thinking about when I go to retrieve it. Although I want to be detail oriented I find myself being more of an abstract and "Big Picture" type of person.  What data do I need, how will it be deconstructed, manipulated and stored and retrieved? What program needs to do what to which data are tasks that energize me. Designing shadows for drop boxes on forms I don't find so compelling.`,
                    `That's why I was excited to read an article describing how frameworks become an abstraction layer allowing one to focus on what needs to be done rather than on what to do while minimizing bugs.`,
                    `My one big Ah-Ha! moment was margin -> border -> padding -> content NOT content -> margin -> border -> padding. My method is to plug in a few bizarre values so which does what becomes obvious.`
                ]
            },
            {
                "title": "Prework Week 2",
                "subTitle": "What day is it? What WEEK is it?",
                "paragraph": [
                    `Figuring out what is required to be posted as completed work is still challenging for me.  I made a list Thursday during stand-up which left out three items I noticed that all my co-students had posted.  I found where I had done them and added links to those items.  Perhaps the hardest thing is simply determining what day of the week it is. Thursday at stand-up I told of my plans for the next 24 hours thinking that it was Wednesday. I was only corrected by my wife just before bedtime when I was planning which vehicle to take to work.`,
                    `I like pseudo coding and flow charting. That was how I planned every new program I had to write when I worked as a programmer back in the 90s, especially diagramming with flow charts. Diagramming was how I planned how programs and parts of a system would interact with one another. Every part that I couldn't figure out became an empty box.  Once I had figured out what the inputs and outputs were, usually what to do with them was greatly simplified.`,
                    `I am super excited to be learning a new programming language. Teaching myself a new language I find to be extremely difficult because the main thing I need is a worthy project to make it worthwhile, which I now have.  Working with others is also a major plus for me. I don't do very well without the stimulation I get from interacting with other educated and intelligent people. If that makes me an intellectual then I'm unapologetic.`
                ]
            },
            {
                "title": "Prework Week 1",
                "subTitle": "The preparation begins!",
                "paragraph": [
                    `This first week passed in a blur of information that left me feeling like I was drinking from a firehose.  Working through the GitHub tutorials felt like all of my concentration  was solely focused on getting through the tutorial rather than actually learning the  material. I plan on doing a more in-depth review as time permits. Also just trying to figure out what format to turn in this work is unsettling.   I am looking forward in eagar anticipation to the coming week.`
                ]
            }
        ]
    }
    console.log('in postsJSON', posts);
    return ({ posts });
};
export default postsJSON;