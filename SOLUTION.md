# Your Solution Documentation

# Lead Management

Setup!

- Setup had issues with docker when run in windows. I have changed that a bit in docker-compose.
- to run the app

```sh
$ docker-compose up -d
```

# React App:

- all the code is in 'ui' folder.
- used Redux as a state management solution, which provide single source of truth solution for managing data.

# node app:

- all the code is in 'server' folder.

### Development Choices

- axios - easy to use, automatic transforms of JSON data, intercepting all http calls
- ant - design perspective , easy to use, decent theme
- Redux - as a state management solution, which provide single source of truth for managing data. Debugging the issues are quite easy with redux
- redux-thunk - Redux Thunk middleware allows you to write action creators that return a function instead of an action
- cors - making cross origin requests

### future improvements

- pagination
- lazy loading of records to improve performance and loading time
- test cases (didn't have time to finish with test cases)
