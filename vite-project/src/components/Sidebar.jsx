import { RiHomeSmile2Fill } from "react-icons/ri";
import {
  FaCalendar,
  FaGraduationCap,
  FaDotCircle,
  FaFolder,
} from "react-icons/fa"; // Import FaDotCircle
import { CiCirclePlus } from "react-icons/ci"; // Import CiCirclePlus
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import logo from "../../public/logo.svg";
import { TbClockCheck } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { GiRecycle } from "react-icons/gi";
import { AiFillWallet } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import Text from "./Text";
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

          const res = await axios.get("http://localhost:5000/api/auth/user", {
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
        <img className="h-9" src={logo} alt="Logo" />
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

      <div className="block  h-screen pl-20   space-y-5 -mt-40 font-medium ">
		
        <button className="mt-48 flex h-12 w-52 pt-2   rounded-xl  bg-blue-300    ">
          <RiHomeSmile2Fill className="mt-1" color="rgba(0, 161, 0, 1)" /> Home <IoIosArrowForward className="ml-24 mt-2"/>
        </button>
        <button className="flex h-12 w-52 pt-2   rounded-xl   ">
          <IoIosPeople className="mt-1" color="rgba(0, 161, 0, 1)" />
          Employees
        </button>
        <button className="flex h-12 w-52 pt-2   rounded-xl   ">
          <FaCalendar className="mt-1" color="rgba(0, 161, 0, 1)" /> Clock-ins
        </button>
        <button className="flex h-12 w-52 pt-2   rounded-xl   ">
          <GiRecycle className="mt-1" color="rgba(0, 161, 0, 1)" /> Calender
        </button>
        <button className="flex h-12 w-52 pt-2   rounded-xl   ">
          {" "}
          <TbClockCheck className="mt-1" color="rgba(0, 161, 0, 1)" /> Shifts
        </button>
        <button className="flex h-12 w-52 pt-2   rounded-xl   ">
          {" "}
          <FaFolder className="mt-1" color="rgba(0, 161, 0, 1)" /> Documents
        </button>
        <button className="flex h-12 w-52 pt-2   rounded-xl   ">
          <FaGraduationCap className="mt-1" color="rgba(0, 161, 0, 1)" /> E-learning
        </button>
        <button className="flex h-12 w-52 pt-2   rounded-xl   ">
          <FiFileText className="mt-1" color="rgba(0, 161, 0, 1)" />
          Reports
        </button>
        <button className="flex ">
          <BsCashCoin className="mt-1" color="rgba(0, 161, 0, 1)" />
          Payroll
        </button>
        <button className="flex h-12 w-52 pt-2   rounded-xl  ">
          <AiFillWallet className="mt-1" color="rgba(0, 161, 0, 1)" />
          Expenses
        </button>
        <button className="flex h-12 w-52 pt-2   rounded-xl  ">
          <svg
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.9458 19.7825C22.8011 17.0097 24.2443 13.4119 23.9648 9.08116C23.9379 8.65646 23.8074 8.26442 23.5879 7.92751C23.3705 7.59061 23.0641 7.31087 22.6831 7.10873C22.3042 6.90658 21.9004 6.80858 21.4945 6.81266C21.0887 6.81674 20.6849 6.92496 20.3102 7.13323L19.1444 7.78458C18.9001 7.92139 18.6371 7.98877 18.3804 7.98469C18.1236 7.9806 17.8648 7.9071 17.6246 7.76417L15.2682 6.35733C14.8686 6.11843 14.4338 6 14.001 6C13.5683 6 13.1314 6.12047 12.7338 6.35733L10.3775 7.76417C10.1373 7.9071 9.87844 7.98264 9.62168 7.98469C9.36286 7.98877 9.10403 7.92139 8.85763 7.78458L7.69188 7.13323C7.3171 6.92292 6.91333 6.81674 6.50749 6.81266C6.10165 6.80858 5.69788 6.90658 5.31896 7.10873C4.93797 7.31087 4.63152 7.59061 4.41411 7.92751C4.19669 8.26442 4.06624 8.65646 4.03725 9.08116C3.75772 13.4119 5.20094 17.0097 7.0562 19.7825C8.90111 22.5391 11.1539 24.4747 12.5164 25.4997C12.9616 25.8346 13.4813 26.002 14.0031 26.002C14.5249 26.002 15.0446 25.8346 15.4898 25.4997C16.8502 24.4747 19.1051 22.5391 20.95 19.7825H20.9458ZM14.1273 20.4604C13.9555 20.2644 13.9782 19.9704 14.175 19.8009C15.0591 19.0475 16.0074 18.0755 16.8108 16.8811C17.6101 15.6947 18.2644 14.2899 18.5605 12.6626C18.6061 12.4074 18.8525 12.2399 19.1113 12.2848C19.3701 12.3298 19.5399 12.5727 19.4943 12.828C19.1713 14.5962 18.4653 16.1174 17.6039 17.3977C16.7466 18.6697 15.7362 19.707 14.7961 20.5074C14.5974 20.6769 14.2992 20.6544 14.1273 20.4604Z"
              fill="#00A100"
            />
          </svg>
          Data Protection <br />
          (GDPR)
        </button>
      </div>
      
      
    </section>
  );
};

export default Sidebar;
