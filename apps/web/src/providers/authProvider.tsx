'use client';
import useAuthStore from '@/lib/store/auth-store';
import apiInstance from '@/utils/axiosInstance';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

const publicRoutes = ['/login', '/register'];

// export default function AuthProvider({ children }: { children: React.ReactNode }) {
//   const { isLogin, token, setLogin, setToken, setMember } = useAuthStore();
//   const pathName = usePathname();
//   const router = useRouter();

//   React.useEffect(() => {
//     if (!isLogin && !token && !publicRoutes.includes(pathName)) {
//       router.push('/login');
//     } else if (isLogin && token && publicRoutes.includes(pathName)) {
//       handleSessionLogin();
//       router.push('/');
//     }
//   }, [isLogin, token, pathName, router]);

//   const handleSessionLogin = async () => {
//     try {
//       const response = await apiInstance.get('/auth/session-login', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (response.data.success) {
//         setMember(response.data.data.member);
//         setLogin(true);
//         setToken(response.data.data.token);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   React.useEffect(() => {
//     if (token) {
//       apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     }
//   }, [token]);

//   // Only block rendering on protected routes when not logged in
//   if (!isLogin && !token && !publicRoutes.includes(pathName)) {
//     // We're already redirecting in the useEffect, so return null for protected routes
//     return null;
//   }

//   // For public routes or when logged in, render the children
//   return <>{children}</>;
// }

export default function AuthProvider({ children }:{children: React.ReactNode}) {
  const [hasInit, setHasInit] = React.useState(false);
  const { token, isLogin, setLogin, setToken, setMember } = useAuthStore();
  const pathName = usePathname();
  const router = useRouter();

  // 1️⃣ load token from storage once
  React.useEffect(() => {
    const saved = localStorage.getItem('token');
    if (saved) {
      setToken(saved);
      // we’ll validate it below
    }
    setHasInit(true);
  }, [setToken]);

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
    if (!hasInit) return;

    const isPublic = publicRoutes.includes(pathName);
    if (!isLogin && !token && !isPublic) {
      router.replace('/login');
    }
    if (isLogin && token && isPublic) {
      router.replace('/');
    }
  }, [hasInit, isLogin, token, pathName, router]);

  if (!hasInit) {
    // or show a spinner
    return null;
  }

  return <>{children}</>;
}
