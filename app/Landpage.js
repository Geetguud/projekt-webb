import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";

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
