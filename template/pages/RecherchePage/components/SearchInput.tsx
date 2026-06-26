import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
import { Search, X } from "lucide-react";

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    // Replace on change (debounced via URL update in hook)
    const params = new URLSearchParams(searchParams);
    if (newValue) params.set("q", newValue);
    else params.delete("q");
    setSearchParams(params, { replace: true });
  };

  const handleClear = () => {
    setValue("");
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    setSearchParams(params, { replace: true });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // Push to history on Enter
      const params = new URLSearchParams(searchParams);
      if (value) params.set("q", value);
      else params.delete("q");
      setSearchParams(params);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Rechercher une formation, une actualité..."
        className="w-full h-14 pl-12 pr-12 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7AC943] focus:border-transparent text-lg"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}
