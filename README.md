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
$ nodemon -e js,jsx --ignore lib --ignore dist --exec babel-node src/server 
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `babel-node src/server`
Server running on port 3030 (development).
Keep "yarn dev:wds" running in an other terminal.
```
now, you need to create the bundle.js file including all your project JS files.
You need to do this on a second terminal.
```bash
$ yarn dev:wds
```
Just leave that terminal running as it will also handle hot reloading.

Point your web browser to [localhost:3030](http://localhost:3030) to see the development website.
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
