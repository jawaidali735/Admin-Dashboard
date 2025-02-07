import { useRouter, usePathname } from "next/navigation";
import {
  Layers2,
  LayoutDashboardIcon,
  LibraryBig,
  LogOut,
  PackageOpen,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

// Define types for the menu item
interface MenuItem {
  name: string;
  link: string;
  icon: JSX.Element; // The icon is a JSX element
}

export default function Sidebar() {
  const menuList: MenuItem[] = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboardIcon className="h-5 w-5" />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon: <PackageOpen className="h-5 w-5" />,
    },
    {
      name: "Categories",
      link: "/admin/categories", // Fixed typo from `cetegories` to `categories`
      icon: <Layers2 className="h-5 w-5" />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      name: "Customers",
      link: "/admin/customers", // Fixed typo from `admin.customers` to `admin/customers`
      icon: <User className="h-5 w-5" />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="h-5 w-5" />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <LibraryBig className="h-5 w-5" />,
    },
  ];

  const router = useRouter();

  const handleLogout = async (): Promise<void> => {
    try {
      localStorage.removeItem("isLoggedIn"); // Remove login status
      router.push("/"); // Redirect to home page after logout
    } catch {
      throw new Error("Logout failed"); // Error message handled properly
    }
  };

  return (
    <section className="bg-white flex flex-col gap-10 border-r px-5 py-3 h-screen overflow-hidden md:w-[260px]">
      <div className="py-4 text-[30px] flex justify-center sm:text-[34px] font-semibold text-[#0D0E43] font-josefin">
        Hekto
      </div>
      <ul className="flex-1 h-full overflow-y-auto flex flex-col gap-4">
        {menuList.map((item, key) => (
          <Tab item={item} key={key} />
        ))}
      </ul>
      <div className="flex justify-center">
        <button
          onClick={async () => {
            try {
              await toast.promise(handleLogout(), {
                loading: "Logging out...",
                success: "Successfully logged out!",
                error: "Logout failed. Please try again.",
              });
            } catch (error) {
              toast.error(error instanceof Error ? error.message : "Something went wrong");
            }
          }}
          className="flex gap-2 items-center px-3 py-2 hover:bg-[#FDD5E5] rounded-xl w-full justify-center ease-soft-spring transition-all duration-400"
        >
          <LogOut className="h-5 w-5" /> Logout
        </button>
      </div>
    </section>
  );
}

// Add proper typing for the item prop
interface TabProps {
  item: MenuItem; // Use the MenuItem type
}

const Tab = ({ item }: TabProps) => {
  const pathname = usePathname();
  const isSelected = pathname === item.link;

  return (
    <div>
      <Link href={item.link}>
        <li
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold ease-soft-spring transition-all duration-300 ${
            isSelected ? "bg-[#ff85ba] text-white" : "bg-white text-black"
          }`}
        >
          {item.icon} {item.name}
        </li>
      </Link>
    </div>
  );
};
