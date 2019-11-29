import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button
} from '@material-ui/core';

import { connect } from 'react-redux';
import * as actionCreators from '../actions';

import DatabaseTable from './DatabaseTable';

const server = process.env.REACT_APP_API;
const options = {
  headers: {
    Authorization: JSON.parse(localStorage.getItem('melquip_user')).token
  }
}
const TableDashboard = (props) => {
  //const { addAbout, editAbout, deleteAbout } = props;
  const { table, initialState, fieldTypes } = props;
  const [form, setForm] = useState(initialState);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (!tableData.length) {
      axios.get(`${server}/api/${table}`).then(response => {
        setTableData(response.data);
      }).catch(err => console.error(err));
    }
  }, []);

  const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.id === 0) { // add
      axios.post(`${server}/api/${table}`, form, options).then(response => {
        if (response.data.id) {
          setTableData(tableData.concat(response.data));
          setForm(initialState);
        } else {
          console.error(response);
        }
      }).catch(err => console.error(err));
    } else { // edit
      axios.put(`${server}/api/${table}/${form.id}`, form, options).then(response => {
        if (response.data) {
          setTableData(tableData.map(row => (row.id === form.id ? response.data : row)));
          setForm(initialState);
        } else {
          console.error(response);
        }
      }).catch(err => console.error(err));
    }
  }

  const onEdit = (id) => e => {
    setForm(tableData.find(row => row.id === id));
  }

  const onDelete = (id) => e => {
    axios.delete(`${server}/api/${table}/${id}`).then(response => {
      if (response.data) {
        setTableData(table.filter(row => row.id !== id));
      } else {
        console.error(response);
      }
    }).catch(err => console.error(err));
  }

  return (
    <>
      <DatabaseTable
        table={tableData}
        fields={Object.keys(initialState)}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <br />
      <br />
      <form noValidate onSubmit={onSubmit}>
        <Grid container>
          {Object.keys(initialState).map((field, i) => {
            switch (fieldTypes[i]) {
              case 'number':
                return <>
                  <TextField
                    key={table + '_' + field}
                    margin="normal"
                    variant="outlined"
                    type="number"
                    required
                    fullWidth
                    id={table + '_' + field}
                    label={field}
                    name={field}
                    autoComplete={field}
                    value={form[field]}
                    onChange={onInputChange}
                  />
                </>
                break;
              case 'string':
                return <>
                  <TextField
                    key={table + '_' + field}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id={table + '_' + field}
                    label={field}
                    name={field}
                    autoComplete={field}
                    value={form[field]}
                    onChange={onInputChange}
                  />
                </>
                break;
              case 'text':
                return <>
                  <TextField
                    key={table + '_' + field}
                    variant="outlined"
                    margin="normal"
                    multiline
                    required
                    fullWidth
                    id={table + '_' + field}
                    label={field}
                    name={field}
                    autoComplete={field}
                    value={form[field]}
                    onChange={onInputChange}
                  />
                </>
                break;
              default:
                break;
            }
          })}
        </Grid>
        <br />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
          style={{ marginTop: '1rem' }}
        >
          Submit
        </Button>
      </form>
    </>
  )
}

export default connect(state => state, actionCreators)(TableDashboard)