var primaryNumber = [];
var number = [];
var answer = 0;
var numCount = 0;
var oldOp;
var ansOnce = false;

function solve() {
    if (oldOp == '+') {
        answer = +number[0] + +number[1];
    }
    if (oldOp == 'x') {
        answer = number[0] * number[1];
    }
    if (oldOp == '/') {
        answer = number[0] / number[1];
    }
    if (oldOp == '-') {
        answer = number[0] - number[1];
    }
}

function clearAll() {
    document.getElementById('line1').innerHTML = '0';
    document.getElementById('line2').innerHTML = '0';
    document.getElementById('lineOp').innerHTML = 'operator';
    document.getElementById('ansLine').innerHTML = '0';
    number.length = 0;
    primaryNumber.length = 0;
    answer = 0;
    numCount = 0;
    ansOnce = false;
}

function addToArray(num) {
    primaryNumber.push(num);
    document.getElementById('line1').innerHTML = primaryNumber.join('');

}

function addOperator(op) {
    if (primaryNumber.length == 0) {

    } else {
        if (ansOnce) {
            document.getElementById('line2').innerHTML = answer;
            document.getElementById('line1').innerHTML = '0';
            document.getElementById('lineOp').innerHTML = op;
            oldOp = op;
        } else {
            number.push(primaryNumber.join(''));
            if (numCount == 1) {
                solve();
            }
            primaryNumber.length = 0;
            document.getElementById('line1').innerHTML = '0';
            document.getElementById('line2').innerHTML = number[numCount];
            document.getElementById('lineOp').innerHTML = op;
            oldOp = op;
            numCount++;
        }
    }
}

function fetchAnswer() {

    if (ansOnce) {
        number.push(primaryNumber.join(''));
        if (oldOp == '+') {
            answer = +number[0] + +number[1];
        }
        if (oldOp == 'x') {
            answer = number[0] * number[1];
        }
        if (oldOp == '/') {
            answer = number[0] / number[1];
        }
        if (oldOp == '-') {
            answer = number[0] - number[1];
        }
    } else {
        number.push(primaryNumber.join(''));
        numCount++;
        solve();
    }
    document.getElementById('ansLine').innerHTML = answer;
    primaryNumber.length = 0;
    number.length = 0;
    number.push(answer);
    numCount = 1;
    ansOnce = true;
}

function callMem() {
    number[1] = mem;
    if (ansOnce) {
        document.getElementById('line1').innerHTML = number[1];
    } else {
        document.getElementById('line2').innerHTML = number[1];
        numCount = 1;
    }
}

function addMem() {
    mem = answer;
    document.getElementById('memoryInfo').innerHTML = 'Number stored in memory = ' + mem;
}