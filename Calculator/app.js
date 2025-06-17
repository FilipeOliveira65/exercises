var visor = document.getElementById("visor");
var numbers = document.getElementsByClassName("btn");
var operators = document.getElementsByClassName("operator");

var n1 = null; //by default start without any value
var n2 = null;  //by default start without any value
var op = null;  //by default start without any value

console.log(typeof(numbers))


//numbers variavel is an array. Everytime that a number is clicked the array receive one more element, so, the below code says "while the i variable is menor than the numbers array length, add the clicked number at the screen"
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        visor.value += numbers[i].value
        
        //verify if the op variable and the n2 variable is empty. If true, the typed number 'll be added to n1 variable;
        if (op ===  null && n2 === null) {
            n1 = parseFloat(visor.value) //the received value is a string. The "parseFloat" function turn it in a number element;
            console.log("n1 is: " + n1)
        } else if (n1 !== null && op !== null) {
            n2 = parseFloat(visor.value) //the received value is a string. The "parseFloat" function turn it in a number element;
            console.log("n2 is: " + n2)
        }
    })
}

//Verify when an operator element is clicked
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {

       if (operators[i].value === "clear") {
            
            visor.value = " ";
            n1 = null;
            n2 = null;
            op = null;

        } else if (operators[i].value === "result") {
            
            if (n1 !== null && n2 !== null && op) { //When the user click the result button, verifies if has all the necessary elements (n1 and n2) to do the calc.
                var calc; //if true, create a "calc" variable;

                switch (op) {
                    case "+":
                        calc = n1 + n2
                        break;

                    case "-":
                        calc = n1 - n2
                        break;

                    case "/":
                        calc = n1 / n2
                        break;

                    case "*":
                        calc = n1 * n2
                        break;
                
                    default:
                        break;
                }
            }

            console.log(calc)

            visor.value = calc; //show on the visor the result of the calc independent what was the operator

        } else {
            op = operators[i].value; //verify if is the first time the user used a operator;

            visor.value = " "
        }
    })
}
