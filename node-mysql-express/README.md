```npm i knex mysql express body-parser --save```

Application level Middleware
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
```var app = express()```


Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
```var router = express.Router()```


