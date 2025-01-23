import React from "react";
import Sidebar from "./sidebar";
import BreadCrumbs from "../components/BreadCrumbs";
import { client } from "@/app/config/client";
import { ConnectButton } from "thirdweb/react";
import PageBanner from "@/app/components/PageBanner";
import SearchBar from "@/app/components/SearchBar";
import { data } from "@/app/config/searchData";

function Dashboard({
  children,
  pageDescription,
}: {
  children: React.ReactNode;
  pageDescription: string;
}) {
  return (
    <div className="min-h-screen flex-row flex bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between bg-white p-4 shadow-sm">
          <BreadCrumbs />
          <SearchBar data={data} />
          <ConnectButton client={client} />
        </div>

        <PageBanner description={pageDescription} />

        <div className="w-full flex flex-col items-center justify-center p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
