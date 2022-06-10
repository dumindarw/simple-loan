import React from "react";
import { useQuery, gql } from "@apollo/client";

const LIST_CLIENTS = gql`
  query {
    LIST_CLIENTS {
      name
      amount
    }
  }
`;

const ListClients = () => {

    return (
        <React.Fragment>
            {}
        </React.Fragment>
      );
}