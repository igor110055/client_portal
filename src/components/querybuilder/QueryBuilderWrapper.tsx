import {useState} from 'react';
import {Field, QueryBuilder, RuleGroupType} from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.scss';
import {Button, Container, Drawer, Grid, Stack} from "@mantine/core";
import { antdControlElements } from '@react-querybuilder/antd';
import '../../index.scss';
import {ArchiveIcon, Cross1Icon, GearIcon} from "@radix-ui/react-icons";

const fields: Field[] = [
    {name: 'token', label: 'Token name'},
    {name: 'price', label: 'Token price'},
    {name: 'incr', label: 'Increased'},
    {name: 'decr', label: 'Decreased'},

];

export const QueryBuilderWrapper = () => {
    const [query, setQuery] = useState<RuleGroupType>({
        combinator: 'and',
        rules: [
            {field: 'token', operator: '=', value: 'ETH'},
            {field: 'price', operator: '=', value: '1021.06$'},
        ],
    });
    const [opened, setOpened] = useState(false);

    return (
        <Container
            fluid
            style={{height: 500}}
        >
            <Grid
                style={{height: '100%'}}
                mt={100}
                columns={100}>
                <Grid.Col
                    className={'queryBg'}
                    span={100}>
                    <QueryBuilder
                        enableDragAndDrop
                        controlElements={antdControlElements}
                        fields={fields}
                        query={query}
                        onQueryChange={q => setQuery(q)}/>
                </Grid.Col>
                <Grid.Col offset={80} span={20}>
                    <Stack spacing={'xs'}>
                        <Button
                            leftIcon={<ArchiveIcon/>}
                            color={'green'}
                            onClick={() => console.log(query)}
                            fullWidth
                        >
                            Save query
                        </Button>
                        <Button
                            leftIcon={<GearIcon/>}
                            fullWidth
                            color={'orange'}
                            onClick={() => setOpened(true)}
                        >
                            Configure action
                        </Button>
                        <Button
                            color={'red'}
                            leftIcon={<Cross1Icon/>}
                            onClick={() => setQuery({
                                combinator: 'and',
                                rules: [
                                    {field: 'token', operator: '=', value: 'ETH'},
                                    {field: 'price', operator: '=', value: '1203.34$'},
                                ],
                            })}
                            fullWidth
                        >
                            Reset queries
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