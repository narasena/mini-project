'use client'
import useAuthStore from '@/lib/store/auth-store';
import { IEvent } from '@/types/event.type';
import apiInstance from '@/utils/axiosInstance';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaCalendarAlt } from 'react-icons/fa';
import { LuTicket } from 'react-icons/lu';
import { IoMdInformationCircle } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function DashboardMyEventPage() {
  const [activeTab, setActiveTab] = React.useState<'active' | 'draft' | 'past'>(
    'active',
  );
  const { token } = useAuthStore();
  console.log(token);
  const [myEvents, setMyEvents] = React.useState<IEvent[]>([]);
  let activeEvent:IEvent[] = []
  let draftEvent:IEvent[] = []
  let pastEvent: IEvent[] = []
  if(myEvents.length !== 0){
    activeEvent = myEvents.filter((event) => new Date(event.eventEndDate).getTime() > new Date().getTime());
    draftEvent = myEvents.filter((event) => event.isDraft === true);
    pastEvent = myEvents.filter((event) => new Date(event.eventEndDate).getTime() < new Date().getTime());
  }
  console.log(myEvents)
  console.log(activeEvent)
  const handleGetMyEvents = async () => {
    try {
      const response = await apiInstance.get('/events/my-events', { headers: { Authorization: `Bearer ${token}` } });
      console.log(response.data);
      setMyEvents(response.data.creatorEvents);
    } catch (error:any) {
      console.log(error.config);
      
    }
  };
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
  const EventNoData = (): JSX.Element => {
    return (
      
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
        <Link href={'/buat-event'} className="c-button-primary c-button">
          Buat Event
        </Link>
        <h2 className="mb-[5px] pr-[25px] text-[19px] text-[#595959] font-medium whitespace-nowrap overflow-ellipsis">
          {'Hai, terima kasih telah menggunakan layanan LOKET'}
        </h2>
        <p className="text-sm text-[#595959]">
          {'Silahkan buat eventmu dengan klik tombol "Buat Event" di atas'}
        </p>
      </div>
    </div>
    )
  }
  React.useEffect(() => {
    handleGetMyEvents();
  },[activeTab, token])
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
        {activeTab === 'active' && activeEvent.length === 0 && <EventNoData />}
        {activeTab === 'draft' && draftEvent.length === 0 && <EventNoData />}
        {activeTab === 'past' && pastEvent.length === 0 && <EventNoData />}
        
        {/* event tab content */}
        {activeTab === 'active' && activeEvent.length > 0 && (
          
          activeEvent.map((event, index) => {
            return (
              <div className="panel" key={index}>
                              <div className="invoice-list grid grid-rows-[1fr] gap-y-7">
                                <div className="invoice-item shadow-[0px_4px_8px_rgba(30,44,106,0.1)] rounded-lg">
                                  <div className="invoice-item-header p-[24px_24px_16px] flex-middle-between ">
                                    <div className="invoice-status">
                                      
                                    </div>
                                    <div className="invoice-actions">
                                      <div className="text-2xl text-[#494a4a]">
                                        <BsThreeDotsVertical />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="invoice-item-content sm:p-6 sm:grid sm:grid-cols-[1fr_auto] gap-4 border-t border-[#e8e8e8]">
                                    <div className="item-content-detail text-sm text-[#494a4a]">
                                      <div className="event-detail-title font-semibold text-[1.313rem] text-[#151416] ">
                                        {event.eventName}
                                      </div>
                                      <div className="event-detail-additional flex items-center mt-1 ">
                                        <div className="event-detail-date flex items-center gap-2 font-normal leading-1 align-[-.125rem]">
                                          <FaCalendarAlt className="!text-[#adb6c9]" />
                                          <span className="">{`${event.eventStartDate} - ${event.eventEndDate}`}</span>
                                        </div>
                                        <div className="additional-separator w-[1px] h-5 bg-[#e8e8e8] mx-3"></div>
                                        <div className="event-detail-ticket-qty flex items-center gap-2 font-normal leading-1 align-[-.125rem]">
                                          <LuTicket className="!text-[#adb6c9]" />
                                          <span className="">
                                            {event.ticketQty}
                                            {' Tiket'}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="invoice-date mt-1">
                                        {event.ticketPrice.toLocaleString('id-ID', {
                                          style: 'currency',
                                          currency: 'IDR',
                                        })}
                                      </div>
                                      <div className="additional-cta mt-4 ">
                                        <div className="invoice-links flex gap-4 ">
                                          <button className="c-button c-button-primary">
                                            Liat Event
                                          </button>
                                          <button className="c-button c-button-tertiary">
                                            Invoice
                                          </button>
                                        </div>
                                      </div>
                                      <div className="info-multiple mt-2 flex items-center gap-2 font-normal leading-1 align-[-.125rem]">
                                        <IoMdInformationCircle className="!text-[#adb6c9]" />
                                        <span className="">
                                          {'E-Voucher dikirim ke masing-masing pengunjung'}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="item-content-banner w-[283px] h-full max-h-[137px] rounded-lg overflow-hidden bg-white relative">
                                      <Image
                                        src={event.bannerImgUrl!}
                                        fill
                                        sizes="283px"
                                        alt={event.eventName}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
            )
          })
        )}
        {/* {activeTab === 'draft' && <EventDraft />} */}
        {/* {activeTab === 'past' && <EventPast />} */}
      </div>
    </div>
  );
}
