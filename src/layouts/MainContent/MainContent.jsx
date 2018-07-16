import React from "react";
import classNames from "classnames";
import "./MainContent.css";

class MainContent extends React.Component {
  render() {
    const { children } = this.props;

    const classes = classNames("content", this.props.className);



    return (
      <main id="content" className={classes} role="main">
         <div>
          <h3>Why are we hosting this event?</h3>
          <p>Conversations around race and racism often take our attention to the United States. But what about race and resistance in Britain?</p>
          <p>The historic ways in which people have resisted state racism and colonialism in these isles are often ignored, erased and forgotton. This is despite the fact that there is a rich history of people of colour resisting state racism in Britain
          , from the 1976 Grunwick Strike -led by women of colour- to organising of the British Black Panthers.</p>
        <p>This initiative aims to bring together experts and academics who will discuss the historic and often ignored ways in which people of colour have organised to combat racism, as well as how these struggles connect to present day movements.</p>
        <p>All the lectures will be recorded and used to create a free online resource for anyone looking to learn or teach the history of Race, Racism and Resistance in Britain.</p>
          <h3>Who can attend?</h3>
        <p>The event is primarily aimed at sixth form students, teachers, educators and youth workers. If you are one of the above and the event is sold out please get in touch as we may have reserved.</p>
        <h3>How much does it cost?</h3>
        <p>The event is free to attend.</p>
             <h3>Contact: info@raceinbritain.org</h3>
         </div>
      </main>
    );
  }
}

export default MainContent;
