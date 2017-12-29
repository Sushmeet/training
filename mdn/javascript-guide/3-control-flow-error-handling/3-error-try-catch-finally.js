/*
You can throw exceptions using the throw statement
and handle them using the try...catch statements.
*/

// throw 'Error2';   // String type
// throw 42;         // Number type
// throw true;       // Boolean type
// throw {toString: function() { return "I'm an object!"; } };

// Create an object type UserException
// function UserException(message) {
//     this.message = message;
//     this.name = 'UserException';
//   }
  
//   // Make the exception convert to a pretty string when used as a string 
//   //(e.g. by the error console)
//   UserException.prototype.toString = function() {
//     return this.name + ': "' + this.message + '"';
//   }
  
//   // Create an instance of the object type and throw it
//   throw new UserException('Value too high');

  // try catch 
  // if an expection is thrown then try or catch block will catch it.

  /*
The try...catch statement consists of a try block,
which contains one or more statements, and a catch
block, containing statements that specify what to do
if an exception is thrown in the try block. That is,
you want the try block to succeed, and if it does 
not succeed, you want control to pass to the catch 
block. If any statement within the try block 
(or in a function called from within the try block)
throws an exception, control immediately shifts to 
the catch block. If no exception is thrown in the 
try block, the catch block is skipped. The finally
block executes after the try and catch blocks execute but before the statements following the try...catch statement.
  */


// generic try catch example

const genericTryCatch = () => {
    try {
        throw 'OMG!!!';
       // console.log('try block');
    }
    catch(e) {
    //console.log('catch block')
    console.log('error', e);
    }
}

genericTryCatch();

// finally block

//If the finally block returns a value,
// this value becomes the return value 
//of the entire try-catch-finally production,
// regardless of any return statements in the
// try and catch blocks:
function f() {
    try {
      console.log(0);
      throw 'Bogus!!';
    } catch(e) {
      console.log(1);
      return true; // this return statement is suspended
                   // until finally block has completed
      console.log(2); // not reachable
    } finally {
      console.log(3);
      return false; // overwrites the previous "return"
      console.log(4); // not reachable
    }
    // "return false" is executed now  
    console.log(5); // not reachable
  }
  console.log(f()); // console 0, 1, 3; returns false

  /*
Overwriting of return values by the finally block
also applies to exceptions thrown or re-thrown 
inside of the catch block:
  */

  function f() {
    try {
      throw 'bogus';
    } catch(e) {
      console.log('caught inner "bogus"');
      throw e; // this throw statement is suspended until 
               // finally block has completed
    } finally {
      return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
  }
  
  try {
    f();
  } catch(e) {
    // this is never reached because the throw inside
    // the catch is overwritten
    // by the return in finally
    console.log('caught outer "bogus"');
  }
  
  // OUTPUT
  // caught inner "bogus"

  // using the custom Error 

  const custError = () => {
      try {
          throw Error('This was a custom error');
      }
      catch(e) {
          console.log('Error Name is ', e.name); // logs 'Error'
          console.log('Error message is ', e.message); // logs 'The message' or a JavaScript error message)
      }
  }

  custError();