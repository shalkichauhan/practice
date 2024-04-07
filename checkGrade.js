let marks = 90
if (marks > 80 || marks <= 100) {
    console.log(`marks are ${marks}` + "\n grade is A")
} else if (marks >= 60 || marks < 80) {
    console.log("marks are {}" + marks + "grade is B")
}

for (let i of 'shalki') {
    console.log(i)
}

let obj = {
    name: "kitty",
    type: 'cat'
}

console.log(`my cat is ${obj.type}`)

//console.dir(document)