'use client';


import useAuthStore from '@/lib/store/auth-store';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

const publicRoutes = ['/login', '/register'];

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLogin, token, hasHydrated } = useAuthStore();
  const pathName = usePathname();
  const router = useRouter()
  React.useEffect(() => {
    if (!hasHydrated) return;
    // not logged in → block private pages
    if (!isLogin && !token && !publicRoutes.includes(pathName)) {
      router.replace('/login');
    }
    // logged in → block auth pages
    else if (isLogin && token && publicRoutes.includes(pathName)) {
      router.replace('/');
    }
  }, [hasHydrated, isLogin, token, pathName, router]);

  // Don’t render children until we've hydrated, to avoid flicker
  if (!hasHydrated) return null;

  return <>{children}</>;
}
