import { FormEvent } from 'react';

interface SearchFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchForm(props: SearchFormProps) {
  return (
    <form onSubmit={props.onSubmit}>
      <p className="mb-2">Type Your Keyword</p>
      <div className="flex gap-1">
        <input
          type="text"
          value={props.searchQuery}
          placeholder="Type here"
          className="input w-full block input-bordered flex-1"
          onChange={(event) => props.setSearchQuery(event.target.value)}
        />
        <button className="btn">Search</button>
      </div>
    </form>
  );
}
