import React from "react";
import "../myStyles/Home.css";
export default function Home() {
  return (
    <section id="home">
      <h1 className="h-primary">Welcome to the Official PartyBeasts Website</h1>
      <p>
      Hello and welcome to the official hideout for party enthusiasts! Get ready to embark on an extraordinary journey of unforgettable celebrations. Whether it's a wedding, anniversary, birthday, or even a high school reunion, PartyBeasts is here to make your dreams come true. We are the pioneers of the new era of celebration, where every moment is crafted with perfection.
      </p>
      <br />
      <p>
      Do you have a specific plan in mind, or are you looking for inspiration? Look no further! Join us and let's transform your ideas into extraordinary parties. Tap the button below and let the magic begin!
      </p>
      <a href="/party-locations"><button className="btn">Let's Party</button></a>
    </section>
  );
}
