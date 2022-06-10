import React from "react";
import { useMutation, gql } from "@apollo/client";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ADD_CLIENT = gql`
  mutation($name: String, $amount: Float, $file: Upload) {
    ADD_CLIENT(name: $name, amount: $amount, file: $file) {
      name
    }
  }
`;

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value,
    };
};

const CreateClient = () => {
    const [clientFormData, setFormdata] = React.useReducer(formReducer, {});
    const [file, setFileData] = React.useState();
    const [clientAdded, isClientAdded] = React.useState();

    const [mutate, { loading, error }] = useMutation(ADD_CLIENT);
    const onChange = ({
      target: {
        validity,
        files: [file]
      }
    }) => validity.valid &&  setFileData( file );

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = clientFormData.firstName;
        const amount = parseFloat(clientFormData.amount);

        const response = await mutate({ variables: { name, amount, file } });

        isClientAdded(response.data.ADD_CLIENT.name ? true : false) 

    }

    const handleChange = (event) => {
        setFormdata({
            name: event.currentTarget.name,
            value: event.currentTarget.value,
        });

        isClientAdded(false) ;
    };
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
    
  
    return (
      <div>
      <header>&nbsp;</header>
          <Container component="main" maxWidth="xs">
              <Box
                  sx={{
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                  }}
              >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                    <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="firstName"
                          label="Firstname"
                          name="firstName"
                          autoComplete="firstName"
                          autoFocus
                          onChange={handleChange}
                      />

                    <TextField
                          margin="normal"
                          required
                          fullWidth
                          type = "number"
                          id="amount"
                          label="Amount"
                          name="amount"
                          autoComplete="amount"
                          min="0.00"  
                          step="0.01" 
                          max="10000.00" 
                          presicion={2}
                          onChange={handleChange}
                      />

                    <TextField
                          margin="normal"
                          type="file"
                          required
                          fullWidth
                          onChange={onChange}
                      />
                
            
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Add Client
                    </Button>
                    {clientAdded ? <div>Client Successfully Added !</div> : <div></div>}
              
                </Box>

            </Box>
            </Container>
            </div>
    );
  };

  export default CreateClient;