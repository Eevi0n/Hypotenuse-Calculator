

//var

//let username = window.prompt("Whats your name?");



// let username;
// let age = 16;
// console.log(age);


// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     docunment.getElementById("myLabel").innerHTML = username
// }

// document.getElementById("p1").innerHTML = "Hello " + username;
// document.getElementById("p2").innerHTML = "you are " + age + " years old";




//curcumference calc

// const pi = 3.14
// let radius
// let curcumference

// radius = window.prompt("enter radius:")
// radius = Number(radius)

// circumference = 2*pi*radius

// console.log("circumference: " + circumference)



//hypotenuse calc

let a
let b
let c



document.getElementById("submitButton").onclick = function()
{
    a = document.getElementById("aTextBox").value
    a = Number(a)

    b = document.getElementById("bTextBox").value
    b = Number(b)

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    c = Number(c)

    document.getElementById("output").innerHTML = "Side C: " + c;
}
