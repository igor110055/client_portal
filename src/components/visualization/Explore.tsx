import {
    Accordion,
    Button,
    Container,
    Divider,
    Grid,
    Group,
    MultiSelect,
    SegmentedControl,
    Select,
    SimpleGrid,
    Space,
    Switch,
    Tabs,
    Loader, Center
} from "@mantine/core";
import {useEffect, useState} from "react";
import {PersonIcon, TwitterLogoIcon, VideoIcon} from "@radix-ui/react-icons";
import {LineGraphDemo} from "./charts/LineGraph";
import {graphqlCandlestick, graphqlRedditService, graphqlTweetService} from "../../lib/graphqlConsumer";
import {CandleStick} from "./charts/CandleStick";


export const Explore = () => {
    const [socialMediaToken, setSocialMediaToken] = useState('eth');
    const [marketToken1, setMarketToken1] = useState('eth');
    const [marketToken2, setMarketToken2] = useState('btc');
    const [twitterMetric, setTwitterMetric] = useState();
    const [youtubeMetrics, setYoutubeMetrics] = useState(false);
    const [redditMetric, setRedditMetric] = useState();
    const [exchangeName, setExchangeName] = useState();
    const [activeTab, setActiveTab] = useState(0);
    const [socialDateRangeFixed, setSocialDateRangeFixed] = useState('60000');
    const [marketDateRangeFixed, setMarketDateRangeFixed] = useState(undefined);
    const [retrievedTweetData, setRetrievedTweetData] = useState([]);
    const [retrievedRedditData, setRetrievedRedditData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [plotMode, setPlotMode] = useState('twitter');
    const [candleData, setCandleData] = useState();

    useEffect(() => {
        console.log(candleData);
    },[candleData])

    useEffect(() => {
        if (redditMetric){
            setPlotMode('reddit');
        }
    },[redditMetric])

    useEffect(() => {
        if (twitterMetric){
            setPlotMode('twitter');
        }
    },[twitterMetric])

    return (
        <Container
            fluid
            mt={10}
        >
            <Tabs
                variant={"pills"}
                position={"left"}
                active={activeTab}
                onTabChange={setActiveTab}>
                <Tabs.Tab label={'Social metrics'}>
                    <Grid
                        style={{height: 500}}
                        columns={100}>
                        <Grid.Col span={50}>
                            <Accordion>
                                <Accordion.Item
                                    icon={<TwitterLogoIcon color={"#1DA1F2"}/>}
                                    label="Twitter">
                                    <MultiSelect
                                        label="Data points"
                                        placeholder="Select"
                                        // @ts-ignore
                                        onChange={setTwitterMetric}
                                        data={[
                                            {value: 'tweetVolume', label: 'Tweet Volume'},
                                            {value: 'tweetSentiment', label: 'Tweet Sentiment'},
                                        ]}/>
                                </Accordion.Item>

                                <Accordion.Item
                                    icon={<VideoIcon color={'#FF0000'}/>}
                                    label="Youtube">
                                    <Switch
                                        label="Retrieve associated uploaded video volume"
                                        checked={youtubeMetrics}
                                        onChange={(event) => setYoutubeMetrics(event.currentTarget.checked)}
                                    />
                                </Accordion.Item>
                                <Accordion.Item
                                    icon={<PersonIcon color={"#ff4500"}/>}
                                    label="Reddit">
                                    <MultiSelect
                                        label="Data points"
                                        // @ts-ignore
                                        onChange={setRedditMetric}
                                        data={[
                                            {value: 'postPresence', label: 'Post presence'},
                                            {value: 'postSentiment', label: 'Post sentiment'},
                                        ]}/>
                                </Accordion.Item>
                            </Accordion>
                            <Group grow>
                                <Select
                                    mt={20}
                                    placeholder="Pick one"
                                    value={socialMediaToken}
                                    // @ts-ignore
                                    onChange={setSocialMediaToken} data={[
                                    {value: 'all', label: 'All tokens'},
                                    {value: 'ETH', label: 'Ethereum'},
                                    {value: 'BTC', label: 'Bitcoin'},
                                    {value: 'SOL', label: 'Solana'},
                                    {value: 'XRP', label: 'Ripple'},
                                ]}/>
                                <SegmentedControl
                                    mt={20}
                                    value={socialDateRangeFixed}
                                    //@ts-ignore
                                    onChange={setSocialDateRangeFixed}
                                    data={[
                                        {label: 'Last hour',value: '6000000'},
                                        {label: 'Last day', value: '3600000 * 24'},
                                        {label: 'Past week', value: '3600000 * 24 * 7'},
                                    ]}
                                />
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={50}>
                            {(retrievedTweetData?.length > 1 && !loading && plotMode === 'twitter') && <LineGraphDemo data={retrievedTweetData} mode={'twitter'}/>}
                            {(retrievedRedditData?.length > 1 && !loading && plotMode === 'reddit') && <LineGraphDemo data={retrievedRedditData} mode={'reddit'}/>}
                            {loading && <Center mt={90}><Loader color="violet" style={{height: 100, width: 100}} /></Center>}
                        </Grid.Col>
                    </Grid>
                </Tabs.Tab>
                <Tabs.Tab label={'Market metrics'}>
                    <Grid
                        style={{height: 500}}
                        columns={100}>
                        <Grid.Col span={50}>
                            <Select
                                label={'Base'}
                                placeholder="Pick one"
                                value={marketToken1}
                                // @ts-ignore
                                onChange={setMarketToken1} data={[
                                {value: 'eth', label: 'Ethereum'},
                                {value: 'btc', label: 'Bitcoin'},
                                {value: 'doge', label: 'Dogecoin'},
                                {value: 'xrp', label: 'Ripple'},
                            ]}/>
                            <Select
                                label={'Quote'}
                                placeholder="Pick one"
                                value={marketToken2}
                                // @ts-ignore
                                onChange={setMarketToken2} data={[
                                {value: 'eth', label: 'Ethereum'},
                                {value: 'btc', label: 'Bitcoin'},
                                {value: 'doge', label: 'Dogecoin'},
                                {value: 'xrp', label: 'Ripple'},
                            ]}/>
                            <Select
                                label={'Exchange'}
                                placeholder="Pick one"
                                value={exchangeName}
                                // @ts-ignore
                                onChange={setExchangeName} data={[
                                {value: 'BINANCE', label: 'Binance'},
                                {value: 'COINBASE', label: 'Coinbase'},
                            ]}/>
                            <SegmentedControl
                                fullWidth
                                mt={20}
                                value={marketDateRangeFixed}
                                //@ts-ignore
                                onChange={setMarketDateRangeFixed}
                                data={[
                                    {label: 'Last hour', value: 'lastHour'},
                                    {label: 'Last day', value: 'lastDay'},
                                    {label: 'Past week', value: 'lastWeek'},
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={50}>
                            <CandleStick data={candleData}/>
                        </Grid.Col>
                    </Grid>
                </Tabs.Tab>
            </Tabs>
            <Space mt={300}/>
            <Divider my="sm"/>
            <SimpleGrid
                spacing="xl"
                cols={3}>
                <Button
                    onClick={async () => {
                     const data = await graphqlCandlestick();
                     console.log(data);
                     setCandleData(data);
                }}
                >
                    Get candlestick data
                </Button>
                <Button
                    onClick={async () => {
                        switch (plotMode) {
                            case 'twitter':
                                setLoading(true)
                                const twitterResponse = await graphqlTweetService({lastMs: parseInt(socialDateRangeFixed)});
                                setLoading(false);
                                setRetrievedTweetData(twitterResponse.data['tweetData']);
                                break;
                            case 'reddit':
                                setLoading(true)
                                const redditResponse = await graphqlRedditService({coin: socialMediaToken});
                                setLoading(false);
                                console.log(redditResponse);
                                setRetrievedRedditData(redditResponse.data['redditData']);
                                break;
                        }
                    }}
                >
                    Process
                </Button>
                <Button>
                    Save preset
                </Button>
                <Button>
                    Reset
                </Button>
            </SimpleGrid>
        </Container>
    )
}