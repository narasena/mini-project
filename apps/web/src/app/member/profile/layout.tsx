'use client';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export default function DashboardProfileLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const pathName = usePathname();
  const getProfilePageTitle = () => {
    switch (pathName) {
      case '/member/profile/informasi-dasar':
        return 'Informasi Dasar';
      case '/member/profile/pengaturan':
        return 'Pengaturan';
      case '/member/profile/informasi-legal':
        return 'Informasi Legal';
      case '/member/profile/informasi-bank':
        return 'Rekening';
      default:
        return 'Informasi Dasar';
    }
  };
  return (
    <div className="p-[25px_40px]">
      <div className="flex flex-wrap">
        <div className="w-full max-w-full pl-[30px] -ml-[30px] ">
          <div className="border-b-2 border-[#d8d8d8] ">
            <h2 className="mb-[5px] text-[19px] text-[#595959] pr-[25px] font-medium overflow-hidden whitespace-nowrap">
              {getProfilePageTitle()}
            </h2>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
