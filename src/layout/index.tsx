import classes from "./index.module.css";
import Header from "./Header";
import { ReactNode } from "react";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={classes.mainContainer}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
