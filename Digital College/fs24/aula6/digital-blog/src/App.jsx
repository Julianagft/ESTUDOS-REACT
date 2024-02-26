import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import NotFound from "./pages/NotFound"
import Post from "./pages/Post"

function App() {

    return (
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/users" element={<Users />}/>

            <Route path="/posts/:id" element={<Post />}/>

            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default App