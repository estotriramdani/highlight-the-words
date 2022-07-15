import { NextPage } from 'next';
import { FormEvent, MouseEventHandler, useState } from 'react';
import useSWR from 'swr';
import Alert from '../components/Alert';
import ButtonPagination from '../components/ButtonPagination';
import ResultCard from '../components/ResultCard';
import SearchForm from '../components/SearchForm';
import { fetchAPI } from '../services';
import { ISearchResult } from './api/search';

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [finalSearchQuery, setfinalSearchQuery] = useState('');
  const [page, setPage] = useState<string>('0');
  const url = `/api/search?q=${finalSearchQuery}&page=${page}&limit=10`;

  const { data: dataSWR } = useSWR<ISearchResult>(
    [url, { method: 'GET' }],
    fetchAPI
  );

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPage('0');
    setfinalSearchQuery(searchQuery);
  };

  return (
    <div className="mx-auto py-4">
      <div className="md:w-2/3 lg:w-1/2 w-full px-6 mx-auto">
        <h2 className="text-4xl mb-5 text-white font-bold">
          Highlighted Search Result
        </h2>
        <div className="mb-4">
          <SearchForm
            onSubmit={formSubmitHandler}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        {dataSWR?.result.length === 0 && (
          <Alert variant="warning">
            No result found for <strong>{searchQuery}</strong>
          </Alert>
        )}
        {dataSWR?.result.length! > 0 && (
          <Alert variant="success">
            Showing{' '}
            <strong>
              {dataSWR?.result.length!} of {dataSWR?.totalRows} result(s) (
              {+dataSWR!.page + 1}/{+dataSWR!.totalPage} page)
            </strong>
          </Alert>
        )}
        <div className="flex flex-col gap-3 mt-4">
          {dataSWR?.result.map((item) => (
            <ResultCard
              key={item.id}
              result={item}
              searchQuery={finalSearchQuery}
            />
          ))}
        </div>
        {dataSWR && (
          <ButtonPagination
            page={page}
            setPage={setPage}
            totalPage={dataSWR.totalPage}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
