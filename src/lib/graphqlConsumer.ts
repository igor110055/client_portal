import {
    ApolloClient,
    InMemoryCache,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://10.2.113.62:8080/graphql',
    cache: new InMemoryCache()
});

export const graphqlCandlestick = async (params: any) => {
    const {from, exchange, coin} = params;
    const result = await client.query({
            query: gql`
                  query 
                  {
                    exchangeDataCandlestick (from: ${from}, exchange: ${exchange}, coin:"${coin}")
                    {   
                        open,
                        close,
                        timestamp,
                        high,
                        low
                    }
                  }`
        })
}

