const projects = [{
        id: 1,
        name: "JQ's Coffee and Tea",
        projecttype: "Ecommerce website",
        img: `${process.env.PUBLIC_URL}/img/project1.png`,
        language: "React",
        description: `This project is an Ecommerce website built primarily with React & MaterialUI. I used props, maps, and routing to connect the data to a component. React state is also used to change the cover image, update the cart items, and store contact information.`,
        className: "activeproject",
        link: "Drinks_Ecommerce/"
    }, {
        id: 2,
        name: "Word Search",
        projecttype: "Retrieving Public API",
        img: `${process.env.PUBLIC_URL}/img/project22.png`,
        language: "JavaScript",
        description: `This project is a dictionary that defines the word. 
        I used Vanilla JavaScript to retrieve data from a public API. 
        I retrieved the data using mapping, forEach method, fetch, promise, and async-await.`,
        className: "activeproject",
        link: "Fetch-Dictionary/"
    }, {
        id: 3,
        name: "Random Joke Generator",
        projecttype: "Retrieving Public API ",
        img: `${process.env.PUBLIC_URL}/img/project3.png`,
        language: "React",
        description: `This project generates a random joke with questions and answers through a public API using Vanilla JavaScript. Data is retrieved using className OOP, async-await, event listener, and DOM manipulation. Need a joke to brighten up your day? Check this out! `,
        className: "activeproject",
        link: "Fetch-Random-Joke/"
    }, {
        id: 4,
        name: "Habit Hamster",
        projecttype: "Ongoing Team Project",
        img: `${process.env.PUBLIC_URL}/img/project4.png`,
        language: "React",
        description: `This is a collaborative project designed to help users build better habits. 
        I am working on the front end. 
        My partner is responsible for handling the back end. 
        We strive to make this project compatible with multiple platforms: websites, mobile, and smartwatches.`,
        className: "pendingproject"
    }
]

export default projects