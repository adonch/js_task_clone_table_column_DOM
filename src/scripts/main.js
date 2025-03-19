'use strict';

const rows = document.querySelectorAll('table tr');

for (const row of rows) {
  const isHeaderRow = row.querySelector('th') !== null;

  if (isHeaderRow) {
    const newCell = document.createElement('th');

    newCell.textContent = row.cells[1].textContent;

    row.insertBefore(newCell, row.cells[4]);
  } else {
    const newCell = row.insertCell(4);

    newCell.textContent = row.cells[1].textContent;
  }
}
