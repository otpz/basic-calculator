const buttonDOM = document.querySelectorAll(".button-view")
const valueDOM = document.querySelector(".value")
let value1 = " "
let operation = " "
let value2 = " "
let result
let index = 1
buttonDOM.forEach(item => {
    item.addEventListener('click',function clickedButton(){
        if (item.innerHTML == "DEL" || item.innerHTML == "RESET"){
            if (item.innerHTML == "DEL"){
                if (index == 1){
                    value1 = value1.slice(0,value1.length-1)
                    valueDOM.innerHTML = value1
                } else{
                    value2 = value2.slice(0,value2.length-1)
                    valueDOM.innerHTML = value2
                }
            }else{
                value1 = " "
                operation = " "
                value2 = " "
                result
                index = 1
                valueDOM.innerHTML = 0
            }
        }
        if (item.innerHTML != "DEL" && item.innerHTML != "RESET" && item.innerHTML != "=" && item.innerHTML != "+" && item.innerHTML != "-" && item.innerHTML != "/" && item.innerHTML != "x" && index == 1){
            if (item.innerHTML != "."){
                value1 += `${item.innerHTML}`
            }else{
                if (value1.includes(".")){
                    value1 = value1
                } else{
                    value1 += `.`
                }
            }
            valueDOM.innerHTML = value1
        }
        if (item.innerHTML == "+" ||item.innerHTML == "-"|| item.innerHTML == "x"|| item.innerHTML == "/"){
            index = 2
            if ( item.innerHTML == "x"){
                operation = "*"
            } else{
                operation = item.innerHTML
            }
            console.log(operation)
            valueDOM.innerHTML = `${operation}`
        }
        if (item.innerHTML != "DEL" && item.innerHTML != "RESET" && item.innerHTML != "=" && item.innerHTML != "+" && item.innerHTML != "-" && item.innerHTML != "/" && item.innerHTML != "x" && index == 2){
            if (item.innerHTML != "."){
                value2 += `${item.innerHTML}`
            }else{
                if (value2.includes(".")){
                    value2 = value2
                } else{
                    value2 += `.`
                }
            }
            valueDOM.innerHTML = value2
        }
        if (item.innerHTML == "="){
            value1 = parseFloat(value1)
            value2 = parseFloat(value2)
            if (operation == "+"){
                result = value1 + value2
                value1 = 0
                value2 = 0
            }else if (operation == "-"){
                result = value1 - value2
                value1 = 0
                value2 = 0
            }else if (operation == "*"){
                result = value1 * value2
                value1 = 0
                value2 = 0
            }else if (operation == "/"){
                result = value1 / value2
                value1 = 0
                value2 = 0
            } 
            valueDOM.innerHTML = result
            console.log(value1)
            console.log(value2)
            console.log(result)
        }
    })
})

