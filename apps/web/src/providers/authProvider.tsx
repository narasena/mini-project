'use client';
import useAuthStore from '@/lib/store/auth-store';
import apiInstance from '@/utils/axiosInstance';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

const publicRoutes = ['/login', '/register'];

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isLogin, token, member, setLogin, setToken, setMember, hasHydrated } = useAuthStore();
  const pathName = usePathname();
  const router = useRouter();

  // React.useEffect(() => {
  //   if (!isLogin && !token && !publicRoutes.includes(pathName)) {
  //     router.push('/login');
  //   } else if (isLogin && token && publicRoutes.includes(pathName)) {
  //     handleSessionLogin();
  //     router.push('/');
  //   }
  // }, [isLogin, token, pathName]);

  React.useEffect(() => {
    if (!hasHydrated) return;

    if (isLogin && token && publicRoutes.includes(pathName)) {
      handleSessionLogin();
      router.push('/');
    } else if (!isLogin && !token && pathName !== '/login') {
      router.push('/login');
    }
  }, [isLogin, token, pathName, router, hasHydrated]);

  // 2️⃣ if there’s a token but no isLogin, validate it
  React.useEffect(() => {
    if (!hasInit) return;
    if (token && !isLogin) {
      apiInstance
        .get('/auth/session-login', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.success) {
            setMember(res.data.data.member);
            setLogin(true);
          } else {
            setToken(null);
            localStorage.removeItem('token');
          }
        })
        .catch(() => {
          setToken(null);
          localStorage.removeItem('token');
        });
    }
  }, [hasInit, token, isLogin, setLogin, setMember, setToken]);

  // 3️⃣ after init & validation, handle routing
  React.useEffect(() => {
    if (token) {
      apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token]);

  // 
  console.log(isLogin, token, member);
  // For public routes or when logged in, render the children
  return <>{children}</>;
}
