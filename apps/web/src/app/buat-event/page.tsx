import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { BsPlusCircle } from 'react-icons/bs';

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
                              />
                              <div className="banner-image-action absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-full lg:w-[60%] w-full">
                                <div className="upload">
                                  <div className='upload-img-form inline-block relative max-w-full align-middle'>
                                    <input type="file" accept="image/*" className='text-[500px] absolute top-0 z-1 w-full h-full left-0 opacity-0'/>
                                    <BsPlusCircle className='text-5xl text-white'/>
                                  </div>
                                  <div className='text-center text-white'>
                                    <p className=' mt-2.5 text-[1.5rem] leading-[1.4] font-normal'>{'Unggah gambar/poster/banner'}</p>
                                    <p className='text-[0.9375rem] '>{'Direkomendasikan 724 x 340 px dan tidak lebih dari 2MB'}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="event-card-body"></div>
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
