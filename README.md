# Prime Ladders

Program to solve for the 2022-5-6 Riddler Classic found at [Can You Build The Longest Ladder?](https://fivethirtyeight.com/features/can-you-build-the-longest-ladder/).

Runnable playground [here](https://htmlpreview.github.io/?https://github.com/nasderidaq/primeLadders/blob/master/src/primeLadders.html) (use the console and the `window.getLongestLadder` exports).

## Problem

For the complete set of n-digit primes, find the longest possible optimal path (the graph's "diameter") between two of the primes while only changing 1 digit at a time.

e.g. For 2-digit primes, the maximum optimal path length is 4. One such path is `53 -> 13 -> 17 -> 97`.

## Strategy

Generation of primes is done using a simple [sieve](https://en.wikipedia.org/wiki/Generation_of_primes#Prime_sieves) up to the largest value in the n-digit range. Once generated, the algorithm iterates over every prime in the range and tries mutating each digit to each possible value to see if a valid prime is created. Each valid resulting prime is then stored in a list associated with that prime, which logically forms an unweighted and undirected graph connecting the primes.

The determination of the [diameter](https://mathworld.wolfram.com/GraphDiameter.html) is done by once again visiting each prime in the range, and then doing a breadth-first enumeration of all accessible primes. The number of steps taken in this search is the distance to the fartherst number from the starting prime.

The program is able to calculate answers in any base, and can allow for leading 0s if desired (e.g. treating "043" as a 3-digit prime).

## Results

| Digits | Length | Start Prime | End Prime | Possible Path                                                                                          |
|--------|--------|-------------|-----------|--------------------------------------------------------------------------------------------------------|
|      2 |      4 |          23 |        31 |                                                                                                                                               *2*3, **7***3*, *7***1**, **3**1 |
|      2 |      4 |          23 |        61 |                                                                                                                                               *2*3, **7***3*, *7***1**, **6**1 |
|      2 |      4 |          23 |        37 |                                                                                                                                               *2*3, **4***3*, *4***7**, **3**7 |
|      2 |      4 |          23 |        67 |                                                                                                                                               *2*3, **4***3*, *4***7**, **6**7 |
|      2 |      4 |          23 |        97 |                                                                                                                                               *2*3, **4***3*, *4***7**, **9**7 |
|      2 |      4 |          29 |        41 |                                                                                                                                               *2*9, **7***9*, *7***1**, **4**1 |
|      2 |      4 |          29 |        47 |                                                                                                                                               *2*9, **1***9*, *1***7**, **4**7 |
|      2 |      4 |          29 |        31 |                                                                                                                                               *2*9, **7***9*, *7***1**, **3**1 |
|      2 |      4 |          29 |        61 |                                                                                                                                               *2*9, **7***9*, *7***1**, **6**1 |
|      2 |      4 |          29 |        37 |                                                                                                                                               *2*9, **1***9*, *1***7**, **3**7 |
|      2 |      4 |          29 |        67 |                                                                                                                                               *2*9, **1***9*, *1***7**, **6**7 |
|      2 |      4 |          29 |        97 |                                                                                                                                               *2*9, **1***9*, *1***7**, **9**7 |
|      2 |      4 |          31 |        53 |                                                                                                                                               *3*1, **7***1*, *7***3**, **5**3 |
|      2 |      4 |          31 |        83 |                                                                                                                                               *3*1, **7***1*, *7***3**, **8**3 |
|      2 |      4 |          31 |        59 |                                                                                                                                               *3*1, **7***1*, *7***9**, **5**9 |
|      2 |      4 |          31 |        89 |                                                                                                                                               *3*1, **7***1*, *7***9**, **8**9 |
|      2 |      4 |          37 |        73 |                                                                                                                                               *3*7, **4***7*, *4***3**, **7**3 |
|      2 |      4 |          37 |        79 |                                                                                                                                               *3*7, **1***7*, *1***9**, **7**9 |
|      2 |      4 |          37 |        53 |                                                                                                                                               *3*7, **4***7*, *4***3**, **5**3 |
|      2 |      4 |          37 |        83 |                                                                                                                                               *3*7, **4***7*, *4***3**, **8**3 |
|      2 |      4 |          37 |        59 |                                                                                                                                               *3*7, **1***7*, *1***9**, **5**9 |
|      2 |      4 |          37 |        89 |                                                                                                                                               *3*7, **1***7*, *1***9**, **8**9 |
|      2 |      4 |          41 |        59 |                                                                                                                                               *4*1, **7***1*, *7***9**, **5**9 |
|      2 |      4 |          41 |        89 |                                                                                                                                               *4*1, **7***1*, *7***9**, **8**9 |
|      2 |      4 |          47 |        79 |                                                                                                                                               *4*7, **1***7*, *1***9**, **7**9 |
|      2 |      4 |          47 |        59 |                                                                                                                                               *4*7, **1***7*, *1***9**, **5**9 |
|      2 |      4 |          47 |        89 |                                                                                                                                               *4*7, **1***7*, *1***9**, **8**9 |
|      2 |      4 |          53 |        61 |                                                                                                                                               *5*3, **7***3*, *7***1**, **6**1 |
|      2 |      4 |          53 |        67 |                                                                                                                                               *5*3, **4***3*, *4***7**, **6**7 |
|      2 |      4 |          53 |        97 |                                                                                                                                               *5*3, **4***3*, *4***7**, **9**7 |
|      2 |      4 |          59 |        61 |                                                                                                                                               *5*9, **7***9*, *7***1**, **6**1 |
|      2 |      4 |          59 |        67 |                                                                                                                                               *5*9, **1***9*, *1***7**, **6**7 |
|      2 |      4 |          59 |        97 |                                                                                                                                               *5*9, **1***9*, *1***7**, **9**7 |
|      2 |      4 |          61 |        83 |                                                                                                                                               *6*1, **7***1*, *7***3**, **8**3 |
|      2 |      4 |          61 |        89 |                                                                                                                                               *6*1, **7***1*, *7***9**, **8**9 |
|      2 |      4 |          67 |        73 |                                                                                                                                               *6*7, **4***7*, *4***3**, **7**3 |
|      2 |      4 |          67 |        79 |                                                                                                                                               *6*7, **1***7*, *1***9**, **7**9 |
|      2 |      4 |          67 |        83 |                                                                                                                                               *6*7, **4***7*, *4***3**, **8**3 |
|      2 |      4 |          67 |        89 |                                                                                                                                               *6*7, **1***7*, *1***9**, **8**9 |
|      2 |      4 |          71 |        97 |                                                                                                                                               *7*1, **6***1*, *6***7**, **9**7 |
|      2 |      4 |          73 |        97 |                                                                                                                                               *7*3, **4***3*, *4***7**, **9**7 |
|      2 |      4 |          79 |        97 |                                                                                                                                               *7*9, **1***9*, *1***7**, **9**7 |
|      2 |      4 |          83 |        97 |                                                                                                                                               *8*3, **4***3*, *4***7**, **9**7 |
|      2 |      4 |          89 |        97 |                                                                                                                                               *8*9, **1***9*, *1***7**, **9**7 |
|      3 |      7 |         389 |       761 |                                                                                                          3*8*9, *3***7**9, **4***7*9, 4**0***9*, *4*0**1**, **7***0*1, 7**6**1 |
|      4 |      9 |        2441 |      9199 |                                                                           2*4*41, 2**7**4*1*, 27*4***9**, 2*7***2**9, *2***1**29, **7**1*2*9, *7*1**0**9, **9**1*0*9, 91**9**9 |
|      4 |      9 |        4391 |      6983 |                                                                           *4*391, **9***3*91, 9**4***9*1, 94**3***1*, 9*4*3**3**, 9**8***3*3, *9*8**8**3, **6***8*83, 6**9**83 |
|      4 |      9 |        4651 |      6983 |                                                                           *4*651, **5***6*51, *5***8**51, **3**85*1*, 38*5***3**, *3*8**6**3, **6**8*6*3, 6*8***8**3, 6**9**83 |
|      4 |      9 |        6983 |      8951 |                                                                           6*9*83, *6***8**83, **9***8*83, 9**2**8*3*, 92*8***1**, 9*2***4**1, *9***9**41, **8**9*4*1, 89**5**1 |
|      5 |     11 |       88259 |     99721 |                                        *8*8259, **7***8*259, *7***6**259, **9**62*5*9, 96*2***6**9, 96**4**6*9*, 96*4*6**1**, 9*6***6**61, 9**9***6*61, 99**7***6*1, 997**2**1 |
|      6 |     13 |      440497 |    995833 | 4*4*0497, 4**1**04*9*7, 41*0*4**7**7, 41**5**4*7*7, *4*154**4**7, **2***1*5447, *2***3**5447, **9**3544*7*, 935*4*4**3**, 9*3*5**8**43, 9**0**58*4*3, 9*0*58**3**3, 9**9**5833 |
