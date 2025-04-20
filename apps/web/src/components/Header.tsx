'use client';
import * as React from 'react';
import './header.css';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import { FaSearch } from 'react-icons/fa';
import { TbCalendarPlus } from 'react-icons/tb';
import { FaRegCompass } from 'react-icons/fa';
import Image from 'next/image';

export const Header = () => {
  const [token, setToken] = React.useState<string | null>(null);
  return (
    <nav className="s-navbar">
      <div className="navbar-bottom">
        <div className="navbar-left">
          <ul className="navbar-nav">
            <li className="flex-middle-center">
              <Link href={'/'} className="navbar-item logo">
                <Image
                  src="/images/logo-loket-white.png"
                  alt="Loket Horizontal Logo"
                  width={122}
                  height={33}
                  className=""
                />
              </Link>
            </li>
            <li className="hidden-lg">
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
          <ul className="navbar-desktop">
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
            <li className="auth-navbar-button-container">
              <div className="navbar-auth-button">
                <div className="width-1-2">
                  <button className="auth-signup-button">
                    Daftar
                  </button>
                </div>
                <div className="width-1-2 margin-small-left">
                  <button className="auth-signin-button">
                    Masuk
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
