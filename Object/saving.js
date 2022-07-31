// Question Number-2:  You're given the income after tax, you need to return the money that is to be spent on needs, wants and savings.
// You are supposed to follow 50 30 20 rule. That is 50% needs, 30% wants and 20% savings.

// Input Format  :  An integer salary containing the salary after tax
// Output Format :  Return an object containing the Needs, Wants and Savings

// Sample Input:  10000
// Sample Output:  { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// Sample Input:  50000
// Sample Output:  { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

function needsWantsSavings(salary){
    var spents={
        'Needs':Math.floor((50*salary)/100),
        'Wants':Math.floor((30*salary)/100),
        'Savings':Math.floor((20*salary)/100),
      }
    return(spents); 
    }
    console.log(needsWantsSavings(10000))
    exports.needsWantsSavings = needsWantsSavings