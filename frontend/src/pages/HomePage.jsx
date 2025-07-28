import useAuth from "../util/hooks/useAuth";
import Navbar from "../components/generic/Navbar";
import WordOfTheDay from "../components/Home/WordOfTheDay";

const HomePage = () => {
  const { navigate, cookies, removeCookie, handleLogout } = useAuth();

  return (
    <div className="min-h-screen">
      <Navbar logout={handleLogout} cookies={cookies} />
      <div className="max-w-4xl mx-auto py-20"></div>

      <div className="max-w-3xl mx-auto mt-8 text-center relative">
        <div className="relative group inline-block w-full">
          <div className="absolute bottom-full left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mb-4 bg-gradient-to-b from-primary/10 to-transparent px-12 pt-4 pb-2 rounded-xl z-10">
            <div className="text-primary text-md font-bold">YOUR QUEST:</div>
            <div className="max-w-xl mx-auto">
              <p className="text-md font-sans tracking-tight">
                Here's your word of the day. Consider what it means to you or
                how it connects to your life. When you're ready, come back to
                reflect and journal your thoughts.
              </p>
            </div>
          </div>

          <div className="w-full">
            <WordOfTheDay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
