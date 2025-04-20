'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as React from 'react';
export default function LoginPage() {
  return (
    <>
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
            <Formik initialValues={{}} onSubmit={(values) => {}}>
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
      <div className="auth-bg"></div>
    </>
  );
}
