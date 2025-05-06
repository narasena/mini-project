'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import React, { useEffect } from 'react';
import apiInstance from '@/utils/axiosInstance';
import Link from 'next/link';
import { IEvent } from '@/types/event.type';

export default function HomePage() {
  const [events, setEvents] = React.useState<IEvent[]>([]);
  console.log(events)
  const handleGetEvents = async () => {
    try {
      const response = await apiInstance.get('/events');
      setEvents(response.data.events);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleGetEvents();
  },[])
  return (
    <div className="px-4 md:px-8 pt-6 pb-12">
      {/* Carousel Banner */}
      <div className="rounded-xl overflow-hidden shadow-md">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="w-full h-[200px] md:h-[250px]"
        >
          {[
            'https://assets.loket.com/images/ss/1744886125_j5kbXb.jpg',
            'https://assets.loket.com/images/ss/1742964569_FhQTIw.jpg',
            'https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1721024027_4fclnB.jpg',
            'https://assets.loket.com/images/ss/1742800117_WkGnwz.png',
            'https://assets.loket.com/images/ss/1740817478_fnv50E.png',
            'https://assets.loket.com/images/ss/1744610628_nM3bBm.jpg',
            'https://assets.loket.com/images/ss/1744873923_9Bbcso.jpg',
            'https://assets.loket.com/images/ss/1735787178_LI1sWF.jpg',
            'https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg',
          ].map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Banner ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-left">Event Pilihan</h2>
        <div className="mt-6">
          <Swiper
            spaceBetween={16} // Jarak antar card
            slidesPerView={2} // Default jumlah slide per tampilan
            loop={false} // Nonaktifkan loop agar tidak melampaui event ke-10
            breakpoints={{
              640: {
                slidesPerView: 3, // 3 slides on medium screens
              },
              768: {
                slidesPerView: 4, // 4 slides on large screens
              },
            }}
            autoplay={{ delay: 5000 }} // Waktu jeda antara slide
            pagination={{ clickable: true }} // Navigasi dengan pagination
            className="pb-2"
            navigation={{
              prevEl: '.swiper-button-prev', // tombol kiri
              nextEl: '.swiper-button-next', // tombol kanan
            }}
          >

            {events.map((event:IEvent, index) => (
              <SwiperSlide key={index}>
                <Link href={`/event/${event.id}`}>
              <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
                <img
                  src={event?.bannerImgUrl!}
                  alt="Grand Final Ambassadors of UPH Medan Campus 2025"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-semibold leading-tight">
                    {event.eventName}
                  </h3>
                  <p className="mt-1 text-gray-600 text-xs">{event.eventStartDate}</p>
                  <p className="text-sm font-bold mt-1">{event.ticketPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                  <p className="mt-1 text-gray-500 text-xs">
                    {event.organizerName}
                  </p>
                </div>
              </div>
                </Link>
            </SwiperSlide>
              
            ))}

            
          </Swiper>
        </div>
      </section>

      <section className="mt-12">
        <div className="w-full h-[200px] md:h-[250px] overflow-hidden rounded-xl shadow-md">
          <img
            src="https://assets.loket.com/images/ss/ss/section/1743547116_iEo9aL.jpg"
            alt="Banner Section"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="mt-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold text-left">Locket Screen</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'https://assets.loket.com/images/ss/ss/section/1742957854_Ch75jn.jpg',
            'https://assets.loket.com/images/ss/ss/section/1742957991_0SOhq2.jpg',
            'https://assets.loket.com/images/ss/ss/section/1745296032_dHPzTW.jpg',
            'https://assets.loket.com/images/ss/ss/section/1745296099_w2gVv5.jpg',
          ].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[220px] md:w-[280px] h-[420px] md:h-[500px] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={`LOKET Screen ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Event Pilihan Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-left">
          Rekomendasi Event Terkini
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Event Card 1 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744886125_j5kbXb.jpg"
              alt="YES CONFERENCE"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                YES CONFERENCE
              </h3>
              <p className="mt-1 text-gray-600 text-xs">27 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp100.000</p>
              <p className="mt-1 text-gray-500 text-xs">YES CONFERENCE</p>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1742964569_FhQTIw.jpg"
              alt="Flow World Tour Jakarta"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Flow World Tour "Anime Shibari 2024 - 2025" - Jakarta
              </h3>
              <p className="mt-1 text-gray-600 text-xs">02 May 2025</p>
              <p className="text-sm font-bold mt-1">Rp1.000.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                PT. FRIEDRICE ENTERTAINTAMENT INDONESIA
              </p>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1721024027_4fclnB.jpg"
              alt="SUPERMUSIC INTIMATE SESSIONS 2025 - MADIUN"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                SUPERMUSIC INTIMATE SESSIONS 2025 - MADIUN
              </h3>
              <p className="mt-1 text-gray-600 text-xs">29 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp75.000</p>
              <p className="mt-1 text-gray-500 text-xs">SUPERMUSIC</p>
            </div>
          </div>

          {/* Event Card 5 */}
        </div>
      </section>

      {/* Event Pilihan Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-left">Healing Dulu Yuk</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {/* Event Card 1 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744886125_j5kbXb.jpg"
              alt="YES CONFERENCE"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                YES CONFERENCE
              </h3>
              <p className="mt-1 text-gray-600 text-xs">27 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp100.000</p>
              <p className="mt-1 text-gray-500 text-xs">YES CONFERENCE</p>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1742964569_FhQTIw.jpg"
              alt="Flow World Tour Jakarta"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Flow World Tour "Anime Shibari 2024 - 2025" - Jakarta
              </h3>
              <p className="mt-1 text-gray-600 text-xs">02 May 2025</p>
              <p className="text-sm font-bold mt-1">Rp1.000.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                PT. FRIEDRICE ENTERTAINTAMENT INDONESIA
              </p>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1721024027_4fclnB.jpg"
              alt="SUPERMUSIC INTIMATE SESSIONS 2025 - MADIUN"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                SUPERMUSIC INTIMATE SESSIONS 2025 - MADIUN
              </h3>
              <p className="mt-1 text-gray-600 text-xs">29 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp75.000</p>
              <p className="mt-1 text-gray-500 text-xs">SUPERMUSIC</p>
            </div>
          </div>

          {/* Event Card 5 */}
        </div>
      </section>
      <section className="mt-12 px-4 md:px-8">
        <img
          src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20240715/1721034659_aVktNr.jpg"
          alt="Image Above Footer"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </section>

      <section className="mt-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Creator Favorit</h2>
        <div className="flex justify-start gap-3 overflow-x-auto">
          {/* Creator 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20230617174508_648d8eb49e004.jpg"
              alt="Baca Di Tebet"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">Baca Di Tebet</p>
          </div>

          {/* Creator 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20241104144931_67287c8b3ae7f.png"
              alt="KRAPELA"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">KRAPELA</p>
          </div>

          {/* Creator 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20210805101639_610b581730e66.png"
              alt="Sekolah Cikal"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">Sekolah Cikal</p>
          </div>

          {/* Creator 4 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20221103170225_636391b12b9b4.png"
              alt="Voluntrip By Kitabisa"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">Voluntrip By Kitabisa</p>
          </div>

          {/* Creator 5 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20220815105547.jpg"
              alt="Ancol Taman Impian"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">Ancol Taman Impian</p>
          </div>

          {/* Creator 6 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20230317022406.png"
              alt="CK Star Entertainment"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">CK Star Entertainment</p>
          </div>

          {/* Creator 7 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20191014174608_5da451f0acdbc.png"
              alt="Plainsong Live"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">Plainsong Live</p>
          </div>

          {/* Creator 8 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20220122215822_61ec1b8e7ab71.png"
              alt="Rumah Hantu Jakarta"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">Rumah Hantu Jakarta</p>
          </div>

          {/* Creator 9 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20230907122905_64f95fa1c091e.jpg"
              alt="Indonesia Syiar Network"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">Indonesia Syiar Network</p>
          </div>

          {/* Creator 10 */}
          <div className="flex flex-col items-center">
            <img
              src="https://assets.loket.com/neo/production/images/organization/20240204151700_65bf47fc50afe.jpg"
              alt="Art of Living Indonesia"
              className="w-[60px] h-[60px] rounded-full object-cover shadow-md"
            />
            <p className="text-sm mt-2">Art of Living Indonesia</p>
          </div>
        </div>
      </section>

      {/* Event Pilihan Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-center">
          Nikmati Keseruan Minggu Ini
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Event Card 1 (sama dengan sebelumnya) */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-left mb-6">Event Categories</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {/* Wrapper tiap item dibungkus dengan min-w agar tetap horizontal */}

          {/* Festival */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://www.batiqa.com/upload/news/l/festival-budaya-indonesia-tari-kecak-bali_o8334.jpg"
              alt="Festival"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Festival
            </div>
          </div>

          {/* Fair */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://res.cloudinary.com/sv-frederick-county/image/upload/v1744329600/cms_resources/clients/frederickcountymd/Great_Frederick_Fair_1_1__0ee3f77f-b9f0-40fe-9de1-1a3f008392a3.jpg"
              alt="Fair"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Fair
            </div>
          </div>

          {/* Bazaar */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://st.depositphotos.com/2963315/3840/v/450/depositphotos_38409245-stock-illustration-fruit-and-veg-shop-on.jpg"
              alt="Bazaar"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Bazaar
            </div>
          </div>

          {/* Konser */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://ik.imagekit.io/tvlk/blog/2024/02/Daftar-Jadwal-Konser-Indonesia-2024-Traveloka-Xperience.webp"
              alt="Konser"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Konser
            </div>
          </div>

          {/* Pertandingan */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://i.ytimg.com/vi/ND0LwlICb3g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBeM97wxqOwSSFZtxqhcGsQM4s8-A"
              alt="Pertandingan"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Pertandingan
            </div>
          </div>

          {/* Exhibition */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://balisunsetroadconvention.com/wp-content/uploads/2024/10/Event-Exhibition-adalah.jpg"
              alt="Exhibition"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Exhibition
            </div>
          </div>

          {/* Expo */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://coachfianda.com/wp-content/uploads/2018/05/9-trade-expo-1.jpg"
              alt="Expo"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Expo
            </div>
          </div>

          {/* Pameran */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://cdn1-production-images-kly.akamaized.net/9uA-iT7_l8Q7waGHU0dEgr2-DbY=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5045248/original/018658600_1733898180-1733893612629_tujuan-pameran-karya-seni-rupa-1.jpg"
              alt="Pameran"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Pameran
            </div>
          </div>

          {/* Konferensi */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://www.humasindonesia.id/images/berita/humas-indonesia-mengenal-4-jenis-konferensi-pers-72.jpeg"
              alt="Konferensi"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Konferensi
            </div>
          </div>

          {/* Workshop */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://liberty-society.com/cdn/shop/articles/Perbedaan_Workshop_dan_Pelatihan_1100x.png?v=1718985608"
              alt="Workshop"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Workshop
            </div>
          </div>

          {/* Pertunjukan */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://3.bp.blogspot.com/-Vx-0KqLBXa0/VQerGStRXtI/AAAAAAAAARc/YresV0rBL3M/s1600/_MG_6005.jpg"
              alt="Pertunjukan"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Pertunjukan
            </div>
          </div>

          {/* Atraksi */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://getlost.id/wp-content/uploads/2020/07/USJ_1559198060.jpg"
              alt="Atraksi Theme Park"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Atraksi Theme Park
            </div>
          </div>

          {/* Akomodasi */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://res.klook.com/image/upload/c_fill,w_750,h_563/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/rvz2ii58kvzqywx9rp0i.jpg"
              alt="Akomodasi"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Akomodasi
            </div>
          </div>

          {/* Talk Show */}
          <div className="flex flex-col items-center min-w-[120px] cursor-pointer">
            <img
              src="https://img.freepik.com/premium-vector/podcast-microphone-vector-illustration-music_1281985-13581.jpg?semt=ais_hybrid&w=740"
              alt="Talk Show"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 mt-2">
              Seminar Talk Show
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className="flex overflow-x-auto space-x-4 pb-2">
          {/* Anak, Keluarga */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Anak, Keluarga clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3088/3088392.png"
              alt="Anak, Keluarga"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Anak, Keluarga</h2>
            </div>
          </div>

          {/* Bisnis */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Bisnis clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/9139/9139670.png"
              alt="Bisnis"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Bisnis</h2>
            </div>
          </div>

          {/* Desain, Foto, Video */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Desain, Foto, Video clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/6088/6088711.png"
              alt="Desain, Foto, Video"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Desain, Foto, Video</h2>
            </div>
          </div>

          {/* Fashion, Kecantikan */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Fashion & Beauty clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2684/2684489.png"
              alt="Fashion"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Fashion & Beauty</h2>
            </div>
          </div>

          {/* Film, Sinema */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Film & Sinema clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1/1854.png"
              alt="Film"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Film & Sinema</h2>
            </div>
          </div>

          {/* Game, E-Sports */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Game & E-Sports clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/686/686589.png"
              alt="Game"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Game & E-Sports</h2>
            </div>
          </div>

          {/* Hobi, Kerajinan Tangan */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Hobi & Kerajinan clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/7081/7081352.png"
              alt="Hobi"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Hobi & Kerajinan</h2>
            </div>
          </div>

          {/* Investasi, Saham */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Investasi & Saham clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2300/2300422.png"
              alt="Investasi"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Investasi & Saham</h2>
            </div>
          </div>

          {/* Karir, Pengembangan Diri */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Karir & Diri clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/10822/10822278.png"
              alt="Karir"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Karir & Diri</h2>
            </div>
          </div>

          {/* Keagamaan */}
          <div
            className="flex items-center bg-white shadow rounded-lg p-3 min-w-[250px]"
            onClick={() => alert('Keagamaan clicked')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/11475/11475091.png"
              alt="Keagamaan"
              className="w-12 h-12 object-contain"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">Keagamaan</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Event Pilihan Section */}
      {/* Populer Di Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-left">Populer di</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Event Card 1 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744886125_j5kbXb.jpg"
              alt="YES CONFERENCE"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                YES CONFERENCE
              </h3>
              <p className="mt-1 text-gray-600 text-xs">27 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp100.000</p>
              <p className="mt-1 text-gray-500 text-xs">YES CONFERENCE</p>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1742964569_FhQTIw.jpg"
              alt="Flow World Tour Jakarta"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Flow World Tour "Anime Shibari 2024 - 2025" - Jakarta
              </h3>
              <p className="mt-1 text-gray-600 text-xs">02 May 2025</p>
              <p className="text-sm font-bold mt-1">Rp1.000.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                PT. FRIEDRICE ENTERTAINTAMENT INDONESIA
              </p>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1721024027_4fclnB.jpg"
              alt="SUPERMUSIC INTIMATE SESSIONS 2025 - MADIUN"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                SUPERMUSIC INTIMATE SESSIONS 2025 - MADIUN
              </h3>
              <p className="mt-1 text-gray-600 text-xs">29 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp75.000</p>
              <p className="mt-1 text-gray-500 text-xs">SUPERMUSIC</p>
            </div>
          </div>

          {/* Event Card 5 */}
        </div>
      </section>

      {/* Event Pilihan Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-left">
          Nikmati Keseruan Minggu Ini
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Event Card 1 (sama dengan sebelumnya) */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden text-sm">
            <img
              src="https://assets.loket.com/images/ss/1744096102_YJdAlk.jpg"
              alt="Grand Final Ambassadors of UPH Medan Campus 2025"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                Grand Final Ambassadors of UPH Medan Campus 2025
              </h3>
              <p className="mt-1 text-gray-600 text-xs">26 Apr 2025</p>
              <p className="text-sm font-bold mt-1">Rp200.000</p>
              <p className="mt-1 text-gray-500 text-xs">
                Ambassadors of UPH Medan Campus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Button to explore more events */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 focus:outline-none">
          Jelajah ke lebih banyak event
        </button>
      </div>

      {/* Footer tanpa padding kiri kanan */}
    </div>
  );
}
