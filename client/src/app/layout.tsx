import { Outlet } from "react-router-dom";

interface LayoutProps {
  width: 'max-w-screen-xl' | 'max-w-screen-2xl' | 'max-w-screen-md' | 'max-w-screen-lg' | 'max-w-screen-sm';
}

export const Layout = ({ width }: LayoutProps) => (
  <>
    <main
      className={`${width} mx-auto py-2 px-8`}
    >
      <Outlet />
    </main>
  </>
);