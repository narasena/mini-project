'use client';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { LuUpload } from 'react-icons/lu';
import { IoCalendar } from 'react-icons/io5';
import { IoTime } from 'react-icons/io5';
import { IoLocationSharp } from 'react-icons/io5';
import { CiCirclePlus } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { countryCodes } from '../../../../api/prisma/seedData/countries';
import { IoIosInformationCircle } from 'react-icons/io';
export default function CreateEventPage() {
  const [activeTab, setActiveTab] = React.useState<'category' | 'desc'>(
    'category',
  );
  const [ticketMaxOpen, setTicketMaxOpen] = React.useState(true);
  const [ticketPurchasedMax, setTicketPurchasedMax] = React.useState<number>(3);
  const ticketType = ['Berbayar', 'Bayar Sesukamu', 'Gratis'];
  const handleSelectMaxTicket = (e: any) => {
    e.preventDefault();
    setTicketMaxOpen(!ticketMaxOpen);
  };
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setTicketMaxOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ticketMaxOpen]);
  const orderDataFormCheck = [
    { id: 'fullName', formTitle: 'Nama Lengkap', checkStatus: true },
    { id: 'email', formTitle: 'Email', checkStatus: true },
    { id: 'phoneNumber', formTitle: 'Nomor Handphone', checkStatus: true },
    { id: 'idCardNumber', formTitle: 'No. KTP', checkStatus: false },
    { id: 'birthDate', formTitle: 'Tanggal Lahir', checkStatus: true },
    { id: 'gender', formTitle: 'Jenis Kelamin', checkStatus: true },
  ];
  const ticketPerPurchaseMax = [1, 2, 3, 4, 5];
  const tabStyles = {
    active: ' active text-[#151416]',
    inactive: ' text-[#8e919b]',
  };
  const handleTabClick = (tab: 'category' | 'desc') => {
    setActiveTab(tab);
  };
  return (
    <div className="relative">
      <div className="header-nav-top absolute top-0 left-0 right-0 z-10 bg-white box-shadow-small">
        <div className="bg-white s-container lg:px-10 sm:px-[30px] px-[15px] box-content max-w-[1200px] mx-auto ">
          <nav className="flex relative">
            <div className="navbar-left flex flex-wrap items-center ">
              <div className="navbar-nav flex">
                <div>
                  <Link
                    href={'/'}
                    className="text-[#595959] h-20 flex-middle-center px-2.5"
                  >
                    <Image
                      src={'/images/logo-loket-blue.svg'}
                      alt="LOKET - Buat Event Page dan Ramaikan Event-mu"
                      width={142}
                      height={38}
                    />
                  </Link>
                </div>
                <div></div>
              </div>
            </div>
            <div className="navbar-right flex ml-auto flex-wrap items-center">
              <div className="navbar-nav flex">
                <div>
                  <Link
                    href={'#'}
                    className="text-[#595959] h-20 flex-middle-center px-[15px] uppercase font-medium text-sm"
                  >
                    Bantuan
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <div className="create-event-form">
          <div className="create-event pt-20 mb-[130px]">
            <div className="create-event-container my-10 max-w-[900px] lg:px-10 sm:px-[30px] px-[15px] relative mx-auto box-content">
              <div className="flex flex-wrap">
                <div className="w-full max-w-full">
                  <div className="event-card border border-[#d8d8d8] rounded-2xl overflow-hidden">
                    <div className="event-card-banner">
                      <div className="relative ">
                        <div className="min-h-[421px] relative overflow-hidden z-0">
                          <div className="absolute top-0 left-0 right-0 bottom-0">
                            <div className="relative h-full object-cover">
                              <Image
                                src={'/images/banner-event.jpg'}
                                width={898}
                                height={421}
                                alt=""
                                className="w-full max-w-full"
                                quality={100}
                              />
                              <div className="banner-image-action absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-full lg:w-[60%] w-full">
                                <div className="upload">
                                  <div className="upload-img-form inline-block relative max-w-full align-middle">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="text-[500px] absolute top-0 z-1 w-full h-full left-0 opacity-0"
                                    />
                                    <BsPlusCircle className="text-5xl text-white" />
                                  </div>
                                  <div className="text-center text-white">
                                    <p className=" mt-2.5 text-[1.5rem] leading-[1.4] font-normal">
                                      {'Unggah gambar/poster/banner'}
                                    </p>
                                    <p className="text-[0.9375rem] ">
                                      {
                                        'Direkomendasikan 724 x 340 px dan tidak lebih dari 2MB'
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="event-card-body p-[15px_40px_40px]">
                      <div className="flex flex-wrap">
                        <div className="event-name w-full max-w-full sm:mt-[15px] pl-[15px]">
                          <div className="w-full max-w-full">
                            <input
                              type="text"
                              placeholder="Nama Event*"
                              className="h-[55px] w-full max-w-full bg-white text-2xl text-[#151416] outline-none"
                            />
                          </div>
                        </div>
                        <div className="w-full max-w-full pl-[15px]">
                          <div className="mt-[5px] w-full max-w-full ">
                            <div className="form-control">
                              <div className="category-wrapper border-b border-[#d8d8d8] mb-[5px] cursor-pointer pb-2.5 text-[0.9375rem] !text-[#0049cc]">
                                <span>Konser</span>
                                <span className="dotdot mx-[5px] inline-block w-2 h-2 rounded-full bg-[#d5d5d5]"></span>
                                <span>Anak, Keluarga</span>
                                <span className="ml-1 inline-block leading-1 align-[-0.125em]">
                                  <BiSolidEdit />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full max-w-full lg:w-1/3 mt-[15px] pl-[15px]">
                          <label className="mb-2.5 text-[#494a4a] block text-sm font-medium">
                            Diselenggarakan Oleh
                          </label>
                          <div className="flex items-center -ml-[15px]">
                            <div className="flex justify-center lg:w-1/3 w-auto max-w-full ">
                              {/* image upload form  */}
                              <div className="upload-logo p-[17px] rounded-full overflow-hidden border border-[#e8e8e8] cursor-pointer inline-block relative max-w-full align-middle text-center">
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="text-[500px] absolute top-0 z-1 w-full h-full left-0 opacity-0"
                                />
                                <LuUpload className="text-2xl text-[#595959]" />
                              </div>

                              {/* uploaded image  */}
                              <div className="hidden image-avatar relative overflow-hidden max-w-[67px] max-h-[67px] rounded-full group">
                                <Image
                                  src={'/images/doraemon.png'}
                                  width={67}
                                  height={67}
                                  alt={''}
                                />
                                <div className="hover-overlay opacity-0 absolute top-0 left-0 right-0 bottom-0 group-hover:opacity-100 group-hover:bg-white/80 rounded-full group-hover:border group-hover:border-[#d8d8d8]/70">
                                  <div className="position-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full">
                                    <span className="text-sm text-[#595959] font-normal inline-block leading-1 align-[-0.125em] opacity-0 group-hover:opacity-100">
                                      <RiDeleteBin5Fill />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="width-expanded pl-[15px] flex-1 w-full max-w-full">
                              <input
                                type="text"
                                placeholder="Nama Organisasi*"
                                className="h-[40px] align-middle inline-block w-full max-w-full bg-white text-[0.9375rem] text-[#151416] outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-full max-w-full lg:w-1/3 mt-[15px] pl-[15px]">
                          <label className="mb-2.5 text-[#494a4a] block text-sm font-medium">
                            {`Tanggal & Waktu`}
                          </label>
                          <div>
                            <div className="event-date date-time-button cursor-pointer mb-5 text-[#adb6c9]">
                              <IoCalendar className="text-base md:text-xl inline-block align-middle mr-1.5" />
                              <span className="text-sm md:text-base">
                                Pilih Tanggal
                              </span>
                            </div>
                            <div className="event-time date-time-button cursor-pointer mb-5 text-[#adb6c9]">
                              <IoTime className="text-base md:text-xl inline-block align-middle mr-1.5" />
                              <span className="text-sm md:text-base">
                                Pilih Waktu
                              </span>
                            </div>
                            <div></div>
                          </div>
                        </div>
                        <div className="w-full max-w-full lg:w-1/3 mt-[15px] pl-[15px]">
                          <label className="mb-2.5 text-[#494a4a] block text-sm font-medium">
                            {`Lokasi`}
                          </label>
                          <div>
                            <div className="event-date date-time-button cursor-pointer mb-5 text-[#adb6c9]">
                              <IoLocationSharp className="text-base md:text-xl inline-block align-middle mr-1.5" />
                              <span className="text-sm md:text-base">
                                Pilih Lokasi
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="create-event-container-2 xl:mb-[70px] mb-10 max-w-[900px] lg:px-10 sm:px-[30px] mx-auto box-content">
              <div className="create-event-tabs-nav w-full max-w-full border-b border-[#d8d8d8]">
                <div className="tabs-nav relative flex uppercase">
                  <div
                    onClick={() => handleTabClick('category')}
                    className={
                      'relative pb-4 cursor-pointer tracking-[0.3px] flex-1 text-center border-b-[#e8e8e8] font-medium leading-6' +
                      (activeTab === 'category'
                        ? tabStyles.active
                        : tabStyles.inactive)
                    }
                  >
                    Kategori Tiket
                  </div>
                  <div
                    onClick={() => handleTabClick('desc')}
                    className={
                      'relative pb-4 cursor-pointer tracking-[0.3px] flex-1 text-center border-b-[#e8e8e8] font-medium leading-6' +
                      (activeTab === 'desc'
                        ? tabStyles.active
                        : tabStyles.inactive)
                    }
                  >
                    Deskripsi Event
                  </div>
                </div>
              </div>
              <div className="create-event-content mt-8">
                <div className="ticket-category-info grid grid-rows-[1fr] gap-8 ">
                  <div className="ticket-category">
                    <div className="ticket-category-container md:block hidden">
                      <div className="flex-middle-center ">
                        <div className="md:grid md:grid-cols-[repeat(3,1fr)] grid-cols-[repeat(1,1fr)] gap-[15px] w-full max-w-full">
                          {ticketType.map((item, index) => (
                            <div className="w-full max-w-full" key={index}>
                              <button className="ticket-category-button">
                                <div className="flex">
                                  <div className="barcode w-[53px] max-w-full flex-middle-center py-4 overflow-hidden border-r border-[#d8dfe7]">
                                    <Image
                                      src={'/images/icon-barcode.svg'}
                                      width={9}
                                      height={58}
                                      alt=""
                                      className="h-auto max-w-full align-middle"
                                    />
                                  </div>
                                  <div className="ticket-label">
                                    <div className="flex flex-col justify-center capitalize">
                                      <p className="font-normal text-sm leading-[1.5]">
                                        Buat Tiket
                                      </p>
                                      <span className="text-lg ">{item}</span>
                                    </div>
                                    <div className="add-ticket-button z-[2] flex items-center">
                                      <span className="text-[42px] text-[#adb6c9]">
                                        <CiCirclePlus />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="add-ticket-mobile"></div>
                  </div>
                  <div className="event-contact-info">
                    <div className="header-contact-info mb-4">
                      <div className="title-contact-info">
                        <span className="text-[#152955] text-[1.313rem] mb-2.5 font-medium">
                          Info Kontak
                        </span>
                      </div>
                      <span className="text-[#8e919b] text-sm">
                        Informasi narahubung yang dapat dihubungi oleh pembeli
                        akan muncul di E-Ticket.
                      </span>
                    </div>
                    <div className="body-contact-info">
                      <div className="mb-3">
                        <div className="mb-2.5 relative">
                          <label className="text-sm font-medium text-[#595959] capitalize">
                            Nama Narahubung<em className="text-[#f0506e]">*</em>
                          </label>
                        </div>
                        <div className="w-full max-w-full">
                          <div className="form-control w-full max-w-full">
                            <div className="form-control-input">
                              <input
                                type="text"
                                placeholder="Nama narahubung"
                                className="c-input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="mb-2.5 relative">
                          <label className="text-sm font-medium text-[#595959] capitalize">
                            Email<em className="text-[#f0506e]">*</em>
                          </label>
                        </div>
                        <div className="w-full max-w-full">
                          <div className="form-control w-full max-w-full">
                            <div className="form-control-input">
                              <input
                                type="text"
                                placeholder="Email yang dapat dihubungi"
                                className="c-input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="mb-2.5 relative">
                          <label className="text-sm font-medium text-[#595959] capitalize">
                            {'No. Ponsel'}
                            <em className="text-[#f0506e]">*</em>
                          </label>
                        </div>
                        <div className="w-full max-w-full">
                          <div className="form-control w-full max-w-full flex justify-center">
                            <div className="relative">
                              <select
                                name=""
                                id=""
                                className="mr-2.5 c-select"
                                defaultValue={'+62'}
                              >
                                {countryCodes.map((country, index) => (
                                  <option
                                    key={index}
                                    value={country.mobileCode}
                                  >
                                    {country.code + country.mobileCode}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <IoIosArrowDown className="text-2xl text-[#8E919B] " />
                              </div>
                            </div>

                            <div className="w-full max-w-full">
                              <div className="form-control w-full max-w-full">
                                <div className="form-control-input">
                                  <input
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="Contoh: 081100001111"
                                    className="c-input"
                                    onChange={(e) => {
                                      e.target.value = e.target.value.replace(
                                        /[^0-9]/g,
                                        '',
                                      );
                                    }}
                                    maxLength={12}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-settings">
                    <div>
                      <div className="title-event-settings mb-[5px] pb-2.5">
                        <span className="sm:text-[1.313rem] text-[1.212rem] text-[#152955] font-medium mb-2.5">
                          Formulir Data Pemesanan
                        </span>
                      </div>
                      <div className="mt-2.5 -ml-[15px] flex flex-wrap">
                        {orderDataFormCheck.map((item, index) => (
                          <div
                            className={`w-full ${index === 0 ? '' : 'mt-[15px]'} pl-[15px] md:text-base text-sm text-[#595959]`}
                            key={index}
                          >
                            <input
                              type="checkbox"
                              id={item.id}
                              value={item.id}
                              className="-mt-1 mr-2 size-4"
                              {...(item.checkStatus === true
                                ? { checked: true }
                                : {})}
                            />
                            <label htmlFor={item.id}>{item.formTitle}</label>
                          </div>
                        ))}
                      </div>
                      <div className="form-info mt-4 p-[16px_12px] border border-[#dbdfe7] bg-[#f5f7fa] rounded-lg flex text-[#494a4a] gap-3 text-sm">
                        <div className="mt-[5px] text-[#adb6c9] text-sm">
                          <IoIosInformationCircle />
                        </div>
                        <p>
                          Kamu dapat menambah{' '}
                          <Link
                            href="#"
                            className="text-[#151416] underline font-bold"
                          >
                            Formulir Data Tambahan
                          </Link>{' '}
                          di Dashboard Event.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="title-event-settings mb-[5px] pb-2.5">
                        <span className="sm:text-[1.313rem] text-[1.212rem] text-[#152955] font-medium mb-2.5">
                          Pengaturan Tambahan
                        </span>
                      </div>
                      <div className="mt-2.5 **:leading-[28px] flex ">
                        <div className="flex flex-col flex-1">
                          <span className="mt-1 text-base text-[#151416]">
                            {'Jumlah maks. tiket per transaksi'}
                          </span>
                          <span className="text-sm text-[#8e919b]">
                            Jumlah maksimal tiket yang dapat dibeli dalam 1
                            transaksi
                          </span>
                        </div>
                        <div className="w-auto max-w-full pl-[15px]">
                          <div className="w-full md:w-[60%] max-w-full relative z-999">
                            <Link href={''} onClick={handleSelectMaxTicket}>
                              <h2 className="min-w-20 p-3 relative text-sm border border-[#e8e8e8] rounded-lg">
                                5 Tiket
                                <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#8E919B] " />
                              </h2>
                            </Link>
                            <div
                              className={`${ticketMaxOpen ? ' block' : 'hidden'} absolute left-0 top-full mt-0.5 max-w-[120px] min-w-[120px] rounded-lg bg-white text-[#595959] overflow-hidden shadow-[0_5px_12px_rgba(0,0,0,.15)]`}
                              ref={dropdownRef}
                            >
                              <ul className="whitespace-nowrap text-sm list-none">
                                {ticketPerPurchaseMax.map((item, index) => (
                                  <li
                                    className="p-[10px_15px] cursor-pointer hover:bg-[#f7f7f7]"
                                    key={index}
                                  >
                                    {item}
                                    {' Tiket'}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2.5 **:leading-[28px] flex ">
                        <div className="flex flex-col flex-1">
                          <span className="mt-1 text-base text-[#151416]">
                            {'1 akun email - 1 kali transaksi'}
                          </span>
                          <span className="text-sm text-[#8e919b]">
                            {
                              '1 akun email hanya dapat melakukan 1 kali transaksi pembelian tiket.'
                            }
                          </span>
                        </div>
                        <div className="w-auto max-w-full pl-[15px]">
                          <label
                            htmlFor="hs-basic-usage"
                            className="relative inline-block w-11 h-6 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              id="hs-basic-usage"
                              className="peer sr-only"
                            />
                            <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                            <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                          </label>
                        </div>
                      </div>
                      <div className="mt-2.5 **:leading-[28px] flex ">
                        <div className="flex flex-col flex-1">
                          <span className="mt-1 text-base text-[#151416]">
                            {'Jumlah maks. tiket per transaksi'}
                          </span>
                          <span className="text-sm text-[#8e919b]">
                            Jumlah maksimal tiket yang dapat dibeli dalam 1
                            transaksi
                          </span>
                        </div>
                        <div className="w-auto max-w-full pl-[15px]">
                          <label
                            htmlFor="hs-basic-usage"
                            className="relative inline-block w-11 h-6 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              id="hs-basic-usage"
                              className="peer sr-only"
                            />
                            <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                            <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ticket-desc"></div>
              </div>
            </div>
          </div>
          <div className="footer-cta fixed bottom-0 w-full py-[15px] bg-white shadow-[0_-1px_3px_0_hsla(0,0%,79.6%,.5)] z-[909]">
            <div className="lg:px-10 sm:px-[30px] px-[15px] mx-auto max-w-[1200px]">
              <div className="flex items-center ">
                <div className="lg:flex-1 xl:pl-10 sm:pl-[30px] w-full max-w-full ">
                  <h3 className="text-[1.5rem] font-medium leading-[1.4] text-[#4d4d4d] block">
                    {'Yeay! '}
                    <span className="text-sm font-normal">
                      Tinggal selangkah lagi dan event kamu berhasil dibuat
                    </span>
                  </h3>{' '}
                </div>
                <div className="lg:w-auto w-full max-w-full lg:pl-10 sm:pl-[30px] flex ">
                  <div className="flex lg:w-auto w-1/2 max-w-full pl-[15px] ">
                    <button className="w-full max-w-full c-button c-button-tertiary">
                      <span>Simpan Draf</span>
                    </button>
                  </div>
                  <div className="flex-1 lg:w-auto w-1/2 max-w-full pl-[15px] ">
                    <button className="w-full max-w-full c-button c-button-primary">
                      <span>Buat Event Sekarang</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="full-loading"></div>
    </div>
  );
}
