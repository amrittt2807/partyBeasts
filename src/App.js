import "./myStyles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./myComponents/Navbar";
import Services from "./myComponents/Services";
import Home from "./myComponents/Home";
import Footer from "./myComponents/Footer";
import AboutUs from "./myComponents/AboutUs";
import ContactUs from "./myComponents/ContactUs";
import PartyLocations from "./myComponents/PartyLocations";
import BirthdaysEvent from "./myComponents/BirthdaysEvent";
import ReunionEvents from "./myComponents/ReunionEvents";
import AnniversaryEvent from "./myComponents/AnniversaryEvent";
import SignIn from "./myComponents/SignIn";
import SignUp from "./myComponents/SignUp";
import BookingPage from "./myComponents/BookingPage";
import BookingModal from "./myComponents/BookingModal";
import VenueState from "./context/venues/VenueState";
import BookmarksPage from "./myComponents/BookmarksPage";

function App() {
  return (
    <>
      <VenueState>
        <Router>
          <div className="App">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/party-locations" element={<PartyLocations />} />
            <Route
              path="/services/event-birthday"
              element={<BirthdaysEvent />}
            />
            <Route path="/services/event-reunion" element={<ReunionEvents />} />
            <Route
              path="/services/event-anniversary"
              element={<AnniversaryEvent />}
            />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/book-venue/:id" element={<BookingPage />} />
            <Route path="/modal" element={<BookingModal />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
          </Routes>
          <Footer />
        </Router>
      </VenueState>
    </>
  );
}

export default App;
