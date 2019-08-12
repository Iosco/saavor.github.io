let heroMessage = "Hello."
class HeroPage extends React.Component {
    render() {
        return (
            <h1 id="heroText">{heroMessage}</h1>
        )
    }
}
class NavBar extends React.Component {
    render() {
        return(
           <div className="collapse navbar-collapse">
             <ul className="navbar-nav mr-auto">
               <li className="navbar-item">
                 <a href="/" className="nav-link">Home</a>
               </li>
               <li className="navbar-item">
                 <a href="/projects/index.html" className="nav-link">Projects</a>
               </li>
               <li className="navbar-item">
                 <a href="/teamweb/index.html" className="nav-link">Team Website</a>
               </li>
             </ul>
           </div> 
        )
    }
}
let el = (i) => {
  return document.getElementById(i)
}
if(location.pathname == "/") {
    ReactDOM.render(<HeroPage />, el("hero"))
}
ReactDOM.render(<NavBar />, el("navbar"))