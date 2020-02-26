import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Fab,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const DatabaseTable = (props) => {
  const { table, fields, onEdit, onDelete } = props;
  console.log(table, fields)
  return (
    <>
      <Paper className="dashboardPaper">
        <Table className="dashboardTable" aria-label="simple table">
          <TableHead>
            <TableRow>
              {fields.map(field => <TableCell key={table + '_' + field + '_header'}>{field}</TableCell>)}
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map(row => (
              <TableRow key={row.id}>
                {fields.map(field => <TableCell key={table + '_' + field + '_row'}>{
                  row[field] ? row[field].toString().substring(0, 100) : null
                }</TableCell>)}
                <TableCell>
                  <Fab color="secondary" aria-label="edit" onClick={onEdit(row.id)} size="small">
                    <Edit />
                  </Fab>
                  <Fab color="secondary" aria-label="delete" onClick={onDelete(row.id)} size="small">
                    <Delete />
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

export default DatabaseTable