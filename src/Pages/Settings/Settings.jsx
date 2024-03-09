import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Switch,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { BsPencil, BsQuestionCircle, BsUnlock } from "react-icons/bs";
import { CgLock } from "react-icons/cg";
import { LuUser2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const Settings = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = React.useState(0);
  const navigate = useNavigate();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // User Logout
  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire("Great!", "You've successfully logged out", "success");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  return (
    <div className="w-full">
      {/* Background Image  */}
      <div
        className="h-[180px] px-10 py-5"
        style={{
          backgroundImage: "url(https://i.ibb.co/CbzLL8Q/bg-image.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-2xl font-[600] text-left pb-5 text-white">
          Settings
        </h1>
      </div>
      {/* Profile Options  */}
      <div className="px-10 -mt-10">
        <div className="avatar online">
          <div className="w-24 rounded-full border-4">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h1 className="text-lg font-medium text-center pb-5 text-black py-2">
          {user?.displayName}
        </h1>
        <div className="">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              className=" font-sans text-base font-semibold  text-gray-700"
              onClick={() => handleOpen(1)}
            >
              <div className="flex items-center justify-start ">
                <LuUser2 className="text-xl mr-4" />
                <h4 className="text-base">Personal Info</h4>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div>
                <nav className="my-2 flex  flex-col gap-4 px-0 font-sans text-base font-normal text-gray-700">
                  <div className="flex flex-col items-start ">
                    <div className="flex justify-between items-center w-full">
                      <h4 className="text-base">Name</h4>
                      <button className="bg-Cpurple text-sm text-white rounded p-2 ">
                        <BsPencil />
                      </button>
                    </div>
                    <h4 className="text-base font-semibold">
                      {user?.displayName}
                    </h4>
                  </div>
                  <div className="flex flex-col items-start ">
                    <h4 className="text-base">Email</h4>
                    <h4 className="text-base font-semibold">{user?.email}</h4>
                  </div>
                  <div className="flex flex-col items-start ">
                    <h4 className="text-base">Location</h4>
                    <h4 className="text-base font-semibold">
                      Dhaka, Bangladesh
                    </h4>
                  </div>
                </nav>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              className=" font-sans text-base font-semibold  text-gray-700"
              onClick={() => handleOpen(2)}
            >
              <div className="flex items-center justify-start ">
                <CgLock className="text-xl mr-4" />
                <h4 className="text-base">Privacy & Security</h4>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div>
                <nav className="my-2 flex items-center gap-4 px-0 font-sans text-base font-normal text-gray-700">
                  <h4 className="text-base font-medium ">
                    Show security notification
                  </h4>
                  <Switch
                    id="custom-switch-component"
                    ripple={true}
                    className="h-full w-full checked:bg-Cpurple ps-10"
                    containerProps={{
                      className: "w-10 h-4",
                    }}
                    circleProps={{
                      className: "before:hidden h-5 w-5 left-5 border-none",
                    }}
                  />
                </nav>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              className=" font-sans text-base font-semibold  text-gray-700"
              onClick={() => handleOpen(3)}
            >
              <div className="flex items-center justify-start ">
                <BsQuestionCircle className="text-xl mr-4" />
                <h4 className="text-base">Help</h4>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div>
                <nav className="my-2 flex  flex-col gap-4 px-0 font-sans text-base font-normal text-gray-700">
                  <div className="flex flex-col gap-5 items-start ">
                    <h4 className="text-base font-semibold">FAQs</h4>
                    <h4 className="text-base font-semibold">Contact</h4>
                  </div>
                </nav>
              </div>
            </AccordionBody>
          </Accordion>
          <div>
            <Button
              onClick={handleLogout}
              className="flex items-center justify-start bg-Cpurple text-sm text-white rounded mt-5 px-4 py-2 "
            >
              <BsUnlock className="text-xl mr-4" />
              <h4 className="text-base font-medium">Logout</h4>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
