/**
 * getPageNumbers
 *
 * Works out which page buttons to show, so you don't render 68 buttons
 * for 68 pages. Always shows page 1, the last page, and a few pages
 * around the current one — collapsing the rest into "...".
 *
 * Example: getPageNumbers(4, 20) → [1, "...", 3, 4, 5, "...", 20]
 *
 * @param {number} currentPage
 * @param {number} totalPages
 * @param {number} siblingCount - how many pages to show on each side of the current one
 */
export function GetPageNumbers(currentPage, totalPages, siblingCount = 1) {
  // if there aren't many pages, just show all of them, no ellipses needed
  const totalNumbersToShow = siblingCount * 2 + 5; // first + last + current + 2 siblings + wiggle room
  if (totalPages <= totalNumbersToShow) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    // near the start: 1, 2, 3, 4, ..., last
    const leftRange = Array.from({ length: 3 + siblingCount * 2 }, (_, i) => i + 1);
    return [...leftRange, "...", totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    // near the end: 1, ..., last-3, last-2, last-1, last
    const rightRangeLength = 3 + siblingCount * 2;
    const rightRange = Array.from(
      { length: rightRangeLength },
      (_, i) => totalPages - rightRangeLength + 1 + i
    );
    return [1, "...", ...rightRange];
  }

  // in the middle: 1, ..., current-1, current, current+1, ..., last
  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i
  );
  return [1, "...", ...middleRange, "...", totalPages];
}