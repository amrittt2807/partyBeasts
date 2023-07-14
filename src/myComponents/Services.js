import React from "react";
import "../myStyles/Services.css";
import Reunions from "../myImages/Reunions.jpg";
import Birthdays from "../myImages/birthdays.jpg";
import Anniverseries from "../myImages/anniversaries.jpg";

export default function Services() {
  return (
    <section className="services-container" id="services-main">
      <h1 className="servicesHeading centre">
        The perfect location for every special Occasion!
      </h1>
      <div id="services">
        <a href="/services/event-birthday" className="anchors">
          <div className="box">
            <img src={Birthdays} alt="Birthdays" />
            <h2 className="h-second centre">Birthdays</h2>
            <p className="centre">
              Choose amongst the best in town party venues for throwing the
              coolest birthday party ever! Let us make this day more special for
              you and your loved ones!
            </p>
          </div>
        </a>
        <a href="/services/event-reunion" className="anchors">
          <div className="box">
            <img src={Reunions} alt="Reunions" />
            <h2 className="h-second centre">Reunions</h2>
            <p className="centre">
              A meet after years with the best of friends should really be the
              best! Tap for the best arrangements and chill spots in town!
            </p>
          </div>
        </a>
        <a href="/services/event-anniversary" className="anchors">
        <div className="box">
          <img src={Anniverseries} alt="Anniversaries" />
          <h2 className="h-second centre">Anniversaries</h2>
          <p className="centre">
            Togetherness should be celebrated! You are just a tap away from
            planning the most special anniversary for the love of your life!
          </p>
        </div>
        </a>
      </div>
    </section>
  );
}
