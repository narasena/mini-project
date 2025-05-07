'use client';
import React, { useState } from 'react';

const BannerCard: React.FC = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true); // Track which content is visible
  const [quantity, setQuantity] = useState(0); // Track ticket quantity
  const ticketPrice = 100000; // Price per ticket in IDR

  // Handle the increment and decrement of ticket quantity
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  // Calculate the total price based on the quantity
  const totalPrice = quantity * ticketPrice;

  // Toggle between Deskripsi and Tiket
  const toggleContent = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '16px' }}>
      {/* Event Banner Image */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <img
          src="https://assets.loket.com/neo/production/images/banner/20250429133940_6810742c07c7f.jpg"
          alt="Event Banner"
          style={{
            width: '800px',
            height: 'auto',
            borderRadius: '8px',
            flexShrink: 0,
          }}
        />
        <div
          style={{
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            flex: 1,
            minWidth: '250px',
            marginTop: '16px',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            KOPLO PARTY MADNESS WITH FEEL KOPLO
          </h2>

          {/* Ticket Redemption Terms & Conditions below the event title */}
          <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#555' }}>
            <h4 style={{ fontWeight: 'bold' }}>
              Ticket Redemption Terms & Conditions
            </h4>
            <p>
              <strong>Ticket Validity:</strong>
              <br />• Each ticket admits one (1) person only.
            </p>
          </div>

          <p>
            <strong>📅</strong> 02 May 2025
          </p>
          <p>
            <strong>🕓</strong> 20:00 WIB
          </p>
          <p>
            <strong>📍</strong> Dewa Sport & Bar, Carstensz Mall - Basement
            Floor
          </p>
          <p style={{ marginTop: '8px', fontStyle: 'italic' }}>
            Diselenggarakan oleh: Annisa Zahara
          </p>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '5px', // Reduced margin to bring buttons even closer
          marginBottom: '5px', // Reduced margin to bring buttons even closer
        }}
      >
        <button
          onClick={toggleContent}
          style={{
            backgroundColor: isDescriptionVisible ? '#0070f3' : '#fff',
            color: isDescriptionVisible ? '#fff' : '#0070f3',
            padding: '12px 24px',
            border: '1px solid #0070f3',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Deskripsi
        </button>
        <button
          onClick={toggleContent}
          style={{
            backgroundColor: !isDescriptionVisible ? '#0070f3' : '#fff',
            color: !isDescriptionVisible ? '#fff' : '#0070f3',
            padding: '12px 24px',
            border: '1px solid #0070f3',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Tiket
        </button>
      </div>

      {/* Deskripsi or Tiket Content */}
      {isDescriptionVisible ? (
        <div style={{ padding: '16px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            Deskripsi Event
          </h2>
          <p>
            Get ready to shake the night away! Feel Koplo is bringing the
            ultimate party vibes to Dewa Sport & Bar — beats, energy, and pure
            madness await. See you on the dancefloor!
          </p>
        </div>
      ) : (
        <div
          style={{
            maxWidth: '600px',
            margin: '20px auto',
            padding: '20px',
            border: '2px solid #0070f3',
            borderRadius: '12px',
            backgroundColor: '#f0f9ff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#e0f7ff',
              borderRadius: '8px',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              KOPLO PARTY MADNESS WITH FEEL KOPLO
            </h3>
            <p style={{ margin: '5px 0' }}>
              <strong>Berakhir:</strong> 02 May 2025 · 20:00 WIB
            </p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              Rp{totalPrice.toLocaleString()}
            </p>
          </div>

          {/* Ticket Quantity Controls and Beli Tiket Button in One Row */}
          <div
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #0070f3',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <button
                onClick={handleDecrease}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #0070f3',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: '#0070f3',
                }}
              >
                -
              </button>
              <span style={{ fontSize: '1.2rem', margin: '0 10px' }}>
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #0070f3',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: '#0070f3',
                }}
              >
                +
              </button>
            </div>

            {/* Beli Tiket Button */}
            <button
              style={{
                padding: '12px 24px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: 'auto',
              }}
            >
              Beli Tiket
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerCard;
