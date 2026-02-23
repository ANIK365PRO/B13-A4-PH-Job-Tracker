const interviewList = [];
const rejectedList = [];


//get id to data for call function getID() 
const totalCount =getId('total_count');
const interviewCount = getId('interview_count');
const rejectedCount = getId('rejected_count');
// console.log(typeof totalCount)
// console.log(totalCount.innerText)
// console.log(totalCount, interviewCount, rejectedCount)


// all job container 
const jobContainer = getId('job_card_container')

// for counter calculation
function calculation(){
    // set counter to data 
    totalCount.innerText = jobContainer.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}

calculation()