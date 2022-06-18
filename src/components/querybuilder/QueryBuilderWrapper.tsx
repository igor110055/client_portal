import { useState } from 'react';
import { QueryBuilder, Field, RuleGroupType } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.scss';
import {Button, Container, Grid, Stack, Drawer, JsonInput, TextInput, PasswordInput} from "@mantine/core";
import {graphqlTest} from "../../lib/graphqlConsumer";

const fields: Field[] = [
    { name: 'token', label: 'Token name' },
    { name: 'price', label: 'Token price' },
    { name: 'incr', label: 'Increased' },
    { name: 'decr', label: 'Decreased' },

];

export const QueryBuilderWrapper = () => {
    const [query, setQuery] = useState<RuleGroupType>({
        combinator: 'and',
        rules: [
            { field: 'token', operator: '=', value: 'ETH' },
            { field: 'price', operator: '=', value: '1021.06$' },
        ],
    });
    const [opened, setOpened] = useState(false);

    return (
        <Container
            fluid
            style={{height: 500}}
        >
            <Grid columns={100}>
                <Grid.Col span={70}>
                    <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />
                </Grid.Col>
                <Grid.Col span={30}>
                    <Stack>
                        <Button
                            onClick={() => console.log(query)}
                            fullWidth
                            color={'green'}
                        >
                            Save query
                        </Button>
                        <Button
                            fullWidth
                            onClick={() => setOpened(true)}
                            color={'orange'}
                        >
                            Configure reaction
                        </Button>
                        <Button
                            color={'red'}
                            onClick={() => setQuery({
                                combinator: 'and',
                                rules: [
                                    { field: 'token', operator: '=', value: 'ETH' },
                                    { field: 'price', operator: '=', value: '1203.34$' },
                                ],
                            })}
                            fullWidth
                        >
                           Reset queries
                        </Button>
                        <Button
                            color={'violet'}
                            onClick={() => graphqlTest()}
                            fullWidth
                        >
                            GraphQL Test
                        </Button>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Configure trigger action"
                padding="xl"
                position={'bottom'}
                size="xl"
            >
            </Drawer>
        </Container>
    );
};