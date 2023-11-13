var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let dateOne = new Date(date1);
let	dateTwo = new Date(date2);
	if(dateOne.getTime() === dateTwo.getTime()) 
	{
		return 0;
    }
	let difference = dateTwo.getTime() - dateOne.getTime();
    let differenceInDays = difference / (1000 * 60 * 60 * 24);
	return differenceInDays;
}
	
	

// Do not change the code below.
const date1 = prompt("Enter Start Date.");
const date2 = prompt("Enter End Date.");
alert(dateDiffInDays(date1, date2));  
