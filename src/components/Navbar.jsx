
import "../assets/style/Navbar.css";
// import Home from "./Home";

const Navbar = () => {
  return (
    <nav>
            <h1 className="Navbar">React Applications</h1>
            <div className="links">
                <a href="/" >Home</a><br/>
                <a href="/create">Content</a><br/>
            </div>
        </nav>
    
  );
};

export default Navbar;
