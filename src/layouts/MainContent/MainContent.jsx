import classNames from "classnames";
import "./MainContent.css";
import BlogPicture from "../../components/BlogPicture/BlogPicture";
import config from "../../../data/SiteConfig";
import React, { Component } from "react";



class MainContent extends Component {
  render() {
    const { children } = this.props;

    const classes = classNames("content", this.props.className);



    return (
      <main id="content" className={classes} role="main">
         <div class="float">
             <h3>What is the event?</h3>
             <p>On the 9th and 10th of August hackingEducation
                 and Consented bring you A History of Race and Resistance in Britain, a two day event at SOAS university aimed at exploring the ways in which people have historically fought racism in Britain. The event will comprise of eight lectures and eight workshops over
                 the course of the two days.</p>
             <p>This event will be targeted at young
                 people, educators and youth workers (as well as members of the public). Lunch will be provided for the young people attending.</p>

                 <h3>Why are we hosting this event?</h3>
          <p><BlogPicture logo={config.siteLogoFist}/>Conversations around race and racism
              often take our attention to the United States. This is despite the fact that there is a rich history of people of colour resisting state racism in Britain, from the 1976 Grunwick Strike -led by women of colour- to the organising of the British Black Panthers.</p>
          <p>This initiative aims to bring
              together experts and academics who will discuss the historic and often ignored ways in which people of colour have organised to combat racism, as well as how these struggles connect to present day movements.
          </p>
        <p>All the lectures will be recorded
            and used to create a free online resource for anyone looking to learn or teach the history of Race, Racism and Resistance in Britain.</p>
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
