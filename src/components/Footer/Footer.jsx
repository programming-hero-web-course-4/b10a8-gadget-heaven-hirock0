import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-[50vh] py-10 ">
      <div className="">
        <div className=" space-y-2 text-center">
          <h1 className=" font-semibold text-3xl">Gadget Heaven</h1>
          <p>Loading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className=""></div>
      </div>
      <section className=" border-t-2 mt-5 pt-5 pb-10">
        <div className=" container text-center gap-5 mx-auto px-5 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
          <div className="">
            <h1 className=" text-xl font-semibold">Service</h1>
            <ul className=" mt-2">
              <NavLink to={"/"}>
                <li>Product Support</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Order Tracking</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Shipping Delivery</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Returns</li>
              </NavLink>
            </ul>
          </div>
          <div className="">
            <h1 className=" text-xl font-semibold">Company</h1>
            <ul className=" mt-2">
              <NavLink to={"/"}>
                <li>About Us</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Careers</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
          <div className="">
            <h1 className=" text-xl font-semibold">Legal</h1>
            <ul className=" mt-2">
              <NavLink to={"/"}>
                <li>Terms of Service</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Privacy Policy</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Cookie Policy</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
