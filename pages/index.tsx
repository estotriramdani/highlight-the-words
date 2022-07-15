import { NextPage } from 'next';
import { FormEvent, useState } from 'react';
import Alert from '../components/Alert';
import SearchForm from '../components/SearchForm';
import { fetchAPI } from '../services';
import { ISearchResult } from './api/search';

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ISearchResult | undefined>();
  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const fetch: ISearchResult = await fetchAPI<ISearchResult>(
        '/api/search?search_query=' + searchQuery,
        { method: 'GET' }
      );
      setData(fetch);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(isLoading);
  console.log(data?.result);
  return (
    <div className="mx-auto pt-4">
      <div className="w-1/2 mx-auto">
        <div className="mb-4">
          <SearchForm
            onSubmit={formSubmitHandler}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        {data?.result.length === 0 && (
          <Alert variant="warning">No result found for {searchQuery}</Alert>
        )}
      </div>
    </div>
  );
};

export default Home;
