micro task queue

So lets take a look at these 3 statements 
console.log('hello')
SetTimeout()
Promise.resolve()

what is the order in which we will print these things out. and why

who schedules what. 
what is the difference between setTimeout() and Promises queue
are they the same queues



# Javascript is not enough
Javascript is not enough. we need new pieces 
Core Javascript Engine has
1. Thread of Execution
2. Memory/Variable Environment
3. Call Stack


We need to add some components. 
- Web Browswer APIS/Node background APIs
- Promises
- Event Loop, Callback/Task queue and micro task queue. 


# Rules for the execution of asynchronously delayed code
1. Promise deferred functions are held in a micro-task queue
2. Callback Functions are held in a task queue
3. Priotize functions in the microtask queue over the Callback queue

Add funtion to the Call Stack(i.e. run the function) when:
1. Call stack is empty and all global code run(Have the Event Loop check this condition)
 

 you run a function by putting it on the callstack 


 ES5 
 Call Stack is where a function is run.
 Callback Queue, is where a function is waiting to be put on the callstack. But u have to wait for the callstack to be empty...


# Promises
then method and functionality to call on completion.
1. Any code we want to run on the returned data must also be saved on the promise object
2. This can be added by using .then method to the hidden property 'onFulfilment'
3. Promise Objects will automaticaly trigger the attached functions to run (with it's input being the returned data)



# Event Loop
Event loop is executed in the following order
1. There are 2 task queues in the Javascript Engine
    - Macrotask queue 
    - Microtask queue
2. The entire script is initially executed as a macro task.
3. During the execution the syncrhonization code executes directly
4. The Macrotask enters the macrotask queue
5. The Microtasks  enters the microtask queue
6. When the current macro task is completed, the microtask queue is checked and all the 
microtasks are executed in turn
7. 

