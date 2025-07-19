import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import api from "../lib/axios";
import Navbar from "../components/generic/Navbar";
import SettingsOptions from "../components/settings/SettingsOptions";

const SettingsPage = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-16 space-y-12">
        <SettingsOptions />
      </div>
    </div>
  );
};

export default SettingsPage;
