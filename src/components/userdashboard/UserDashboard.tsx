import {Badge, Container, Grid, Stack, Title, Text} from "@mantine/core";

export const UserDashboard = () => {
    return (
        <Container
            mt={10}
            fluid>
            <Grid columns={100}>
                <Grid.Col span={50}>
                    <Stack mt={100} ml={50} align={'center'}>
                        <Title>
                            Active triggers
                        </Title>
                        <Badge fullWidth color="lime" size="xl" variant="dot">XRP Reddit listener</Badge>
                        <Badge fullWidth color="lime" size="xl" variant="dot">ETH - BTC swap</Badge>
                        <Badge fullWidth color="lime" size="xl" variant="dot">Generic crypto sentiment</Badge>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={50}>
                    <Stack mt={100} ml={50} align={'center'}>
                        <Title>
                            Recent invocations
                        </Title>
                        <Badge fullWidth color="orange" size="xl" variant="dot">DOGE Elon Trigger: 23s ago</Badge>
                        <Badge fullWidth color="yellow" size="xl" variant="dot">SOL Decrease listener: 2h ago</Badge>
                        <Badge fullWidth color="green" size="xl" variant="dot">USDT Tweet & Sentiment: 16h ago</Badge>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    )
}