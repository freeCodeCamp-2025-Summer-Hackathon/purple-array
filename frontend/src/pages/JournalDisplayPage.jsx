import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import api from "../lib/axios";
import Navbar from "../components/generic/Navbar";
import JournalEntry from "../components/journal/JournalEntry";

const JournalDisplayPage = () => {
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
      <div className="max-w-4xl mx-auto py-5">
        {/* Component for list of past entries should be place on this page as well */}
        <JournalEntry />
      </div>
    </div>
  );
};

export default JournalDisplayPage;
