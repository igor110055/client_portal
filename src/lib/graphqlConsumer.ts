import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://10.2.113.62:8080/graphql',
    cache: new InMemoryCache()
});

export const graphqlCandlestick = () => {
    const mockData = [
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1851957,
            "close": 1856243,
            "timestamp": 1655613600000,
            "high": 1856243,
            "low": 1850700,
            "x": 7
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1861362,
            "close": 1851958,
            "timestamp": 1655613300000,
            "high": 1861362,
            "low": 1851737,
            "x": 7
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1842515,
            "close": 1860734,
            "timestamp": 1655613000000,
            "high": 1860734,
            "low": 1836534,
            "x": 7
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1841512,
            "close": 1842757,
            "timestamp": 1655612700000,
            "high": 1846297,
            "low": 1841512,
            "x": 7
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1841350,
            "close": 1841591,
            "timestamp": 1655612400000,
            "high": 1846647,
            "low": 1840000,
            "x": 7
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1845125,
            "close": 1841668,
            "timestamp": 1655612100000,
            "high": 1847291,
            "low": 1840943,
            "x": 7
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1838100,
            "close": 1845434,
            "timestamp": 1655611800000,
            "high": 1847736,
            "low": 1838100,
            "x": 7
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1830023,
            "close": 1837891,
            "timestamp": 1655611500000,
            "high": 1837891,
            "low": 1826466,
            "x": 7
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1831109,
            "close": 1830023,
            "timestamp": 1655611200000,
            "high": 1833516,
            "low": 1827116,
            "x": 7
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1837981,
            "close": 1831009,
            "timestamp": 1655610900000,
            "high": 1837981,
            "low": 1826900,
            "x": 6
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1850329,
            "close": 1838150,
            "timestamp": 1655610600000,
            "high": 1851000,
            "low": 1835520,
            "x": 6
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1847303,
            "close": 1850329,
            "timestamp": 1655610300000,
            "high": 1850618,
            "low": 1845100,
            "x": 6
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1855184,
            "close": 1847303,
            "timestamp": 1655610000000,
            "high": 1855556,
            "low": 1845477,
            "x": 6
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1859929,
            "close": 1855184,
            "timestamp": 1655609700000,
            "high": 1862034,
            "low": 1855184,
            "x": 6
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1855297,
            "close": 1859929,
            "timestamp": 1655609400000,
            "high": 1861481,
            "low": 1854756,
            "x": 6
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1860000,
            "close": 1855499,
            "timestamp": 1655609100000,
            "high": 1862559,
            "low": 1854996,
            "x": 6
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1237481283,
            "close": 8123472334,
            "timestamp": 1655586900000,
            "high": 8123472334,
            "low": 1237481283,
            "x": 0
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1863134,
            "close": 1861348,
            "timestamp": 1655574000000,
            "high": 1863134,
            "low": 1861348,
            "x": 20
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1893716,
            "close": 1893313,
            "timestamp": 1655571900000,
            "high": 1893716,
            "low": 1893313,
            "x": 20
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1885596,
            "close": 1885596,
            "timestamp": 1655571000000,
            "high": 1885596,
            "low": 1885596,
            "x": 19
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1884900,
            "close": 1885250,
            "timestamp": 1655570700000,
            "high": 1885250,
            "low": 1884900,
            "x": 19
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1903291,
            "close": 1902284,
            "timestamp": 1655570100000,
            "high": 1904321,
            "low": 1902228,
            "x": 19
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1906655,
            "close": 1903562,
            "timestamp": 1655569800000,
            "high": 1907399,
            "low": 1903330,
            "x": 19
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1908502,
            "close": 1905566,
            "timestamp": 1655569500000,
            "high": 1909562,
            "low": 1905000,
            "x": 19
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1905184,
            "close": 1908502,
            "timestamp": 1655569200000,
            "high": 1908616,
            "low": 1902154,
            "x": 19
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1900559,
            "close": 1900559,
            "timestamp": 1655568600000,
            "high": 1900559,
            "low": 1900559,
            "x": 19
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1903327,
            "close": 1898362,
            "timestamp": 1655567400000,
            "high": 1903327,
            "low": 1896561,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1903225,
            "close": 1903325,
            "timestamp": 1655567100000,
            "high": 1906309,
            "low": 1902552,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1907405,
            "close": 1903225,
            "timestamp": 1655566800000,
            "high": 1907690,
            "low": 1901893,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1907703,
            "close": 1907405,
            "timestamp": 1655566500000,
            "high": 1910782,
            "low": 1905583,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1909681,
            "close": 1907703,
            "timestamp": 1655566200000,
            "high": 1911764,
            "low": 1906208,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1908372,
            "close": 1909782,
            "timestamp": 1655565900000,
            "high": 1912397,
            "low": 1907671,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1906759,
            "close": 1908373,
            "timestamp": 1655565600000,
            "high": 1908500,
            "low": 1903262,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1898214,
            "close": 1906609,
            "timestamp": 1655565300000,
            "high": 1909600,
            "low": 1895549,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1905906,
            "close": 1898214,
            "timestamp": 1655565000000,
            "high": 1905906,
            "low": 1896168,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1905122,
            "close": 1905907,
            "timestamp": 1655564700000,
            "high": 1907245,
            "low": 1902928,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1907758,
            "close": 1906181,
            "timestamp": 1655564400000,
            "high": 1908986,
            "low": 1905375,
            "x": 18
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1907389,
            "close": 1907758,
            "timestamp": 1655564100000,
            "high": 1910208,
            "low": 1907186,
            "x": 17
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1914259,
            "close": 1909681,
            "timestamp": 1655563800000,
            "high": 1915707,
            "low": 1909274,
            "x": 17
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1918127,
            "close": 1914341,
            "timestamp": 1655563500000,
            "high": 1921416,
            "low": 1912428,
            "x": 17
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1921556,
            "close": 1918128,
            "timestamp": 1655563200000,
            "high": 1921556,
            "low": 1917137,
            "x": 17
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1919434,
            "close": 1919338,
            "timestamp": 1655558400000,
            "high": 1920389,
            "low": 1919338,
            "x": 16
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1919241,
            "close": 1919523,
            "timestamp": 1655558100000,
            "high": 1923199,
            "low": 1918275,
            "x": 16
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1914612,
            "close": 1919441,
            "timestamp": 1655557800000,
            "high": 1920374,
            "low": 1913768,
            "x": 16
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1937984,
            "close": 1939320,
            "timestamp": 1655551200000,
            "high": 1939447,
            "low": 1937243,
            "x": 14
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1931631,
            "close": 1938083,
            "timestamp": 1655550900000,
            "high": 1939284,
            "low": 1930812,
            "x": 14
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1925246,
            "close": 1931246,
            "timestamp": 1655550600000,
            "high": 1932831,
            "low": 1923715,
            "x": 14
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1937109,
            "close": 1925357,
            "timestamp": 1655550300000,
            "high": 1938180,
            "low": 1925100,
            "x": 14
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1939533,
            "close": 1937111,
            "timestamp": 1655550000000,
            "high": 1941000,
            "low": 1936284,
            "x": 14
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1939234,
            "close": 1940131,
            "timestamp": 1655549700000,
            "high": 1944527,
            "low": 1936395,
            "x": 13
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1939234,
            "close": 1939234,
            "timestamp": 1655549400000,
            "high": 1939234,
            "low": 1939234,
            "x": 13
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1938870,
            "close": 1938314,
            "timestamp": 1655548800000,
            "high": 1940357,
            "low": 1936116,
            "x": 13
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1939290,
            "close": 1938870,
            "timestamp": 1655548500000,
            "high": 1942749,
            "low": 1938166,
            "x": 13
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 1950754,
            "close": 1950055,
            "timestamp": 1655548200000,
            "high": 1951196,
            "low": 1950055,
            "x": 13
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 66666666,
            "close": 66666666,
            "timestamp": 1655537100000,
            "high": 66666666,
            "low": 66666666,
            "x": 10
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2067323,
            "close": 2065933,
            "timestamp": 1655512800000,
            "high": 2067350,
            "low": 2065933,
            "x": 3
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2074172,
            "close": 2067715,
            "timestamp": 1655512500000,
            "high": 2074172,
            "low": 2066316,
            "x": 3
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2069956,
            "close": 2074200,
            "timestamp": 1655512200000,
            "high": 2077020,
            "low": 2067799,
            "x": 3
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2063063,
            "close": 2068541,
            "timestamp": 1655511900000,
            "high": 2070800,
            "low": 2060864,
            "x": 3
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2066084,
            "close": 2063359,
            "timestamp": 1655511600000,
            "high": 2066084,
            "low": 2062274,
            "x": 3
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2061933,
            "close": 2066109,
            "timestamp": 1655511300000,
            "high": 2066665,
            "low": 2057450,
            "x": 3
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2059362,
            "close": 2061933,
            "timestamp": 1655511000000,
            "high": 2066133,
            "low": 2059362,
            "x": 3
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2051905,
            "close": 2052225,
            "timestamp": 1655508300000,
            "high": 2052225,
            "low": 2051072,
            "x": 2
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2051534,
            "close": 2051905,
            "timestamp": 1655508000000,
            "high": 2052277,
            "low": 2049586,
            "x": 2
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2047103,
            "close": 2051595,
            "timestamp": 1655507700000,
            "high": 2051787,
            "low": 2045684,
            "x": 2
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2046853,
            "close": 2047103,
            "timestamp": 1655507400000,
            "high": 2047800,
            "low": 2045686,
            "x": 2
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2047613,
            "close": 2046490,
            "timestamp": 1655507100000,
            "high": 2047613,
            "low": 2045666,
            "x": 2
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2045043,
            "close": 2046999,
            "timestamp": 1655506800000,
            "high": 2047595,
            "low": 2043000,
            "x": 2
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2046884,
            "close": 2045118,
            "timestamp": 1655506500000,
            "high": 2047393,
            "low": 2044547,
            "x": 1
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2046759,
            "close": 2046682,
            "timestamp": 1655506200000,
            "high": 2048375,
            "low": 2046064,
            "x": 1
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2043781,
            "close": 2040188,
            "timestamp": 1655505000000,
            "high": 2043781,
            "low": 2040188,
            "x": 1
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2058080,
            "close": 2058599,
            "timestamp": 1655503500000,
            "high": 2058963,
            "low": 2057581,
            "x": 1
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2055416,
            "close": 2058080,
            "timestamp": 1655503200000,
            "high": 2059016,
            "low": 2055103,
            "x": 1
        },
        {
            "__typename": "ExchangeDataCandlestick",
            "open": 2055716,
            "close": 2055893,
            "timestamp": 1655502900000,
            "high": 21354125,
            "low": 2055593,
            "x": 0
        }
    ]
    // const result = await client.query({
    //     query: gql`
    //               query
    //               {
    //                 exchangeDataCandlestick (from: 1655596140, exchange: Binance, coin:"BTCUSDT")
    //                 {
    //                     open,
    //                     close,
    //                     timestamp,
    //                     high,
    //                     low
    //                 }
    //               }`
    // })
    // return result.data.exchangeDataCandlestick.map((entry: any) => {
    //     return {...entry, x: new Date(entry.timestamp * 1000)}
    // })
    const formattedData = mockData.map((entry: any) => {
        return {...entry, x: new Date(entry.timestamp * 1000)}
    })
    return formattedData;
}

export const graphqlTweetService = async () => {
    const lastMs = 6000000000;
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
    console.log(result);
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
