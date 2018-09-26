const func = function(num1, num2, num3) {
	const operations = ((num1-num2)/num3)*num2
	const sum = num1 + num2 + num3
	return operations - sum;
};
console.log(func(88, 8, 4))


const func2 = function() {
	const name = "Demi"
	const surname = "Lovato"
	const fullN = name + " " + surname + " " + "rocks!"
	return fullN;
}
const r = func2();
console.log(r);

 const func3 = function(num1, num2) {
  const minus = num2 - num1 - 5
  console.log(minus)
  }
  func3(5, 20);


  const func4 = function(string1, string2, string3){
    
    if (string1.length>string2.length && string1.length>string3.length) {
      return string1;
    } else if (string2.length>string1.length && string2.length>string3.length) {
      return string2;
    } else if (string3.length>string1.length && string3.length>string2.length) {
      return string3;
    }   
  };
    console.log(func4('demi lovato', 'nick jonas', 'david guetta'));


      const func5 = function(n1, n2){
    
    if (n1 === n2) {
      return 0
    } else if (n1>n2) {
      return 1
    } else {return -1
    }   
  };
    console.log(func5(500, 1000));

     const multiply = function(m1, m2){
  const result = m1*m2
  return result;
  }

   const divide = function(d1, d2){
    const result = d1/d2
  return result;
  }
  
  const triangleArea = function(base, height) {
  const tArea1 = multiply(base, height)
  const tArea2 = divide(tArea1, 2)
  return tArea2
};
  console.log(triangleArea(5, 10));

 const numLength = function(a){
    const length1 = a.length
    return length1;
  };
  const length2 = '123456789'
  console.log(numLength(length2));

 const stringsnumber = function(str1, str2, number1){
  const num = str1 + str1
  if(num.length>number1){
  return 1;
   } else {
    return -1
  }
  };
  console.log(stringsnumber('demi', 'lovato', 20));

const runStuff = function(str1, number1, number2){
  
  if (str1 === 'rectangle'){
  return number1 * number2;
   } else if (str1 === 'triangle'){
  return triangleArea(number1, number2);
   } else {
     return -1;
          }
  };
  console.log(runStuff('triangle', 4, 5));
