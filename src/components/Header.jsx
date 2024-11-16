import { Link } from "react-router-dom";

export default function Header(){
    
    return (
        <div>
            <h1>Which Dragon Ball Character Are You?</h1>
            <div className="link-container">
                <Link to="/">Home</Link>
            </div>
            <div className="link-container">
                <Link to="/quiz">Quiz</Link>
            </div>
        </div>
    );
}