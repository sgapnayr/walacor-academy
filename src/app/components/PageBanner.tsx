import React from "react";

const PageBanner = ({ description }: { description?: string }) => {
  return (
    <div className="bg-[#00B3DD] px-4 p-2 shadow-sm flex items-center gap-2">
      {description && <p className="text-xs text-white">{description}</p>}
    </div>
  );
};

export default PageBanner;
