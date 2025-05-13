// alert("welcome to js")
// Dom, document object model

document.getElementById("demo").textContent = "welcome to atlanta"

// we introduce function

function fullName(firstName, lastName){
    console.log(`my full name is ${firstName} ${lastName}`)
}

fullName("John", "Doe")


function  add(num1, num2){
    var sum = num1 + num2
    alert(sum)
}