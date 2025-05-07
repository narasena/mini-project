// pages/voucher.tsx

import React from 'react';

const E_Voucher: React.FC = () => {
  const voucherData = {
    name: 'Aditya Setiawan',
    invoiceCode: 'MJH868BX',
    orderDate: '05 May 2025 10:34',
    reference: 'Online',
    eventTitle: 'Webinar Ekspansi Bisnis ke Singapura',
    eventDate: '08 May 2025 16:00 – 17:00',
    eventLocation: 'Online',
    ticketUrl:
      'https://evoucher.loket.com/evoucher/4f741be8-a963-451a-8870-83eccde0e913?_gl=1*5a7u0a*_gcl_au*MTU3ODQ1NzI5NC4xNzQ1OTg3NzY2',
    supportEmail: 'support@loket.com',
    supportPhone: '+62 213 0003 160',
    website: 'https://www.loket.com/',
    eventBanner:
      'https://assets.loket.com/neo/production/images/banner/20250429133940_6810742c07c7f.jpg', // URL gambar banner
    barcodeImage:
      'https://png.pngtree.com/png-vector/20220605/ourmid/pngtree-barcode-vector-png-image_4889246.png', // URL barcode
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo Loket */}
        <img
          src="https://media.licdn.com/dms/image/v2/C4D1BAQHw2uZ0K63lCg/company-background_10000/company-background_10000/0/1652770333473/loket_com_cover?e=2147483647&v=beta&t=UBlaHP-AXxqlQXSkokxaLGDrAkR0AapBkYuzMjTh9c4"
          alt="Loket Logo"
          style={{ width: '120px' }}
        />
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>E-Voucher</span>
      </div>

      {/* Event Details */}
      <div
        style={{
          marginTop: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Event Banner Image (smaller size) */}
        <img
          src={voucherData.eventBanner}
          alt="Event Banner"
          style={{
            width: '40%',
            borderRadius: '8px',
            maxHeight: '150px',
            objectFit: 'cover',
          }}
        />

        {/* Event Information */}
        <div style={{ marginLeft: '20px', maxWidth: '50%' }}>
          <h2>{voucherData.eventTitle}</h2>
          <p>
            <strong>Lokasi:</strong> {voucherData.eventLocation}
          </p>
          <p>
            <strong>Tanggal Event:</strong> {voucherData.eventDate}
          </p>
        </div>
      </div>

      {/* Informasi Pemesan dalam Kotak Sejajar Horizontal */}
      <div
        style={{
          marginTop: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Kolom Kiri (Nama & Kode Tagihan) */}
        <div
          style={{
            width: '48%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ marginBottom: '5px' }}>
            <p style={{ margin: '0 0 5px 0' }}>
              <strong>Nama / Name:</strong>
            </p>
            <p style={{ margin: '0 0 5px 0' }}>{voucherData.name}</p>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <p style={{ margin: '0 0 5px 0' }}>
              <strong>Kode Tagihan / Invoice Code:</strong>
            </p>
            <p style={{ margin: '0 0 5px 0' }}>{voucherData.invoiceCode}</p>
          </div>
        </div>

        {/* Kolom Kanan (Tanggal Pembelian, Referensi) */}
        <div
          style={{
            width: '48%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ marginBottom: '5px' }}>
            <p style={{ margin: '0 0 5px 0' }}>
              <strong>Tanggal Pembelian / Order Date:</strong>
            </p>
            <p style={{ margin: '0 0 5px 0' }}>{voucherData.orderDate}</p>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <p style={{ margin: '0 0 5px 0' }}>
              <strong>Referensi / Reference:</strong>
            </p>
            <p style={{ margin: '0 0 5px 0' }}>{voucherData.reference}</p>
          </div>
        </div>
      </div>

      {/* Teks KOPLO PARTY MADNESS WITH FEEL KOPLO dan Barcode di luar kotak */}
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: 1 }}>
          {/* Teks KOPLO PARTY MADNESS WITH FEEL KOPLO */}
          <p style={{ fontWeight: 'bold' }}>
            KOPLO PARTY MADNESS WITH FEEL KOPLO
          </p>
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          {/* Barcode Image */}
          <img
            src={voucherData.barcodeImage}
            alt="Barcode"
            style={{ width: '100%', maxWidth: '150px' }}
          />
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '20px', fontSize: '12px' }}>
        <p>
          <strong>Syarat dan Ketentuan:</strong>
        </p>
        <p>Untuk detail lebih lanjut, kunjungi website atau hubungi support.</p>
        <p>
          Email:{' '}
          <a href={`mailto:${voucherData.supportEmail}`}>
            {voucherData.supportEmail}
          </a>
        </p>
        <p>
          Telepon:{' '}
          <a href={`tel:${voucherData.supportPhone}`}>
            {voucherData.supportPhone}
          </a>
        </p>
        <p>
          Website:{' '}
          <a
            href={voucherData.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {voucherData.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default E_Voucher;
