'use client';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { toast } from 'react-toastify';
export default function LoginPage() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [isOTPLoginSent, setIsOTPLoginSent] = React.useState(false);
  const [member, setMember] = React.useState({}); 
  const router = useRouter()
  const handleLogin = async (email: string) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, type: "LOGIN" });
      
      console.log(response);
      toast.success(response.data.message);
      setEmail(email);
      setIsOTPLoginSent(true);
    } catch (error:any) {
      console.log(error);
      toast.error(error.response.data.message);
      
    }
  };
  const handleOTPVerify = async (code: string) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/verify-login', {email, code, type: "LOGIN" });
      console.log(response.data);
      toast.success(response.data.message);
      setIsLogin(true);
      setTimeout(() => {
        router.push('/')
      },3000)
    } catch (error:any) {
      console.log(error);
      toast.error(error.response.data.message);
      
    }
  }
  return (
    <>
      {!isOTPLoginSent && (

      <div className="auth-container">
        <div className="auth-title pre-sign-up">
          <h3>Masuk ke akunmu</h3>
          <label>
            Tidak punya akun Loket?
            <Link href="/register">
              <span className="font-bold cursor-pointer !text-[#0049cc]">
                {' '}
                Daftar
              </span>
            </Link>
          </label>
        </div>
        <div className="auth-content">
          <div className="auth-form">
            <Formik initialValues={{email:''}} onSubmit={(values) => {handleLogin(values.email)}}>
              <Form>
                <div className="!mb-2.5">
                  <label className="auth-label block">Email</label>
                </div>

                <div className="auth-form-control">
                  <Field
                    name="email"
                    type="text"
                    placeholder=""
                    className="auth-form-input"
                  />
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
                <div className="!mb-0 !mt-5 w-full max-w-full">
                  <button
                    type="submit"
                    className="w-full max-w-full c-button c-button-primary c-button-1"
                  >
                    <span className="">Masuk</span>
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      )}
      {isOTPLoginSent && (
        <div className="auth-container">
          <div className="auth-title pre-sign-up">
            <h3>Masuk kan OTP</h3>
          </div>
          <div className="auth-content">
            <div className="auth-form">
              <Formik initialValues={{code:''}} onSubmit={(values) => {handleOTPVerify(values.code)}}>
                <Form>
                  <div className="!mb-2.5">
                    <label className="auth-label block">Kode OTP</label>
                  </div>

                  <div className="auth-form-control">
                    <Field
                      name="code"
                      type="text"
                      placeholder=""
                      className="auth-form-input"
                    />
                  </div>
                  <ErrorMessage
                    name="code"
                    component="div"
                    className="error-message"
                  />
                  <div className="!mb-0 !mt-5 w-full max-w-full">
                    <button
                      type="submit"
                      className="w-full max-w-full c-button c-button-primary c-button-1"
                    >
                      <span className="">Masuk</span>
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
