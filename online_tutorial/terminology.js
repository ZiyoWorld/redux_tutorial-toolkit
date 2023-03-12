//! Actions
// An action is a plain JavaScript object that has a type field. You can think of an
// action as an event that describes something that happened in the application.
// const addTodoAction = {
//   type: 'todos/todoAdded',
//   payload: 'Buy milk'
// }

//! Action Creators
// An action creator is a function that creates and returns an action object. We typically
//  use these so we don't have to write the action object by hand every time:

// const addTodo = (text) => {
//   return {
//     type: "todos/todoAdded",
//     payload: text,
//   };
// };

//! Reducers
// A reducer is a function that receives the current state and an action object, decides how to update
//  the state if necessary, and returns the new state: (state, action) => newState. You can think of
// a reducer as an event listener which handles events based on the received action (event) type.
// const initialState = { value: 0 };

// function counterReducer(state = initialState, action) {
//   if (action.type === "counter/increment") {
//     return {
//       ...state,
//       value: state.value + 1,
//     };
//   }
//   return state;
// }

//! Array.Reduce()
// const numbers = [2, 5, 8]

// const addNumbers = (previousResult, currentItem) => {
//   console.log({ previousResult, currentItem })
//   return previousResult + currentItem
// }

// const initialValue = 0

// const total = numbers.reduce(addNumbers, initialValue)
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
//  {previousResult: 7, currentItem: 8}

// console.log(total)
// 15

//! Store
// The current Redux application state lives in an object called the store .

// The store is created by passing in a reducer, and has a method called getState that returns the current state value:
// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({ reducer: counterReducer })

// console.log(store.getState())
//  {value: 0}

//! Dispatch
// The Redux store has a method called dispatch. The only way to update the state is to call
// store.dispatch() and pass in an action object. The store will run its reducer function
// and save the new state value inside, and we can call getState() to retrieve the updated value:
// store.dispatch({ type: 'counter/increment' })

// console.log(store.getState())
// {value: 1}
// You can think of dispatching actions as "triggering an event" in the application.
// Something happened, and we want the store to know about it. Reducers act like event
// listeners, and when they hear an action they are interested in, they update the state in response.
// We typically call action creators to dispatch the right action:
// const increment = () => {
//   return {
//     type: "counter/increment",
//   };
// };

// store.dispatch(increment());

// console.log(store.getState());
// {value: 2}

//! Selectors
// Selectors are functions that know how to extract specific pieces of information from a store state
// value. As an application grows bigger,
//  this can help avoid repeating logic as different parts of the app need to read the same data:
// const selectCounterValue = state => state.value

// const currentValue = selectCounterValue(store.getState())
// console.log(currentValue)
// 2

// SUMMARY
// Redux is a library for managing global application state
// Redux is typically used with the React-Redux library for integrating Redux and React together
// Redux Toolkit is the recommended way to write Redux logic
// Redux uses a "one-way data flow" app structure
// State describes the condition of the app at a point in time, and UI renders based on that state
// When something happens in the app:
// The UI dispatches an action
// The store runs the reducers, and the state is updated based on what occurred
// The store notifies the UI that the state has changed
// The UI re-renders based on the new state
// Redux uses several types of code
// Actions are plain objects with a type field, and describe "what happened" in the app
// Reducers are functions that calculate a new state value based on previous state + an action
// A Redux store runs the root reducer whenever an action is dispatched
