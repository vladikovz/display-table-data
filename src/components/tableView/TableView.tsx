import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { CharityFinancial } from '../../interfaces/CharityFinancial';

interface TableViewProps {
  data: CharityFinancial[];
}
const TableView = (props: TableViewProps) => {
  const { data } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#e0e0e0' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">
              Industry
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">
              Revenue
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">
              Revenue growth
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">
              Employees
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">
              Headquarters
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.industry}</TableCell>
              <TableCell align="right">{row.revenue}</TableCell>
              <TableCell align="right">{row.revenueGrowth}</TableCell>
              <TableCell align="right">{row.employees}</TableCell>
              <TableCell align="right">{row.headquarters}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TableView;
