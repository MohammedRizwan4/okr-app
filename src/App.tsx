import Navbar from "./components/Navbar.tsx";
import {Route, Routes} from "react-router";
import Home from "./components/Home.tsx";
import CreateOKRForm from "./components/CreateOKRForm.tsx";
import DisplayOKRs from "./components/DisplayOKRs.tsx";

const App = () => {
    return <>
        <Navbar/>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/create-okr" element={<CreateOKRForm />}/>
            <Route path="/view-okrs" element={<DisplayOKRs />}/>
        </Routes>
    </>
};

export default App;
