# Semantic Weapons
## WebApp
### Basic Usage
Move to your project root folder and run the server
```bash
$ cd webapp_boilerplate
$ yarn start
```
You will see something like:
```bash
yarn start v0.23.2
$ yarn dev:start 
yarn dev:start v0.23.2
$ nodemon --ignore lib --exec babel-node src/server 
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `babel-node src/server`
Server running on port 3030 (development).
```
point your web browser to [localhost:3030](http://localhost:3030) to see the website.
### Deploy to Production
On production run build, start and stop commands.
```
$ yarn prod:build
```
will compile all assets under lib/ folder excluding test files.

prod:start will start PM2 node server which is what we will use for production.
```
$ yarn prod:start
```
If you Ctrl + C, the server will be still running, so type prod:stop command to stop it.
```
$ yarn prod:stop
```
### Test Suite
To run the test suite type:
```bash
$ yarn test
```
There are pre-commit and pre-push hooks that will run `yarn test` to double check everything is working fine.
To skip running the test on push type:
```
git push --no-verify
```

by [Semantic Weapons](https://www.semanticweapons.com)
