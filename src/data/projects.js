const projects = [{
        id: 1,
        name: "JQ's Coffee and Tea ",
        projecttype: "Ecommerce 🍃",
        img: `${process.env.PUBLIC_URL}/img/project1.png`,
        language: "React, MaterialUI, SASS, Bootstrap",
        description: `E-commerce site built with React & MaterialUI using props, maps, routing, and state to connect data and update the UI.`,
        className: "activeproject",
        link: "Drinks_Ecommerce"
    }, {
        id: 2,
        name: "Classic Games",
        projecttype: "Gaming 🎮",
        img: `${process.env.PUBLIC_URL}/img/project2.png`,
        language: "HTML, CSS, JavaScript, SASS",
        description: `Gaming site built with Vanilla JavaScript that
        consists of 6 classical games: Matching Card, Rock Paper Scissors, Tic Tac Toe, Breakout, Whack a Bear, and Snake. `,
        className: "activeproject",
        link: "Multi-Game-Project"
    }, {
        id: 3,
        name: "Word Search ",
        projecttype: "Retrieve Public API 📚 ",
        img: `${process.env.PUBLIC_URL}/img/project3.png`,
        language: "HTML, CSS, JavaScript",
        description: `Dictionary built with Vanilla JavaScript using a public API and data retrieval methods such as mapping, forEach, fetch, promise, and async-await.`,
        className: "activeproject",
        link: "Fetch-Dictionary"
    }
]

export default projects