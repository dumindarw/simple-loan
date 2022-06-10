import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const LIST_CLIENTS = gql`
  query {
    LIST_CLIENTS {
      name
      amount
    }
  }
`;

const ListClients = () => {

  const  { loading, error , data, refetch} = useQuery(LIST_CLIENTS);
  const [clients, setClients] = React.useState([]);

  useEffect(()=>{
    refetch();
    if(data){
      setClients(data.LIST_CLIENTS)
    }
  }, [data, refetch])


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  

    return (
      <Container component="main" maxWidth="xs">
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
          <TableContainer>
          <Table sx={{ maxWidth: 650, marginTop: 5 }} size="small" aria-label="a dense table">
              <TableHead>
                  <TableRow>
                      <TableCell>Client Name</TableCell>
                      <TableCell align="right">Amount</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {clients && clients.map((client) => (
                      <TableRow key={1}              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell align="left">{client.name}</TableCell>
                          <TableCell align="right">
                              {client.amount}
                          </TableCell>
                          
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
          
          </TableContainer>
        </Box>
        </Container>
      );
}

export default ListClients;