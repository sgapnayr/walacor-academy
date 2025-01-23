"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import WalacorLogo from "@/app/assets/walacor-logo.jpeg";
import { menuSections } from "@/app/config/menuConfig";
import { useDisconnect, useActiveWallet } from "thirdweb/react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const wallet = useActiveWallet();
  const { disconnect } = useDisconnect();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    if (!wallet) {
      router.push("/");
      return;
    }

    if (isLoading || !wallet) return;

    setIsLoading(true);
    try {
      await disconnect(wallet);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 shadow-sm">
      <div className="flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-start border-b px-5 py-4">
          <Image src={WalacorLogo} height={50} width={50} alt="Walacor Logo" />
          <div className="ml-3">
            <h1 className="text-xl font-semibold text-gray-800">Walacor</h1>
            <p className="text-sm font-thin text-gray-500">Academy</p>
          </div>
        </div>

        <div className="overflow-y-auto flex-grow">
          {menuSections.map((section, index) => (
            <div key={index}>
              <div className="px-5 py-2">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  {section.title}
                </div>
              </div>

              <ul className="flex flex-col space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.text === "Logout" ? (
                      <button
                        className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00b3dd] pr-6 w-full text-left`}
                        onClick={handleLogout}
                        disabled={isLoading}
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          {link.icon}
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          {isLoading ? "Logging out..." : link.text}
                        </span>
                      </button>
                    ) : (
                      <button
                        className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00b3dd] pr-6 w-full text-left ${
                          pathname === link.nav
                            ? "bg-gray-100 border-indigo-500"
                            : ""
                        }`}
                        onClick={() => router.push(link.nav)}
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          {link.icon}
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          {link.text}
                        </span>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
