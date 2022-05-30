const th_num = '๐๑๒๓๔๕๖๗๘๙'
const roman_num = '0123456789'

var num1 = arnonNum(parseFloat(prompt("Enter First Number : ")))
// var num1 = '๑๒๓๐'
var num2 = arnonNum(parseFloat(prompt("Enter Second Number : ")))
// var num2 = '๖๔๕'

// console.log(document.querySelectorAll('#num1'))
for (var i = 0; i<document.querySelectorAll('#num1').length; i++) {
    document.querySelectorAll('#num1')[i].innerText = num1
}
// document.getElementById('num1').innerText = num1
for (var i = 0; i<document.querySelectorAll('#num2').length; i++) {
    document.querySelectorAll('#num2')[i].innerText = num2
}
document.getElementById('num2').innerText = num2

function arnonNum(roNum) {
    str_roNum = roNum.toString()
    // .split("").reverse().join("")
    // reverse string

    console.log(str_roNum)
    // console.log(str_roNum,typeof(str_roNum))
    var th = ''
    for (var i = 0; i<str_roNum.length;i++) {
        // console.log(str_roNum[i])
        if (str_roNum[i] === '-') {
            th += '-'
        }
        else {
            th += th_num[roman_num.indexOf(str_roNum[i])]
        }
    }
    return th.replace(undefined,".")
}

function roNum(str_thNum) {
    var ro = ''
    for (var i = 0; i<str_thNum.length;i++) {
        // console.log(th_num.indexOf(str_thNum[i]))
        ro += th_num.indexOf(str_thNum[i])
    }
    console.log(parseFloat(ro))
    return parseFloat(ro)
}

function sumArnon(num1,num2) {
    // return roNum(num1) + roNum(num2)
    return arnonNum(roNum(num1) + roNum(num2))
}

function subtractArnon(num1,num2) {
    return arnonNum(roNum(num1) - roNum(num2))
}

function multiplyArnon(num1,num2) {
    return arnonNum(roNum(num1) * roNum(num2))
}
function divideArnon(num1,num2) {
    return arnonNum(roNum(num1) / roNum(num2))
}

// document.getElementById('sum').innerText = arnonNum(num2)
document.getElementById('loading').style.display = 'none'
document.getElementById('sum').innerText = sumArnon(num1,num2)
// document.getElementById('sum').innerText = num1+num2
document.getElementById('subtract').innerText = subtractArnon(num1,num2)
document.getElementById('multiply').innerText = multiplyArnon(num1,num2)
document.getElementById('divide').innerText = divideArnon(num1,num2)