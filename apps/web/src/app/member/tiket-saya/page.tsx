'use client';
import * as React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { LuTicket } from 'react-icons/lu';
import { IoMdInformationCircle } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';

export default function DashboardTiketSayaPage() {
  const [activeTab, setActiveTab] = React.useState<'active' | 'past'>('active');
  const tabStyles = {
    active: ' active text-[#151416]',
    inactive: ' text-[#8e919b]',
  };
  const [paidStatus, setPaidStatus] = React.useState<
    'paid' | 'waiting' | 'failed' | ''
  >('');
  const paymentStatusStyles = {
    paid: ' bg-[#e7f9eb] text-[#34c759] border border-[#34c759]',
    waiting: ' bg-[#fff9c4] text-[#e8d317] border border-[#e8d317]',
    failed: ' bg-[#ffcdd2] text-[#f44336] border border-[#f44336]',
    '': '',
  };
  const paymentStatusText = {
    paid: 'Pembayaran Berhasil',
    waiting: 'Menunggu Pembayaran',
    failed: 'Pembayaran Gagal',
  };

  const response = {
    title: 'Wedding Market Fair 2025',
    date: '25 Apr - 27 Apr 2025',
    ticket: 1,
    buyDate: '14 Apr 2025, 14:53',
    imgUrl:
      'https://assets.loket.com/neo/production/images/banner/20250122161338_6790b6c28bff4.jpg',
    paymentStatus: 'paid',
  };
  React.useEffect(() => {
    setPaidStatus(response.paymentStatus as '' | 'paid' | 'waiting' | 'failed');
  }, [paidStatus]);

  const handleTabClick = (tab: 'active' | 'past') => {
    setActiveTab(tab);
  };
  return (
    <div className="page-layout p-[25px_40px]">
      <div className="s-tabs invoice w-full">
        <div className="tabs-container relative">
          <div className="tabs-nav relative !max-w-[520px] flex ">
            <div
              onClick={() => handleTabClick('active')}
              className={
                'relative pb-4 cursor-pointer tracking-[0.3px] flex-1 text-center border-b-[#e8e8e8] font-medium leading-6' +
                (activeTab === 'active' ? tabStyles.active : tabStyles.inactive)
              }
            >
              Event Aktif
            </div>
            <div
              onClick={() => handleTabClick('past')}
              className={
                'relative pb-4 cursor-pointer tracking-[0.3px] flex-1 text-center border-b-[#e8e8e8] font-medium leading-6' +
                (activeTab === 'past' ? tabStyles.active : tabStyles.inactive)
              }
            >
              Event Lalu
            </div>
          </div>
          <div className="tabs-content -mt-[1px] border-t border-[#e8e8e8] py-6 ">
            <div>
              <div className="panel">
                <div className="invoice-list grid grid-rows-[1fr] gap-y-7">
                  <div className="invoice-item shadow-[0px_4px_8px_rgba(30,44,106,0.1)] rounded-lg">
                    <div className="invoice-item-header p-[24px_24px_16px] flex-middle-between ">
                      <div className="invoice-status">
                        <div
                          className={
                            'invoice-status-payment p-[3px_12px] text-xs rounded-sm ' +
                              paymentStatusStyles[paidStatus] || ''
                          }
                        >
                          {paidStatus === 'paid' && paymentStatusText.paid}
                          {paidStatus === 'waiting' &&
                            paymentStatusText.waiting}
                          {paidStatus === 'failed' && paymentStatusText.failed}
                        </div>
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
                          {response.title}
                        </div>
                        <div className="event-detail-additional flex items-center mt-1 ">
                          <div className="event-detail-date flex items-center gap-2 font-normal leading-1 align-[-.125rem]">
                            <FaCalendarAlt className="!text-[#adb6c9]" />
                            <span className="">{response.date}</span>
                          </div>
                          <div className="additional-separator w-[1px] h-5 bg-[#e8e8e8] mx-3"></div>
                          <div className="event-detail-ticket-qty flex items-center gap-2 font-normal leading-1 align-[-.125rem]">
                            <LuTicket className="!text-[#adb6c9]" />
                            <span className="">
                              {response.ticket}
                              {' Tiket'}
                            </span>
                          </div>
                        </div>
                        <div className="invoice-date mt-1">
                          {'Pembelian pada '}
                          {response.buyDate}
                        </div>
                        <div className="additional-cta mt-4 ">
                          <div className="invoice-links flex gap-4 ">
                            <button className="c-button c-button-primary">
                              E-Voucher
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
                          src={response.imgUrl}
                          fill
                          sizes="283px"
                          alt={response.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
