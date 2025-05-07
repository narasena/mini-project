'use client';
import { useState } from 'react';

export default function EventListingPage() {
  const [events] = useState([
    {
      title: '[CITRA COSMETIC PERINTIS] WARDAH COLOURVERSE',
      date: '25 Apr - 30 Apr 2025',
      price: 'Rp155.441',
      organizer: '@halalbeautychic_mks',
      image:
        'https://assets.loket.com/neo/production/images/banner/20250409132921_67f613c12a144.jpg',
    },
    {
      title: 'Badzone Modification Contest',
      date: '03 May 2025',
      price: 'Rp35.000',
      organizer: 'Badzone Modification',
      image:
        'https://assets.loket.com/neo/production/images/banner/20250423140359_680890df1dadd.jpg',
    },
    {
      title: 'P-LAND: K-Pop Art Market Vol.4',
      date: '03 May - 04 May 2025',
      price: 'Rp30.000',
      organizer: 'PLAND ART MARKET',
      image:
        'https://assets.loket.com/neo/production/images/banner/20250423175426_6808c6e28ccbb.jpg',
    },
    {
      title: 'PURWAKARTA MUSIC FEST & BAZAR EXPO 2025',
      date: '04 May 2025',
      price: 'Rp25.000',
      organizer: 'PURWAKARTA MUSIC FEST',
      image:
        'https://assets.loket.com/neo/production/images/banner/20250409132921_67f613c12a144.jpg',
    },
    {
      title: 'Daebak Market',
      date: '10 May - 11 May 2025',
      price: 'Rp30.000',
      organizer: 'Passion Project',
      image:
        'https://assets.loket.com/neo/production/images/banner/20250423140359_680890df1dadd.jpg',
    },
    {
      title: 'OKAERI FESTIVAL',
      date: '14 Jun 2025',
      price: 'Rp25.000',
      organizer: 'okaeri festival',
      image:
        'https://assets.loket.com/neo/production/images/banner/20250423175426_6808c6e28ccbb.jpg',
    },
    {
      title: 'MUSIC FESTIVAL',
      date: '15 Jun 2025',
      price: 'Rp50.000',
      organizer: 'ARIOS DJ House',
      image:
        'https://assets.loket.com/neo/production/images/banner/20250409132921_67f613c12a144.jpg',
    },
  ]);

  return (
    <div className="container mx-auto flex gap-6 mt-10">
      {/* Sidebar Filter */}
      <aside className="w-1/4 space-y-6">
        <div>
          <h3 className="font-bold mb-2">Filter</h3>
          <div className="flex items-center justify-between">
            <span>Event Online</span>
            <input type="checkbox" className="toggle toggle-sm" />
          </div>
        </div>

        <div>
          <details className="collapse">
            <summary className="collapse-title font-medium">Lokasi</summary>
            <div className="collapse-content">
              <input
                type="text"
                className="input input-sm w-full"
                placeholder="Cari Lokasi..."
              />
            </div>
          </details>
        </div>

        <div>
          <details className="collapse">
            <summary className="collapse-title font-medium">Format</summary>
            <div className="collapse-content">
              <p>Festival, Fair, Bazaar</p>
            </div>
          </details>
        </div>

        <div>
          <details className="collapse">
            <summary className="collapse-title font-medium">Topik</summary>
            <div className="collapse-content">
              <p>Semua Topik</p>
            </div>
          </details>
        </div>

        <div>
          <details className="collapse">
            <summary className="collapse-title font-medium">Waktu</summary>
            <div className="collapse-content">
              <p>Pilih Tanggal</p>
            </div>
          </details>
        </div>

        <div>
          <h4 className="font-medium">Harga</h4>
          <p>Berbayar</p>
        </div>
      </aside>

      {/* Event Listing */}
      <main className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Event</h2>
          <select className="select select-sm">
            <option>Waktu Mulai (Terdekat)</option>
          </select>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-3 gap-4">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold">{event.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                <p className="text-sm font-bold mt-2">{event.price}</p>
                <p className="text-xs text-gray-600 mt-1">{event.organizer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-6">
          <div className="join">
            <button className="btn btn-sm">1</button>
            <button className="btn btn-sm">2</button>
          </div>
        </div>
      </main>
    </div>
  );
}
