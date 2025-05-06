'use client';
import useAuthStore from '@/lib/store/auth-store';
import { IEvent } from '@/types/event.type';
import { IPointsTransaction } from '@/types/points.transaction';
import apiInstance from '@/utils/axiosInstance';
import { headers } from 'next/headers';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const DetailPemesanan: React.FC = () => {
  const { token } = useAuthStore();
  const params = useParams();
  const [event, setEvent] = useState<IEvent | null>(null);
  const [points, setPoints] = useState<IPointsTransaction[]>([]);
  console.log(points)
  const handleGetEventById = async () => {
    try {
      const response = await apiInstance.get(`/events/${params.id}`);
      setEvent(response.data.event);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetReferralPoints = async () => {
    try {
      
      const response = await apiInstance.get(`/referral/my-points`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPoints(response.data.points);
    } catch (error) {
      console.log(error);
    }
  };
  const [isChecked, setIsChecked] = useState(false); // Track checkbox for agreement
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState(''); // Date of birth
  const [gender, setGender] = useState(''); // Gender selection
  const [whatsappNotification, setWhatsappNotification] = useState(false); // WhatsApp notification toggle
  const [quantity, setQuantity] = useState(1); // Track ticket quantity
  const ticketPrice = 100000; // Price per ticket in IDR
  const ticketType = 'KOPLO PARTY MADNESS WITH FEEL KOPLO';
  const ticketQuantity = 1; // Initial quantity of tickets

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Handle quantity change
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  // Handle form submit (button click)
  const handleSubmit = () => {
    if (isChecked && name && email && phone && dob && gender) {
      console.log('Ticket is purchased');
      console.log(
        `Name: ${name}, Email: ${email}, Phone: ${phone}, DOB: ${dob}, Gender: ${gender}, WhatsApp: ${whatsappNotification ? 'Yes' : 'No'}`,
      );
    } else {
      alert('Please fill all fields and agree to the terms');
    }
  };
  useEffect(() => {
    handleGetEventById();
    if (token) {
      handleGetReferralPoints();
    }
  }, [token]);

  // Calculate the total price based on the quantity
  const totalPrice = quantity * ticketPrice;

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '16px' }}>
      {/* Ticket Image Section inside Event Detail */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        {/* Event Image */}
        <div style={{ flex: 1 }}>
          <img
            src={event?.bannerImgUrl!}
            alt="Event Ticket Image"
            style={{
              width: '100%',
              maxWidth: '400px', // Resize image
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Ticket Details */}
        <div style={{ flex: 2 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            {event?.eventName}
          </h2>
          <p style={{ margin: '4px 0' }}>
            <strong>📅</strong>
            {`${event?.eventStartDate} - ${event?.eventEndDate}`}
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>🕓</strong>
            {`${event?.eventStartTime} - ${event?.eventEndTime}`}
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>📍</strong>
            {event?.eventLocation}
          </p>
          <p style={{ marginTop: '8px', fontWeight: 'bold' }}>
            {`Harga: ${event?.ticketPrice.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              maximumFractionDigits: 0,
            })} x ${event?.maxTicketPerTransaction}`}
          </p>
        </div>

        {/* Total Price */}
        <div
          style={{
            backgroundColor: '#f0f9ff',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Total</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Rp{totalPrice.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Form Pemesanan and Terms Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Form Fields */}
        <div
          style={{
            flex: 2,
            padding: '16px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '16px',
            }}
          >
            Detail Pemesanan
          </h3>

          {/* Form Fields */}
          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontWeight: 'bold' }}>Nama Lengkap *</label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                marginTop: '8px',
              }}
            />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontWeight: 'bold' }}>Email *</label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                marginTop: '8px',
              }}
            />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontWeight: 'bold' }}>Nomor Handphone *</label>
            <input
              type="tel"
              placeholder="Masukkan nomor handphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                marginTop: '8px',
              }}
            />
          </div>

          {/* WhatsApp Notification */}
          <div style={{ marginBottom: '12px' }}>
            <label>
              <input
                type="checkbox"
                checked={whatsappNotification}
                onChange={() => setWhatsappNotification(!whatsappNotification)}
                style={{ marginRight: '8px' }}
              />
              Kirim notifikasi pesanan via WhatsApp
            </label>
          </div>

          {/* Tanggal Lahir */}
          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontWeight: 'bold' }}>Tanggal Lahir *</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                marginTop: '8px',
              }}
            />
          </div>

          {/* Jenis Kelamin */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontWeight: 'bold' }}>Jenis Kelamin *</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                marginTop: '8px',
              }}
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          {/* Checkbox for Terms */}
          <div style={{ marginBottom: '16px' }}>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ marginRight: '8px' }}
              />
              Saya setuju dengan <strong>Syarat dan Ketentuan</strong> serta{' '}
              <strong>Pemrosesan Data Pribadi</strong> yang berlaku di Loket.com
            </label>
          </div>

          {/* Message for Data Verification */}
          <div
            style={{
              marginBottom: '16px',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: '#ff3d00',
            }}
          >
            Pastikan data diri Anda sudah benar.
          </div>
        </div>

        {/* Terms and Agreement Section */}
        <div
          style={{
            flex: 1,
            padding: '16px',
            backgroundColor: '#f4f7ff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div>
            <div>{`Kamu Punya Point ${points.reduce((a, b) => a + b.amount, 0).toLocaleString()}`}</div>
          </div>
          <div className="border-t-2 pt-4 border-gray-700">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              Syarat dan Ketentuan
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#333' }}>
              Pastikan untuk membaca syarat dan ketentuan yang berlaku sebelum
              melakukan pemesanan. Pemrosesan data pribadi akan dilakukan sesuai
              dengan kebijakan yang berlaku di Loket.com.
            </p>
            <button
              onClick={handleSubmit}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%',
                marginTop: '20px',
              }}
            >
              Dapatkan Tiket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPemesanan;
