import {useNavigate} from "react-router-dom";
import {Button, Stack} from "@mantine/core";
import React from "react";

export const UserNavBar = () => {
    const navigate = useNavigate();
    return (
        <Stack
            justify="center"
            style={{height: '100%'}}
        >
            <Button
                variant="outline"
                onClick={() => {
                    navigate('/')
                }
                }>
                Build a query
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    navigate('/charts')
                }
                }
            >
                Explore trends
            </Button>
        </Stack>
    )
}