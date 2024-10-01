import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `?category=${category}&searchTerm=${searchTerm}`,
    });

    setSearchTerm("");
    setCategory("All");
  };
  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };
  useEffect(() => {
    getSuggestions();
  }, []);
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-littlepaws-light_orange rounded">
        <select
          className="p-2 bg-littlepaws-light_orange text-black border test-xs xl:text-sm"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Deals</option>
          <option>One Time Offer</option>
          <option>wipes</option>
          <option>Food</option>
          <option>Shampoo</option>
        </select>

        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="w-[45px]" onClick={onHandleSubmit}>
          <MagnifyingGlassIcon className="h-[27px] m-auto" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const curSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                curSearchTerm &&
                title.startsWith(curSearchTerm) &&
                title !== curSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default Search;
