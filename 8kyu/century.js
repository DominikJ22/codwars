/*Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */

function century(year) {
    if(1600 <= year && 1699 >= year){
      return 17
    } else if (1700 <= year && 1799 >= year){
      return 18
    } else if (1900 <= year && 1999 >= year){
      return 19
    }else if (2000 <= year){
      return 20
    } else{
      return 1
    }
   }