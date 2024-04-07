const newVar = process.argv
//console.log(newVar)

if (newVar === "add") {

    console.log(" I am adding ")
} else if (newVar === "remove") {
    console.log("I am removing")
}
console.log(newVar)

const yargs = require('yargs')

yargs.command({
    command: "add",
    handler: function () {
        console.log(" happy me")
    }
})
console.log((yargs.argv))