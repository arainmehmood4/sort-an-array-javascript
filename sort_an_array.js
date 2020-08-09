var sortArray = function(nums) 
{
    for(var i=0; i<nums.length; i++)
        {
            for(j=i+1; j<nums.length; j++)
                {
                    if(nums[i]>nums[j])
                        {
                            var temp=nums[j];
                            nums[j]=nums[i];
                            nums[i]=temp;
                        }
                }
        }
    return nums;
    
};