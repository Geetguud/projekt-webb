import Navbar from "Navbar.js";
import Welcome from "Welcome.js";
import About from "About.js";

function Landpage() {
    return React.createElement(
        "div",
        { className: "base" },
        React.createElement(Navbar, null),
        React.createElement(Welcome, null),
        React.createElement(About, null)
    );
}

export default Landpage;
