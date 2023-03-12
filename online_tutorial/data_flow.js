// WHAT YOU'LL LEARN
// How to add "slices" of reducer logic to the Redux store with createSlice
// Reading Redux data in components with the useSelector hook
// Dispatching actions in components with the useDispatch hook

// delete and update
// SUMMARY
// Any React component can use data from the Redux store as needed
// Any component can read any data that is in the Redux store
// Multiple components can read the same data, even at the same time
// Components should extract the smallest amount of data they need to render themselves
// Components can combine values from props, state, and the Redux store to determine what UI they need to render. They can read multiple pieces of data from the store, and reshape the data as needed for display.
// Any component can dispatch actions to cause state updates
// Redux action creators can prepare action objects with the right contents
// createSlice and createAction can accept a "prepare callback" that returns the action payload
// Unique IDs and other random values should be put in the action, not calculated in the reducer
// Reducers should contain the actual state update logic
// Reducers can contain whatever logic is needed to calculate the next state
// Action objects should contain just enough info to describe what happened
