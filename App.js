        const parent=React.createElement("div",{id:"root"},[React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"iam vishnu"),React.createElement("h2",{},"iam vishnu2")]),
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"iam vishnu"),React.createElement("h2",{},"iam vishnu2")])])

        console.log(parent)
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent)

        