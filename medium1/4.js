/*
  Data structures & variables:
    Stack:
      - array
    Register:
      - number variable

  Operations:
    n: set register value to n

    PUSH: push register value to stack
    POP: pop value from stack, place in register

    ADD: pop value from stack, add to register value. store in register
    SUB: pop value from stack, sub from register value. store in register

    PRINT: print register value

  Algorithm:
    Parse string command
      Split string into array of words
      While commands array isn't empty
        Case statement for commands.pop()
          Number:
            set register to this value
          Push:
            push register value onto the stack, leave value in register
          Pop:
            stack.pop() and put into register
          Add:
            register = register * stack.pop()
          Sub:
            register = register - stack.pop()
          Mult:
            register = register * stack.pop()
          Div:
            register = register / stack.pop()
          Mod:
            register = register % stack.pop()
          Print:
            console.log(register)


*/

function minilang(input) {
  let stack = [];
  let register = 0;

  let commands = input.split(' ').reverse();

  while (commands.length > 0) {
    let command = commands.pop();

    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.trunc(register / stack.pop());
        break;
      case 'MOD':
        register = Math.trunc(register % stack.pop());
        break;
      case 'PRINT':
        console.log(register);
        break;
      default: // n, place in register
        register = parseInt(command);
        break;
    }
  }
}

minilang('PRINT');
console.log('');
// 0

minilang('5 PUSH 3 MULT PRINT');
console.log('');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
console.log('');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
console.log('');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
console.log('');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
console.log('');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
console.log('');
// 12

minilang('-3 PUSH 5 SUB PRINT');
console.log('');
// 8

minilang('6 PUSH');
console.log('');
// (nothing is printed because the `program` argument has no `PRINT` commands)
