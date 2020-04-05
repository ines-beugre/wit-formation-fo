import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import wit from './images/wit.png';
import Formations from './components/formations/formations';
import Formation from './components/formation/formation';
import Historique from './components/historique/historique';
import AddFormation from './pages/add-formation/add-formation';
import './index.css';

export default class Main extends React.Component {
    
    componentDidMount() {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop;
        window.onscroll = this.scroll(header, sticky);
    }

    scroll(header, sticky) {
        return () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky")
            }
        }
    }

    render() {
        return (
            <div id="body">
                <Router>

                    <header>
                        <img className="wit-picture"
                             alt="Logo Wit"
                             src={wit}/>

                        <div className="dropdown">
                            <nav className="app-navbar" id="myHeader">
                                <ul className="navbar-nav">
                                    {/*<li className="nav-item active">*/}
                                    {/*    <Link to="/" className="nav-link">*/}
                                    {/*        Accueil*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}

                                    <li className="nav-item active">
                                        <Link to={"/formations"}>
                                            Formations
                                        </Link>
                                    </li>

                                    <li className="nav-item active">
                                        <Link to="/formation/add">
                                            Ajout
                                        </Link>
                                    </li>

                                    <li className="nav-item active">
                                        <Link to="/historique">
                                            Historique
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                    <main>
                        <Route>
                            {/* <Route exact path="/" component={Home}/> */}
                            <Route exact path="/" component={Formations}/>
                            <Route exact path="/formations" component={Formations}/>
                            <Route exact path="/formations/:id" component={Formation}/>
                            <Route exact path="/formation/add" component={AddFormation}/>
                            <Route exact path="/historique" component={Historique}/>
                        </Route>
                    </main>

                    <footer>

                    </footer>
                </Router>
            </div>
        )
    }

}