const th_num = '๐๑๒๓๔๕๖๗๘๙'
const roman_num = '0123456789'
const main = () => {
    var num1 = arnonNum(parseFloat(document.getElementById("inputNum1").value))
    var num2 = arnonNum(parseFloat(document.getElementById("inputNum2").value))
    document.getElementById('sum').innerText = sumArnon(num1,num2)
    document.getElementById('subtract').innerText = subtractArnon(num1,num2)
    document.getElementById('multiply').innerText = multiplyArnon(num1,num2)
    document.getElementById('divide').innerText = divideArnon(num1,num2)
    for (var i of document.querySelectorAll('#num1')) {
        i.innerText = num1
    }
    for (var i of document.querySelectorAll('#num2')) {
        i.innerText = num2
    }
}

window.onload = main();

function arnonNum(roNum) {
    str_roNum = roNum.toString()
    // .split("").reverse().join("")
    // reverse string

    // console.log(str_roNum)
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
    // console.log(parseFloat(ro))
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
    return roNum(num2) ? arnonNum(roNum(num1) / roNum(num2)) : "หาค่าไม่ได้"
}

document.getElementById('loading').style.display = 'none'
