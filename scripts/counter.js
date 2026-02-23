const interviewList = [];
const rejectedList = [];


//get id to data count for call function getID() 
const totalCount =getId('total_count');
const interviewCount = getId('interview_count');
const rejectedCount = getId('rejected_count');
// console.log(typeof totalCount)
// console.log(totalCount.innerText)
// console.log(totalCount, interviewCount, rejectedCount)

//get id to data filter for call function getID() 
 const allFilterBtn = getId('all_Filter_Btn');
 const interviewFilterBtn = getId('interview_Filter_Btn')
 const rejectedFilterBtn = getId('rejected_Filter_Btn')

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

// toggle onclick for filter btn
function toggleStyle(id){
    //add common class
    allFilterBtn.classList.add('bg-base-100', 'text-black');
    interviewFilterBtn.classList.add('bg-base-100', 'text-black');
    rejectedFilterBtn.classList.add('bg-base-100', 'text-black');

    // remove default class 
    allFilterBtn.classList.remove('bg-black', 'text-amber-50');
    interviewFilterBtn.classList.remove('bg-black', 'text-amber-50');
    rejectedFilterBtn.classList.remove('bg-black', 'text-amber-50');

    // add current id click class
    getId(id).classList.remove('bg-base-100', 'text-black')
    getId(id).classList.add('bg-black', 'text-amber-50')

}
