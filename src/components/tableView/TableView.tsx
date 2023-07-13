import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { CharityFinancial } from '../../interfaces/CharityFinancial';

interface TableViewProps {
  data: CharityFinancial[];
}
const TableView = (props: TableViewProps) => {
  const { data } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Industry</TableCell>
            <TableCell align="right">Revenue</TableCell>
            <TableCell align="right">Revenue growth</TableCell>
            <TableCell align="right">Employees</TableCell>
            <TableCell align="right">Headquarters</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
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
    </TableContainer>
  );
};

export default TableView;
