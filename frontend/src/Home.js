import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import CreateClient from "./CreateClient";
import ListClients from "./ListClients";

const Home = () => {

    return(
        <Router>
            <div>

            <header>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                Loan App
                            </Typography>
                            <NavLink to="/">Home</NavLink>
                            &nbsp;&nbsp;
                            <NavLink to="/add">Add Client</NavLink>
                            &nbsp;&nbsp;
                            <NavLink to="/view">View Clients</NavLink>
                        </Toolbar>
                    </Container>
                </AppBar>
            </header>

            <Routes>
                <Route path="/" />
                <Route path="/view" element={<ListClients />}/>
                <Route path="/add" element={<CreateClient/>}/>
            </Routes>
            </div>
        </Router>)

}

export default Home;