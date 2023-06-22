function passwordChecker(password) {
    let minLength = 6;
    let maxLength = 20;
    let steps = 0;
  
    if (password.length < minLength) {
      steps += minLength - password.length;
    } else if (password.length > maxLength) {
      steps += password.length - maxLength;
    }
  
    if (password.length >= minLength && password.length <= maxLength) {
      if (!/[a-z]/.test(password)) {
        steps++;
      }
  
      if (!/[A-Z]/.test(password)) {
        steps++;
      }
  
      if (!/[0-9]/.test(password)) {
        steps++;
      }
      
      for (let i = 0; i < password.length - 2; i++) {
        if (
          password[i] === password[i + 1] &&
          password[i] === password[i + 2]
        ) {
          steps++;
          break;
        }
      }
    }
  
    return steps;
  }
  
  let password1 = passwordChecker("a");
  console.log(password1);

  let password2 = passwordChecker("aA1");
  console.log(password2);

  let password3 = passwordChecker("1337C0d3");
  console.log(password3);
  