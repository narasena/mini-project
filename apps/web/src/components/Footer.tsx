import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003366] text-white text-sm border-t border-gray-300 mt-16 w-full">
      <div className="w-full h-full px-4 py-12">
        {/* Footer Content with Dark Blue Background */}
        <div className="w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Tentang */}
            <div>
              <h3 className="font-semibold mb-4">Tentang</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Tentang Loket
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Masuk
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Biaya
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Lihat Event
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Syarat dan Ketentuan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>

            {/* Rayakan Eventmu */}
            <div>
              <h3 className="font-semibold mb-4">Rayakan Eventmu</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Cara Mempersiapkan Event
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cara Membuat Event Lomba
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cara Mempublikasikan Event
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cara Membuat Event Musik
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cara Mengelola Event
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cara Membuat Konsep Acara yang Menarik
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cara Membuat Event di Co-Working Space
                  </a>
                </li>
              </ul>
            </div>

            {/* Lokasi Event */}
            <div>
              <h3 className="font-semibold mb-4">Lokasi Event</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Jakarta
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Bandung
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Yogyakarta
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Surabaya
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Solo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Medan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Bali
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Semua Kota
                  </a>
                </li>
              </ul>
            </div>

            {/* Inspirasi Event */}
            <div>
              <h3 className="font-semibold mb-4">Inspirasi Event</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Festival
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Konser
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Olahraga
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Workshop & Seminar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Teater & Drama
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Atraksi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Semua Kategori
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ISO 27001 & Keamanan dan Privasi */}
          <div className="flex flex-col justify-center items-center gap-4 py-4 mt-8">
            <p className="text-sm font-medium text-white text-center">
              Keamanan dan Privasi • ISO 27001
            </p>
            <img
              src="https://assets.loket.com/amber-assets/spot/iso2701.svg"
              alt="ISO 27001"
              className="w-40 h-40"
            />
          </div>

          {/* Ikuti Kami */}
          <div className="flex flex-col items-center py-8">
            <p className="text-sm font-medium text-white text-center mb-4">
              Ikuti Kami
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e8/X_logo_2023.svg"
                  alt="X (Twitter)"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_logo_2023.svg"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                  alt="YouTube"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bar navigasi tambahan dengan latar biru */}
      <div className="bg-gradient-to-r from-[#0057FF] to-[#00A1FF]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-white flex justify-center gap-4">
          <a href="#" className="hover:underline">
            Tentang Kami
          </a>
          <span>•</span>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <span>•</span>
          <a href="#" className="hover:underline">
            Kebijakan Privasi
          </a>
          <span>•</span>
          <a href="#" className="hover:underline">
            Kebijakan Cookie
          </a>
          <span>•</span>
          <a href="#" className="hover:underline">
            Panduan
          </a>
          <span>•</span>
          <a href="#" className="hover:underline">
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs pb-4">
        © 2025 Loket (PT Global Loket Sejahtera). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
