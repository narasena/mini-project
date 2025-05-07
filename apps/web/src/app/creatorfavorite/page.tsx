// pages/index.tsx atau index.jsx
'use client';
// pages/index.tsx atau index.jsx
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('aktif');

  const events = [
    {
      title: 'Cikal Pop Up Class - Going on Safari - Bandung',
      date: '26 Apr 2025',
      price: 'Rp195.000',
      organizer: 'Sekolah Cikal',
    },
    {
      title: 'Cikal Pop Up Class - Going on Safari - Surabaya',
      date: '26 Apr 2025',
      price: 'Rp250.000',
      organizer: 'Sekolah Cikal',
    },
    {
      title: 'Cikal Pop Up Class - Going on Safari - Serpong',
      date: '26 Apr 2025',
      price: 'Rp250.000',
      organizer: 'Sekolah Cikal',
    },
    {
      title:
        'Glow & Go - A Sparkling Day for Moms & Kids with Cikal X SKINDA Clinic',
      date: '01 May 2025',
      price: 'Rp200.000',
      organizer: 'Sekolah Cikal',
    },
    {
      title: 'Cikal Pop Up Class - Little Scientist - Bandung',
      date: '17 May 2025',
      price: 'Rp195.000',
      organizer: 'Sekolah Cikal',
    },
    {
      title: 'Cikal Pop Up Class - Little Scientist - Lebak Bulus',
      date: '17 May 2025',
      price: 'Rp250.000',
      organizer: 'Sekolah Cikal',
    },
    {
      title: 'Cikal Pop Up Class - Little Scientist - Surabaya',
      date: '17 May 2025',
      price: 'Rp250.000',
      organizer: 'Sekolah Cikal',
    },
    {
      title: 'Cikal Pop Up Class - Little Scientist - Kemang',
      date: '17 May 2025',
      price: 'Rp250.000',
      organizer: 'Sekolah Cikal',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full">
        <img
          src="https://i.ytimg.com/vi/SeJDbcKKpwE/sddefault.jpg"
          alt="Welcome Banner"
          className="w-full h-60 object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto mt-8 px-4">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Sekolah Cikal</h2>
          <p className="text-sm text-gray-500 mt-4">Member Sejak 2020</p>
          <p className="text-sm text-gray-600 mt-4">
            Cikal dikenal sebagai komunitas pelajar sepanjang hayat yang
            berpusat pada anak sebagai subyek pendidikan.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Cikal mencakup Rumah Main Cikal (pra sekolah) dan Sekolah Cikal
            (taman kanak-kanak sampai sekolah menengah).
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Jl. Lebak Bulus II no. 16A, Cilandak, Jakarta Selatan
          </p>
          <div className="mt-4">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Organizer Facebook
            </a>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 ml-6">
          {/* Tabs */}
          <div className="flex space-x-4 border-b pb-2">
            <button
              onClick={() => setActiveTab('aktif')}
              className={`pb-2 ${activeTab === 'aktif' ? 'border-b-2 border-orange-500 font-bold' : 'text-gray-500'}`}
            >
              Event Aktif
            </button>
            <button
              onClick={() => setActiveTab('lalu')}
              className={`pb-2 ${activeTab === 'lalu' ? 'border-b-2 border-orange-500 font-bold' : 'text-gray-500'}`}
            >
              Event Lalu
            </button>
          </div>

          {/* Sorting */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">
              Menampilkan 1 - 8 dari total 13 events
            </p>
            <select className="border p-2 rounded text-sm">
              <option>Waktu Mulai (Terdekat)</option>
              <option>Waktu Mulai (Terlama)</option>
            </select>
          </div>

          {/* Events List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Image di atas */}
                <img
                  src="https://assets.loket.com/neo/production/images/banner/20250409132921_67f613c12a144.jpg"
                  alt="Event"
                  className="w-full h-32 object-cover"
                />
                {/* Event Content */}
                <div className="p-4">
                  <h4 className="font-semibold text-sm mb-2">{event.title}</h4>
                  <p className="text-xs text-gray-500">{event.date}</p>
                  <p className="font-bold mt-2">{event.price}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {event.organizer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500">Tampil: 8</p>
            <div className="flex space-x-2">
              <button className="border rounded px-3 py-1 text-sm hover:bg-gray-200">
                1
              </button>
              <button className="border rounded px-3 py-1 text-sm hover:bg-gray-200">
                2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
