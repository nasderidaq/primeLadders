# Prime Ladders

Program to solve for the 2022-5-6 Riddler Classic found at [Can You Build The Longest Ladder?](https://fivethirtyeight.com/features/can-you-build-the-longest-ladder/).

Runnable playground [here](https://htmlpreview.github.io/?https://github.com/nasderidaq/primeLadders/blob/master/src/primeLadders.html) (use the console and the `window.getLongestLadder` exports).

## Problem

For the complete set of n-digit primes, find the longest possible optimal path (the graph's "diameter") between two of the primes while only changing 1 digit at a time.

e.g. For 2-digit primes, the maximum optimal path length is 4. One such path is `53 -> 13 -> 17 -> 97`.

## Strategy

The program is able to calculate answers in any base, and can allow for leading 0s if desired (e.g. treating "043" as a 3-digit prime).

## Results

| Digits | Length | Start Prime | End Prime | Possible Path |
|--------|--------|-------------|-----------|---------------|
|      2 |      4 |             |           |               |
|      3 |      7 |             |           |               |
|      4 |      9 |             |           |               |
|      5 |     11 |             |           |               |
|      6 |     13 |      440497 |    995833 |               |
