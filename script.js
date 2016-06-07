var primaryNumber = [];
var number = [];
var answer = 0;
var numCount = 0;
var oldOp;
var ansOnce = false;

function solve() {
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
    var ran1 = Math.ceil(Math.random() * 256);
    var ran2 = Math.ceil(Math.random() * 256);
    var ran3 = Math.ceil(Math.random() * 256);
    document.getElementById(this).style.backgroundColor = 'rgb(' + ran1 + ',' + ran2 + ',' + ran3 + ')';
}

function addOperator(op) {
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