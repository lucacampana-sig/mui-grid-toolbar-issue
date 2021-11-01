import React from 'react';
import ReactDOM from 'react-dom';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';

const rootEl = document.getElementById('app');

const Grid = () => {
  return (
    <DataGridPro
      components={{ Toolbar: GridToolbar }}
      columns={[
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ]}
      rows={[
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ]}
    />
  );
};

ReactDOM.render(
  <Grid />,
  rootEl,
);
