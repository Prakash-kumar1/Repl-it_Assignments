// Question Number-4: Hey can you really chose the government, really? Lets find out.

// You will be given day, month, year of birth You will also be given election day, month and year

// You are only allowed to vote if following condotions are fulfilled.

// your age should be greater than 20 years,6 months, 11 days return "I can vote"

// if your age is greater than 50 years 8 months 12 days and less than 70 years 5 months and 11 days than you can return "I cannot walk so cannot vote please make an app to vote"

// if election date is your birthday than you will recieve a "iphone" if you are eligible for vote. return "I received an iphone"

// if age is greater than 70 years 5 months and 11 days return "I will watch naruto rather than voting"

// Input: All input are given as function parameter

// Output: All Output should be printed as stated above

// Eg1:

// your_birth_day = 10
// your_birth_month = 5
// your_birth_year = 1970
// election_day= 12
// election_month = 6
// election_year = 2022

// Output:

// I cannot walk so cannot vote please make an app to vote

// Eg2:

// your_birth_day = 10
// your_birth_month = 5
// your_birth_year = 1970
// election_day= 10
// election_month = 5
// election_year = 2022

// Output:

// I received an iphone


function eligible(
    birth_day, birth_month, birth_year,
    election_day, election_month, 
    election_year
  ){
    // code here
    let countyear =election_year - birth_year ;
  if(countyear>70){
    return "I will watch naruto rather than voting"
  }
    else if(countyear>50){
      if(birth_day==election_day && election_month==birth_month){
        return "I received an iphone"
      }else{
        return  "I cannot walk so cannot vote please make an app to vote"
      }
    }
    else if(countyear>=20){
      if(birth_day==election_day && election_month==birth_month){
        return "I received an iphone"
      }else{
        return  "I can vote"
      }
    }
}
console.log(eligible(
    10, 5, 1970,
    10, 5, 
    2022))
  exports.eligible = eligible
  