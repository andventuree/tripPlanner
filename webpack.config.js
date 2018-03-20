module.exports = {
  entry: "./src/index.js", //starting point of program
  output: {
    path: __dirname + '/public', //absolute path for the directory where we want the output to be placed
    filename: "bundle.js" //name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  }
}
