import { useEffect, useState } from "react";
import "./SearchInput.css";
// import Button from "../Button/Button";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <div className="SearchInput">
      <input
        type="text"
        value={value}
        placeholder="Search by product name..."
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <Button
        text=""
        onBtnClick={() => {
          onSearch(value);
        }}
      /> */}
    </div>
  );
}

export default SearchInput;
