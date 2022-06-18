import {graphqlCandlestick} from "../../lib/graphqlConsumer";
import {Button, Container, Grid, Stack, Select, Accordion, Text, Switch, Group, Center, Tabs} from "@mantine/core";
import {Calendar, DateRangePicker, TimeInput} from '@mantine/dates';
import {useState} from "react";

export const Explore = () => {
    const [socialMediaToken, setSocialMediaToken] = useState('eth');
    const [marketToken1, setMarketToken1] = useState('eth');
    const [marketToken2, setMarketToken2] = useState('btc');
    const [twitterMetric, setTwitterMetric] = useState('tweetSentiment');
    const [youtubeMetrics, setYoutubeMetrics] = useState(false);
    const [redditMetric, setRedditMetric] = useState('postPresence');
    const [marketDateRange, setMarketDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    const [activeTab, setActiveTab] = useState(1);

    return (
        <Container
            fluid
        >
            <Tabs
                grow
                active={activeTab}
                onTabChange={setActiveTab}>
                <Tabs.Tab label={'Social metrics'}>
                        <Container
                            fluid
                            mt={50}>
                            <Accordion>
                                <Accordion.Item label="Twitter analysis">
                                    <Select
                                        label="Metric"
                                        placeholder="Pick one"
                                        value={twitterMetric}
                                        // @ts-ignore
                                        onChange={setTwitterMetric} data={[
                                        { value: '', label: "Disabled" },
                                        { value: 'tweetVolume', label: 'Tweet Volume' },
                                        { value: 'tweetSentiment', label: 'Tweet Sentiment' },
                                    ]} />
                                </Accordion.Item>

                                <Accordion.Item label="Youtube analysis">
                                    <Switch
                                        label="Measure the upload count related to the token"
                                        checked={youtubeMetrics}
                                        onChange={(event) => setYoutubeMetrics(event.currentTarget.checked)}
                                    />
                                </Accordion.Item>
                                <Accordion.Item label="Reddit analysis">
                                    <Select
                                        label="Metric"
                                        placeholder="Pick one"
                                        value={redditMetric}
                                        // @ts-ignore
                                        onChange={setRedditMetric} data={[
                                        { value: '', label: "Disabled" },
                                        { value: 'postPresence', label: 'Post presence' },
                                        { value: 'postSentiment', label: 'Post sentiment' },
                                    ]} />
                                </Accordion.Item>
                            </Accordion>
                            <Grid columns={100}>
                                <Grid.Col span={50}/>
                                <Grid.Col span={50}>
                                    <Group
                                        
                                        align={"flex-end"}
                                        mt={50}>
                                        <Select
                                            placeholder="Pick one"
                                            value={socialMediaToken}
                                            // @ts-ignore
                                            onChange={setSocialMediaToken} data={[
                                            { value: 'eth', label: 'Ethereum' },
                                            { value: 'btc', label: 'Bitcoin' },
                                            { value: 'doge', label: 'Dogecoin' },
                                            { value: 'xrp', label: 'Ripple' },
                                        ]} />
                                        <Button>
                                            Process
                                        </Button>
                                    </Group>
                                </Grid.Col>
                            </Grid>
                    </Container>
                </Tabs.Tab>
                <Tabs.Tab label={'Market metrics'}>
                        <Grid columns={100}>
                            <Grid.Col span={50}>
                                <Container mt={50}>
                                <Group grow>
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
                                    </Group>
                                </Container>
                            </Grid.Col>
                            <Grid.Col
                                span={50}
                            >
                                <DateRangePicker
                                    label="Timespan"
                                    value={marketDateRange}
                                    onChange={setMarketDateRange}/>
                            </Grid.Col>
                        </Grid>
                </Tabs.Tab>
            </Tabs>
        </Container>
    )
}