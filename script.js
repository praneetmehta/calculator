var primaryNumber = [];
var number = [];
var answer = 0;
var numCount = 0;
var oldOp;

function clearAll() {
    document.getElementById('line1').innerHTML = '0';
    document.getElementById('line2').innerHTML = '0';
    document.getElementById('lineOp').innerHTML = 'operator';
    document.getElementById('ansLine').innerHTML = '0';
    number.length = 0;
    primaryNumber.length = 0;
    answer = 0;
    numCount = 0;
}

function addToArray(num) {
    primaryNumber.push(num);
    document.getElementById('line1').innerHTML = primaryNumber.join('');
}

function addOperator(op) {
    number.push(primaryNumber.join(''));
    if (numCount == 1) {
        if (oldOp == '+') {
            answer += +number[0] + +number[1];
        }
        if (oldOp == 'x') {
            answer += number[0] * number[1];
        }
        if (oldOp == '/') {
            answer += number[0] / number[1];
        }
        if (oldOp == '-') {
            answer += number[0] - number[1];
        }
    }
    primaryNumber.length = 0;
    document.getElementById('line1').innerHTML = '0';
    document.getElementById('line2').innerHTML = number[numCount];
    document.getElementById('lineOp').innerHTML = op;
    oldOp = op;
    numCount++;
}

function fetchAnswer() {

    number.push(primaryNumber.join(''));
    numCount++;
    if (oldOp == '+') {
        answer += +number[0] + +number[1];
    }
    if (oldOp == 'x') {
        answer += number[0] * number[1];
    }
    if (oldOp == '/') {
        answer += number[0] / number[1];
    }
    if (oldOp == '-') {
        answer += number[0] - number[1];
    }
    document.getElementById('ansLine').innerHTML = answer;
}