import {useState} from 'react';
import {Field, QueryBuilder, RuleGroupType} from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.scss';
import {
    Autocomplete,
    Button, Center,
    Container,
    Drawer,
    Grid,
    InputWrapper,
    SegmentedControl,
    Select,
    Stack,
    Text, TextInput
} from "@mantine/core";
import { antdControlElements } from '@react-querybuilder/antd';
import '../../index.scss';
import {ArchiveIcon, Cross1Icon, GearIcon, RocketIcon} from "@radix-ui/react-icons";
import {showNotification} from "@mantine/notifications";

const fields: Field[] = [
    {name: 'token', label: 'Token name'},
    {name: 'price', label: 'Token price'},
    {name: 'incr', label: 'Increased'},
    {name: 'decr', label: 'Decreased'},
    {name: 'sentiment', label: '24h sentiment average'},
    {name: 'ytPresence', label: 'New Youtube upload count'},
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
    const [triggerAction, setTriggerAction] = useState();
    const [triggerActionToken, setTriggerActionToken] = useState();
    const [triggerActionSwapToken, setTriggerActionSwapToken] = useState();
    const [triggerActionFrequency, setTriggerActionFrequency] = useState();
    const [triggerActionName, setTriggerActionName] = useState();


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
                            leftIcon={<GearIcon/>}
                            fullWidth
                            color={'green'}
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
                            Reset
                        </Button>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="md"
                position={'bottom'}
                size="md"
            >
                <Grid columns={12} >
                    <Grid.Col offset={1} span={5}>
                        <Stack>
                            <Select
                                label={'Action'}
                                value={triggerAction}
                                //@ts-ignore
                                onChange={setTriggerAction}
                                data={[
                                    {value:'buy',label:'Buy'},
                                    {value:'sell',label:'Sell'},
                                    {value:'swap',label:'Exchange'}
                            ]} />
                            {triggerAction === 'swap' && <>
                                <Autocomplete
                                    label={'Base'}
                                    value={triggerActionToken}
                                    //@ts-ignore
                                    onChange={setTriggerActionToken}
                                    data={[
                                        {value:'ETH',label:'Ethereum'},
                                        {value:'BTC',label:'Bitcoin'},
                                        {value:'XRP',label:'Ripple'},
                                        {value:'BCH',label:'Bitcoin Cash'},
                                        {value:'LTC',label:'Litecoin'},
                                        {value:'USDT',label:'Tether'},
                                        {value:'BNB',label:'Binance Coin'},
                                        {value:'EOS',label:'EOS'},
                                        {value:'BSV',label:'Bitcoin SV'},
                                        {value:'TRX',label:'TRON'},
                                        {value:'ADA',label:'Cardano'},
                                        {value:'XLM',label:'Stellar'},
                                        {value:'XMR',label:'Monero'},
                                        {value:'XTZ',label:'Tezos'},
                                        {value:'ATOM',label:'Cosmos'},
                                        {value:'DASH',label:'Dash'},
                                        {value:'IOTA',label:'IOTA'},
                                        {value:'NEO',label:'NEO'},
                                        {value:'ETC',label:'Ethereum Classic'},
                                        {value:'CRO',label:'Crypto.com Coin'},
                                        {value:'HEDG',label:'HedgeTrade'},
                                        {value:'LINK',label:'Chainlink'},
                                        {value:'LUNA',label:'Terra'},
                                        {value:'COMP',label:'Compound'},
                                        {value:'WIN',label:'WINk'},
                                        {value:'THETA',label:'THETA'},
                                        {value:'ENJ',label:'Enjin Coin'},
                                        {value:'VET',label:'VeChain'},
                                        {value:'UNI',label:'Uniswap'},
                                        {value:'ZIL',label:'Zilliqa'},
                                        {value:'WAVES',label:'Waves'},
                                        {value:'ONT',label:'Ontology'},
                                        {value:'ALGO',label:'Algorand'},
                                        {value:'QTUM',label:'Qtum'},
                                        {value:'BAT',label:'Basic Attention Token'},
                                        {value:'OMG',label:'OmiseGO'},
                                        {value:'SOL',label:'SOLVE'},
                                        {value:'PAX',label:'Paxos Standard'},
                                        {value:'KNC',label:'Kyber Network'},
                                        {value:'KAVA',label:'Kava'},
                                        {value:'DOGE',label:'Dogecoin'},
                                        {value:'SNX',label:'Synthetix Network Token'},
                                        {value:'FTM',label:'Fantom'},
                                    ]} />
                                <Autocomplete
                                    label={'Quote'}
                                    value={triggerActionSwapToken}
                                    //@ts-ignore
                                    onChange={setTriggerActionSwapToken}
                                    data={[
                                        {value:'ETH',label:'Ethereum'},
                                        {value:'BTC',label:'Bitcoin'},
                                        {value:'XRP',label:'Ripple'},
                                        {value:'BCH',label:'Bitcoin Cash'},
                                        {value:'LTC',label:'Litecoin'},
                                        {value:'USDT',label:'Tether'},
                                        {value:'BNB',label:'Binance Coin'},
                                        {value:'EOS',label:'EOS'},
                                        {value:'BSV',label:'Bitcoin SV'},
                                        {value:'TRX',label:'TRON'},
                                        {value:'ADA',label:'Cardano'},
                                        {value:'XLM',label:'Stellar'},
                                        {value:'XMR',label:'Monero'},
                                        {value:'XTZ',label:'Tezos'},
                                        {value:'ATOM',label:'Cosmos'},
                                        {value:'DASH',label:'Dash'},
                                        {value:'IOTA',label:'IOTA'},
                                        {value:'NEO',label:'NEO'},
                                        {value:'ETC',label:'Ethereum Classic'},
                                        {value:'CRO',label:'Crypto.com Coin'},
                                        {value:'HEDG',label:'HedgeTrade'},
                                        {value:'LINK',label:'Chainlink'},
                                        {value:'LUNA',label:'Terra'},
                                        {value:'COMP',label:'Compound'},
                                        {value:'WIN',label:'WINk'},
                                        {value:'THETA',label:'THETA'},
                                        {value:'ENJ',label:'Enjin Coin'},
                                        {value:'VET',label:'VeChain'},
                                        {value:'UNI',label:'Uniswap'},
                                        {value:'ZIL',label:'Zilliqa'},
                                        {value:'WAVES',label:'Waves'},
                                        {value:'ONT',label:'Ontology'},
                                        {value:'ALGO',label:'Algorand'},
                                        {value:'QTUM',label:'Qtum'},
                                        {value:'BAT',label:'Basic Attention Token'},
                                        {value:'OMG',label:'OmiseGO'},
                                        {value:'SOL',label:'SOLVE'},
                                        {value:'PAX',label:'Paxos Standard'},
                                        {value:'KNC',label:'Kyber Network'},
                                        {value:'KAVA',label:'Kava'},
                                        {value:'DOGE',label:'Dogecoin'},
                                        {value:'SNX',label:'Synthetix Network Token'},
                                        {value:'FTM',label:'Fantom'},
                                    ]} />
                            </>}
                            {triggerAction !== 'swap' &&
                                <Autocomplete
                                    label={'Token'}
                                    value={triggerActionToken}
                                    //@ts-ignore
                                    onChange={setTriggerActionToken}
                                    data={[
                                        {value:'ETH',label:'Ethereum'},
                                        {value:'BTC',label:'Bitcoin'},
                                        {value:'XRP',label:'Ripple'},
                                        {value:'BCH',label:'Bitcoin Cash'},
                                        {value:'LTC',label:'Litecoin'},
                                        {value:'USDT',label:'Tether'},
                                        {value:'BNB',label:'Binance Coin'},
                                        {value:'EOS',label:'EOS'},
                                        {value:'BSV',label:'Bitcoin SV'},
                                        {value:'TRX',label:'TRON'},
                                        {value:'ADA',label:'Cardano'},
                                        {value:'XLM',label:'Stellar'},
                                        {value:'XMR',label:'Monero'},
                                        {value:'XTZ',label:'Tezos'},
                                        {value:'ATOM',label:'Cosmos'},
                                        {value:'DASH',label:'Dash'},
                                        {value:'IOTA',label:'IOTA'},
                                        {value:'NEO',label:'NEO'},
                                        {value:'ETC',label:'Ethereum Classic'},
                                        {value:'CRO',label:'Crypto.com Coin'},
                                        {value:'HEDG',label:'HedgeTrade'},
                                        {value:'LINK',label:'Chainlink'},
                                        {value:'LUNA',label:'Terra'},
                                        {value:'COMP',label:'Compound'},
                                        {value:'WIN',label:'WINk'},
                                        {value:'THETA',label:'THETA'},
                                        {value:'ENJ',label:'Enjin Coin'},
                                        {value:'VET',label:'VeChain'},
                                        {value:'UNI',label:'Uniswap'},
                                        {value:'ZIL',label:'Zilliqa'},
                                        {value:'WAVES',label:'Waves'},
                                        {value:'ONT',label:'Ontology'},
                                        {value:'ALGO',label:'Algorand'},
                                        {value:'QTUM',label:'Qtum'},
                                        {value:'BAT',label:'Basic Attention Token'},
                                        {value:'OMG',label:'OmiseGO'},
                                        {value:'SOL',label:'SOLVE'},
                                        {value:'PAX',label:'Paxos Standard'},
                                        {value:'KNC',label:'Kyber Network'},
                                        {value:'KAVA',label:'Kava'},
                                        {value:'DOGE',label:'Dogecoin'},
                                        {value:'SNX',label:'Synthetix Network Token'},
                                        {value:'FTM',label:'Fantom'},
                                    ]} />}
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={5}>
                        <Stack>
                            <TextInput
                                label="Action name"
                                required
                                value={triggerActionName}
                                //@ts-ignore
                                onChange={(event) => setTriggerActionName(event.currentTarget.value)} />
                            <SegmentedControl
                                mt={24}
                                id="input-frequency"
                                value={triggerActionFrequency}
                                //@ts-ignore
                                onChange={setTriggerActionFrequency}
                                data={[
                                    { label: 'Once', value: 'once' },
                                    { label: 'On every occurrence', value: 'repeat' },
                                ]}
                            />
                            <Button
                                onClick={() => {
                                    setOpened(false)
                                    setTimeout(() => {
                                        showNotification({
                                            title: 'Trigger action deployed',
                                            message: `${triggerActionName} has been successfully initialized!`,
                                        })},1500)
                                }
                                }
                                mt={22}
                                leftIcon={<RocketIcon/>}
                                color="blue"
                                size="md">
                                Create
                            </Button>
                        </Stack>
                    </Grid.Col>

                </Grid>
            </Drawer>
        </Container>
    );
};