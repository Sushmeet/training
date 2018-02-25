const chai = require("chai");
const expect = require("chai").expect;
const sinon = require("sinon");
const spies = require("chai-spies");

const rewire = require('rewire');
const app = rewire('./app')

chai.use(spies);

// const db = require('./db');
// const dbMock = sinon.mock(db, 'db1');

describe("Spy tests", () => {
  describe("#Sinon", () => {
    it("should call the spy correctly", () => {
      const spy = sinon.spy(); // spy is an object, which can be called like a function.
      spy("Andrew", 25); // call the function right here.

      sinon.assert.calledWith(spy, "Andrew");
      sinon.assert.calledWithExactly(spy, "Andrew", 25);
    });

    it("should call save user with user object", () => {
        const db = {
            saveUser: sinon.spy()
        }
        app.__set__('db', db);
      const email = "sushi@gmail.com";
      const password = "sushi123";

      app.handleSignup(email, password);
      sinon.assert.calledWithExactly(db.saveUser,{email,password})
    });
  });
});

/*
   const someFunction = sinon.spy();
   const someFunc2 = chai.spy();

// sinon spy
someFunction();

// chai spy
someFunc2();

   // assert with sinon
    sinon.assert.calledOnce(someFunction);

   // assert with chai
   expect(someFunction.callCount).to.equal(1);
    // expect(spy.calledWithExactly('Andrew')).to.be.true;

   //assert with chai-spies
   expect(someFunc2).to.have.been.called();

*/
