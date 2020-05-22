# About the Typescript node package
Node.js is an engine that runs Javascript and not Typescript. The node Typescript package allows you to transpile your .ts files to .js scripts. Babel can also be used to transpile Typescript, however the market standard is to use the official Microsoft package.
Inside our package.json we will put a script called tsc:


# Install tsconfig
```
npm install typescript -s  // install typsecript compiler. 
npm run tsc -- --init // define a script tsc which is tsc
```

# Express types.
Express and Typescript packages are independent. The consequence of this is that Typescript does not “know” types of Express classes. There is a specific npm package for the Typescript to recognize the Express types.