import "../scss/index.scss";
import HomePage from "./Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <HomePage /> } />
            </Routes>
        </Router>
    )
}
export default App;