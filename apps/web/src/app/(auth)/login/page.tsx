'use client';
import useAuthStore from '@/lib/store/auth-store';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { set } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { toast } from 'react-toastify';
export default function LoginPage() {
  const {setLogin, setToken, setMember} = useAuthStore()
  const [email, setEmail] = React.useState('');
  const [isOTPLoginSent, setIsOTPLoginSent] = React.useState(false);
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false);
  const handleLogin = async (email: string) => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, type: "LOGIN" });
      toast.success(response.data.message);
      setEmail(email);
      setIsOTPLoginSent(true);
    } catch (error:any) {
      console.log(error);
      if (error.response.data.pushToRegister) {
        toast.error(error.response.data.message);
        setTimeout(() => {
          router.push('/register')
        },2000)
      } else {
        toast.error(error.response.data.message);        
      }
      
    }finally{
      setIsLoading(false);
    }
  };
  const handleOTPVerify = async (code: string) => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8000/api/auth/verify-login', {email, code, type: "LOGIN" });
      toast.success(response.data.message);
      setLogin(true)
      setToken(response.data.data.token) // Assuming your API returns a token
      setMember(response.data.data.member) // Assuming your API returns user data
      setTimeout(() => {
        router.push('/')
      },3000)
    } catch (error:any) {
      console.log(error);
      toast.error(error.response.data.message);
      
    } finally {
      setIsLoading(false);
    }
  }
  const LoadingScreen = () => {
    return (
      <div className={`flex items-center absolute top-0 z-[999] justify-center min-w-full min-h-screen bg-gray-700/50 ${isLoading? 'block' : 'hidden'}`}>
        <div className="flex size-32 items-center justify-center border border-gray-400 rounded-lg bg-white">
          <div role="status">
            <svg
              aria-hidden="true"
              className="size-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {!isOTPLoginSent && (
        <div>

<LoadingScreen/>
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
        </div>
      )}
      {isOTPLoginSent && (
        <div>
          <LoadingScreen/>
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
        </div>
      )}
    </>
  );
}
