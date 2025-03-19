# min_plane_to_destiny

Approach used: Greedy Algorithm

--------------------------------

Input:
An array fuelArray of size N, where each element represents the fuel available at that airport.

Output:
The minimum number of planes required to reach the last airport. If it’s not possible, return -1.

Steps:

Initialization:
  Set maxReach = fuelArray[0] (the farthest airport we can reach from the starting position).
  Set steps = 1 (we start by hiring the first plane).
  Set lastJump = fuelArray[0] (the farthest position we can reach with the current plane).

Iterate through the array:
  For each airport i from 1 to N-1:
  Check if the current airport is reachable:
  If i > maxReach, it means we cannot reach the current airport. Return -1.
  Update the farthest reachable airport:
  Set maxReach = max(maxReach, i + fuelArray[i]).

Check if we need to hire another plane:
  If i == lastJump and i != N-1, it means we need to hire another plane:
  Increment steps by 1.
  Set lastJump = maxReach.

Termination:
  After the loop, check if maxReach >= N-1 (i.e., we can reach the last airport):
  If yes, return steps.
  If no, return -1.
  
-----------------------------------------------------------------------------------

Complexity
  Time Complexity: O(n)
  Space complexity: O(1)
  
---------------------------

Note: We can execute with multiple approaches like brute force, DP etc. But greedy has the least time complexity in this case
