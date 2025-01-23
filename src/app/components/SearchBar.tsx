"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { SearchItem } from "@/app/types/searchTypes";
import useClickOutside from "@/app/hooks/useClickOutside";

interface SearchBarProps {
  data: SearchItem[];
}

const SearchBar: React.FC<SearchBarProps> = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<SearchItem[]>([]);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const router = useRouter();

  useClickOutside(dropdownRef, () => {
    setFilteredData([]);
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 0) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleItemClick = (path: string) => {
    setQuery("");
    setFilteredData([]);
    router.push(path);
  };

  return (
    <div className="relative w-1/3">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-2 border rounded w-full outline-none"
      />
      {filteredData.length > 0 && (
        <ul
          ref={dropdownRef}
          className="absolute z-10 w-full bg-white border rounded mt-1 max-h-60 overflow-y-auto shadow-lg"
        >
          {filteredData.map((item) => (
            <li
              key={item.id}
              className="relative p-2 cursor-pointer group hover:bg-gray-200 transition"
              onClick={() => handleItemClick(item.path)}
            >
              <div className="flex flex-col">
                <span>{item.name}</span>
                <span className="text-xs opacity-50">{item.description}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Go to {item.path}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
