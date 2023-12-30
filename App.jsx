import { createRoot } from "react-dom/client"
import Home from "./pages/Home.jsx"
import Earth from "./pages/Earth.jsx"
import Mars from "./pages/Mars.jsx"

const App = () => {
    return (
        <div>
            <h1>Sanity Check</h1>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

