import React from "react";
import { BsDot } from "react-icons/bs";
import "./PaginationDots.scss";

const PaginationDots = ({ totalPages, goToPage }) => {
  return (
    <ul className="pagination">
      {Array.from({ length: totalPages }).map((_, i) => (
        <li key={i}>
          <button
            onClick={goToPage}
            className="pagination-button"
            data-page={i}
          >
            <BsDot />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PaginationDots;
