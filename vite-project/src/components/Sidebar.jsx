import { RiHomeSmile2Fill } from "react-icons/ri";
import {
  FaCalendar,
  FaGraduationCap,
  FaDotCircle,
  FaFolder,
} from "react-icons/fa"; // Import FaDotCircle
import { CiCirclePlus } from "react-icons/ci"; // Import CiCirclePlus
import { useEffect, useState } from "react";
import { useNavigate, useLocation ,Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../public/Logo.svg";
import { TbClockCheck } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { GiRecycle } from "react-icons/gi";
import { AiFillWallet } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(location.state?.user || null);
  const [loading, setLoading] = useState(!user);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      const fetchUserData = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            navigate("/signup");
            return;
          }

          const res = await axios.get("https://zarvisgenix-1.onrender.com/api/auth/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(res.data);
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch user data");
          setLoading(false);
          navigate("/signup");
          console.log(err);
        }
      };

      fetchUserData();
    }
  }, [user, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="text-lg shadow-lg h-cu ">
      <div className="flex border-b-2 h-20 items-center space-x-5">
        <img className="h-9" src={Logo} alt="Logo" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg text-black">
            {user?.firstName} {user?.lastName}
          </h1>
          <h1 className="flex items-center text-black space-x-2">
            <FaDotCircle className="h-3 mt-1" />
            <span>{user?.department}</span>
          </h1>
        </div>
        <button className="text-2xl text-blue-500 hover:text-blue-600">
          <CiCirclePlus />
        </button>
      </div>

      <div className="block h-screen pl-20 space-y-5 -mt-40 font-medium">
  <Link to="/" className="mt-48 flex h-12 w-52 pt-2 rounded-xl">
    <RiHomeSmile2Fill className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    Home <IoIosArrowForward className="ml-24 mt-2" />
  </Link>

  <Link to="/employe" className={`flex h-12 w-52 pt-2 rounded-xl ${location.pathname === "/employe" ? "bg-blue-300" : ""}`}>
    <IoIosPeople className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    Employees
  </Link>

  <Link to="/clock" className={`flex h-12 w-52 pt-2 rounded-xl ${location.pathname === "/clock" ? "bg-blue-300" : ""}`}>
    <FaCalendar className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    Clock-ins
  </Link>

  <Link to="/calendar" className={`flex h-12 w-52 pt-2 rounded-xl ${location.pathname === "/calendar" ? "bg-blue-300" : ""}`}>
    <GiRecycle className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    Calendar
  </Link>

  <Link to="/absense" className={`flex h-12 w-52 pt-2 rounded-xl ${location.pathname === "/absense" ? "bg-blue-300" : ""}`}>
    <TbClockCheck className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    Shifts
  </Link>

  <Link to="/document" className={`flex h-12 w-52 pt-2 rounded-xl ${location.pathname === "/document" ? "bg-blue-300" : ""}`}>
    <FaFolder className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    Documents
  </Link>

  <Link to="/learning" className={`flex h-12 w-52 pt-2 rounded-xl ${location.pathname === "/learning" ? "bg-blue-300" : ""}`}>
    <FaGraduationCap className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    E-learning
  </Link>

  <button className="flex h-12 w-52 pt-2 rounded-xl">
    <FiFileText className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    Reports
  </button>

  <Link to="/pay" className={`flex h-12 w-52 pt-2 rounded-xl ${location.pathname === "/pay" ? "bg-blue-300" : ""}`}>
    <BsCashCoin className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    Payroll
  </Link>

  <Link to="/expense" className={`flex h-12 w-52 pt-2 rounded-xl ${location.pathname === "/expense" ? "bg-blue-300" : ""}`}>
    <AiFillWallet className="mt-1" color="rgba(0, 161, 0, 1)" /> 
    Expenses
  </Link>

  <Link to="/data" className={`flex h-12 w-52 pt-2 rounded-xl ${location.pathname === "/data" ? "bg-blue-300" : ""}`}>
    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.9458 19.7825C22.8011 17.0097 24.2443 13.4119 23.9648 9.08116..." fill="#00A100"/>
    </svg>
    Data Protection
  </Link>
</div>

      
      
    </section>
  );
};

export default Sidebar;
