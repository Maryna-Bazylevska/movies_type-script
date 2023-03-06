import React, { useState } from "react";
type SearchFormProps = {
  onSubmit: (query: string) => void;
};
const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [query, setQuery] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
