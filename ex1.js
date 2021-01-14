function reverseString(string){

    let splitString = string.split("")
    let reverseStringz = splitString.reverse()
    let joinString = reverseStringz.join("")

    return joinString
}

console.log(reverseString('hello'))