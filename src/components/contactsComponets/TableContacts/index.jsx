import { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { COLUMNS, restrucData } from './columns';

import './style.css';

function TableContacts({ info }) {
  const [infoData, setInfoData] = useState([]);

  const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => infoData, [infoData]);
  // console.log('memo', data);

  useEffect(() => {
    const newData = restrucData(info);
    // console.log(newData);
    setInfoData(newData);
  }, [info]);

  const tableInstance = useTable({
    columns,
    data: infoData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableContacts;
