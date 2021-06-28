import { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
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
import GlobalFilter from './GlobalFilter';

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
    backgroundColor: 'red'
  }
});

const SortingTable = () => {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => COLUMNS, []);

  const classes = useStyles();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state: [{globalFilter}],
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy
  );

  console.log(globalFilter)

  return (
    <>
      <GlobalFilter filter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <TableContainer className={classes.container}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
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
    </>
  );
};

export default SortingTable;
