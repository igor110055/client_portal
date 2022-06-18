import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import {AppShell, Text, Header, Navbar, Stack, Button} from '@mantine/core';
import {QueryBuilderWrapper} from "./components/querybuilder/QueryBuilderWrapper";
import {UserNavBar} from "./components/navbar/UserNavBar";
import {VictoryCandlestickDemo} from "./components/visualization/Candlestick";

function App() {

    return (
    <div className="App">
      <Router>
        <AppShell
            header={
                <Header height={50}> <Text
                    component="span"
                    align="center"
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                    size="xl"
                    weight={700}
                    style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                >
                    flowercup
                </Text></Header>
            }

            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                    <UserNavBar/>
                </Navbar>
            }

            classNames={{
              root: 'AppShellRoot',
              body: 'AppShellBody',
              main: 'AppShellMain'
            }}
        >
          <Routes>
              <Route path="/" element={<QueryBuilderWrapper/>}/>
              <Route path='charts' element={<VictoryCandlestickDemo/>}/>
          </Routes>
        </AppShell>
      </Router>
    </div>
  );
}

export default App;
