function findDivisibleNumbers(a, b) {
    let divisibleNumbers = [];
    
    for (let i = 1; i <= a; i++) {
      if (i % b === 0) {
        divisibleNumbers.push(i);
      }
    }
    
    for (let i = 1; i <= b; i++) {
      if (i % a === 0 && !divisibleNumbers.includes(i)) {
        divisibleNumbers.push(i);
      }
    }
    
    console.log(divisibleNumbers);
  }
  
  findDivisibleNumbers(a, b);
  