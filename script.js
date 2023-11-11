var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let difference = 0;
	for(i=date1; i<date2; i++)
		{
			difference = date2 - date1;
		}
	     return difference;
	if( date1 === date2)
	{
		return 0;
	}
};

// Do not change the code below.
const date1 = parseFloat(prompt("Enter Start Date."));
const date2 = parseFloat(prompt("Enter End Date."));
alert(dateDiffInDays(date1, date2));  
