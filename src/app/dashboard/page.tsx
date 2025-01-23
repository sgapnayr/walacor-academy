"use client";

import React from "react";
import Dashboard from "../layouts/dashboard";
import ChartFive from "../components/Charts/ChartFive";
import ChartOne from "../components/Charts/ChartOne";
import ChartTwo from "../components/Charts/ChartTwo";
import ChartThree from "../components/Charts/ChartThree";

function page() {
  return (
    <Dashboard pageDescription="Quick overview of your current status and progress.">
      <div className="flex-wrap flex-col flex gap-4 w-full">
        <ChartOne />
        <div className="flex gap-4 w-full">
          <ChartThree />
          <ChartFive />
        </div>
        <ChartTwo />
      </div>
    </Dashboard>
  );
}

export default page;
