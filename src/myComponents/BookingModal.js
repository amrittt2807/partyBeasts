import React, { useState } from 'react';
import './BookingModal.css';

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <button className="close-btn" onClick={toggleModal}>
              &times;
            </button>
            <h2>Booking Details</h2>
            {/* Your form components for booking details */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingModal;
