// code your solution here// use string interp to 
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}// replace rollerskate with `${activity} so it can be replaced console.log to see output

  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
  
  