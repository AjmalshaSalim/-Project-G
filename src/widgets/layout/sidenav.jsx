import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/Gymsoft_Logo.jpg"
import Logo2 from "../../assets/images/Gymsoft_Logo1-removebg-preview.png"
import { IoIosArrowForward } from "react-icons/io";
import {
  Button,
  IconButton,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { useState } from "react";
import { useMaterialTailwindController, setOpenSidenav } from "../../context/index";

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gray-800 to-orange-500",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };
  const logoSrc = sidenavType === 'dark' ? Logo2 : Logo;

  const [openEnquirySection, setOpenEnquirySection] = useState(false);
  const [openMemberSection, setOpenMemberSection] = useState(false);
  const [openPlanSection, setOpenPlanSection] = useState(false);
  const [openDietPlanSection, setOpenDietPlanSection] = useState(false);

  const handleToggleEnquirySection = () => {
    setOpenEnquirySection(!openEnquirySection);
  };
  const handleToggleMemberSection = () => {
    setOpenMemberSection(!openMemberSection);
  };
  const handleTogglePlanSection = () => {
    setOpenPlanSection(!openPlanSection);
  };
  const handleToggleDietPlanSection = () => {
    setOpenDietPlanSection(!openDietPlanSection);
  };
  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } absolute inset-0 my-4 ml-4 max-h-fit w-72 rounded-xl  transition-transform duration-300 xl:translate-x-0 ${sidenavType === 'dark'? "lg:bg-opacity-50 lg:bg-gray-800 bg-gray-900 border-x border-y border-gray-800" : "border border-opacity-5 "}`}
    
    >
      <div
        className={`relative`}
      >
        <div className=" w-full">
        <Link to="/">
          <img src={logoSrc} alt="Gymsoft" className=" px-4 pt-2"/>
          </Link>
        </div>
        <Link to="/" className=" px-8 text-center">
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {/* {brandName} */}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-1 top-1 grid rounded-br-none rounded-tl-none xl:hidden bg-gray-800 rounded-full"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-gray-600" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "black"}
                  className="font-black uppercase opacity-75 text-xs "
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.slice(0, 2).map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "red" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "black"
                      }
                      className={sidenavType === 'dark' ? `flex items-center gap-4 w-60 capitalize ${isActive ? "bg-red-700" : "bg-transparent"}` : `flex w-60 items-center gap-4 px-4 capitalize ${isActive ? "bg-black" : "bg-transparent"}`}
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize text-sm  hover:space-x-4"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}


            <li>
              <Popover placement="right-start" open={openMemberSection} handler={handleToggleMemberSection}>
                <PopoverHandler>
                  <Button
                    variant="text"
                    color={sidenavType === "dark" ? "white" : "black"}
                    className="flex items-center gap-4 w-60 capitalize"
                    fullWidth
                  >
                    <Typography
                      color="inherit"
                      className="font-medium capitalize text-sm flex"
                    >
                     <IoIosArrowForward className=" text-xl"/> &nbsp; &nbsp; &nbsp; Enquiry Management
                    </Typography>
                  </Button>
                </PopoverHandler>
                <PopoverContent className={sidenavType=== 'dark' ? `p-0 bg-gray-800 z-55 border-4 border-gray-800`:`bg-white z-55`}
                color={sidenavType === "dark" ? "white" : "black"}
                >
                  <ul className="flex flex-col gap-1">
                    {pages.slice(2, 5).map(({ icon, name, path }) => (
                      <li key={name}>
                        <NavLink to={`/${layout}${path}`}>
                          {({ isActive }) => (
                            <Button
                              variant={isActive ? "red" : "text"}
                              color={
                                isActive
                                  ? sidenavColor
                                  : sidenavType === "dark"
                                  ? "white"
                                  : "black"
                              }
                              className={sidenavType === 'dark' ? ` flex items-center gap-4 w-60 capitalize ${isActive ? "bg-red-700" : "bg-transparent"}` : `flex w-60 items-center gap-4 px-4 capitalize ${isActive ? "bg-black" : "bg-transparent"}`}
                              fullWidth
                            >
                              {icon}
                              <Typography
                                color="inherit"
                                className="font-medium capitalize text-sm  hover:space-x-4"
                              >
                                {name}
                              </Typography>
                            </Button>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </li>


            <li>
              <Popover placement="right-start" open={openEnquirySection} handler={handleToggleEnquirySection}>
                <PopoverHandler>
                  <Button
                    variant="text"
                    color={sidenavType === "dark" ? "white" : "black"}
                    className="flex items-center gap-4 w-60 capitalize"
                    fullWidth
                  >
                    <Typography
                      color="inherit"
                      className="font-medium capitalize text-sm flex"
                    >
                     <IoIosArrowForward className=" text-xl"/> &nbsp; &nbsp; &nbsp; Members Management
                    </Typography>
                  </Button>
                </PopoverHandler>
                <PopoverContent className={sidenavType=== 'dark' ? `p-0 bg-gray-800 z-55 border-4 border-gray-800`:`bg-white z-55`}
                color={sidenavType === "dark" ? "white" : "black"}
                >
                  <ul className="flex flex-col gap-1">
                    {pages.slice(6, 9).map(({ icon, name, path }) => (
                      <li key={name}>
                        <NavLink to={`/${layout}${path}`}>
                          {({ isActive }) => (
                            <Button
                              variant={isActive ? "red" : "text"}
                              color={
                                isActive
                                  ? sidenavColor
                                  : sidenavType === "dark"
                                  ? "white"
                                  : "black"
                              }
                              className={sidenavType === 'dark' ? `flex items-center gap-4 w-60 capitalize ${isActive ? "bg-red-700" : "bg-transparent"}` : `flex w-60 items-center gap-4 px-4 capitalize ${isActive ? "bg-black" : "bg-transparent"}`}
                              fullWidth
                            >
                              {icon}
                              <Typography
                                color="inherit"
                                className="font-medium capitalize text-sm  hover:space-x-4"
                              >
                                {name}
                              </Typography>
                            </Button>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </li>


            {pages.slice(9,12).map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "red" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "black"
                      }
                      className={sidenavType === 'dark' ? `flex items-center gap-4 w-60 capitalize ${isActive ? "bg-red-700" : "bg-transparent"}` : `flex w-60 items-center gap-4 px-4 capitalize ${isActive ? "bg-black" : "bg-transparent"}`}
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize text-sm  hover:space-x-4"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}


            <li>
              <Popover placement="right-start" open={openPlanSection} handler={handleTogglePlanSection}>
                <PopoverHandler>
                  <Button
                    variant="text"
                    color={sidenavType === "dark" ? "white" : "black"}
                    className="flex items-center gap-4 w-60 capitalize"
                    fullWidth
                  >
                    <Typography
                      color="inherit"
                      className="font-medium capitalize text-sm flex"
                    >
                     <IoIosArrowForward className=" text-xl"/> &nbsp; &nbsp; &nbsp; Plans Management
                    </Typography>
                  </Button>
                </PopoverHandler>
                <PopoverContent className={sidenavType=== 'dark' ? `p-0 bg-gray-800 z-55 border-4 border-gray-800`:`bg-white z-55`}
                color={sidenavType === "dark" ? "white" : "black"}
                >
                  <ul className="flex flex-col gap-1">
                    {pages.slice(12, 15).map(({ icon, name, path }) => (
                      <li key={name}>
                        <NavLink to={`/${layout}${path}`}>
                          {({ isActive }) => (
                            <Button
                              variant={isActive ? "red" : "text"}
                              color={
                                isActive
                                  ? sidenavColor
                                  : sidenavType === "dark"
                                  ? "white"
                                  : "black"
                              }
                              className={sidenavType === 'dark' ? `flex items-center gap-4 w-60 capitalize ${isActive ? "bg-red-700" : "bg-transparent"}` : `flex w-60 items-center gap-4 px-4 capitalize ${isActive ? "bg-black" : "bg-transparent"}`}
                              fullWidth
                            >
                              {icon}
                              <Typography
                                color="inherit"
                                className="font-medium capitalize text-sm  hover:space-x-4"
                              >
                                {name}
                              </Typography>
                            </Button>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </li>


            {pages.slice(15,19).map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "red" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "black"
                      }
                      className={sidenavType === 'dark' ? `flex items-center gap-4 w-60 capitalize ${isActive ? "bg-red-700" : "bg-transparent"}` : `flex w-60 items-center gap-4 px-4 capitalize ${isActive ? "bg-black" : "bg-transparent"}`}
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize text-sm  hover:space-x-4"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}

<li>
              <Popover placement="right-start" open={openDietPlanSection} handler={handleToggleDietPlanSection}>
                <PopoverHandler>
                  <Button
                    variant="text"
                    color={sidenavType === "dark" ? "white" : "black"}
                    className="flex items-center gap-4 w-60 capitalize"
                    fullWidth
                  >
                    <Typography
                      color="inherit"
                      className="font-medium capitalize text-sm flex"
                    >
                     <IoIosArrowForward className=" text-xl"/> &nbsp; &nbsp; &nbsp;Diet Plan Management
                    </Typography>
                  </Button>
                </PopoverHandler>
                <PopoverContent className={sidenavType=== 'dark' ? `p-0 bg-gray-800 z-55 border-4 border-gray-800`:`bg-white z-55`}
                color={sidenavType === "dark" ? "white" : "black"}
                >
                  <ul className="flex flex-col gap-1">
                    {pages.slice(19, 21).map(({ icon, name, path }) => (
                      <li key={name}>
                        <NavLink to={`/${layout}${path}`}>
                          {({ isActive }) => (
                            <Button
                              variant={isActive ? "red" : "text"}
                              color={
                                isActive
                                  ? sidenavColor
                                  : sidenavType === "dark"
                                  ? "white"
                                  : "black"
                              }
                              className={sidenavType === 'dark' ? `flex items-center gap-4 w-60 capitalize ${isActive ? "bg-red-700" : "bg-transparent"}` : `flex w-60 items-center gap-4 px-4 capitalize ${isActive ? "bg-black" : "bg-transparent"}`}
                              fullWidth
                            >
                              {icon}
                              <Typography
                                color="inherit"
                                className="font-medium capitalize text-sm  hover:space-x-4"
                              >
                                {name}
                              </Typography>
                            </Button>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </li>


            {pages.slice(21).map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "red" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "black"
                      }
                      className={sidenavType === 'dark' ? `flex items-center gap-4 w-60 capitalize ${isActive ? "bg-red-700" : "bg-transparent"}` : `flex w-60 items-center gap-4 px-4 capitalize ${isActive ? "bg-black" : "bg-transparent"}`}
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize text-sm  hover:space-x-4"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/Gymsoft_Logo.jpg",
  brandName: "Gymsoft--",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
