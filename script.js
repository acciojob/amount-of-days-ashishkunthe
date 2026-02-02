//your JS code here. If required.
function daysOfYear(year) {
	function isLeapyear(n){
		if(n%400===0) return true
		if(n%100===0) return false
		if(n%4===0) return true
		return false
	}
	if(isLeapyear(year)){
		console.log(366)
	}else{
		console.log(365)
	}
}