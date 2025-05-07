'use client';
import { IEvent } from '@/types/event.type';
import apiInstance from '@/utils/axiosInstance';
import { useParams } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';

const BannerCard: React.FC = () => {
  const [rating, setRating] = useState(0); // Track selected rating
  const [reviewText, setReviewText] = useState(''); // Track the review text
  const [descShown, setDescShown] = useState(true);
  const reviewRef = useRef<HTMLDivElement>(null); // Reference to scroll to the review section
  const params = useParams();
    const [event, setEvent] = useState<IEvent | null>(null);
    const handleGetEventById = async () => {
      try {
        const response = await apiInstance.get(`/events/${params.id}`);
        setEvent(response.data.event);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      handleGetEventById();
    }, []);

  const handleDescShow = () => {
    setDescShown(!descShown);
  };
  // Handle star click to set rating
  const handleStarClick = (rating: number) => {
    setRating(rating);
  };

  // Handle review text change
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  // Handle review submission (for now, we just log the review)
  const handleReviewSubmit = () => {
    console.log('Review submitted:', reviewText);
    console.log('Rating:', rating);
    // Here you would send the review and rating to a backend or save it locally
    setReviewText('');
    setRating(0); // Reset after submission
  };

  // Scroll to the review section when the review button is clicked
  const scrollToReviewSection = () => {
    if (reviewRef.current) {
      reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        maxWidth: '1300px',
        margin: '0 auto',
      }}
    >
      {/* Gambar dan Card Penyelenggara */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '20px',
          padding: '16px',
          maxWidth: '1300px',
          margin: '0 auto',
        }}
      >
        {/* Gambar */}
        <img
          src={event?.bannerImgUrl!}
          alt="Loket Banner"
          style={{
            width: '800px',
            height: 'auto',
            borderRadius: '8px',
            flexShrink: 0,
          }}
        />

        {/* Card Penyelenggara */}
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
            {event?.eventName}
          </h2>
          <p style={{ margin: '4px 0' }}>
            <span>📅</span>{' '}
            {`${event?.eventStartDate} - ${event?.eventEndDate}`}
          </p>
          <p style={{ margin: '4px 0' }}>
            <span>🕓</span>{' '}
            {`${event?.eventStartTime} - ${event?.eventEndTime}`}
          </p>
          <p style={{ margin: '4px 0' }}>
            <span>📍</span> {event?.eventLocation}
          </p>
          <p style={{ marginTop: '8px', fontStyle: 'italic' }}>
            Diselenggarakan oleh {event?.organizerName}
          </p>

          {/* Card Review Button */}
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
            <button
              onClick={scrollToReviewSection}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%',
              }}
            >
              Review Event
            </button>
          </div>
        </div>
      </div>

      {/* Deskripsi */}
      {/* Event Review and Rating */}
      <div ref={reviewRef} style={{ marginTop: '32px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          Review dan Rating
        </h3>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <span style={{ marginRight: '8px' }}>Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                cursor: 'pointer',
                fontSize: '20px',
                color: star <= rating ? '#FFD700' : '#ccc',
              }}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          value={reviewText}
          onChange={handleReviewChange}
          placeholder="Tulis review Anda..."
          style={{
            width: '200%', // Increased width to make it twice as wide
            padding: '16px', // Increased padding for more space inside the textarea
            borderRadius: '6px',
            border: '1px solid #ccc',
            marginBottom: '12px',
            minHeight: '200px', // Increased minimum height for a larger text area
            fontSize: '1rem', // Larger font size for better readability
            marginLeft: '-50%', // Adjust to center the textarea by shifting it left
          }}
        />

        <button
          onClick={handleReviewSubmit}
          style={{
            padding: '16px 32px', // Increased padding for more spacious button
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '8px', // Slightly more rounded corners
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1.1rem', // Larger font size for better visibility
            width: '100%',
            transition: 'background-color 0.3s', // Smooth background color transition on hover
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#005bb5')
          } // Darker color on hover
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = '#0070f3')
          } // Original color when mouse leaves
        >
          Kirim Review
        </button>
      </div>
      <div className="border border-black p-1" onClick={handleDescShow}>
        Lihat deskripsi
      </div>
      <div
        className={`${descShown ? '' : 'hidden'}`}
        style={{
          padding: '16px',
          margin: '0 auto',
          textAlign: 'left',
          width: '100%',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          {event?.eventName}
        </h2>
        <p>
          Superfriends! Supermusic Intimate Sessions kembali hadir di tahun 2025
          dengan membawa format baru 'Acoustic Set'. Mulai April hingga Juni
          2025, rangkaian acara ini akan dilaksanakan di 25 Kota, menghadirkan
          25 Guest Stars serta Local Heroes dari berbagai wilayah di Indonesia.
          Dengan menyasar kota-kota di Jawa Timur, Jawa Tengah, Jabodetabek,
          hingga Jawa Barat, event Supermusic Intimate Sessions 2025 ini membawa
          konsep pertunjukan musik yang lebih hangat dan intim serta menjadikan
          ruang yang mempertemukan Musisi dan Superfriends secara lebih personal
          dan bermakna karena INIRASANYASUPER!!! Guest Star : St.Loco Local
          Heroes : Moccatune, Mighfar Suganda, XGO, Iwakvisual
        </p>

        {/* Syarat & Ketentuan */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>
          Syarat & Ketentuan
        </h3>
        <ol>
          <li>
            1.Pengunjung wajib berusia diatas 18 tahun untuk bisa ke masuk ke
            acara.
          </li>
          <li>
            2.Registrasi ini termasuk merchandise dan freepass akses datang ke
            acara SuperMusic Intimate Sessions sesuai dengan kota
            penyelenggaraan acara yang dipilih.
          </li>
          <li>
            3.E-Voucher akan dikirimkan melalui whatsapp dan email yang di
            registrasikan, pastikan untuk mengisi semua data yang dibutuhkan
            pada website registrasi.
          </li>
          <li>
            4.Pengambilan merchandise dan penukaran e-voucher hanya dapat
            dilakukan di redemption booth sesuai dengan kota penyelenggaraan
            acara yang dipilih.
          </li>
          <li>
            5.Waktu Penukaran e-voucher dan check in dapat dilakukan di venue
            sesuai dengan kota penyelenggaraan acara yang dipilih mulai jam
            15:00 WIB.
          </li>
          <li>6.Kami tidak bertanggung jawab atas penyalahgunaan e-voucher.</li>
          <li>
            7.Penyelenggara berhak untuk tidak memberikan izin untuk masuk ke
            dalam tempat acara apabila syarat-syarat & ketentuan tidak dipenuhi.
          </li>
          <li>
            8.Dilarang melakukan perbuatan dan juga atau pun membawa benda yang
            melanggar hukum/ peraturan yang berlaku pada saat acara.
          </li>
          <li>
            9.Dilarang Membawa:
            <ul>
              <li>-Obat Obatan Terlarang</li>
              <li>-Makanan dan Minuman dari luar</li>
              <li>-Senjata Tajam</li>
              <li>-Senjata Api/ Peledak</li>
              <li>-Video Kamera Profesional</li>
              <li>-Laser Pen</li>
              <li>-E Cigarette dan Heat Not Burn Cigarette</li>
              <li>-Produk Tembakau Dengan Kemasan/ Segel Terbuka</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BannerCard;
