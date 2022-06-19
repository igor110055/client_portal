import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://10.2.113.62:8080/graphql',
    cache: new InMemoryCache()
});

export const graphqlCandlestick = async () => {
    const result = await client.query({
        query: gql`
                  query 
                  {
                    exchangeDataCandlestick (from: 1605973900, exchange: Binance, coin:"BTCUSDT")
                    {   
                        open,
                        close,
                        timestamp,
                        high,
                        low
                    }
                  }`
    })
    return result.data.exchangeDataCandlestick.map((entry: any) => {
        return {...entry, x: new Date(entry.timestamp)}
    })
}

export const graphqlTweetService = async (params: any) => {
    const {lastMs} = params;
    const result = await client.query({
        query: gql`query {
                       tweetData (lastMs: ${lastMs})
                      {
                       sentiment,
                       text,
                       coin
                      }
                     }`
    });
    return result;
}

export const graphqlRedditService = async (params: any) => {
    const {coin} = params;
    const result = await client.query({
        query: gql`query {
                    redditData(textLike: "${coin}"){
                        text,
                        sentiment,
                        timestamp
                    }
                    }`
    });
    return result;
}
