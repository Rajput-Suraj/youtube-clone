import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SearchPage from "./components/pages/SearchPage/SearchPage";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <div className="app__page">
                            <Sidebar />
                            <RecommendedVideos />
                        </div>
                    </Route>
                    <Route path="/search/:searchTerm" exact>
                        <div className="app__page">
                            <Sidebar />
                            <SearchPage />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
