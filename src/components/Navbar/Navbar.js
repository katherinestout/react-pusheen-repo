import React, {Component} from "react";
import "../Navbar/Navbar.css";

class Navbar extends Component {
  render(){
    return(
<nav>
      <div id ="todo">
      Memory game! Click on each Pusheen, but don't click the same one twice!
      10 points and you win. ^__^
      </div>
      <div id ="score">
      Score: {this.props.score}
      </div>
</nav>
    );
  }
}
//this.props.score is connecting to App.js to display the score!
export default Navbar;