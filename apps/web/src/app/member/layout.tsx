'use client';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { FiFileText } from 'react-icons/fi';
import { RiAccountBoxLine } from 'react-icons/ri';
import { FaRegCompass } from 'react-icons/fa';
import { GiTicket } from 'react-icons/gi';
import { FaExchangeAlt } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { FaRegFolderOpen } from 'react-icons/fa6';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { TbCalendarClock } from 'react-icons/tb';
import { FaCircleUser } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import DashboardPageTitle from '@/components/DashboardPageTitle';
import { get } from 'jquery';

interface IDashboardLayoutProps {
  children?: React.ReactNode;
  pageTitle?: string; // Add this prop
}

export default function MemberDashBoardLayout({
  children,
  pageTitle = 'Dashboard',
}: IDashboardLayoutProps) {
  const pathName = usePathname();
  const [isBuyerMode, setIsBuyerMode] = React.useState(false);
  const sidebarMenuList = {
    parent: {
      buyer: [
        { title: 'Jelajah Event', icon: <FaRegCompass />, link: '/discover' },
        { title: 'Tiket Saya', icon: <GiTicket />, link: '/member/tiket-saya' },
      ],
      eventCreator: [
        { title: 'Dashboard', icon: <GoHomeFill />, link: '/member' },
        { title: 'Event Saya', icon: <FiFileText />, link: '/member/events' },
      ],
    },
    account: [
      {
        title: 'Informasi Dasar',
        icon: <RiAccountBoxLine />,
        link: '/member/profile/informasi-dasar',
        buyerOnly: true,
      },
      {
        title: 'Pengaturan',
        icon: <IoSettings />,
        link: '/member/profile/pengaturan',
        buyerOnly: true,
      },
      {
        title: 'Informasi Legal',
        icon: <FaRegFolderOpen />,
        link: '/member/profile/informasi-legal',
        buyerOnly: false,
      },
      {
        title: 'Rekening',
        icon: <FaMoneyBillTransfer />,
        link: '/member/profile/informasi-bank',
        buyerOnly: false,
      },
    ],
  };
  const getPageTitle = () => {
    switch (pathName) {
      case '/member':
        return 'Home';
      case '/member/tiket-saya':
        return 'Tiket Saya';
      case '/member/events':
        return 'Event Saya';
      case pathName.includes('/member/profile') ? pathName : '':
        return 'Profil Kamu';
      default:
        return 'Home';
    }
  };

  const handleUSerModeSwitch = () => {
    setIsBuyerMode(!isBuyerMode);
  };
  return (
    <div className="max-h-screen overflow-x-hidden sm:grid sm:grid-cols-[270px_auto] text-white">
      {/* sidebar  */}
      <div className="sidebar-container min-w-full min-h-screen overflow-hidden bg-[#152955] z-20">
        <div className="sidebar relative shadow-[0_2px_4px_0_rgba(25,25,25,0.5)]">
          <Link href={'/'}>
            <div className="h-[62px] bg-[#102041] flex items-center justify-center">
              <Image
                src={'/images/logo-loket-white.png'}
                width={120}
                height={32}
                alt="logo Loket"
                className="-mt-2"
              />
            </div>
          </Link>
        </div>
        <div className="sidebar-list-menu mb-[50px] py-2.5">
          {/* parent dashboard menu */}
          <ul className="*:p-[10px_20px] *:font-normal *:text-sm list-none">
            {!isBuyerMode && <li>Dashboard</li>}
            {isBuyerMode
              ? sidebarMenuList.parent.buyer.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>
                      <div className="flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </div>
                    </Link>
                  </li>
                ))
              : sidebarMenuList.parent.eventCreator.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>
                      <div className="flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </div>
                    </Link>
                  </li>
                ))}
            <li className="border-t border-white w-full"></li>
          </ul>
          {/* account cp dashboard menu */}
          <ul className="*:p-[10px_20px] *:font-normal *:text-sm list-none">
            <li>Akun</li>
            {sidebarMenuList.account.map((item, index) =>
              isBuyerMode ? (
                item.buyerOnly && (
                  <li key={index}>
                    <Link href={item.link}>
                      <div className="flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </div>
                    </Link>
                  </li>
                )
              ) : (
                <li key={index}>
                  <Link href={item.link}>
                    <div className="flex items-center gap-2">
                      {item.icon}
                      {item.title}
                    </div>
                  </Link>
                </li>
              ),
            )}
            <li className="border-t border-white w-full"></li>
          </ul>
          {/* user mode  */}
          <ul className='list-none'>
            <li>Mode User</li>
            <li>
              <button
                onClick={handleUSerModeSwitch}
                className="flex items-center gap-2"
              >
                <span>
                  <FaExchangeAlt />
                </span>
                <span>
                  {isBuyerMode
                    ? 'Beralih Ke Event Creator'
                    : 'Beralih Ke Akun Pembeli'}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* main content  */}
      <div className="dashboard-content">
        <div>
          <div className="dashboard-top-header p-[20px_40px] shadow-[0_1px_2px_0_rgba(0,0,0,0.17)]">
            <nav className="flex justify-between relative">
              <div className="nav-left flex flex-wrap items-center">
                <div>
                  <h1 className="text-[22px] text-[#595959] font-semibold inline-block">
                    {getPageTitle()}
                  </h1>
                </div>
              </div>
              <div className="nav-auth flex items-center">
                <div className="create-event-nav md:block md:mr-5 font-medium bg-[#adb6c9] border-[#adb6c9] text-base leading-6 p-[7px_16px] rounded-lg text-center tracking-[0.001em] outline-none inline-flex flex-row gap-2 whitespace-nowrap border">
                  <button className="flex items-center gap-2">
                    <TbCalendarClock className="text-2xl" />
                    <span>Buat Event</span>
                  </button>
                </div>
                <div className="navbar-auth-toggle logged-in w-auto p-0.5 bg-[#F5F7FA] rounded-full flex justify-between items-center cursor-pointer">
                  <div className="text-[30px] text-[#0049CC]">
                    <FaCircleUser />
                  </div>
                  <div className="text-black flex items-center ml-[5px]">
                    <span>Narasena</span>
                    <div className="text-[30px]">
                      <IoIosArrowForward />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <div className="p-[25px_40px]">
            <ul className="breadcrumbs -mb-2 w-full list-none inline-block bg-white border border-[#f7f7f7]">
              <li className="float-left">
                <Link
                  href={'#'}
                  className="px-[15px] rounded-[4px_0_0_4px] bg-[#f7f7f7] text-[#595959] block text-xs h-[30px] leading-[30px] text-center "
                >
                  Kamu Di Sini
                </Link>
              </li>
              <li className="float-left">
                <Link
                  href={'#'}
                  className="pr-[15px] pl-2.5 mr-[23px] rounded-[4px_0_0_4px] bg-[#f7f7f7] text-[#a7a7a7] block text-xs h-[30px] leading-[30px] text-center "
                >
                  {getPageTitle()}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* main content children  */}
        <div className="dashboard-content-children">{children}</div>
      </div>
    </div>
  );
}
