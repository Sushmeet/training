# State
> Imagine your app's state is represented by a plain old JS object. So for example a todo app
> could look something like this. So the state is basically a Model without any setters. This is so as to prevent any part of the code to change the state arbitarily.

`
{
    todos: [
        {
            text: "laundary",
            completed: true,
        },
        {
            text: "garbage",
            completed: true,
        },
    ]
    visibilityFilter: 'SHOW_COMPLETED'
}
`

# Redux Actions
To change something in a **State** you need to dispatch an Action. In redux actions are basically javascript objects

`
{type: "ADD_TODO", text: "Go do something"}
`

# Reducer 
Again reducers are basically just javascript functions. The function signature takes an 
action and a state, and returns the next state of the app.
