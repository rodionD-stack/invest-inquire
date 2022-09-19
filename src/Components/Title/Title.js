import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"

export const Title = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
    )
}