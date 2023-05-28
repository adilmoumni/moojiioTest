import { ReactNode } from "react";
import NavBar from "../nav_bar";

interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={`${className} bg-moojiio-bg h-screen`}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
