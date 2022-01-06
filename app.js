class FirstContainer extends React.Component {
    render() {
        return (
            <div className="containerRup">
                <div className="reviews">
                    <h3>Reviews</h3>
                    <h1>1,281</h1>
                </div>
                <div className="avgRating">
                    <h3>Average Raiting</h3>
                    <h1>4.6</h1>
                </div>
                <div className="sentAnalysis">
                    <h3>Sentiment Analysis</h3>
                    <div className="saNumbers">
                        <span>960</span>
                        <span>122</span>
                        <span>321</span>
                    </div>
                </div>

            </div>
        )
    }
}

class SecondContainer extends React.Component {

    render() {
        return (
            <div className="visitorContainer">
                <div className="webVis">
                    <h3>Website Visitors</h3>
                    <h1>821</h1>
                </div>
                <div className="grayBox">
                </div>
            </div>
        )
    }
}

class ThirdContainer extends React.Component {
    render() {
        return (
            <div className="leftDiv">
                <div className="insideDiv">
                    <span>Dashboard</span>
                    <span>Widget</span>
                    <span>Reviews</span>
                    <span>Customers</span>
                    <span>Online Analysis</span>
                    <span>Settings</span>
                </div>
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div className="mainContainer">

                <div className="leftContainer">
                    <ThirdContainer />
                </div>

                <div className="rightContainer">
                    <FirstContainer />
                    <SecondContainer />
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    // <h1> Commence Dashboard Creation!</h1>,
    <App />,
    document.querySelector("#container")
);