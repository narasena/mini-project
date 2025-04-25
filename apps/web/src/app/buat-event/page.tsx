import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export default function CreateEventPage() {
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
                    <Image src={'/images/logo-loket-blue.svg'} alt="LOKET - Buat Event Page dan Ramaikan Event-mu" width={142} height={38}/>
                  </Link>
                </div>
                <div></div>
              </div>
            </div>
            <div className="navbar-right flex ml-auto flex-wrap items-center">
              <div className="navbar-nav flex">
                <div>
                  <Link href={'#'} className='text-[#595959] h-20 flex-middle-center px-[15px]'>Bantuan</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div></div>
      <div className="full-loading"></div>
    </div>
  );
}
