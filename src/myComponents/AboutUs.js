import React from "react";
import "../myStyles/AboutUs.css";
import aboutUs from "../myImages/aboutUs.jpg";
// import Spinner from "./Spinner";

export default function AboutUs() {
  // const [load, setLoad] = useState(true);
  // useEffect(() => {
  //   setLoad(false);
  // });
  return (
    <section id="about-us">
      {/* {load ? <Spinner /> : <></>} */}
      
      <h1 className="h-primary centre">About Us</h1>
      <div id="big">
        <div id="medium">
          <img src={aboutUs} alt="About Us" />
        </div>
        <div id="small">
          <h2 className="aboutSecondHead">
            We work hard so that you can Enjoy
          </h2>
          <p>
          Welcome to Party Beasts, your premier destination for creating extraordinary events and unforgettable experiences. With a passion for crafting exceptional moments, we are dedicated to bringing your vision to life and surpassing your expectations every step of the way. At Party Beasts, we understand that each event is unique, and we take pride in our ability to tailor our services to suit your specific needs. Whether you're planning an elegant wedding, a corporate gathering, a social soirée, or any other special occasion, our team of experienced event planners is here to guide you through the process with meticulous attention to detail and a commitment to excellence.
          </p>
          <p>
          We invite you to explore our portfolio of past events, testimonials from satisfied clients, and the range of services we offer. Whether you need comprehensive event planning from start to finish or require assistance with specific aspects of your event, we are here to provide a personalized and seamless experience. Thank you for considering Party Beasts for your upcoming event. We look forward to the opportunity to work with you and create an extraordinary event that will be cherished for a lifetime.
          </p>
        </div>
      </div>
      <p id="contacts">
        If you have any kind of plan in your mind, don't hesitate to contact us.
        We will sort that out for you! ;)
      </p>
      <div id="contactDetails">
        <p>✉ partyBeasts@gmail.com</p>
        <p>☎ +0612-0808-xxxx</p>
        <p>✆ +91-9999888xxx</p>
      </div>
      
    </section>
  );
}
