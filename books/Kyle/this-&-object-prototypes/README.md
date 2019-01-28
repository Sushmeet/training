# H1 Different types of binding
1. Default Binding
    when the call site is the global scope, this binding will work only if not in strict mode
2. Implicity Binding
    this value for a functions is determined by who is calling the function. or the call-Site of the function.
    ob1.obj2.foo() the call site is obj2 so the this binding is that of obj2
    implicit binding can be lost in call back functions and it will go to default binding automatically.
3. Explicit Binding 
    use call and apply methods on a function and pass in the obj which is to be used as this eg fun.call(obj)
4. Hard Binding
5. New Binding
    By calling a function foo() with new in front of
    we have constructed a new object and can set that new object as the this for the call. So new is the final way a function call's this can be bound.

