import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Earth from "./pages/Earth.jsx"
import Mars from "./pages/Mars.jsx"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/earth" element={<Earth />} />
                    <Route path="/mars" element={<Mars />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

