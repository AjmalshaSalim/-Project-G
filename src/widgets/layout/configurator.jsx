import React from "react";
import { MdNightlight } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IoLogOut } from "react-icons/io5";
import {
  Button,
  IconButton,
  Switch,
  Typography,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setSidenavColor,
  setSidenavType,
  setFixedNavbar,
} from "../../context/index";

function formatNumber(number, decPlaces) {
  decPlaces = Math.pow(10, decPlaces);

  const abbrev = ["K", "M", "B", "T"];

  for (let i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;

      if (number === 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      number += abbrev[i];

      break;
    }
  }

  return number;
}

export function Configurator() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator, sidenavColor, sidenavType, fixedNavbar } =
    controller;
  const [stars, setStars] = React.useState(0);
  const sidenavColors = {

    // Themes
    // white: "from-gray-100 to-gray-100 border-gray-200",
    // dark: "from-red-500 to-orange-500 border-gray-200",
    // green: "from-red-500 to-green-700",
    // orange: "from-orange-400 to-orange-600",
    // red: "from-red-600 to-red-800",
    // pink: "from-red-500 to-red-700",
    // Themes
  };

  React.useEffect(() => {
    const stars = fetch(
      "https://api.github.com/repos/creativetimofficial/material-tailwind-dashboard-react"
    )
      .then((response) => response.json())
      .then((data) => setStars(formatNumber(data.stargazers_count, 1)));
  }, []);

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userAccessToken');
    // Refresh the page after logging out
    window.location.reload();
  };

  return (
    <aside
      className={`fixed top-0 right-0 z-50 ${
        sidenavType === "dark" ? "bg-gray-900 bg-opacity-90 border-l border-gray-800" : "bg-white"
      } h-screen w-96 px-2.5 shadow-lg transition-transform duration-300 ${
        openConfigurator ? "translate-x-0" : "translate-x-96"
      }`}
    >
      <div className="flex items-start justify-between px-6 pt-8 pb-6">
        <div>
          <Typography variant="h5" color={sidenavType === 'dark' ? "white" : "blue-gray"}>
            Settings
          </Typography>
          <Typography className={`font-normal ${
      sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
    }`}>
          </Typography>
        </div>
        <IconButton
          variant="text"
          color={sidenavType === 'dark' ? "white" : "blue-gray"}
          onClick={() => setOpenConfigurator(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="py-4 px-6">

{/* Themes */}
        {/* <div className="mb-12">
          <Typography variant="h6" color="blue-gray">
            Themes
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            {Object.keys(sidenavColors).map((color) => (
              <span
                key={color}
                className={`h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 ${
                  sidenavColors[color]
                } ${
                  sidenavColor === color ? "border-black" : "border-transparent"
                }`}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </div>
        </div> */}
{/* Themes */}

        <div className="mb-12">
          <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "blue-gray"}>
            Mode
          </Typography>
          <Typography variant="small" color="gray">
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            <Button
              // variant={sidenavType === "dark" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "dark")}
              className={`rounded-full outline-none ${sidenavType === "dark" ? "bg-white text-black " : " border text-black bg-transparent"}`}
            >
              <MdNightlight  className=" text-md"/>
            </Button>
            
            <Button
              // variant={sidenavType === "white" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "white")}
              className={`rounded-full outline-none ${sidenavType === "white" ? "bg-black " : " border bg-transparent"}`}
            >
              <MdWbSunny className="text-md text-white"/>
            </Button>
          </div>
        </div>
        <div className="mb-12">
          <hr />
          <div className="flex items-center justify-between py-5">
            <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "blue-gray"}>
              Navbar Fixed
            </Typography>
            <Switch
              id="navbar-fixed"
              value={fixedNavbar}
              onChange={() => setFixedNavbar(dispatch, !fixedNavbar)}
            />
          </div>
          <Button
          onClick={logout}
              className={` outline-none flex ${sidenavType === "white" ? "bg-black " : " border bg-transparent"}`}
            >
            <IoLogOut className=" text-lg text-white capitalize"/>&nbsp; Logout
            </Button>
          <hr />

          
        </div>
        <div className="text-center">
          <div className="mt-4 flex justify-center gap-2">

          </div>
        </div>
      </div>
    </aside>
  );
}

Configurator.displayName = "/src/widgets/layout/configurator.jsx";

export default Configurator;
