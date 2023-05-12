import React from 'react';
import Button from '../Button/Button';
import { RecipesListPaginatorContainer } from './RecipesListPaginator.styled'
import { ReactComponent as ArrowLeft } from 'images/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'images/svg/arrow-right.svg';

export const RecipesListPaginator = ({
  total,
  current_page,
  per_page,
  handlePaginationClick,
  pageIncrement,
  pageDecrement
}) => {
  const pageNumber = [];
  const allPage = Math.ceil(total / per_page);

  for (let i = 1; i <= allPage; i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <RecipesListPaginatorContainer>
        {/* <nav
          aria-label="Pagination"
        > */}

        <Button
          width="24px"
          height="24px"
          backgroundColor="var(--green-color)"
          text={<ArrowLeft />}
          aria-hidden="true"
        >
          disabled={current_page === 1 ? true : false}
          onClick={pageDecrement}
        </Button>
        {/* <button
          disabled={current_page === 1 ? true : false}
          onClick={pageDecrement}
        >
          <span className="sr-only"></span>

          <svg
            aria-hidden="true"
            className=""
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button> */}

        <div>
          {pageNumber.map(item => {
            return (
              <button
                onClick={handlePaginationClick}
                key={item}
                aria-current="page"
              >
                {item}
              </button>
            );
          })}
        </div>
        <Button
          width="24px"
          height="24px"
          backgroundColor="var(--green-color)"
          text={<ArrowRight />}
          aria-hidden="true">
          disabled={current_page === allPage ? true : false}
          onClick={pageIncrement}
        </Button>
        {/* <button
          disabled={current_page === allPage ? true : false}
          onClick={pageIncrement}
        >
          <span className="">Next</span>
          <svg
            aria-hidden="true"
            className=""
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button> */}

        {/* </nav> */}
      </RecipesListPaginatorContainer >
    </>
  );
};
