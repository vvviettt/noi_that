import classNames from "classnames";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderItem } from "./type";

const Header: React.FC = () => {
  const [headerItems] = useState<HeaderItem[]>([
    { content: "Home", route: "/" },
    { content: "Shop", route: "/shop" },
    { content: "Brand", route: "/brand" },
    { content: "Introduce", route: "/introduce" },
    { content: "Support", route: "/support" },
  ]);
  const [inTop, setInTop] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      setInTop(!show);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "flex justify-center h-[3.5rem] fixed top-0 right-0 left-0 z-10",
        {
          "bg-primary": !inTop,
          "bg-transparent ": inTop,
        }
      )}
    >
      <div
        className={classNames(
          "max-w-[71.25rem] px-8 flex justify-between items-center w-full"
        )}
      >
        <div className={classNames(" flex")}>
          {headerItems.map((item) => (
            <NavLink
              key={item.route}
              className={"mx-2"}
              to={item.route}
              children={({ isActive }) => {
                return (
                  <div className={classNames("px-2 group")}>
                    <p className="text-secondary text-[1.1rem]">
                      {item.content}
                    </p>
                    <div
                      className={classNames(
                        "w-0 group-hover:w-full h-[0.1rem] bg-secondary rounded transition-all",
                        {
                          "!w-full ": isActive,
                        }
                      )}
                    ></div>
                  </div>
                );
              }}
            />
          ))}
        </div>
        <div className="">
          <div className="relative">
            <svg
              width="25"
              height="25"
              viewBox="0 0 39 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_4814)">
                <path
                  d="M8 8C8 3.58143 11.5786 0 16 0C20.4214 0 24 3.58143 24 8V11.4286H28.5714C30.4643 11.4286 32 12.9643 32 14.8571V29.7143C32 33.5 28.9286 36.5714 25.1429 36.5714H6.85714C3.07 36.5714 0 33.5 0 29.7143V14.8571C0 12.9643 1.535 11.4286 3.42857 11.4286H8V8ZM11.4286 11.4286H20.5714V8C20.5714 5.475 18.5214 3.42857 16 3.42857C13.4786 3.42857 11.4286 5.475 11.4286 8V11.4286ZM9.71429 18.2857C10.6643 18.2857 11.4286 17.5214 11.4286 16.5714C11.4286 15.6214 10.6643 14.8571 9.71429 14.8571C8.76429 14.8571 8 15.6214 8 16.5714C8 17.5214 8.76429 18.2857 9.71429 18.2857ZM22.2857 14.8571C21.3357 14.8571 20.5714 15.6214 20.5714 16.5714C20.5714 17.5214 21.3357 18.2857 22.2857 18.2857C23.2357 18.2857 24 17.5214 24 16.5714C24 15.6214 23.2357 14.8571 22.2857 14.8571Z"
                  fill="#999999"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_4814">
                  <rect width="32" height="36.5714" fill="#999999" />
                </clipPath>
              </defs>
            </svg>
            <div className="absolute w-5 h-5 bg-danger flex justify-center items-center rounded-xl top-0 right-[-0.5rem]">
              <p className="text-white text-[0.75rem] font-semibold">1+</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
