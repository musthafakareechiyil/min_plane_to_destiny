const minPlanesToDestination = (fuelArray) => {
    const n = fuelArray.length;
    if (n === 0) return -1; // Edge case: no airports

    let maxReach = fuelArray[0]; // Farthest reachable airport
    let steps = 1; // Number of planes hired
    let lastJump = fuelArray[0]; // Farthest position reached in the current jump

    for (let i = 1; i < n; i++) {
        // If we can't reach the current airport, return -1
        if (i > maxReach) return -1;

        // Update maxReach if the current airport allows a farther reach
        maxReach = Math.max(maxReach, i + fuelArray[i]);

        // If we reach the last jump, take another plane
        if (i === lastJump && i !== n - 1) {
            steps++;
            lastJump = maxReach;
        }
    }

    // If maxReach is at least the last airport, return steps
    return maxReach >= n - 1 ? steps : -1;
}

const example1 = [2, 1, 2, 3, 1];
console.log(minPlanesToDestination(example1)); // Output: 2

const example2 = [1, 6, 3, 4, 4, 0, 0, 0, 1, 0];
console.log(minPlanesToDestination(example2)); // Output: 4

const example3 = [1, 0, 2, 0, 1];
console.log(minPlanesToDestination(example3)); // Output: -1

// Explanation added in readme
