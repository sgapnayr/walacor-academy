// src/config/menuConfig.ts
export const menuSections = [
  {
    title: "Menu",
    links: [
      {
        text: "Home",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7h18M3 12h18m-7 5h7"
            />
          </svg>
        ),
        nav: "/dashboard",
      },
      {
        text: "Quizzes",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12h3m4-2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h6l2-2h6a2 2 0 012 2v2z"
            />
          </svg>
        ),
        nav: "/dashboard/quizzes",
      },
    ],
  },
  {
    title: "Profile",
    links: [
      {
        text: "Logout",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        ),
        nav: "/",
      },
    ],
  },
];
