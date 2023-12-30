
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Instuction from "./Instruction"
import Quiz from "./quiz"
import Result from "./result"

function Navigation(){
    return(
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Instuction/>}></Route>
            <Route path="/quiz" element={<Quiz/>}></Route>
            <Route path="/result" element={<Result/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Navigation;