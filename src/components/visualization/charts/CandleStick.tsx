import {VictoryChart, VictoryTheme, VictoryAxis, VictoryCandlestick} from 'victory';
export const CandleStick = (props: any) => {
    // ✅ Get Max date
    const maxDate = new Date(
        Math.max(
            ...props.data.map((element:any) => {
                return new Date(element.timestamp * 1000);
            })
        )
    );


// ✅ Get Min date
    const minDate = new Date(
        Math.min(
            ...props.data.map((element: any) => {
                return new Date(element.timestamp * 1000);
            }),
        ),
    );

    return (
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 25 }}
            scale={{x:'time'}}
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