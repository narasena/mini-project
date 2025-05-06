'use client';
import useAuthStore from '@/lib/store/auth-store';
import apiInstance from '@/utils/axiosInstance';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

const publicRoutes = ['/login', '/register'];

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLogin, token, member, setLogin, setToken, setMember, hasHydrated } =
    useAuthStore();
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
    } else if (!isLogin && !token && !publicRoutes.includes(pathName) ) {
      router.push('/login');
    }
  }, [isLogin, token, pathName, router, hasHydrated]);

  const handleSessionLogin = async () => {
    try {
      const response = await apiInstance.get('/auth/session-login', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setMember(response.data.data.member);
        setLogin(true);
        setToken(response.data.data.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (token) {
      apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token]);

  //
  // console.log(isLogin, token, member);
  // For public routes or when logged in, render the children
  return <>{children}</>;
}
