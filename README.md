# lesson1

## The Cube

Step 1:
The objective is to create a 5 x 5 cube with 0 numbers and show it in console (followed by a delimiter line), so that it looks like this:

0   0   0   0   0
0   0   0   0   0
0   0   0   0   0
0   0   0   0   0
0   0   0   0   0

----------------------------

Step 2:
The program should log this cube again every second. On each iteration one of randomly chosen 0-s should be replaced by 1. So that next to steps look like this


0   0   0   0   0
0   0   0   0   0
0   0   0   0   0
0   0   0   1   0
0   0   0   0   0

----------------------------

0   0   0   0   0
1   0   0   0   0
0   0   0   0   0
0   0   0   1   0
0   0   0   0   0

----------------------------

And so on...

Step 3:
Stop the iterations once all the 0s are replaced with 1s and log a text 'Congratulations! The process is complete'

Step 4:
Make the program customizable, so that it takes 3 number inputs (either variables initialized in the beginning or arguments of the function). First 2 numbers should represent the length and width of the cube, so if first argument is 4 and second is 12, then the cube should be of sizes 4 x 12. Third argument is the interval between iterations in milliseconds. So if third argument is 3000, then logging of the cube should be after 3 seconds.

!IMPORTANT: There are more than one approches to this problem

BONUS:
1. Add 2 extra inputs in addition to 3 inputs from step 4. Those should have string values that will replace 0 and 1. So if the 4th input is 's' and 5th input is 'M', the cube should look like this: 

s   s   s   s   s
M   s   s   s   s
s   s   s   s   s
s   s   s   M   s
s   s   s   s   s

------------------------------

2. When trying to find a 0, program does repetitve logic. Place add counter and increment it on every time logic was called. Show the result along with text from Step 3

Good luck! 
