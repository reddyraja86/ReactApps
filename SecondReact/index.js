
/**   
 * Setion One
 * 
 * 
function Page(){
    return (
        <ol>
            <li>Home</li>
            <li>About</li>
        </ol>
    )
}

ReactDOM.render(<Page></Page>,document.getElementById("root"));

*/

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="react-logo.svg" width="100"></img>
                </nav>
            </header>
            <h1>Reason's to learn React </h1>
            <ol>
                <li>Declarative programming JS can be combined with HTML which allo us to write html in js file</li>
                <li>HTMl written in JS is treated as JS object later added to react DOM.</li>
            </ol>
            <footer>
                @Raja Copyright
            </footer>
        </div>
    )
}

ReactDOM.render(<Page></Page>, document.getElementById("root"));