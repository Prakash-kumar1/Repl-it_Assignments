// Question Number-2: Abhishek choudhary is the teacher of a higher secondary school. He was assigned a task to record the number of students in each class. The 1st class has ‘A ’ students and 2nd class has ‘B’ students. He completed noting down all the classes but till he reached class xth the school was over. When he was going through the list he noticed that the next class had students equal to the sum of its last two classes. Can you help him to find out the number of students present in xth class using the above details.

// constraint: 1<=A,B<=100

// Input: Input are provided as functions parameters.

// Output:  Numbers of students (integer)

// eg:  a = 20 b = 30

// output: 890


function students(a,b){
    let c = a+b
    let d = c+b
    let e = d+c
    let f = e+d
    let g = e+f
    let h = f+g
    let i = g+h
    let j = h+i
    return j ;
  }
  console.log(students(20,30))
  
  exports.students = students 