const projects = [{
        id: 1,
        name: "JQ's Coffee and Tea ☕",
        projecttype: "Ecommerce",
        img: `${process.env.PUBLIC_URL}/img/project1.png`,
        language: "React, MaterialUI, SASS, Bootstrap",
        description: `E-commerce site built with React & MaterialUI using props, maps, routing, and state to connect data and update the UI.`,
        className: "activeproject",
        link: "Drinks_Ecommerce"
    }, {
        id: 2,
        name: "Word Search 📖",
        projecttype: "Retrieve Public API",
        img: `${process.env.PUBLIC_URL}/img/project22.png`,
        language: "JavaScript",
        description: `Dictionary built with Vanilla JavaScript using a public API and data retrieval methods such as mapping, forEach, fetch, promise, and async-await.`,
        className: "activeproject",
        link: "Fetch-Dictionary"
    }, {
        id: 3,
        name: "Random Joke Generator 😂",
        projecttype: "Retrieve Public API ",
        img: `${process.env.PUBLIC_URL}/img/project3.png`,
        language: "JavaScript",
        description: `A random joke generator built with Vanilla JavaScript using a public API and data retrieval methods such as class constructor (OOP), async-await, event listener, and DOM manipulation.`,
        className: "activeproject",
        link: "Fetch-Random-Joke/"
    }
    // , {
    //     id: 4,
    //     name: "Habit Hamster",
    //     projecttype: "Ongoing Team Project",
    //     img: `${process.env.PUBLIC_URL}/img/project4.png`,
    //     language: "React",
    //     description: `This is a collaborative project designed to help users build better habits. 
    //     I am working on the front end. 
    //     My partner is responsible for handling the back end. 
    //     We strive to make this project compatible with multiple platforms: websites, mobile, and smartwatches.`,
    //     className: "pendingproject"
    // }
]

export default projects