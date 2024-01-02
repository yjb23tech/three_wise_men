import classes from "../css/home.module.css"; 
import { Link } from "react-router-dom"; 

const Home = () => {
    return (
        <div className={`${classes.home_styles}`}>
            <h1>Terra Firma</h1>
            <h2>Mother Gaia</h2>
            <h3>The Blue Planet</h3>
            <p>I been around the World</p>

            <Link to={`/mars`} >
                <h3>Lord of War QP Skiii</h3>
                <h2>Fukumean</h2>
                <h3>Working in Scrimba</h3>
            </Link>
        </div>
    )
}

export default Home; 

