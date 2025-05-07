'use client';
import { SetStateAction, useState } from 'react';
import Footer from '@/components/footer';
const eventsData = [
  {
    title: 'Badzone Modification Contest',
    date: '03 May 2025',
    price: 'Rp35.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250228034628_67c0cf247fff4.jpg',
    location: 'DKI Jakarta',
    eventType: 'Fair',
    topic: 'Modification',
    online: false,
    link: '/events/badzone-modification',
  },
  {
    title: 'P-LAND: K-Pop Art Market Vol.4',
    date: '03 May 2025',
    price: 'Rp30.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250415131719_67fdf9efc7c25.jpg',
    location: 'Surabaya',
    eventType: 'Bazaar',
    topic: 'K-pop',
    online: false,
    link: '/events/pland-market',
  },
  {
    title: 'PURWAKARTA MUSIC FEST & BAZAR EXPO 2025',
    date: '04 May 2025',
    price: 'Rp25.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250416204233_67ffb3c90bc3e.jpg',
    location: 'Purwakarta',
    eventType: 'Festival',
    topic: 'Music',
    online: true,
    link: '/events/purwakarta-music-fest',
  },
  {
    title: 'Feel The Heat with DJ Panda',
    date: '28 Apr - 29 Apr 2025',
    price: 'Rp50.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250425182144_680b7048b341f.jpg',
    location: 'Bandung',
    eventType: 'Concert',
    topic: 'Music',
    online: false,
    link: '/events/feel-the-heat',
  },
  {
    title: 'YOUTH REVIVAL WITH SIDNEY MOHEDE',
    date: '27 Apr - 29 Apr 2025',
    price: 'Gratis',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250419124210_680337b2dfe4f.jpg',
    location: 'Jakarta',
    eventType: 'Social Gathering',
    topic: 'Youth',
    online: true,
    link: '/events/youth-revival',
  },
  {
    title: 'Sales Zoo: Mapping your daily business situation!',
    date: '29 Apr 2025',
    price: 'Rp350.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20240517052506.jpg',
    location: 'Surabaya',
    eventType: 'Workshop',
    topic: 'Business',
    online: false,
    link: '/events/sales-zoo',
  },
  {
    title: 'Creative Workshop 2025',
    date: '10 May 2025',
    price: 'Rp100.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250228034628_67c0cf247fff4.jpg',
    location: 'Bandung',
    eventType: 'Workshop',
    topic: 'Creativity',
    online: false,
    link: '/events/creative-workshop',
  },
  {
    title: 'Tech Expo 2025',
    date: '12 May 2025',
    price: 'Rp200.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250416204233_67ffb3c90bc3e.jpg',
    location: 'Surabaya',
    eventType: 'Expo',
    topic: 'Technology',
    online: false,
    link: '/events/tech-expo',
  },
  {
    title: 'Cooking Masterclass 2025',
    date: '15 May 2025',
    price: 'Rp150.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250415131719_67fdf9efc7c25.jpg',
    location: 'Bali',
    eventType: 'Workshop',
    topic: 'Cooking',
    online: false,
    link: '/events/cooking-masterclass',
  },
  {
    title: 'Jazz Night 2025',
    date: '20 May 2025',
    price: 'Rp250.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250425182144_680b7048b341f.jpg',
    location: 'Yogyakarta',
    eventType: 'Concert',
    topic: 'Music',
    online: false,
    link: '/events/jazz-night',
  },
  // Adding more events to make a total of 20 events.
  ...Array.from({ length: 10 }).map((_, index) => ({
    title: `Event ${index + 11}`,
    date: '01 June 2025',
    price: 'Rp300.000',
    imageUrl:
      'https://assets.loket.com/neo/production/images/banner/20250228034628_67c0cf247fff4.jpg',
    location: 'Jakarta',
    eventType: 'Festival',
    topic: 'Entertainment',
    online: true,
    link: `/events/event-${index + 11}`,
  })),
];

export default function EventsPage() {
  const [filter, setFilter] = useState({
    eventOnline: false,
    location: '',
    format: '',
    topic: '',
    date: '',
    price: '',
  });

  const [eventsPerPage, setEventsPerPage] = useState(8); // Default to 8 events per page
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (e: { target: { name: any; value: any } }) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: { target: { name: any; checked: any } }) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.checked,
    });
  };

  const handleEventsPerPageChange = (e: { target: { value: string } }) => {
    setEventsPerPage(parseInt(e.target.value, 10)); // Update number of events per page
    setCurrentPage(1); // Reset to first page when the number of events per page changes
  };

  // Pagination and filtering logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsData.slice(indexOfFirstEvent, indexOfLastEvent);

  const filteredEvents = currentEvents.filter((event) => {
    if (filter.eventOnline && !event.online) return false;
    if (filter.location && !event.location.includes(filter.location))
      return false;
    if (filter.format && !event.eventType.includes(filter.format)) return false;
    if (filter.topic && !event.topic.includes(filter.topic)) return false;
    if (filter.date && !event.date.includes(filter.date)) return false;
    if (filter.price && !event.price.includes(filter.price)) return false;
    return true;
  });

  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Filter Sidebar */}
      <aside className="w-full md:w-64 bg-gray-100 p-6 rounded-md">
        <h3 className="text-xl font-semibold mb-4">Filter</h3>

        {/* Event Online Checkbox */}
        <div className="mt-4">
          <input
            type="checkbox"
            name="eventOnline"
            checked={filter.eventOnline}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label className="font-semibold">Event Online</label>
        </div>

        {/* Location Filter */}
        <div className="mt-4">
          <h4 className="font-semibold">Lokasi</h4>
          <select
            name="location"
            value={filter.location}
            onChange={handleFilterChange}
            className="mt-2 w-full p-2 border rounded-md"
          >
            <option value="">Cari lokasi ...</option>
            <option value="Bali">Bali</option>
            <option value="Bandung">Bandung</option>
            <option value="DKI Jakarta">DKI Jakarta</option>
            <option value="Kota Yogyakarta">Kota Yogyakarta</option>
            <option value="Surabaya">Surabaya</option>
          </select>
        </div>

        {/* Format Filter */}
        <div className="mt-4">
          <h4 className="font-semibold">Format</h4>
          <select
            name="format"
            value={filter.format}
            onChange={handleFilterChange}
            className="mt-2 w-full p-2 border rounded-md"
          >
            <option value="">Semua Format</option>
            <option value="Festival, Fair, Bazaar">
              Festival, Fair, Bazaar
            </option>
            <option value="Konser">Konser</option>
            <option value="Pertandingan">Pertandingan</option>
            <option value="Exhibition, Expo, Pameran">
              Exhibition, Expo, Pameran
            </option>
            <option value="Konferensi">Konferensi</option>
            <option value="Workshop">Workshop</option>
            <option value="Pertunjukan">Pertunjukan</option>
            <option value="Atraksi, Theme Park">Atraksi, Theme Park</option>
          </select>
        </div>

        {/* Topic Filter */}
        <div className="mt-4">
          <h4 className="font-semibold">Topik</h4>
          <select
            name="topic"
            value={filter.topic}
            onChange={handleFilterChange}
            className="mt-2 w-full p-2 border rounded-md"
          >
            <option value="">Semua Topik</option>
            <option value="Anak, Keluarga">Anak, Keluarga</option>
            <option value="Bisnis">Bisnis</option>
            <option value="Desain, Foto, Video">Desain, Foto, Video</option>
            <option value="Fashion, Kecantikan">Fashion, Kecantikan</option>
            <option value="Film, Sinema">Film, Sinema</option>
            <option value="Game, E-Sports">Game, E-Sports</option>
            <option value="Hobi, Kerajinan Tangan">
              Hobi, Kerajinan Tangan
            </option>
            <option value="Investasi, Saham">Investasi, Saham</option>
            <option value="Karir, Pengembangan Diri">
              Karir, Pengembangan Diri
            </option>
            <option value="Keagamaan">Keagamaan</option>
            <option value="Kesehatan, Kebugaran">Kesehatan, Kebugaran</option>
            <option value="Keuangan, Finansial">Keuangan, Finansial</option>
            <option value="Lingkungan Hidup">Lingkungan Hidup</option>
            <option value="Makanan, Minuman">Makanan, Minuman</option>
            <option value="Marketing">Marketing</option>
            <option value="Musik">Musik</option>
            <option value="Olahraga">Olahraga</option>
            <option value="Otomotif">Otomotif</option>
            <option value="Sains, Teknologi">Sains, Teknologi</option>
            <option value="Seni, Budaya">Seni, Budaya</option>
            <option value="Sosial, Hukum, Politik">
              Sosial, Hukum, Politik
            </option>
            <option value="Standup Comedy">Standup Comedy</option>
            <option value="Pendidikan, Beasiswa">Pendidikan, Beasiswa</option>
            <option value="Tech, Start-Up">Tech, Start-Up</option>
            <option value="Wisata & Liburan">Wisata & Liburan</option>
          </select>
        </div>

        {/* Time Filter */}
        <div className="mt-4">
          <h4 className="font-semibold">Waktu</h4>
          <select
            name="date"
            value={filter.date}
            onChange={handleFilterChange}
            className="mt-2 w-full p-2 border rounded-md"
          >
            <option value="">Semua Waktu</option>
            <option value="Hari Ini">Hari Ini</option>
            <option value="Besok">Besok</option>
            <option value="Akhir Pekan">Akhir Pekan</option>
            <option value="Minggu Ini">Minggu Ini</option>
            <option value="Minggu Depan">Minggu Depan</option>
            <option value="Bulan Ini">Bulan Ini</option>
            <option value="Bulan Depan">Bulan Depan</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="mt-4">
          <h4 className="font-semibold">Harga</h4>
          <select
            name="price"
            value={filter.price}
            onChange={handleFilterChange}
            className="mt-2 w-full p-2 border rounded-md"
          >
            <option value="">Semua Harga</option>
            <option value="Berbayar">Berbayar</option>
            <option value="Gratis">Gratis</option>
          </select>
        </div>
      </aside>

      {/* Event Grid */}
      <main className="flex-grow p-6">
        <h2 className="text-2xl font-bold">Event List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-md overflow-hidden text-sm"
            >
              <a href={event.link}>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-semibold">{event.title}</h3>
                  <p className="mt-1 text-gray-600 text-xs">{event.date}</p>
                  <p className="text-sm font-bold mt-1">{event.price}</p>
                  <p className="mt-1 text-gray-500 text-xs">{event.location}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Display events per page dropdown */}
        <div className="mt-6 flex justify-between">
          <select
            value={eventsPerPage}
            onChange={handleEventsPerPageChange}
            className="p-2 border rounded-md"
          >
            <option value="8">8 events per page</option>
            <option value="12">12 events per page</option>
            <option value="16">16 events per page</option>
          </select>

          {/* Pagination */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="px-4 py-2">{`Page ${currentPage}`}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg disabled:opacity-50"
              disabled={indexOfLastEvent >= eventsData.length}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
