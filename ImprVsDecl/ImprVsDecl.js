
//Delarative approach
const elemt = <h1>Hi Declarative way</h1>
//Here in JSX it will print the JSON object
console.log(elemt);

ReactDOM.render(elemt, document.getElementById("root"))



//Imperative way  of adding a h1 Element

// var elemt = document.createElement("h1");
// elemt.innerText = "Created using the imperative Programming";

// var root = document.getElementById("root");
// root.append(elemt);
 

// //Here  it will print the HTML object
// console.log(elemt);