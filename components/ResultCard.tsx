import { IResult } from '../pages/api/search';
import Highlighter from 'react-highlight-words';

interface ResultCardProps {
  result: IResult;
  searchQuery: string;
}
const findIndexOfSearchQuery = (text: string, searchQuery: string) => {
  const index = text.toLowerCase().indexOf(searchQuery.toLowerCase());
  if (index === -1) {
    return 0;
  }
  return index;
};
export default function ResultCard(props: ResultCardProps) {
  const {
    result: { last_name, first_name, description },
    searchQuery,
  } = props;
  const qLength = searchQuery.length;
  const idx = findIndexOfSearchQuery(description, searchQuery);

  // bellow is manualy highlight the search query
  const prev = description.substring(0, idx);
  const higlighted = (
    <span className="text-info font-medium underline">
      {description.substring(idx, idx + qLength)}
    </span>
  );
  const after = description.substring(idx + qLength);

  return (
    <div className="card w-full bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {last_name}, {first_name}
        </h2>
        {/* <p>
          {prev}
          {higlighted}
          {after}
        </p> */}
        {/* <p dangerouslySetInnerHTML={{ __html: newDescription }} /> */}
        <Highlighter
          highlightClassName="text-info font-medium underline bg-transparent"
          searchWords={['a', 'c', 'd']}
          autoEscape={true}
          textToHighlight={description}
        />
      </div>
    </div>
  );
}
