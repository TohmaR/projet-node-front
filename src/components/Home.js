import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Nom',
    headerName: 'Nom',
    width: 150,
    editable: true,
  },
  {
    field: 'Catégorie',
    headerName: 'Catégorie',
    width: 150,
    editable: true,
  },
  {
    field: 'Matériaux',
    headerName: 'Matériaux',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Quantité',
    headerName: 'Quantité',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, Catégorie: 'Snow', Nom: 'Jon', Matériaux: 35, Quantité: 1 },
  { id: 2, Catégorie: 'Lannister', Nom: 'Cersei', Matériaux: 42, Quantité: 1 },
  { id: 3, Catégorie: 'Lannister', Nom: 'Jaime', Matériaux: 45, Quantité: 1 },
  { id: 4, Catégorie: 'Stark', Nom: 'Arya', Matériaux: 16, Quantité: 1 },
  { id: 5, Catégorie: 'Targaryen', Nom: 'Daenerys', Matériaux: null, Quantité: 1 },
  { id: 6, Catégorie: 'Melisandre', Nom: null, Matériaux: 150, Quantité: 1 },
  { id: 7, Catégorie: 'Clifford', Nom: 'Ferrara', Matériaux: 44, Quantité: 1 },
  { id: 8, Catégorie: 'Frances', Nom: 'Rossini', Matériaux: 36, Quantité: 1 },
  { id: 9, Catégorie: 'Roxie', Nom: 'Harvey', Matériaux: 65, Quantité: 1 },
];

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/authen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(jsonData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status == 'ok'){
            alert('authen sucess')
            localStorage.setItem('token', data.token)
        } else {
            alert('authen failed')
            window.location = "/"
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  })
  return (
    <div style={{ height: "100vh", width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ height: 600, width: '80%', display: 'flex' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pMatériauxSize={20}
            rowsPerPMatériauxOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
        </div>
    </div>
  );
}