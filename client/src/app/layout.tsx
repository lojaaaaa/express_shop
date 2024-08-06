
import { Outlet } from "react-router-dom";
import { Header } from "src/widgets/header";

interface LayoutProps {
  width: 'max-w-screen-xl' | 'max-w-screen-2xl' | 'max-w-screen-md' | 'max-w-screen-lg' | 'max-w-screen-sm';
}

export const PrivateLayout = ({ width }: LayoutProps) => (
  <>
    <Header />
    <main
      className={`${width} mx-auto py-2 px-8`}
    >
      <Outlet />
    </main>
  </>
);

export const PublicLayout = ({ width }: LayoutProps) => (
  <>
    <main
      className={`${width} mx-auto py-2 px-8`}
    >
      <Outlet />
    </main>
  </>
);