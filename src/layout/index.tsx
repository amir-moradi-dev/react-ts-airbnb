import classes from "./index.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className={classes.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
