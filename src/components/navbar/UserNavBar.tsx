import {useNavigate} from "react-router-dom";
import {ActionIcon, Button, Stack, useMantineColorScheme} from "@mantine/core";
import React from "react";
import {Crosshair1Icon, GlobeIcon, HomeIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";

export const UserNavBar = () => {
    const navigate = useNavigate();


    return (
        <Stack
            mt={80}
            >
            <Button
                leftIcon={<HomeIcon/>}
                variant="subtle"
                onClick={() => {
                    navigate('/dashboard')
                }
                }
            >
                Dashboard
            </Button>
            <Button
                leftIcon={<GlobeIcon/>}
                variant="subtle"
                onClick={() => {
                    navigate('/charts')
                }
                }
            >
                Explore data
            </Button>
            <Button
                variant="subtle"
                leftIcon={<Crosshair1Icon/>}
                onClick={() => {
                    navigate('/')
                }
                }>
                Trigger builder
            </Button>
        </Stack>
    )
}