import { useState, useEffect } from "react";

function Header() {
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgClass("bg-red-700 bg-opacity-100"); 
      } else {
        setBgClass(""); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full ${bgClass} h-[40px] text-white flex justify-between items-center px-4 md:px-10 transition-all duration-300`}>
      {/* Left Section */}
      <div className="flex gap-2 items-center">
        <img width={30} height={6} src="Images/header/flag.png" alt="Flag" />
        <div>Pakistan</div>
      </div>

      {/* Right Section */}
      <div className="flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
          <path d="M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 16.5C10.0726 14.302 13.9051 14.1986 16 16.5M14.2179 9.75C14.2179 10.9926 13.2215 12 11.9925 12C10.7634 12 9.76708 10.9926 9.76708 9.75C9.76708 8.50736 10.7634 7.5 11.9925 7.5C13.2215 7.5 14.2179 8.50736 14.2179 9.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className="font-bold">Login</div>
      </div>
    </div>
  );
}

export default Header;
