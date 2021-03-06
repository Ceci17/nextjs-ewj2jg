import { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableFooter,
  TableRow
} from '@material-ui/core';
import MOCK_DATA from '../MOCK_DATA.json';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    maxHeight: 440
  }
});

const BasicTable = () => {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => COLUMNS, []);

  const classes = useStyles();

  const table = useTable({
    columns,
    data
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = table;

  return (
    <TableContainer className={classes.container}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          {footerGroups.map(footerGroup => (
            <TableRow {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <TableCell {...column.getFooterProps()}>
                  {column.render('Footer')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
