import React, { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  return (
    <div className="bg-gray-200 h-full w-full">
      <nav className="bg-white shadow xl:block hidden">
        <div className="mx-auto container px-6 py-2 xl:py-0">
          <div className="flex items-center justify-center">
            <div className="flex w-full sm:w-auto items-center justify-center sm:items-stretch sm:justify-center">
              <img className="h-24 mt-2" src="/src/assets/img/TALENTO.png" />
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <div className="py-4 px-6 w-full flex xl:hidden items-center justify-center bg-white ">
          <img className="h-24 mt-2" src="/src/assets/img/TALENTO.png" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
