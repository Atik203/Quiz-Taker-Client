import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";

import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Fragment } from "react";
import { toast } from "sonner";
import CustomButton from "./CustomButton";
import MobileMenuButton from "./MobileMenuButton";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const menuItems = [
  { name: "Home", to: "/" },
  { name: "Exams", to: "/exams" },
  { name: "About Us", to: "/about-us" },
  { name: "Contact Us", to: "/contact-us" },
];

const userItems = [
  { name: "Profile", to: "profile" },
  { name: "Dashboard", to: "dashboard" },
];

const MenuItemsComponent = () => (
  <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
    {menuItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={({ isActive }: { isActive: boolean }) =>
          classNames(
            isActive
              ? "border-primary text-green-700"
              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium dark:text-white dark:hover:text-gray-300"
          )
        }
      >
        {item.name}
      </NavLink>
    ))}
  </div>
);

export default function Navbar() {
  //   const user = useAppSelector(useCurrentUser);
  const user = null;

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    const toastId = toast.loading("Logging out...");

    setTimeout(() => {
      dispatch(logout());
      toast.success("Logged out successfully", { id: toastId });
    }, 500);
  };

  return (
    <Disclosure as="nav" className="px-0 lg:px-4">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex items-center justify-between h-24 flex-grow">
              <div className="flex items-center justify-between w-full">
                <div className="hidden lg:flex px-2 lg:px-0">
                  <Link to={"/"} className="text-2xl font-bold text-primary">
                    Quick Taker
                  </Link>
                  <MenuItemsComponent />
                </div>
                <div className="flex items-center space-x-1 lg:hidden">
                  <MobileMenuButton open={open} />
                  <Link to={"/"} className="text-xl font-bold text-primary">
                    Quick Taker
                  </Link>
                </div>
                <div className="flex items-center ml-auto">
                  {user ? (
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <MenuButton className="flex rounded-full text-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full border-2 border-indigo-500"
                            src="https://img.icons8.com/officel/32/test-account.png"
                            alt="test-account"
                          />
                        </MenuButton>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 dark:text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <MenuItems>
                            <div className="px-4 py-2 space-y-2">
                              <h3 className="text-primary font-medium">
                                {user.name}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {user.email}
                              </p>
                            </div>
                          </MenuItems>

                          {userItems?.map((item) => (
                            <MenuItem key={item.name}>
                              {({ active }) => (
                                <NavLink
                                  to={`/${user.role}/${item.to}`}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 dark:bg-gray-700"
                                      : "",
                                    "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                                  )}
                                >
                                  {item.name}
                                </NavLink>
                              )}
                            </MenuItem>
                          ))}
                          <MenuItem>
                            <p
                              onClick={handleLogout}
                              className="pl-4 py-2 text-sm text-red-600 dark:text-red-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              Logout
                            </p>
                          </MenuItem>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  ) : (
                    <div>
                      <Link to="/login">
                        <CustomButton> Login </CustomButton>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }: { isActive: boolean }) =>
                    classNames(
                      isActive
                        ? "border-primary bg-indigo-50 text-green-700"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            {user && (
              <div className="flex flex-col gap-3 px-4">
                <div>
                  <img
                    className="h-8 w-8 rounded-full border-2 border-indigo-500"
                    src="https://img.icons8.com/officel/32/test-account.png"
                    alt="test-account"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <DisclosureButton
                    as={NavLink}
                    to={"/dashboard/home"}
                    className="block text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Dashboard
                  </DisclosureButton>
                </div>
              </div>
            )}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
