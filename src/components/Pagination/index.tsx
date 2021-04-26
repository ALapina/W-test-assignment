import "./Pagination.scss";

type PaginationPropsTypes = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  currentPage: number;
};

const Pagination = ({
  setCurrentPage,
  totalPages,
  currentPage,
}: PaginationPropsTypes) => {
  const arrayTotalPages: Array<number> = [];

  for (let i = 1; i <= totalPages; i++) {
    arrayTotalPages.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {arrayTotalPages.map((pageNumber: number) => (
          <li key={pageNumber}>
            <button
              className={`pagination__page-number ${
                pageNumber === currentPage && `active-page`
              }`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
