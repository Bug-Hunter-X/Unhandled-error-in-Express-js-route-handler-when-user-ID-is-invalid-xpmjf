# Unhandled error in Express.js route handler when user ID is invalid

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input. Specifically, it shows how a route handler can crash or return unexpected errors when the user ID passed in the URL is not a number.

## Bug

The `bug.js` file contains an Express.js route handler that retrieves a user by ID. It uses `parseInt()` to convert the ID to a number but lacks error handling if the ID is not a valid number.

## Solution

The `bugSolution.js` file fixes this issue by adding error handling using `isNaN()` to check whether the converted ID is a valid number. If it is not, the function returns a 400 error response.