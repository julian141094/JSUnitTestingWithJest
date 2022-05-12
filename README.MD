# Hi, this is a simple test of a litle code.

## To excecute all test, run in a terminal

```
npm test
```

or

```
npm run test
```

## To see all test, please go to ./src/**test**/

```
cd src/__test__/
```

## Run only a test

Check if you have Jest at SO, if you don't have this

```
sudo npm install -g jest
```

next run

```
jest route_to_file
```

for example:

```
jest src/__test__/index.test.js
```

## Watch

put on scrips at package.json

"test:watch": "jest --watch"

to create a watch and see all testing work

to run the watch:

```
npm run test:watch
```

## Coverage

To see all progress building the unit test of all project run:

```
jest --coverage
```

next, go to coverage file and open index.html on lcov-report file
