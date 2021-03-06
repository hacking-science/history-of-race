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

             <h3>What is the event?</h3>
             <p>On the 9th and 10th of August hackingEducation
                 and Consented bring you A History of Race and Resistance in Britain, a two day event at SOAS university aimed at exploring the ways in which people have historically fought racism in Britain. The event will comprise of eight lectures and eight workshops over
                 the course of the two days.</p>
             <p>This event will be targeted at young
                 people, educators and youth workers (as well as members of the public). Lunch will be provided for the young people attending.</p>

          <h3>What was the purpose behind the event?</h3>
         <p>Conversations around race and racism
             often take our attention to the United States. This is despite the fact that there is a rich history of people of colour resisting state racism in Britain, from the 1976 Grunwick Strike -led by women of colour- to the organising of the British Black Panthers.</p>
         <p>This initiative aims to bring
             together experts and academics who will discuss the historic and often ignored ways in which people of colour have organised to combat racism, as well as how these struggles connect to present day movements.
         </p>

         <h3>Recorded Lectures</h3>

         All the lectures were recorded and are available here as a free online resource for anyone looking to learn or teach the history of Race, Racism and Resistance in Britain.

         <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL2s-Xl42qeRXyIXjS_RoNdxl0AWxA2Ez-" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

      </main>
    );
  }
}

export default MainContent;

/*
 <!--
<p>All the lectures will be recorded
   and used to create a free online resource for anyone looking to learn or teach the history of Race, Racism and Resistance in Britain.</p>
 <h3>Who can attend?</h3>
<p>The event is primarily aimed at sixth form students, teachers, educators and youth workers. If you are one of the above and the event is sold out please get in touch as we may have reserved spaces.</p>
<h3>How much does it cost?</h3>
<p>The event is free to attend.</p>
    <h3>Event Details</h3>
    <p>Location: <a href="https://www.google.co.uk/maps/place/SOAS+University+of+London/@51.5224686,-0.1313338,17z/data=!4m5!3m4!1s0x48761b31db1e0f19:0x14db538713f5b80b!8m2!3d51.52235!4d-0.129259">SOAS University</a></p>
    <p>Register: <a href="https://www.eventbrite.co.uk/e/a-history-of-race-resistance-in-britain-tickets-46437967210?aff=eac2">Sign up</a></p>
    <p>Time: Thursday 9th of August 10.30am-5pm & Friday 10th of August 10.30am-5pm </p>
    <p>Email: info@raceinbritain.org</p>
     -->*/
