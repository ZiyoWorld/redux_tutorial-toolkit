// What Does the Redux Core Do?
// The Redux core is a very small and deliberately unopinionated library. It provides a few small API primitives:

// createStore to actually create a Redux store
// combineReducers to combine multiple slice reducers into a single larger reducer
// applyMiddleware to combine multiple middleware into a store enhancer
// compose to combine multiple store enhancers into a single store enhancer
// We specifically designed Redux Toolkit to solve those problems!

// Redux Toolkit simplifies store setup down to a single clear function call, while retaining the ability to fully configure the store's options if you need to
// Redux Toolkit eliminates accidental mutations, which have always been the #1 cause of Redux bugs
// Redux Toolkit eliminates the need to write any action creators or action types by hand
// Redux Toolkit eliminates the need to write manual and error-prone immutable update logic
// Redux Toolkit makes it easy to write a Redux feature's code in one file, instead of spreading it across multiple separate files
// Redux Toolkit offers excellent TS support, with APIs that are designed to give you excellent type safety and minimize the number of types you have to define in your code
// RTK Query can eliminate the need to write any thunks, reducers, action creators, or effect hooks to manage fetching data and tracking loading state

// Table of Contents
// Ecosystem
// Table of Contents
// Library Integration and Bindings 
// Reducers
// Reducer Combination
// Reducer Composition
// Higher-Order Reducers
// Actions
// Utilities
// Store
// Change Subscriptions
// Batching
// Persistence
// Immutable Data
// Data Structures
// Immutable Update Utilities
// Immutable/Redux Interop
// Side Effects
// Widely Used
// Promises
// Middleware
// Networks and Sockets
// Async Behavior
// Analytics
// Entities and Collections
// Component State and Encapsulation
// Dev Tools
// Debuggers and Viewers
// DevTools Monitors
// Logging
// Mutation Detection
// Testing
// Routing
// Forms
// Higher-Level Abstractions
// Community Conventions
