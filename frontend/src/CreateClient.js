import React from "react";
import { useMutation, gql } from "@apollo/client";

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
    }) => validity.valid && isClientAdded(false) && setFileData( file );

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
    };
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
    
  
    return (
      <React.Fragment>
          <form onSubmit={handleSubmit}>
            <label>Name:</label> <input type = "text" name = "firstName" id="firstName" onChange={handleChange}/><br/> 
            <label>Amount:</label> <input type = "number" name = "amount" id="amount"  min="0.00"  step="0.01" max="10000.00" presicion={2} onChange={handleChange}/><br/>
            <input type="file" required onChange={onChange} /><br/>
            <button type = "submit" >Add Client</button><br/>
            {clientAdded ? <div>Client Successfully Added !</div> : <div></div>}
            
        </form>
      </React.Fragment>
    );
  };

  export default CreateClient;