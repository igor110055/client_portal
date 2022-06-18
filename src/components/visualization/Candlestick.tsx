/*global window:false */
/*eslint-disable no-magic-numbers */
import React from "react";
import { random, range, merge } from "lodash";
import { VictoryChart } from "victory-chart";
import { VictoryCandlestick } from "victory-candlestick";
import {VictoryAxis} from 'victory';

interface VictoryCandlestickDemoState {
    data: {
        x?: number;
        open?: number;
        close?: number;
        high?: number;
        low?: number;
        size?: number;
        fill?: string;
        opacity?: number;
    }[];
}

const getData = () => {
    const colors = [
        "violet",
        "cornflowerblue",
        "gold",
        "orange",
        "turquoise",
        "tomato",
        "greenyellow"
    ];
    return range(50).map(() => {
        return {
            x: random(600),
            open: random(600),
            close: random(600),
            high: random(450, 600),
            low: random(0, 150),
            size: random(15) + 3,
            fill: colors[random(0, 6)],
            opacity: random(0.3, 1)
        };
    });
};

const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
};

const style: { [key: string]: React.CSSProperties } = {
    parent: { border: "1px solid #ccc", margin: "2%", maxWidth: "40%" }
};

const oldData = [
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1863134,
        "close": 1861348,
        "timestamp": 1655574120000,
        "high": 1863134,
        "low": 1861348,
        "x": 1655574120000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1893716,
        "close": 1893313,
        "timestamp": 1655572140000,
        "high": 1893716,
        "low": 1893313,
        "x": 1655572140000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1885596,
        "close": 1885596,
        "timestamp": 1655571000000,
        "high": 1885596,
        "low": 1885596,
        "x": 1655571000000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1884900,
        "close": 1885250,
        "timestamp": 1655570940000,
        "high": 1885250,
        "low": 1884900,
        "x": 1655570940000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1902228,
        "close": 1902284,
        "timestamp": 1655570220000,
        "high": 1902609,
        "low": 1902228,
        "x": 1655570220000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1902959,
        "close": 1902228,
        "timestamp": 1655570160000,
        "high": 1904321,
        "low": 1902228,
        "x": 1655570160000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903291,
        "close": 1902959,
        "timestamp": 1655570100000,
        "high": 1903587,
        "low": 1902513,
        "x": 1655570100000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906295,
        "close": 1903562,
        "timestamp": 1655570040000,
        "high": 1906295,
        "low": 1903330,
        "x": 1655570040000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905920,
        "close": 1906296,
        "timestamp": 1655569980000,
        "high": 1906566,
        "low": 1904995,
        "x": 1655569980000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905408,
        "close": 1905920,
        "timestamp": 1655569920000,
        "high": 1906196,
        "low": 1904062,
        "x": 1655569920000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905024,
        "close": 1906596,
        "timestamp": 1655569860000,
        "high": 1907132,
        "low": 1905023,
        "x": 1655569860000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906655,
        "close": 1904103,
        "timestamp": 1655569800000,
        "high": 1907399,
        "low": 1903550,
        "x": 1655569800000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906529,
        "close": 1905566,
        "timestamp": 1655569740000,
        "high": 1906624,
        "low": 1905281,
        "x": 1655569740000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905721,
        "close": 1906530,
        "timestamp": 1655569680000,
        "high": 1906656,
        "low": 1905000,
        "x": 1655569680000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906537,
        "close": 1905721,
        "timestamp": 1655569620000,
        "high": 1907027,
        "low": 1905272,
        "x": 1655569620000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1908232,
        "close": 1906209,
        "timestamp": 1655569560000,
        "high": 1909562,
        "low": 1906208,
        "x": 1655569560000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1908502,
        "close": 1908100,
        "timestamp": 1655569500000,
        "high": 1908502,
        "low": 1906014,
        "x": 1655569500000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1904354,
        "close": 1908502,
        "timestamp": 1655569440000,
        "high": 1908616,
        "low": 1904348,
        "x": 1655569440000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1904320,
        "close": 1904723,
        "timestamp": 1655569380000,
        "high": 1904723,
        "low": 1903475,
        "x": 1655569380000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903328,
        "close": 1904423,
        "timestamp": 1655569320000,
        "high": 1904700,
        "low": 1902797,
        "x": 1655569320000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905184,
        "close": 1902815,
        "timestamp": 1655569260000,
        "high": 1905184,
        "low": 1902154,
        "x": 1655569260000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1900559,
        "close": 1900559,
        "timestamp": 1655568660000,
        "high": 1900559,
        "low": 1900559,
        "x": 1655568660000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1898309,
        "close": 1898362,
        "timestamp": 1655567580000,
        "high": 1899050,
        "low": 1896898,
        "x": 1655567580000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1900839,
        "close": 1898309,
        "timestamp": 1655567520000,
        "high": 1900839,
        "low": 1898309,
        "x": 1655567520000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1899472,
        "close": 1901054,
        "timestamp": 1655567460000,
        "high": 1901518,
        "low": 1896561,
        "x": 1655567460000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903327,
        "close": 1898983,
        "timestamp": 1655567400000,
        "high": 1903327,
        "low": 1897609,
        "x": 1655567400000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903588,
        "close": 1903325,
        "timestamp": 1655567340000,
        "high": 1904220,
        "low": 1902979,
        "x": 1655567340000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905913,
        "close": 1903588,
        "timestamp": 1655567280000,
        "high": 1906230,
        "low": 1903587,
        "x": 1655567280000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905325,
        "close": 1905531,
        "timestamp": 1655567220000,
        "high": 1905531,
        "low": 1904456,
        "x": 1655567220000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1904502,
        "close": 1905327,
        "timestamp": 1655567160000,
        "high": 1905327,
        "low": 1903586,
        "x": 1655567160000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903225,
        "close": 1904573,
        "timestamp": 1655567100000,
        "high": 1906309,
        "low": 1902552,
        "x": 1655567100000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903100,
        "close": 1903225,
        "timestamp": 1655567040000,
        "high": 1903225,
        "low": 1903000,
        "x": 1655567040000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1904546,
        "close": 1903100,
        "timestamp": 1655566980000,
        "high": 1904546,
        "low": 1903056,
        "x": 1655566980000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1902982,
        "close": 1904546,
        "timestamp": 1655566920000,
        "high": 1904547,
        "low": 1902548,
        "x": 1655566920000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1904480,
        "close": 1902981,
        "timestamp": 1655566860000,
        "high": 1904641,
        "low": 1901893,
        "x": 1655566860000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1907405,
        "close": 1904412,
        "timestamp": 1655566800000,
        "high": 1907690,
        "low": 1904000,
        "x": 1655566800000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1909586,
        "close": 1907405,
        "timestamp": 1655566740000,
        "high": 1910178,
        "low": 1907155,
        "x": 1655566740000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1908645,
        "close": 1909587,
        "timestamp": 1655566680000,
        "high": 1910782,
        "low": 1907734,
        "x": 1655566680000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906399,
        "close": 1908646,
        "timestamp": 1655566620000,
        "high": 1908646,
        "low": 1906399,
        "x": 1655566620000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1907206,
        "close": 1905758,
        "timestamp": 1655566560000,
        "high": 1907206,
        "low": 1905583,
        "x": 1655566560000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1907703,
        "close": 1907039,
        "timestamp": 1655566500000,
        "high": 1907704,
        "low": 1906933,
        "x": 1655566500000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1907109,
        "close": 1907703,
        "timestamp": 1655566440000,
        "high": 1907925,
        "low": 1906825,
        "x": 1655566440000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1910471,
        "close": 1906398,
        "timestamp": 1655566380000,
        "high": 1910471,
        "low": 1906208,
        "x": 1655566380000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1909499,
        "close": 1909899,
        "timestamp": 1655566320000,
        "high": 1909961,
        "low": 1908863,
        "x": 1655566320000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1910586,
        "close": 1909500,
        "timestamp": 1655566260000,
        "high": 1910586,
        "low": 1908600,
        "x": 1655566260000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1909681,
        "close": 1910587,
        "timestamp": 1655566200000,
        "high": 1911764,
        "low": 1909681,
        "x": 1655566200000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1908490,
        "close": 1909782,
        "timestamp": 1655566140000,
        "high": 1910048,
        "low": 1907671,
        "x": 1655566140000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1911433,
        "close": 1908490,
        "timestamp": 1655566080000,
        "high": 1911434,
        "low": 1908239,
        "x": 1655566080000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1911768,
        "close": 1910474,
        "timestamp": 1655566020000,
        "high": 1912091,
        "low": 1910474,
        "x": 1655566020000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1911461,
        "close": 1910988,
        "timestamp": 1655565960000,
        "high": 1912397,
        "low": 1909470,
        "x": 1655565960000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1908372,
        "close": 1911428,
        "timestamp": 1655565900000,
        "high": 1912350,
        "low": 1907900,
        "x": 1655565900000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906559,
        "close": 1908373,
        "timestamp": 1655565840000,
        "high": 1908500,
        "low": 1906559,
        "x": 1655565840000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905553,
        "close": 1906559,
        "timestamp": 1655565780000,
        "high": 1906625,
        "low": 1904770,
        "x": 1655565780000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905933,
        "close": 1905458,
        "timestamp": 1655565720000,
        "high": 1905933,
        "low": 1904749,
        "x": 1655565720000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1904861,
        "close": 1905998,
        "timestamp": 1655565660000,
        "high": 1905998,
        "low": 1903262,
        "x": 1655565660000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906759,
        "close": 1905733,
        "timestamp": 1655565600000,
        "high": 1906827,
        "low": 1903920,
        "x": 1655565600000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903552,
        "close": 1906609,
        "timestamp": 1655565540000,
        "high": 1909600,
        "low": 1903203,
        "x": 1655565540000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1902716,
        "close": 1904003,
        "timestamp": 1655565480000,
        "high": 1906365,
        "low": 1902716,
        "x": 1655565480000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1900733,
        "close": 1902716,
        "timestamp": 1655565420000,
        "high": 1904806,
        "low": 1900732,
        "x": 1655565420000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1900864,
        "close": 1900733,
        "timestamp": 1655565360000,
        "high": 1901782,
        "low": 1900091,
        "x": 1655565360000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1898214,
        "close": 1900759,
        "timestamp": 1655565300000,
        "high": 1900791,
        "low": 1895549,
        "x": 1655565300000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1899216,
        "close": 1898214,
        "timestamp": 1655565240000,
        "high": 1900207,
        "low": 1897189,
        "x": 1655565240000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1896909,
        "close": 1899462,
        "timestamp": 1655565180000,
        "high": 1900500,
        "low": 1896909,
        "x": 1655565180000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1902907,
        "close": 1897657,
        "timestamp": 1655565120000,
        "high": 1902999,
        "low": 1896168,
        "x": 1655565120000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903975,
        "close": 1903573,
        "timestamp": 1655565060000,
        "high": 1905300,
        "low": 1903530,
        "x": 1655565060000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905906,
        "close": 1903975,
        "timestamp": 1655565000000,
        "high": 1905906,
        "low": 1903852,
        "x": 1655565000000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906777,
        "close": 1905907,
        "timestamp": 1655564940000,
        "high": 1907245,
        "low": 1905500,
        "x": 1655564940000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1907048,
        "close": 1905659,
        "timestamp": 1655564880000,
        "high": 1907048,
        "low": 1904857,
        "x": 1655564880000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903483,
        "close": 1906303,
        "timestamp": 1655564820000,
        "high": 1906303,
        "low": 1903483,
        "x": 1655564820000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1903756,
        "close": 1903484,
        "timestamp": 1655564760000,
        "high": 1904563,
        "low": 1902928,
        "x": 1655564760000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905122,
        "close": 1903409,
        "timestamp": 1655564700000,
        "high": 1905122,
        "low": 1903409,
        "x": 1655564700000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906349,
        "close": 1906181,
        "timestamp": 1655564640000,
        "high": 1908223,
        "low": 1905412,
        "x": 1655564640000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1908143,
        "close": 1906443,
        "timestamp": 1655564580000,
        "high": 1908143,
        "low": 1906443,
        "x": 1655564580000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1906045,
        "close": 1906077,
        "timestamp": 1655564520000,
        "high": 1906902,
        "low": 1906045,
        "x": 1655564520000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1905375,
        "close": 1905686,
        "timestamp": 1655564460000,
        "high": 1908700,
        "low": 1905375,
        "x": 1655564460000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1907758,
        "close": 1907245,
        "timestamp": 1655564400000,
        "high": 1908986,
        "low": 1907245,
        "x": 1655564400000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1908830,
        "close": 1907758,
        "timestamp": 1655564340000,
        "high": 1908830,
        "low": 1907625,
        "x": 1655564340000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1908872,
        "close": 1909139,
        "timestamp": 1655564280000,
        "high": 1909139,
        "low": 1908871,
        "x": 1655564280000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1909500,
        "close": 1907550,
        "timestamp": 1655564220000,
        "high": 1909780,
        "low": 1907550,
        "x": 1655564220000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1907772,
        "close": 1909999,
        "timestamp": 1655564160000,
        "high": 1910208,
        "low": 1907772,
        "x": 1655564160000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1907389,
        "close": 1907772,
        "timestamp": 1655564100000,
        "high": 1909834,
        "low": 1907186,
        "x": 1655564100000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1909274,
        "close": 1909681,
        "timestamp": 1655564040000,
        "high": 1909989,
        "low": 1909274,
        "x": 1655564040000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1910040,
        "close": 1910040,
        "timestamp": 1655563980000,
        "high": 1910041,
        "low": 1910040,
        "x": 1655563980000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1910466,
        "close": 1910666,
        "timestamp": 1655563920000,
        "high": 1912215,
        "low": 1910466,
        "x": 1655563920000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1910514,
        "close": 1910558,
        "timestamp": 1655563860000,
        "high": 1913075,
        "low": 1910103,
        "x": 1655563860000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1914259,
        "close": 1910514,
        "timestamp": 1655563800000,
        "high": 1915707,
        "low": 1910514,
        "x": 1655563800000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1916866,
        "close": 1914341,
        "timestamp": 1655563740000,
        "high": 1916866,
        "low": 1912428,
        "x": 1655563740000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1917916,
        "close": 1917000,
        "timestamp": 1655563680000,
        "high": 1918166,
        "low": 1917000,
        "x": 1655563680000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1918734,
        "close": 1917221,
        "timestamp": 1655563620000,
        "high": 1919315,
        "low": 1917000,
        "x": 1655563620000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1921141,
        "close": 1921134,
        "timestamp": 1655563560000,
        "high": 1921416,
        "low": 1921134,
        "x": 1655563560000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1918127,
        "close": 1921200,
        "timestamp": 1655563500000,
        "high": 1921200,
        "low": 1917295,
        "x": 1655563500000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1918425,
        "close": 1918128,
        "timestamp": 1655563440000,
        "high": 1918590,
        "low": 1917137,
        "x": 1655563440000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1920023,
        "close": 1918423,
        "timestamp": 1655563380000,
        "high": 1920023,
        "low": 1918128,
        "x": 1655563380000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1921241,
        "close": 1920405,
        "timestamp": 1655563320000,
        "high": 1921241,
        "low": 1920405,
        "x": 1655563320000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1921556,
        "close": 1921556,
        "timestamp": 1655563260000,
        "high": 1921556,
        "low": 1921556,
        "x": 1655563260000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1919434,
        "close": 1919338,
        "timestamp": 1655558400000,
        "high": 1920389,
        "low": 1919338,
        "x": 1655558400000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1921289,
        "close": 1919523,
        "timestamp": 1655558340000,
        "high": 1923000,
        "low": 1919523,
        "x": 1655558340000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1919772,
        "close": 1921290,
        "timestamp": 1655558280000,
        "high": 1921638,
        "low": 1919752,
        "x": 1655558280000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1919583,
        "close": 1919771,
        "timestamp": 1655558220000,
        "high": 1920996,
        "low": 1919366,
        "x": 1655558220000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1922391,
        "close": 1919522,
        "timestamp": 1655558160000,
        "high": 1922391,
        "low": 1919522,
        "x": 1655558160000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1919241,
        "close": 1922584,
        "timestamp": 1655558100000,
        "high": 1923199,
        "low": 1918275,
        "x": 1655558100000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1915846,
        "close": 1919441,
        "timestamp": 1655558040000,
        "high": 1920374,
        "low": 1915846,
        "x": 1655558040000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1914612,
        "close": 1915541,
        "timestamp": 1655557980000,
        "high": 1917206,
        "low": 1913768,
        "x": 1655557980000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1939320,
        "close": 1939320,
        "timestamp": 1655551260000,
        "high": 1939320,
        "low": 1939320,
        "x": 1655551260000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1937984,
        "close": 1939320,
        "timestamp": 1655551200000,
        "high": 1939447,
        "low": 1937243,
        "x": 1655551200000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1937713,
        "close": 1938083,
        "timestamp": 1655551140000,
        "high": 1938918,
        "low": 1937262,
        "x": 1655551140000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1935188,
        "close": 1938107,
        "timestamp": 1655551080000,
        "high": 1939284,
        "low": 1933756,
        "x": 1655551080000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1934290,
        "close": 1934959,
        "timestamp": 1655551020000,
        "high": 1936618,
        "low": 1934290,
        "x": 1655551020000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1931864,
        "close": 1934677,
        "timestamp": 1655550960000,
        "high": 1935386,
        "low": 1931864,
        "x": 1655550960000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1931631,
        "close": 1931771,
        "timestamp": 1655550900000,
        "high": 1933233,
        "low": 1930812,
        "x": 1655550900000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1930075,
        "close": 1931246,
        "timestamp": 1655550840000,
        "high": 1932831,
        "low": 1928679,
        "x": 1655550840000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1928098,
        "close": 1930075,
        "timestamp": 1655550780000,
        "high": 1930873,
        "low": 1927859,
        "x": 1655550780000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1928440,
        "close": 1928038,
        "timestamp": 1655550720000,
        "high": 1930100,
        "low": 1927764,
        "x": 1655550720000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1924405,
        "close": 1928361,
        "timestamp": 1655550660000,
        "high": 1928361,
        "low": 1924405,
        "x": 1655550660000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1925246,
        "close": 1924402,
        "timestamp": 1655550600000,
        "high": 1926946,
        "low": 1923715,
        "x": 1655550600000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1928361,
        "close": 1925357,
        "timestamp": 1655550540000,
        "high": 1929652,
        "low": 1925100,
        "x": 1655550540000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1927482,
        "close": 1928878,
        "timestamp": 1655550480000,
        "high": 1929493,
        "low": 1926653,
        "x": 1655550480000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1929695,
        "close": 1927200,
        "timestamp": 1655550420000,
        "high": 1931059,
        "low": 1926179,
        "x": 1655550420000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1936055,
        "close": 1929695,
        "timestamp": 1655550360000,
        "high": 1936055,
        "low": 1927000,
        "x": 1655550360000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1937109,
        "close": 1936223,
        "timestamp": 1655550300000,
        "high": 1938180,
        "low": 1935898,
        "x": 1655550300000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1938496,
        "close": 1937111,
        "timestamp": 1655550240000,
        "high": 1938496,
        "low": 1936715,
        "x": 1655550240000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1937200,
        "close": 1937763,
        "timestamp": 1655550180000,
        "high": 1939459,
        "low": 1936284,
        "x": 1655550180000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1939500,
        "close": 1937168,
        "timestamp": 1655550120000,
        "high": 1939500,
        "low": 1937168,
        "x": 1655550120000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1940999,
        "close": 1939795,
        "timestamp": 1655550060000,
        "high": 1940999,
        "low": 1939141,
        "x": 1655550060000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1939533,
        "close": 1941000,
        "timestamp": 1655550000000,
        "high": 1941000,
        "low": 1939032,
        "x": 1655550000000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1940889,
        "close": 1940131,
        "timestamp": 1655549940000,
        "high": 1941239,
        "low": 1938500,
        "x": 1655549940000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1938698,
        "close": 1941324,
        "timestamp": 1655549880000,
        "high": 1942473,
        "low": 1936395,
        "x": 1655549880000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1941629,
        "close": 1938697,
        "timestamp": 1655549820000,
        "high": 1941629,
        "low": 1938697,
        "x": 1655549820000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1940734,
        "close": 1942780,
        "timestamp": 1655549760000,
        "high": 1944527,
        "low": 1940688,
        "x": 1655549760000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1939234,
        "close": 1940737,
        "timestamp": 1655549700000,
        "high": 1942671,
        "low": 1938453,
        "x": 1655549700000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1939234,
        "close": 1939234,
        "timestamp": 1655549640000,
        "high": 1939234,
        "low": 1939234,
        "x": 1655549640000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1937815,
        "close": 1938314,
        "timestamp": 1655548920000,
        "high": 1938314,
        "low": 1936682,
        "x": 1655548920000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1937325,
        "close": 1937461,
        "timestamp": 1655548860000,
        "high": 1938709,
        "low": 1937133,
        "x": 1655548860000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1938870,
        "close": 1937325,
        "timestamp": 1655548800000,
        "high": 1940357,
        "low": 1936116,
        "x": 1655548800000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1938300,
        "close": 1938870,
        "timestamp": 1655548740000,
        "high": 1941266,
        "low": 1938300,
        "x": 1655548740000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1938865,
        "close": 1938365,
        "timestamp": 1655548680000,
        "high": 1939945,
        "low": 1938166,
        "x": 1655548680000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1939516,
        "close": 1939638,
        "timestamp": 1655548620000,
        "high": 1942749,
        "low": 1938693,
        "x": 1655548620000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1939290,
        "close": 1939618,
        "timestamp": 1655548560000,
        "high": 1939618,
        "low": 1939265,
        "x": 1655548560000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 1950754,
        "close": 1950055,
        "timestamp": 1655548260000,
        "high": 1951196,
        "low": 1950055,
        "x": 1655548260000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 66666666,
        "close": 66666666,
        "timestamp": 1655537100000,
        "high": 66666666,
        "low": 66666666,
        "x": 1655537100000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2065933,
        "close": 2065933,
        "timestamp": 1655512860000,
        "high": 2065933,
        "low": 2065933,
        "x": 1655512860000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2067323,
        "close": 2066240,
        "timestamp": 1655512800000,
        "high": 2067350,
        "low": 2066212,
        "x": 1655512800000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2068849,
        "close": 2067715,
        "timestamp": 1655512740000,
        "high": 2068849,
        "low": 2066737,
        "x": 1655512740000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2067562,
        "close": 2068849,
        "timestamp": 1655512680000,
        "high": 2068849,
        "low": 2066316,
        "x": 1655512680000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2069900,
        "close": 2067900,
        "timestamp": 1655512620000,
        "high": 2069900,
        "low": 2067900,
        "x": 1655512620000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2071975,
        "close": 2070000,
        "timestamp": 1655512560000,
        "high": 2071975,
        "low": 2070000,
        "x": 1655512560000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2074172,
        "close": 2071974,
        "timestamp": 1655512500000,
        "high": 2074172,
        "low": 2071068,
        "x": 1655512500000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2076100,
        "close": 2074200,
        "timestamp": 1655512440000,
        "high": 2076100,
        "low": 2073999,
        "x": 1655512440000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2076971,
        "close": 2074759,
        "timestamp": 1655512380000,
        "high": 2077020,
        "low": 2074479,
        "x": 1655512380000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2076324,
        "close": 2076436,
        "timestamp": 1655512320000,
        "high": 2076584,
        "low": 2075438,
        "x": 1655512320000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2070875,
        "close": 2075998,
        "timestamp": 1655512260000,
        "high": 2076324,
        "low": 2070875,
        "x": 1655512260000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2069956,
        "close": 2070570,
        "timestamp": 1655512200000,
        "high": 2072805,
        "low": 2067799,
        "x": 1655512200000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2066916,
        "close": 2068541,
        "timestamp": 1655512140000,
        "high": 2070800,
        "low": 2066916,
        "x": 1655512140000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2066658,
        "close": 2066916,
        "timestamp": 1655512080000,
        "high": 2070243,
        "low": 2066658,
        "x": 1655512080000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2062736,
        "close": 2066547,
        "timestamp": 1655512020000,
        "high": 2066547,
        "low": 2060864,
        "x": 1655512020000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2063859,
        "close": 2062737,
        "timestamp": 1655511960000,
        "high": 2063862,
        "low": 2062591,
        "x": 1655511960000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2063063,
        "close": 2063859,
        "timestamp": 1655511900000,
        "high": 2064473,
        "low": 2063063,
        "x": 1655511900000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2062543,
        "close": 2063359,
        "timestamp": 1655511840000,
        "high": 2064330,
        "low": 2062543,
        "x": 1655511840000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2063000,
        "close": 2062928,
        "timestamp": 1655511780000,
        "high": 2063862,
        "low": 2062605,
        "x": 1655511780000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2064289,
        "close": 2062383,
        "timestamp": 1655511720000,
        "high": 2064495,
        "low": 2062362,
        "x": 1655511720000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2063965,
        "close": 2064395,
        "timestamp": 1655511660000,
        "high": 2064395,
        "low": 2062274,
        "x": 1655511660000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2066084,
        "close": 2064103,
        "timestamp": 1655511600000,
        "high": 2066084,
        "low": 2063572,
        "x": 1655511600000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2064341,
        "close": 2066109,
        "timestamp": 1655511540000,
        "high": 2066665,
        "low": 2064341,
        "x": 1655511540000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2062998,
        "close": 2064872,
        "timestamp": 1655511480000,
        "high": 2064872,
        "low": 2062998,
        "x": 1655511480000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2059928,
        "close": 2062255,
        "timestamp": 1655511420000,
        "high": 2063308,
        "low": 2059928,
        "x": 1655511420000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2059080,
        "close": 2059528,
        "timestamp": 1655511360000,
        "high": 2059645,
        "low": 2057450,
        "x": 1655511360000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2061933,
        "close": 2059864,
        "timestamp": 1655511300000,
        "high": 2064100,
        "low": 2059864,
        "x": 1655511300000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2063520,
        "close": 2061933,
        "timestamp": 1655511240000,
        "high": 2063520,
        "low": 2061429,
        "x": 1655511240000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2063623,
        "close": 2061921,
        "timestamp": 1655511180000,
        "high": 2063623,
        "low": 2061727,
        "x": 1655511180000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2063600,
        "close": 2064424,
        "timestamp": 1655511120000,
        "high": 2066133,
        "low": 2062104,
        "x": 1655511120000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2059362,
        "close": 2059362,
        "timestamp": 1655511060000,
        "high": 2059362,
        "low": 2059362,
        "x": 1655511060000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2052155,
        "close": 2052225,
        "timestamp": 1655508360000,
        "high": 2052225,
        "low": 2052155,
        "x": 1655508360000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2051905,
        "close": 2051339,
        "timestamp": 1655508300000,
        "high": 2051905,
        "low": 2051072,
        "x": 1655508300000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2050868,
        "close": 2051905,
        "timestamp": 1655508240000,
        "high": 2052277,
        "low": 2050868,
        "x": 1655508240000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2049915,
        "close": 2050868,
        "timestamp": 1655508180000,
        "high": 2050868,
        "low": 2049915,
        "x": 1655508180000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2051300,
        "close": 2049673,
        "timestamp": 1655508120000,
        "high": 2051300,
        "low": 2049673,
        "x": 1655508120000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2050714,
        "close": 2051148,
        "timestamp": 1655508060000,
        "high": 2051148,
        "low": 2049586,
        "x": 1655508060000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2051534,
        "close": 2050714,
        "timestamp": 1655508000000,
        "high": 2051534,
        "low": 2050159,
        "x": 1655508000000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2049818,
        "close": 2051595,
        "timestamp": 1655507940000,
        "high": 2051787,
        "low": 2049818,
        "x": 1655507940000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2048609,
        "close": 2049839,
        "timestamp": 1655507880000,
        "high": 2049839,
        "low": 2048388,
        "x": 1655507880000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2047054,
        "close": 2048609,
        "timestamp": 1655507820000,
        "high": 2050150,
        "low": 2047054,
        "x": 1655507820000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046000,
        "close": 2047054,
        "timestamp": 1655507760000,
        "high": 2047054,
        "low": 2045684,
        "x": 1655507760000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2047103,
        "close": 2046000,
        "timestamp": 1655507700000,
        "high": 2047762,
        "low": 2046000,
        "x": 1655507700000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2047608,
        "close": 2047103,
        "timestamp": 1655507640000,
        "high": 2047608,
        "low": 2047100,
        "x": 1655507640000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046915,
        "close": 2047608,
        "timestamp": 1655507580000,
        "high": 2047800,
        "low": 2046914,
        "x": 1655507580000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2045686,
        "close": 2046218,
        "timestamp": 1655507520000,
        "high": 2046318,
        "low": 2045686,
        "x": 1655507520000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046688,
        "close": 2045686,
        "timestamp": 1655507460000,
        "high": 2046889,
        "low": 2045686,
        "x": 1655507460000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046853,
        "close": 2046502,
        "timestamp": 1655507400000,
        "high": 2047457,
        "low": 2046502,
        "x": 1655507400000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046318,
        "close": 2046490,
        "timestamp": 1655507340000,
        "high": 2046490,
        "low": 2046318,
        "x": 1655507340000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046568,
        "close": 2046423,
        "timestamp": 1655507280000,
        "high": 2046568,
        "low": 2046422,
        "x": 1655507280000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2045812,
        "close": 2046568,
        "timestamp": 1655507220000,
        "high": 2046568,
        "low": 2045666,
        "x": 1655507220000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046857,
        "close": 2045813,
        "timestamp": 1655507160000,
        "high": 2046857,
        "low": 2045812,
        "x": 1655507160000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2047613,
        "close": 2046857,
        "timestamp": 1655507100000,
        "high": 2047613,
        "low": 2046856,
        "x": 1655507100000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046553,
        "close": 2046999,
        "timestamp": 1655507040000,
        "high": 2047000,
        "low": 2046216,
        "x": 1655507040000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2047358,
        "close": 2046609,
        "timestamp": 1655506980000,
        "high": 2047358,
        "low": 2046608,
        "x": 1655506980000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046586,
        "close": 2047512,
        "timestamp": 1655506920000,
        "high": 2047595,
        "low": 2046586,
        "x": 1655506920000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2045784,
        "close": 2046584,
        "timestamp": 1655506860000,
        "high": 2046584,
        "low": 2045784,
        "x": 1655506860000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2045043,
        "close": 2043000,
        "timestamp": 1655506800000,
        "high": 2045043,
        "low": 2043000,
        "x": 1655506800000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046045,
        "close": 2045118,
        "timestamp": 1655506740000,
        "high": 2046045,
        "low": 2044547,
        "x": 1655506740000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2047059,
        "close": 2046543,
        "timestamp": 1655506680000,
        "high": 2047059,
        "low": 2045871,
        "x": 1655506680000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2045664,
        "close": 2047009,
        "timestamp": 1655506620000,
        "high": 2047393,
        "low": 2045598,
        "x": 1655506620000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046129,
        "close": 2045871,
        "timestamp": 1655506560000,
        "high": 2046168,
        "low": 2045871,
        "x": 1655506560000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046884,
        "close": 2046143,
        "timestamp": 1655506500000,
        "high": 2046886,
        "low": 2045075,
        "x": 1655506500000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2048179,
        "close": 2046682,
        "timestamp": 1655506440000,
        "high": 2048179,
        "low": 2046064,
        "x": 1655506440000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2047363,
        "close": 2048186,
        "timestamp": 1655506380000,
        "high": 2048375,
        "low": 2047363,
        "x": 1655506380000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2047666,
        "close": 2047316,
        "timestamp": 1655506320000,
        "high": 2047666,
        "low": 2046127,
        "x": 1655506320000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2046759,
        "close": 2047666,
        "timestamp": 1655506260000,
        "high": 2047666,
        "low": 2046461,
        "x": 1655506260000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2042754,
        "close": 2040188,
        "timestamp": 1655505120000,
        "high": 2042754,
        "low": 2040188,
        "x": 1655505120000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2043781,
        "close": 2042249,
        "timestamp": 1655505060000,
        "high": 2043781,
        "low": 2042129,
        "x": 1655505060000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2057581,
        "close": 2058599,
        "timestamp": 1655503620000,
        "high": 2058599,
        "low": 2057581,
        "x": 1655503620000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2058661,
        "close": 2057903,
        "timestamp": 1655503560000,
        "high": 2058963,
        "low": 2057588,
        "x": 1655503560000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2058080,
        "close": 2058324,
        "timestamp": 1655503500000,
        "high": 2058699,
        "low": 2058000,
        "x": 1655503500000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2057830,
        "close": 2058080,
        "timestamp": 1655503440000,
        "high": 2058080,
        "low": 2057657,
        "x": 1655503440000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2057078,
        "close": 2059016,
        "timestamp": 1655503380000,
        "high": 2059016,
        "low": 2057078,
        "x": 1655503380000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2056734,
        "close": 2057050,
        "timestamp": 1655503320000,
        "high": 2057057,
        "low": 2056734,
        "x": 1655503320000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2055634,
        "close": 2056228,
        "timestamp": 1655503260000,
        "high": 2056811,
        "low": 2055634,
        "x": 1655503260000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2055416,
        "close": 2056025,
        "timestamp": 1655503200000,
        "high": 2056738,
        "low": 2055103,
        "x": 1655503200000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2055804,
        "close": 2055893,
        "timestamp": 1655503140000,
        "high": 21354125,
        "low": 2055593,
        "x": 1655503140000
    },
    {
        "__typename": "ExchangeDataCandlestick",
        "coin": "BTCUSDT",
        "exchange": "BINANCE",
        "open": 2055716,
        "close": 2055805,
        "timestamp": 1655503080000,
        "high": 2055805,
        "low": 2055716,
        "x": 1655503080000
    }
]
const data = oldData.map((d:any) => {return {...d, x: new Date(d.x).getTime() }})
export const VictoryCandlestickDemo = () => {

        return (
            <div>
                <VictoryChart
                    scale={{ x: "time" }}
                    domainPadding={{ x: [20, 50], y: [20,50] }}
                >
                    <VictoryAxis tickFormat={(t) => `${t.getTime()}`}/>
                    <VictoryAxis dependentAxis/>
                    <VictoryCandlestick
                        candleColors={{ positive: "#8BC34A", negative: "#C62828" }}
                        data={data}
                        size={10}
                    />
                </VictoryChart>
            </div>
        );

}