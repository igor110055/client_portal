import {
    Button,
    Container,
    Grid,
    Stack,
    Select,
    Accordion,
    Text,
    Switch,
    Group,
    Center,
    Tabs,
    SimpleGrid, MultiSelect
} from "@mantine/core";
import {Calendar, DateRangePicker, TimeInput} from '@mantine/dates';
import {useState} from "react";
import {PersonIcon, PlayIcon, TwitterLogoIcon} from "@radix-ui/react-icons";

export const Explore = () => {
    const [socialMediaToken, setSocialMediaToken] = useState('eth');
    const [marketToken1, setMarketToken1] = useState('eth');
    const [marketToken2, setMarketToken2] = useState('btc');
    const [twitterMetric, setTwitterMetric] = useState('tweetSentiment');
    const [youtubeMetrics, setYoutubeMetrics] = useState(false);
    const [redditMetric, setRedditMetric] = useState('postPresence');
    const [exchangeName, setExchangeName] = useState();
    const [marketDateRange, setMarketDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    const [activeTab, setActiveTab] = useState(1);

    return (
        <Container
            fluid
        >
            <Tabs
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
                                    icon={<TwitterLogoIcon/>}
                                    label="Twitter">
                                    <MultiSelect
                                        label="Data points"
                                        placeholder="Select"
                                        // @ts-ignore
                                        onChange={setTwitterMetric}
                                        data={[
                                        { value: 'tweetVolume', label: 'Tweet Volume' },
                                        { value: 'tweetSentiment', label: 'Tweet Sentiment' },
                                    ]} />
                                </Accordion.Item>

                                <Accordion.Item
                                    icon={<PlayIcon/>}
                                    label="Youtube">
                                    <Switch
                                        label="Measure the upload count related to the token"
                                        checked={youtubeMetrics}
                                        onChange={(event) => setYoutubeMetrics(event.currentTarget.checked)}
                                    />
                                </Accordion.Item>
                                <Accordion.Item
                                    icon={<PersonIcon/>}
                                    label="Reddit">
                                    <MultiSelect
                                        label="Data points"
                                        // @ts-ignore
                                        onChange={setRedditMetric}
                                        data={[
                                        { value: 'postPresence', label: 'Post presence'},
                                        { value: 'postSentiment', label: 'Post sentiment' },
                                    ]} />
                                </Accordion.Item>
                            </Accordion>
                            <Select
                                label={'Token'}
                                placeholder="Pick one"
                                value={socialMediaToken}
                                // @ts-ignore
                                onChange={setSocialMediaToken} data={[
                                { value: 'eth', label: 'Ethereum' },
                                { value: 'btc', label: 'Bitcoin' },
                                { value: 'doge', label: 'Dogecoin' },
                                { value: 'xrp', label: 'Ripple' },
                            ]} />
                            </Grid.Col>
                            <Grid.Col span={50}/>
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
                                            { value: 'eth', label: 'Ethereum' },
                                            { value: 'btc', label: 'Bitcoin' },
                                            { value: 'doge', label: 'Dogecoin' },
                                            { value: 'xrp', label: 'Ripple' },
                                        ]} />
                                        <Select
                                            label={'Quote'}
                                            placeholder="Pick one"
                                            value={marketToken2}
                                            // @ts-ignore
                                            onChange={setMarketToken2} data={[
                                            { value: 'eth', label: 'Ethereum' },
                                            { value: 'btc', label: 'Bitcoin' },
                                            { value: 'doge', label: 'Dogecoin' },
                                            { value: 'xrp', label: 'Ripple' },
                                        ]} />
                                        <Select
                                            label={'Exchange'}
                                            placeholder="Pick one"
                                            value={exchangeName}
                                            // @ts-ignore
                                            onChange={setExchangeName} data={[
                                            { value: 'BINANCE', label: 'Binance' },
                                            { value: 'COINBASE', label: 'Coinbase' },
                                        ]} />
                                <DateRangePicker
                                    label="Timespan"
                                    value={marketDateRange}
                                    onChange={setMarketDateRange}/>
                            </Grid.Col>
                        </Grid>
                </Tabs.Tab>
            </Tabs>
            <SimpleGrid
                spacing="xl"
                cols={8}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <Button>
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