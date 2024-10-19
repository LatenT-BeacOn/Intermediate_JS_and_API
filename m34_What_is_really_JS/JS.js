//What is really JavaScript??
//is Highly abstracted programming language,
//1.JIT(JUSt-IN-TIME)(interpretation) language; 
//2.compiled language;
//3.Multi paradigm programming language;
// 4.proto-type based programming language;
//5.dynamically programming language; 
/*
An abstraction is a way of 
*Hiding implementation details;
*Showing only the functionality to users


Hing Abstraction in JavaScript:
*we don't have to handle resource management ;
*we don't have to handle garbage collection ;
*reduce details so that developers can focus on logic better;
*improves understandability as well as of the code;

*/


/* V8 
What is V8??

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others.


*/

/* 

Execution context;
*An environment context a piece of JS code gets Executed;
*Variable parameter and other information related to the pice of code get stored in the execution context ;

two Kinds of Execution context in JavaScript :

*Global Execution context;(
        whenever The JavaScript engine receives a script file , it first creates a default Execution contest known as the Global Execution Context(GEC);

               *GEC is the base/default Execution context;
               *all javaScript code that is not inside of a function gets executed;
               *For every JavaScript file , there can only be one GEC;



)

*Function Execution  context(

        Whenever a function is called the JavaScript Engine creates a different types of Execution Context Known as a function Execution Context;

            *Every time a Function os called a New Execution Context is Created for that function 
            
            *Each Function has its Own Execution Context;

            *Since every Function call gets its own FEC, there can be more than FEC in the time of a Script;


)


*/






