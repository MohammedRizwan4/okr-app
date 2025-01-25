import Navbar from "./components/Navbar.tsx";
import {Route, Routes} from "react-router";
import Home from "./components/Home.tsx";
import CreateOKRForm from "./components/CreateOKRForm.tsx";
import DisplayOKRs from "./components/DisplayOKRs.tsx";
import {useState} from "react";
import {ObjectiveType} from "./types/OKRtypes.ts";

const App = () => {

    const [objectives, setObjectives] = useState<ObjectiveType[]>([]);

    return <div className="h-screen flex flex-col text-gray-700">
        <Navbar/>
        <div className="flex-grow">
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/create-okr" element={<CreateOKRForm />}/>
                <Route path="/view-okrs" element={<DisplayOKRs objectives={objectives} setObjectives={setObjectives}/>}/>
            </Routes>
        </div>
    </div>
};

export default App;
