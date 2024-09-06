import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-between items-center mt-4">
      <p className="text-sm text-gray-500">
        Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} items
      </p>
      <div className="flex space-x-2">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => onPageChange(number + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === number + 1
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
