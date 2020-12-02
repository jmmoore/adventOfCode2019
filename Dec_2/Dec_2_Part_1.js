var input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,5,19,23,1,23,6,27,1,5,27,31,1,31,6,35,1,9,35,39,2,10,39,43,1,43,6,47,2,6,47,51,1,5,51,55,1,55,13,59,1,59,10,63,2,10,63,67,1,9,67,71,2,6,71,75,1,5,75,79,2,79,13,83,1,83,5,87,1,87,9,91,1,5,91,95,1,5,95,99,1,99,13,103,1,10,103,107,1,107,9,111,1,6,111,115,2,115,13,119,1,10,119,123,2,123,6,127,1,5,127,131,1,5,131,135,1,135,6,139,2,139,10,143,2,143,9,147,1,147,6,151,1,151,13,155,2,155,9,159,1,6,159,163,1,5,163,167,1,5,167,171,1,10,171,175,1,13,175,179,1,179,2,183,1,9,183,0,99,2,14,0,0]

function opcodeInterpreter(array) {
    //console.log("We're in the opcode interpreter with values " + array);
    var firstTerm = array[1];
    var secondTerm = array[2];
    var positionToSet = array[3];
    //This is the Opcode Switch Case
    switch (array[0]) {
        case 1:
            //console.log("We're adding");
            var valueToSet = input[firstTerm] + input[secondTerm];
            break;
        case 2:
            //console.log("we're multiplying");
            var valueToSet = input[firstTerm] * input[secondTerm];
            break;
    }
    //console.log(valueToSet);

    input[positionToSet] = valueToSet;
    return;
}

// Business Logic starts here

for (i = 0; i < input.length;) {
    var arrayToSend = input.slice(i, i+4);
    var opcode = input[i];
    if (opcode != 99) {
        opcodeInterpreter(arrayToSend);
    } else if (opcode = 99) {
        console.log(input[0]);
        break;
    } else throw "Something went wrong!";

    i += 4;
}




/* 
    Notes/thoughts

    Okay so here's what I need to be able to do:
    - Write functions for each opcode
        - Opcode 1: Add position 2 and 3, place at position 4
        - Opcode 2: Multiply position 2 and 3, place at position 4
        - Opcode 99: Halt
    - Write an interpreter function that processes four digit chunks.
        - How to tell the loop to skip forward four every time? 
            - i += 4?
        - How to modify values in the array while keeping their position the same?
        - How to feed multiple values into the other functions?
var input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,5,19,23,1,23,6,27,1,5,27,31,1,31,6,35,1,9,35,39,2,10,39,43,1,43,6,47,2,6,47,51,1,5,51,55,1,55,13,59,1,59,10,63,2,10,63,67,1,9,67,71,2,6,71,75,1,5,75,79,2,79,13,83,1,83,5,87,1,87,9,91,1,5,91,95,1,5,95,99,1,99,13,103,1,10,103,107,1,107,9,111,1,6,111,115,2,115,13,119,1,10,119,123,2,123,6,127,1,5,127,131,1,5,131,135,1,135,6,139,2,139,10,143,2,143,9,147,1,147,6,151,1,151,13,155,2,155,9,159,1,6,159,163,1,5,163,167,1,5,167,171,1,10,171,175,1,13,175,179,1,179,2,183,1,9,183,0,99,2,14,0,0];
        */
