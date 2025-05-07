'use client';
import React, { useState } from 'react';

const events = [
  {
    id: 1,
    title:
      'Cara Membuat CV dan Mempersiapkan Interview untuk Kerja di Luar Negeri',
    date: '04 May 2025',
    price: 'Rp49.000',
    organizer: 'Transfer Wawasan Indonesia',
    image:
      'https://assets.loket.com/neo/production/images/banner/20250423220640_680902004204e.jpg',
  },
  {
    id: 2,
    title:
      'The Art of Tax Planning: Minimum Tax Maximum Profit Seminar - Pt. 1',
    date: '09 May 2025',
    price: 'Gratis',
    organizer: 'Tax and Accounting Club PNJ',
    image:
      'https://assets.loket.com/neo/production/images/banner/20250420231043_68051c835c52b.jpg',
  },
  {
    id: 3,
    title:
      'The Art of Tax Planning: Minimum Tax Maximum Profit Seminar - Pt. 2',
    date: '09 May 2025',
    price: 'Gratis',
    organizer: 'Tax and Accounting Club PNJ',
    image:
      'https://assets.loket.com/neo/production/images/banner/20250420231043_68051c835c52b.jpg',
  },
  {
    id: 4,
    title: 'The M Factor Film – Jakarta, Indonesia Premiere',
    date: '13 May 2025',
    price: 'Rp100.000',
    organizer: 'The M Factor',
    image:
      'https://assets.loket.com/neo/production/images/banner/20250424180929_680a1be908c61.jpg',
  },
];

const eventCreators = [
  {
    name: 'Kobi Education Alumni',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20220929192857_63358f896cefa.png',
  },
  {
    name: 'KlasA Education',
    logo: 'https://assets.loket.com/neo/production/images/organization/20220818122701_62fdcda5b13dd.png',
  },
  {
    name: 'MAGENTA EDUCATION',
    logo: 'https://assets.loket.com/neo/production/images/organization/20250212161828_67ac676456086.png',
  },
  {
    name: 'Creative Minds',
    logo: 'https://assets.loket.com/neo/production/images/organization/20250216181828_ABC123.png',
  },
  {
    name: 'Tech Hub Indonesia',
    logo: 'https://assets.loket.com/neo/production/images/organization/20250215123201_XYZ456.png',
  },
  {
    name: 'Startup Conference',
    logo: 'https://assets.loket.com/neo/production/images/organization/20250216144532_PQR789.png',
  },
  {
    name: 'Education Expo',
    logo: 'https://assets.loket.com/neo/production/images/organization/20250212154123_DEF654.png',
  },
  {
    name: 'YES Conference',
    logo: 'https://assets.loket.com/neo/production/images/organization/20250216114532_LMN321.png',
  },
  {
    name: 'Film Productions',
    logo: 'https://assets.loket.com/neo/production/images/organization/20250212102934_GHI876.png',
  },
  {
    name: 'Media Fest',
    logo: 'https://assets.loket.com/neo/production/images/organization/20250212173422_STU987.png',
  },
];

const SearchPage: React.FC = () => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState(''); // Handle time-based filtering

  // Function to handle time filter change
  const handleTimeFilterChange = (time: string) => {
    setSelectedTimeFilter(time);
  };

  // Function to handle image click
  const handleImageClick = (title: string) => {
    alert(`You clicked on the event: ${title}`);
  };

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '16px' }}>
      {/* Search Result Heading */}
      <h2
        style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '40px' }}
      >
        Event dengan kata "education"
      </h2>

      {/* Event List Card */}
      <div
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginBottom: '40px', // Increased margin
        }}
      >
        <div style={{ display: 'flex', gap: '20px', overflowX: 'scroll' }}>
          {events.map((event) => (
            <div
              key={event.id}
              style={{
                width: '250px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                textAlign: 'center',
                marginBottom: '20px', // Increased margin between events
              }}
            >
              <button
                onClick={() => handleImageClick(event.title)} // Image click handler
                style={{
                  padding: 0,
                  border: 'none',
                  background: 'transparent',
                  width: '100%',
                }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '12px', // Added rounded corners
                  }}
                />
              </button>
              <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                  {event.title}
                </h3>
                <p>
                  <strong>📅</strong> {event.date}
                </p>
                <p>
                  <strong>💰</strong> {event.price}
                </p>
                <p>
                  <strong>📍</strong> {event.organizer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Creators */}
      <div style={{ marginTop: '40px', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Event Creators
        </h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          {eventCreators.map((creator) => (
            <div key={creator.name} style={{ textAlign: 'center' }}>
              <button
                onClick={() => alert(`You clicked on ${creator.name}`)} // Creator logo click handler
                style={{
                  padding: 0,
                  border: 'none',
                  background: 'transparent',
                }}
              >
                <img
                  src={creator.logo}
                  alt={creator.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                  }}
                />
                <p>{creator.name}</p>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Time Filter */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Cari menurut waktu
        </h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => handleTimeFilterChange('Hari Ini')}
            style={{
              padding: '10px 20px',
              backgroundColor:
                selectedTimeFilter === 'Hari Ini' ? '#0070f3' : '#fff',
              color: selectedTimeFilter === 'Hari Ini' ? '#fff' : '#0070f3',
              border: '1px solid #0070f3',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Hari Ini
          </button>
          <button
            onClick={() => handleTimeFilterChange('Besok')}
            style={{
              padding: '10px 20px',
              backgroundColor:
                selectedTimeFilter === 'Besok' ? '#0070f3' : '#fff',
              color: selectedTimeFilter === 'Besok' ? '#fff' : '#0070f3',
              border: '1px solid #0070f3',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Besok
          </button>
          <button
            onClick={() => handleTimeFilterChange('Akhir Pekan')}
            style={{
              padding: '10px 20px',
              backgroundColor:
                selectedTimeFilter === 'Akhir Pekan' ? '#0070f3' : '#fff',
              color: selectedTimeFilter === 'Akhir Pekan' ? '#fff' : '#0070f3',
              border: '1px solid #0070f3',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Akhir Pekan
          </button>
        </div>
      </div>

      {/* New Content Section */}
      <div style={{ marginTop: '40px' }}>
        {/* Cari Lokasi Pilihan */}
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Cari lokasi pilihan
        </h3>
        <div style={{ display: 'flex', gap: '20px', overflowX: 'scroll' }}>
          <div className="location-card" style={{ marginBottom: '40px' }}>
            <button
              onClick={() => alert('You clicked on Jakarta')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-asset-production.s3.amazonaws.com/jakarta-min.png"
                alt="Jakarta"
                style={{ borderRadius: '12px' }}
              />
              <p>Jakarta</p>
            </button>
          </div>
          <div className="location-card" style={{ marginBottom: '40px' }}>
            <button
              onClick={() => alert('You clicked on Bandung')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-asset-production.s3.amazonaws.com/bandung-min.png"
                alt="Bandung"
                style={{ borderRadius: '12px' }}
              />
              <p>Bandung</p>
            </button>
          </div>
          <div className="location-card" style={{ marginBottom: '40px' }}>
            <button
              onClick={() => alert('You clicked on Yogyakarta')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-asset-production.s3.amazonaws.com/jogja-min.png"
                alt="Yogyakarta"
                style={{ borderRadius: '12px' }}
              />
              <p>Yogyakarta</p>
            </button>
          </div>
          <div className="location-card" style={{ marginBottom: '40px' }}>
            <button
              onClick={() => alert('You clicked on Surabaya')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-asset-production.s3.amazonaws.com/surabaya-min.png"
                alt="Surabaya"
                style={{ borderRadius: '12px' }}
              />
              <p>Surabaya</p>
            </button>
          </div>
          <div className="location-card" style={{ marginBottom: '40px' }}>
            <button
              onClick={() => alert('You clicked on Bali')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-asset-production.s3.amazonaws.com/bali-min.png"
                alt="Bali"
                style={{ borderRadius: '12px' }}
              />
              <p>Bali</p>
            </button>
          </div>
        </div>

        {/* Cari Format Pilihan */}
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Cari format pilihan
        </h3>
        <div style={{ display: 'flex', gap: '20px', overflowX: 'scroll' }}>
          <div className="format-card">
            <button
              onClick={() => alert('You clicked on Festival, Fair, Bazaar')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20231122/1700651289_29NSBm.jpg"
                alt="Festival, Fair, Bazaar"
                style={{ borderRadius: '12px' }}
              />
              <p>Festival, Fair, Bazaar</p>
            </button>
          </div>
          <div className="format-card">
            <button
              onClick={() => alert('You clicked on Konser')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20231122/1700651306_5AcIXJ.jpg"
                alt="Konser"
                style={{ borderRadius: '12px' }}
              />
              <p>Konser</p>
            </button>
          </div>
          <div className="format-card">
            <button
              onClick={() => alert('You clicked on Pertandingan')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20231122/1700651330_eg3sVM.jpg"
                alt="Pertandingan"
                style={{ borderRadius: '12px' }}
              />
              <p>Pertandingan</p>
            </button>
          </div>
          <div className="format-card">
            <button
              onClick={() => alert('You clicked on Exhibition, Expo, Pameran')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20231122/1700651351_5rY32Z.jpg"
                alt="Exhibition, Expo, Pameran"
                style={{ borderRadius: '12px' }}
              />
              <p>Exhibition, Expo, Pameran</p>
            </button>
          </div>
          <div className="format-card">
            <button
              onClick={() => alert('You clicked on Workshop')}
              style={{ padding: 0, border: 'none', background: 'transparent' }}
            >
              <img
                src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20231122/1700651376_ap3iX8.jpg"
                alt="Workshop"
                style={{ borderRadius: '12px' }}
              />
              <p>Workshop</p>
            </button>
          </div>
        </div>
      </div>

      {/* Cari Menurut Harga */}
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Cari menurut harga
      </h3>
      <div style={{ display: 'flex', gap: '20px', overflowX: 'scroll' }}>
        <div className="price-card" style={{ width: '100%' }}>
          <button
            onClick={() => alert('You clicked on Berbayar')}
            style={{ padding: 0, border: 'none', background: 'transparent' }}
          >
            <img
              src="https://assets.loket.com/web/assets/img/page-search-ticket.jpg"
              alt="Berbayar"
              style={{ width: '200%', borderRadius: '12px' }}
            />
            <p>Berbayar</p>
          </button>
        </div>
        <div className="price-card" style={{ width: '100%' }}>
          <button
            onClick={() => alert('You clicked on Gratis')}
            style={{ padding: 0, border: 'none', background: 'transparent' }}
          >
            <img
              src="https://assets.loket.com/web/assets/img/page-search-ticket.jpg"
              alt="Gratis"
              style={{ width: '200%', borderRadius: '12px' }}
            />
            <p>Gratis</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
