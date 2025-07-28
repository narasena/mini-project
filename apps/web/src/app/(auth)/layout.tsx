'use client';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="main-section-container auth-member">
        <div className="auth-member-brand ">
          <Link href="/">
            <Image
              alt="logo"
              width={122}
              height={32}
              src="/images/logo-loket-blue.svg"
              className="max-w-full h-auto"
            />
          </Link>
        </div>
        <div className="auth-member-char">
          <div className="auth-member-figure">
            <div className="auth-member-figure-icon">
              <Image
                src={'/images/auth.svg'}
                alt="animation-login"
                width={300}
                height={300}
              />
            </div>
            <div className="auth-member-figure-label">
              <label className="auth-member-figure-label-label">
                Tidak lagi ketinggalan event dan film favoritmu
              </label>
              <p className="auth-member-figure-label-text">
                Gabung dan rasakan kemudahan bertransaksi dan mengelola event di
                Loket
              </p>
            </div>
          </div>
        </div>
        <div className="auth-member-content">
          <div className="auth-member-content-main">
            <div className="auth page">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
