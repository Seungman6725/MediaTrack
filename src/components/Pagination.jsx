import '../css/Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
    // Helper function to generate page numbers to display
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Show first page, current page range, and last page
            pageNumbers.push(1);

            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);

            if (start > 2) {
                pageNumbers.push('...');
            }

            for (let i = start; i <= end; i++) {
                pageNumbers.push(i);
            }

            if (end < totalPages - 1) {
                pageNumbers.push('...');
            }

            if (totalPages > 1) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination">
            {/* Previous Button */}
            <button
                className={`pagination-btn prev ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ◄
            </button>

            {/* Page Numbers */}
            <div className="page-numbers">
                {pageNumbers.map((pageNum, index) => {
                    if (pageNum === '...') {
                        return (
                            <span key={`ellipsis-${index}`} className="ellipsis">
                                ...
                            </span>
                        );
                    }

                    return (
                        <button
                            key={pageNum}
                            className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                            onClick={() => onPageChange(pageNum)}
                        >
                            {pageNum}
                        </button>
                    );
                })}
            </div>

            {/* Next Button */}
            <button
                className={`pagination-btn next ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next →
            </button>
        </div >
    );
}

export default Pagination;