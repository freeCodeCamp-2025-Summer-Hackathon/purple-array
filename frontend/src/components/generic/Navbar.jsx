import toast from "react-hot-toast";
import { Routes, Route, NavLink } from "react-router-dom";
import { Sparkles, NotebookPen, Store, Cog } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <header className="bg-base-200 border-b border-base-content/10">
        <div className="mx-auto max-w-7xl p-4">
          <div className="flex items-center justify-between">
            {/* Logo & Site Title  */}
            <div className="flex gap-4">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl bg-gradient-to-b from-primary/10 to-transparent text-primary px-4 py-2 rounded-t-xl"
                    : "text-2xl font-semibold text-secondary"
                }
              >
                <p className="flex items-center gap-2 hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
                  <Sparkles
                    className="text-neutral fill-accent size-8"
                    strokeWidth={1}
                  />{" "}
                  WriteLight
                </p>
              </NavLink>
            </div>

            {/* Journal Icon & Link */}
            <div className="flex gap-4">
              <NavLink
                to={"/journal"}
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl bg-gradient-to-b from-primary/10 to-transparent text-primary px-4 py-2 rounded-t-xl"
                    : "text-2xl font-semibold text-secondary"
                }
              >
                <p className="flex items-center gap-2 hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
                  <NotebookPen
                    className="text-neutral fill-accent size-8"
                    strokeWidth={1}
                  />{" "}
                  Journal
                </p>
              </NavLink>
            </div>

            {/* Market Icon & Link */}
            <div className="flex gap-4">
              <NavLink
                to={"/market"}
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl bg-gradient-to-b from-primary/10 to-transparent text-primary px-4 py-2 rounded-t-xl"
                    : "text-2xl font-semibold text-secondary"
                }
              >
                <p className="flex items-center gap-2 hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
                  <Store
                    className="text-neutral fill-accent size-8"
                    strokeWidth={1}
                  />{" "}
                  Market
                </p>
              </NavLink>
            </div>

            {/* Settings Icon & Link */}
            <div className="flex gap-4">
              <NavLink
                to={"/settings"}
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl bg-gradient-to-b from-primary/10 to-transparent text-primary px-4 py-2 rounded-t-xl"
                    : "text-2xl font-semibold text-secondary"
                }
              >
                <p className="flex items-center gap-2 hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
                  <Cog
                    className="text-neutral fill-accent size-8"
                    strokeWidth={1}
                  />{" "}
                  Settings
                </p>
              </NavLink>
            </div>

            {/* This button will remain conditionally not visible for now, until logout can be refactored */}
            {false && (
              <button
                className="btn btn-outline btn-primary"
                onClick={() => {
                  toast.error("Logout not functional yet!");
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
