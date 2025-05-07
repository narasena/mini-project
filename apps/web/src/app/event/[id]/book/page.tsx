'use client';
import useAuthStore from '@/lib/store/auth-store';
import { IDiscountCoupon } from '@/types/discount.coupon';
import { IEvent } from '@/types/event.type';
import { IPointsTransaction } from '@/types/points.transaction';
import apiInstance from '@/utils/axiosInstance';
import { set } from 'lodash';
import { headers } from 'next/headers';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const DetailPemesanan: React.FC = () => {
  const { token } = useAuthStore();
  const params = useParams();
  const [event, setEvent] = useState<IEvent | null>(null);
  const [points, setPoints] = useState<IPointsTransaction[]>([]);
  const [discounts, setDiscounts] = useState<IDiscountCoupon[]>([]);
  const [initPrice, setInitPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [isPointsRedeemed, setIsPointsRedeemed] = useState(false);
  const [isDiscountRedeemed, setIsDiscountRedeemed] = useState(false);
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
  const handleGetDiscountCoupon = async () => {
    try {
      const response = await apiInstance.get(`/discount/my-coupons`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDiscounts(response.data.coupons);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePriceDisplay = () => {
    setFinalPrice(event?.ticketPrice! * event?.maxTicketPerTransaction!);
  };
  const handleDiscountCouponExchange = () => {
    if (event && discounts.length > 0) {
      if (!isDiscountRedeemed) {
        // Apply discount
        const newDiscountedPrice =
          (finalPrice * (100 - discounts[0].percentage)) / 100;
        console.log('Applying discount:', newDiscountedPrice);
        setIsDiscountRedeemed(true);
        setDiscountedPrice(newDiscountedPrice);
        setFinalPrice(newDiscountedPrice);
      } else {
        // Remove discount - restore original price
        const originalPrice = event.ticketPrice * event.maxTicketPerTransaction;
        console.log('Removing discount, restoring price:', originalPrice);
        setIsDiscountRedeemed(false);
        setDiscountedPrice(0);
        setFinalPrice(originalPrice);
      }
    }
  };
  // const dummyPoints = [10000, 10000, 10000];
  const handlePointRedeem = () => {
    // Calculate total points value
    // const pointsValue = dummyPoints.reduce((a, b) => a + b, 0);
    const pointsValue = points.reduce((a, b) => a + b.amount, 0);

    if (!isPointsRedeemed) {
      // Apply points to reduce price
      // First check if we have a price to work with
      if (finalPrice > 0) {
        // Calculate new price after applying points
        // Make sure we don't go below 0
        const newPrice = Math.max(0, finalPrice - pointsValue);
        console.log(
          `Applying ${pointsValue} points to reduce price from ${finalPrice} to ${newPrice}`,
        );

        setFinalPrice(newPrice);
        setIsPointsRedeemed(true);
      }
    } else {
      // Restore price by adding back the points value
      // Use discountedPrice if discount was applied, otherwise use initPrice
      const basePrice = isDiscountRedeemed ? discountedPrice : initPrice;
      console.log(`Removing points, restoring price to ${basePrice}`);

      setFinalPrice(basePrice);
      setIsPointsRedeemed(false);
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
      handleGetDiscountCoupon();
    }
  }, [token]);

  useEffect(() => {
    handlePriceDisplay();
  }, [event]);

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
            {finalPrice.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              maximumFractionDigits: 0,
            })}
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
            <div className="text-left font-semibold text-lg text-gray-700">
              {`Kamu Punya Point ${points.reduce((a, b) => a + b.amount, 0).toLocaleString()}`}
              {/* {`Kamu Punya Point ${dummyPoints.reduce((a, b) => a + b, 0)}`} */}
            </div>
            <div>
              {points.length === 0 && (
                <button
                  className="c-button-primary c-button"
                  onClick={handlePointRedeem}
                >
                  Tukar Point
                </button>
              )}
            </div>
            <div className="w-full border border-b-blue-900 my-4"></div>
            <div className="text-left font-semibold text-lg text-gray-700">
              {`Kamu Punya ${discounts.length} Kupon Diskon`}
              {discounts.map((discount: IDiscountCoupon, index) => (
                <div
                  className="my-2 p-2 border border-blue-900 rounded-sm bg-blue-200"
                  key={index}
                >
                  <div
                    className={`font-bold text-lg ${isDiscountRedeemed ? 'text-gray-400 line line-through' : 'text-gray-700'}`}
                  >{`${discount.name}: ${discount.percentage}%`}</div>
                  <div className="text-blue-600 text-xs">
                    Hanya bisa digunakan 1 kali
                  </div>
                </div>
              ))}
            </div>
            <div>
              {discounts.length > 0 && (
                <button
                  className="c-button-primary c-button"
                  onClick={handleDiscountCouponExchange}
                >
                  Tukar Kupon
                </button>
              )}
            </div>
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
