interface ButtonPaginationProps {
  totalPage: number;
  page: string;
  setPage: (page: string) => void;
}

export default function ButtonPagination(props: ButtonPaginationProps) {
  const { totalPage, page, setPage } = props;

  const nextPage = () => {
    const nextPage = parseInt(page) + 1;
    if (nextPage <= totalPage - 1) {
      setPage(nextPage.toString());
    }
  };

  const prevPage = () => {
    const prevPage = parseInt(page) - 1;
    if (prevPage >= 0) {
      setPage(prevPage.toString());
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="btn-group">
        <div className="btn-group">
          <button className="btn" disabled={page === '0'} onClick={prevPage}>
            «
          </button>
          <button className="btn">Page {+page + 1}</button>
          <button
            className="btn"
            disabled={+page === totalPage - 1}
            onClick={nextPage}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
