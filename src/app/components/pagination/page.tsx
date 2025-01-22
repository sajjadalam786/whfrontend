// components/Pagination.tsx
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = window.innerWidth < 640 ? 3 : 5; // Show fewer pages on mobile

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center space-x-1 my-8">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-lg text-sm ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
        } transition-colors duration-200 sm:px-4`}
      >
        Prev
      </button>

      {/* Page numbers */}
      <div className="hidden sm:flex space-x-1">
        {currentPage > 2 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-3 py-1 rounded-lg text-sm bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            >
              1
            </button>
            {currentPage > 3 && (
              <span className="px-3 py-1 text-gray-500">...</span>
            )}
          </>
        )}

        {getPageNumbers().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`px-3 py-1 rounded-lg text-sm ${
              currentPage === pageNum
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            } transition-colors duration-200`}
          >
            {pageNum}
          </button>
        ))}

        {currentPage < totalPages - 1 && (
          <>
            {currentPage < totalPages - 2 && (
              <span className="px-3 py-1 text-gray-500">...</span>
            )}
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-1 rounded-lg text-sm bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      {/* Mobile view - current page indicator */}
      <div className="sm:hidden px-3 py-1 text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </div>

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-lg text-sm ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
        } transition-colors duration-200 sm:px-4`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
