import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://10.2.113.62:8080/graphql',
    cache: new InMemoryCache()
});

export const graphqlTest = () => {
    client
        .query({
            query: gql`
                  query 
                  {
                    exchangeDataCandlestick (from: 1631973900, exchange: Binance, coin:"BTCUSDT")
                    {   
                        coin,
                        exchange,
                        open,
                        close,
                        timestamp,
                        high,
                        low
                    }
                  }`
        })
        .then((result) => console.log(result.data.exchangeDataCandlestick.map((d: any) => {return {...d, "x": d.timestamp}})))
}

