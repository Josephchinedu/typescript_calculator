import { question } from 'readline-sync'

type Operator = '+' | '-'| '*' | '/'

function main(){
    const firstString: string = question("Enter first number:: ");
    const operator: string = question("Enter operator:: ");
    const secondStr: string = question("Enter second number:: ");
    
    const validInput: boolean = isNumber(firstString) && isOperator(operator) && isNumber(secondStr)

    if (validInput){
        const firstInput: number = parseInt(firstString)
        const secondInput: number = parseInt(secondStr)

        const result = calculate(firstInput, operator as Operator, (secondStr as any) as number)
        console.log(result)
    }
    else{
        console.log("invalid input");
        main()
    }
}
 

function calculate(firstInput: number, operator: Operator, secondInput: number){
    switch(operator) {
        case '+':
            return firstInput + secondInput;
        case '-':
            return firstInput - secondInput
        case '/':
            return firstInput / secondInput
        case '*':
            return firstInput * secondInput
    }
}
    
 
function isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);

    return isNum;
}


function isOperator(operator: string): boolean {
    switch(operator){
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default:
            return false
    }
}

main();