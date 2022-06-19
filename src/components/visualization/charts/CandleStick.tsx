import {VictoryChart, VictoryTheme, VictoryAxis, VictoryCandlestick} from 'victory';
export const CandleStick = (props: any) => {

    return (
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 25 }}
            scale={{ x: "time" }}
        >
            <VictoryCandlestick
                candleRatio={1}
                candleWidth={5}
                candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
                padding={{ top: 10, bottom: 20 }}
                data={props.data}
            />
        </VictoryChart>
    )
}