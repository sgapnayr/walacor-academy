import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuSections } from "@/app/config/menuConfig";

export default function BreadCrumbs() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part !== "");

  // Find matching text for each path part
  const getBreadcrumbText = (nav: string) => {
    for (const section of menuSections) {
      for (const link of section.links) {
        if (link.nav === nav) {
          return link.text;
        }
      }
    }
    return null;
  };

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li>
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
        {pathParts.map((part, index) => {
          const href = `/${pathParts.slice(0, index + 1).join("/")}`;
          const text = getBreadcrumbText(href);
          const isLast = index === pathParts.length - 1;

          return (
            <li key={href} aria-current={isLast ? "page" : undefined}>
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                {isLast ? (
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {text || part}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    {text || part}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
