'use client'
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { CiSearch } from 'react-icons/ci';

export default function DashboardMyEventPage() {
  const [activeTab, setActiveTab] = React.useState<'active' | 'draft' | 'past'>(
    'active',
  );
  const tabStyles = {
    active: ' active text-[#151416]',
    inactive: ' text-[#8e919b]',
  };
  const handleTabClick = (tab: 'active' | 'draft' | 'past') => {
    setActiveTab(tab);
  };
  const eventSorts = [
    'Waktu Mulai (Terdekat)',
    'Waktu Mulai (Terjauh)',
    'Nama Event (A-Z)',
    'Nama Event (Z-A)',
  ];
  return (
    <div className="page-layout padding-remove-top p-[25px_40px]">
      <div className="flex flex-wrap -ml-[30px]">
        {/* search box and order select  */}
        <div className="w-full max-w-full pl-[30px]">
          <div className="grid grid-cols-[1fr_.5fr] items-center -ml-[15px]">
            <form className="w-full max-w-full pl-[15px]">
              <div className="dashboard-search-input relative flex ">
                <input
                  type="text"
                  placeholder="Cari Event Saya"
                  className="bg-[#f5f7fa] rounded-sm p-[5px_80px_5px_15px] h-10 align-middle inline-block text-[#666] outline-none w-full "
                />
                <button
                  type="submit"
                  className="h-full absolute right-0 flex-middle-center leading-7 s-button-primary p-[5px_25px] font-normal text-base box-shadow-small"
                >
                  <span className="text-[#fff] text-[20px] leading-[20px]">
                    <CiSearch />
                  </span>
                </button>
              </div>
            </form>
            <div className="flex justify-end w-full max-w-full pl-[15px]">
              <div className="flex items-center font-medium !mr-2.5 text-[#666666]">
                Urutkan:
              </div>
              <div className="relative ">
                <select className="py-[5px] pl-[13px] pr-[25px] block w-[210px] h-full text-sm font-normal leading-7 text-[#666666] border border-[#dadade] rounded-sm  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none outline-none">
                  {eventSorts.map((eventSort, index) => (
                    <option key={index} value={eventSort}>
                      {eventSort}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* event tab title  */}
        <div className="mt-[30px] pl-[30px] w-full max-w-full after:border-b-2 after:border-[#d7d7d7]">
          <div className="tabs-nav relative w-full flex !uppercase">
            <div
              onClick={() => handleTabClick('active')}
              className={
                'relative max-w-1/4 pb-4 cursor-pointer tracking-[0.3px] flex-1 text-center border-b-[#e8e8e8] font-medium leading-6' +
                (activeTab === 'active' ? tabStyles.active : tabStyles.inactive)
              }
            >
              Event Aktif
            </div>
            <div
              onClick={() => handleTabClick('draft')}
              className={
                'relative max-w-1/4 pb-4 cursor-pointer tracking-[0.3px] flex-1 text-center border-b-[#e8e8e8] font-medium leading-6' +
                (activeTab === 'draft' ? tabStyles.active : tabStyles.inactive)
              }
            >
              Event Draf
            </div>
            <div
              onClick={() => handleTabClick('past')}
              className={
                'relative max-w-1/4 pb-4 cursor-pointer tracking-[0.3px] flex-1 text-center border-b-[#e8e8e8] font-medium leading-6' +
                (activeTab === 'past' ? tabStyles.active : tabStyles.inactive)
              }
            >
              Event Lalu
            </div>
          </div>
        </div>
        {/* event tab content no data */}
        <div className="mt-[30px] mb-5 pl-5 text-center w-full max-w-full">
          <div className="lokasi-event padding-large p-[30px] xl:p-[70px]">
            <div className="mb-5 relative flex-middle-center">
              <Image
                src={'/images/icon-event-first-user.svg'}
                width={232}
                height={137}
                alt="Events"
              />
            </div>
            <Link href={'/member/events'} className='s-button-primary s-button'>Buat Event</Link>
            <h2 className='mb-[5px] pr-[25px] text-[19px] text-[#595959] font-medium whitespace-nowrap overflow-ellipsis'>{'Hai, terima kasih telah menggunakan layanan LOKET'}</h2>
            <p className='text-sm text-[#595959]'>{'Silahkan buat eventmu dengan klik tombol "Buat Event" di atas'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
