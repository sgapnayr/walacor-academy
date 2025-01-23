"use client";

import React from "react";
import { ThirdwebProvider } from "thirdweb/react";

export default function ThirdwebWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThirdwebProvider>{children}</ThirdwebProvider>;
}
