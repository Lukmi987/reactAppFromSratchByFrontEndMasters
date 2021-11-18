const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2",{}, "Luna"),
        React.createElement("h3",{}, "Dog"),
        React.createElement("h4",{}, "Havana"),
            ])
}
const App = () => {
    // Every time that you create a new tag or you are creating
    // a new instance of the component, you have to use React.createElement
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1", {}, "Adopt Me!!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),
    ]
    )
};


ReactDOM.render(React.createElement(App), document.getElementById('root'));