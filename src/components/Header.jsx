import { Link } from "react-router-dom";

export default function Header(){
    
    return (
        <div>
            <div>
                <h1>Which Element Are You?</h1>
            </div>
            <div className="link-container">
                <Link to="/">Home</Link>
            </div>
            <div className="link-container">
                <Link to="/quiz">Quiz</Link>
            </div>
        </div>
    );
}