import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
    AppShell,
    Navbar,
    Text,
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
    ActionIcon,
    useMantineColorScheme
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import {QueryBuilderWrapper} from "./components/querybuilder/QueryBuilderWrapper";
import {UserNavBar} from "./components/navbar/UserNavBar";
import {Explore} from "./components/visualization/Explore";
import {UserDashboard} from "./components/userdashboard/UserDashboard";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const dark = colorScheme === 'dark';
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ colorScheme,
                colors: {
                    // override dark colors to change them for all components
                    dark: [
                        '#d5d7e0',
                        '#acaebf',
                        '#8c8fa3',
                        '#666980',
                        '#4d4f66',
                        '#34354a',
                        '#2b2c3d',
                        '#1d1e30',
                        '#0c0d21',
                        '#01010a',
                    ],
                }, }}
        >
            <NotificationsProvider>
        <div className="App">
            <Router>
                <AppShell
                    navbar={
                        <Navbar p="md" hiddenBreakpoint="sm" width={{sm: 100, lg: 200}}>
                            <Navbar.Section><Text
                                styles={{
                                    root: {
                                        fontSize: 35
                                    }
                                }}
                                component="span"
                                align="right"
                                variant="gradient"
                                gradient={{from: 'indigo', to: 'cyan', deg: 45}}
                                weight={700}
                                style={{fontFamily: 'Greycliff CF, sans-serif'}}
                            >
                                flowercup
                            </Text>
                                <ActionIcon
                                    ml={140}
                                    component={"span"}
                                    variant="outline"
                                    color={dark ? 'yellow' : 'blue'}
                                    onClick={() => toggleColorScheme()}
                                >
                                    {dark ? <SunIcon/> : <MoonIcon/>}
                                </ActionIcon>

                            </Navbar.Section>
                            <Navbar.Section grow><UserNavBar/></Navbar.Section>

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
                        <Route path='charts' element={<Explore/>}/>
                        <Route path='dashboard' element={<UserDashboard/>}/>
                    </Routes>
                </AppShell>
            </Router>
        </div>
            </NotificationsProvider>
        </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
