import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import api from "../lib/axios";
import Navbar from "../components/generic/Navbar";
import WordOfTheDay from "../components/Home/WordOfTheDay";

const HomePage = () => {
  const navigate = useNavigate();
  const [cookies, _, removeCookie] = useCookies([], {
    doNotUpdate: false,
  });

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }

      try {
        const { data } = await api.post("/", {}, { withCredentials: true });
        const { status } = data;

        if (!status) {
          removeCookie("token"), navigate("/login");
        }
      } catch (err) {
        console.log({ err });
      }
    };
    verifyCookie();
  }, [navigate, cookies, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-5"></div>
      <WordOfTheDay />
      <div className="card">
        <button className="btn btn-outline mx-auto" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
