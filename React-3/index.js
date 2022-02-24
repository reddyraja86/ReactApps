function Top(){
    return (
        <header>
            <nav className="nav">
                <img src="react-logo.svg" className="nav-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         </header>
    )
}

function MainContent(){
    return (
        <div>
            <h1>Reason's to learn React </h1>
            <ol>
                <li>Declarative programming JS can be combined with HTML which allo us to write html in js file</li>
                <li>HTMl written in JS is treated as JS object later added to react DOM.</li>
            </ol>
        </div>
    )
}

function Footer(){
    return (
        <footer>
             @Raja Copyright
         </footer>
    )
}

function Page() {
    return (
        <div>
            <Top></Top>
            <MainContent></MainContent>
            <Footer></Footer>
        </div>
    )
}

ReactDOM.render(<Page></Page>, document.getElementById("root"));