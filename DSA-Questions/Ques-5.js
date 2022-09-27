// Question => 5: Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

//Return the answer in an array.
// let nums = [6,5,4,8];


// ##########   Team - A  26th september session  By  Manit  Sir  at  10:30 pm    ########## 


let res=[];
function smallerNumbersThanCurrent(nums){
    for(let i=0; i<nums.length; i++){
        let count=0;
        for(let j=0; j<nums.length; j++){
            if(j != i && nums[j] < nums[i]){
                count++;
                // res.push(count);
                res[i]=count;
            }
        }
    }
    return res;
}
console.log(smallerNumbersThanCurrent([8,1,2,2,3]));



