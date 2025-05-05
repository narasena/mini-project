'use client';
import * as React from 'react';
import './header.css';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import { FaSearch } from 'react-icons/fa';
import { TbCalendarPlus } from 'react-icons/tb';
import { FaRegCompass } from 'react-icons/fa';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from 'react-icons/ri';
import { FaCircleUser } from 'react-icons/fa6';
import useAuthStore from '@/lib/store/auth-store';
import apiInstance from '@/utils/axiosInstance';
import { headers } from 'next/headers';

export const Header = () => {
  const { isLogin, token, member, activeRole, switchRole, reset } =
    useAuthStore();
  console.log(member, activeRole);

  // Check for inconsistent auth state
  React.useEffect(() => {
    if (isLogin && !token) {
      console.log('Inconsistent auth state detected: logged in but no token');
      reset(); // Reset the auth state
      window.location.href = '/login'; // Redirect to login
    }
  }, [isLogin, token, reset]);

  // Log auth state changes
  React.useEffect(() => {
    console.log('Auth state:', {
      isLogin,
      hasToken: !!token,
      member,
      activeRole,
    });
  }, [isLogin, token, member, activeRole]);

  const [mobileMenuShown, setMobileMenuShown] = React.useState<boolean>(false);
  const [userMenuShown, setUserMenuShown] = React.useState<boolean>(false);
  const mobileMenuListNoLogin = [
    { title: 'Tentang Loket', link: '/' },
    { title: 'Bantuan', link: '/' },
    { title: 'Mulai Jadi Event Creator', link: '/' },
    { title: 'Blog', link: '/' },
    { title: 'Hubungi Kami', link: '/' },
    { title: 'Loket Screen', link: '/' },
  ];
  const mobileMenuListLogin = [
    { title: 'Dashboard', link: '/' },
    { title: 'Event Saya', link: '/' },
    { title: 'Informasi Dasar', link: '/' },
    { title: 'Pengaturan', link: '/' },
    { title: 'Hubungi Kami', link: '/' },
    { title: 'Informasi Legal', link: '/' },
    { title: 'Rekening', link: '/' },
    { title: 'Keluar', link: '/' },
  ];
  const handleMobileMenuClick = () => {
    setMobileMenuShown(!mobileMenuShown);
  };

  //  const switchRoleAndUpdateToken = async () => {
  //    try {
  //      const newRole = activeRole === 'BUYER' ? 'EVENT_CREATOR' : 'BUYER';
  //      const response = await apiInstance.post(
  //        '/auth/switch-role',
  //        { activeRole: newRole },
  //        {
  //          headers: { Authorization: `Bearer ${token}` },
  //        },
  //      );
  //      const newToken = response.data.token;
  //      useAuthStore.getState().setToken(newToken);
  //      useAuthStore.getState().switchRole();
  //      apiInstance.defaults.headers.common['Authorization'] =
  //        `Bearer ${newToken}`;
  //    } catch (error) {
  //      console.error(error);
  //    }
  //  };
  const switchRoleAndUpdateToken = async () => {
    try {
      const newRole = activeRole === 'BUYER' ? 'EVENT_CREATOR' : 'BUYER';

      const response = await apiInstance.post(
        '/auth/switch-role',
        { activeRole: newRole },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      const newToken = response.data.token;
      const store = useAuthStore.getState();

      // Update all necessary state in one go
      store.setToken(newToken);
      store.switchRole();
      store.setLogin(true);

      // Update member data if available
      if (response.data.member) {
        store.setMember(response.data.member);
      }

      // Update API headers
      apiInstance.defaults.headers.common['Authorization'] =
        `Bearer ${newToken}`;
    } catch (error) {
      console.error('Error switching role:', error);
    }
  };

  // Single useEffect for auth state management and debugging
  React.useEffect(() => {
    // Handle inconsistent auth state
    if (isLogin && !token) {
      console.log('Inconsistent auth state detected: logged in but no token');
      reset();
      window.location.href = '/login';
    }

    // Optional: Log state changes in development only
    if (process.env.NODE_ENV === 'development') {
      console.log('Auth state:', { isLogin, hasToken: !!token, activeRole });
    }
  }, [isLogin, token, activeRole, reset]);
  return (
    <div className="h-max ">
      <nav className="s-navbar relative">
        <div className="navbar-bottom">
          <div className="navbar-left">
            <ul className="navbar-nav">
              <li className="flex-middle-center">
                <Link href={'/'} className="navbar-item logo visible-md">
                  <Image
                    src="/images/logo-loket-white.png"
                    alt="Loket Horizontal Logo"
                    width={122}
                    height={33}
                    className="navbar-item-img"
                  />
                </Link>
              </li>
              <li className="hidden-md">
                <Link href={'/'} className="navbar-item">
                  <Image
                    src="/images/logo-loket-white.png"
                    alt="Loket Horizontal Logo"
                    width={90}
                    height={24}
                    className=""
                  />
                </Link>
              </li>
              <li className="navbar-elastic-search-container visible-lg">
                <div className="navbar-elastic-search-wrapper">
                  <form
                    id="nes-form"
                    className="navbar-elastic-search-form"
                    autoComplete="off"
                  >
                    <div className="nes-search">
                      <input
                        id="nes-input"
                        type="text"
                        className="s-input"
                        placeholder="Cari event baru di sini"
                      />
                      <button
                        id="nes-btn-reset"
                        type="button"
                        className="button-reset"
                      >
                        <span className="s-icon">
                          <RxCross2 />
                        </span>
                      </button>
                      <button
                        id="nes-btn-search"
                        type="button"
                        className="button-search"
                      >
                        <span className="icon">
                          <FaSearch />
                        </span>
                      </button>
                    </div>
                  </form>
                  <div
                    id="nes-result-drop"
                    className="search-result-drop hidden"
                  ></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul className="navbar-desktop relative">
              <li className="auth-navbar-link-event navbar-link visible-lg">
                <Link href={'/buat-event'}>
                  <span className="svg-white">
                    <TbCalendarPlus />
                  </span>
                  Buat Event
                </Link>
              </li>
              <li className="auth-navbar-link-discover navbar-link visible-lg">
                <Link href={'/discover'}>
                  <span className="svg-white">
                    <FaRegCompass />
                  </span>
                  Jelajah
                </Link>
              </li>
              {!isLogin && (
                <li className="auth-navbar-button-container">
                  <div className="navbar-auth-button">
                    <div className="width-1-2">
                      <Link href={'/register'}>
                        <button className="auth-signup-button">Daftar</button>
                      </Link>
                    </div>
                    <div className="width-1-2 margin-small-left">
                      <Link href={'/login'}>
                        <button className="auth-signin-button">Masuk</button>
                      </Link>
                    </div>
                  </div>
                </li>
              )}
              {isLogin && (
                <li className="auth-navbar-button-container ml-3 relative group">
                  <div className="w-auto max-w-[192px] p-0.5 overflow-hidden bg-[#0049cc] rounded-full flex justify-center items-center cursor-pointer">
                    <div>
                      <FaCircleUser className="text-[30px] text-white " />
                    </div>
                  </div>
                  <div
                    className="absolute
      w-[280px]
      h-auto
      bg-white
      z-[9999]
      right-0
      border
      border-[#dbdbdb]
      rounded-lg
      mt-2.5
      p-3
      opacity-0
      invisible
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:visible
      group-hover:delay-300
      before:absolute
      before:-top-5
      before:left-0
      before:w-full
      before:h-5
      before:content-['']
      hover:opacity-100
      hover:visible"
                  >
                    <div className="font-semibold w-full my-2 text-[#151416] text-center">
                      <span>{`${member?.firstName} `}</span>
                      <button
                        className="c-button c-button-primary text-xs"
                        onClick={switchRoleAndUpdateToken}
                      >
                        {`Ganti Akun > `}
                        <span>{`${activeRole}`}</span>
                      </button>
                    </div>
                    <div className="font-semibold w-full my-2 text-[#8f8f8f] text-center">{`${member?.email}`}</div>
                    <button
                      className="c-button c-button-red w-full my-2"
                      onClick={() => reset()}
                    >
                      Logout
                    </button>
                  </div>
                </li>
              )}
            </ul>

            <div className="hidden-lg">
              <div
                className={`${mobileMenuShown ? 'hidden' : ''} text-lg text-white flex justify-center items-center gap-2 *:cursor-pointer`}
              >
                <button>
                  <FaSearch className="" />
                </button>
                <button onClick={handleMobileMenuClick}>
                  <GiHamburgerMenu />
                </button>
              </div>
              <div
                className={`${mobileMenuShown ? '' : 'hidden'} text-lg text-white flex justify-center items-center gap-2 *:cursor-pointer`}
              >
                <button onClick={handleMobileMenuClick}>
                  <RiCloseLargeFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile dropdown menu  */}
      <div
        className={
          'w-full h-fit bg-white p-4' + (mobileMenuShown ? '' : ' hidden')
        }
      >
        <div className="">
          {/* no user login  */}
          {!isLogin && (
            <div>
              <div className="flex mb-2.5">
                <div className="width-1-2">
                  <Link href={'/register'}>
                    <button className="auth-signup-button-mobile">
                      Daftar
                    </button>
                  </Link>
                </div>
                <div className="width-1-2 margin-small-left">
                  <Link href={'/login'} className="cursor-pointer">
                    <button className="auth-signin-button-mobile">Masuk</button>
                  </Link>
                </div>
              </div>
              <ul className="min-w-full list-none grid grid-cols-[1fr] gap-2.5 pt-1 pb-[11px]">
                <li className="nav-divider"></li>
                {mobileMenuListNoLogin.map((item, index) => (
                  <li key={index} className="text-base text-black font-medium">
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* user login  */}
          {isLogin && (
            <ul className="min-w-full list-none grid grid-cols-[1fr] gap-2.5 pt-1 pb-[11px]">
              <li className="nav-divider"></li>
              {mobileMenuListLogin.map((item, index) => (
                <li key={index} className="text-base text-black font-medium">
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};