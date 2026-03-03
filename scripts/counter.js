let interviewList = [];
let rejectedList = [];

let currentStatus = "all";

// const jobsDataCatch = jobsDataGet()
// console.log(jobsDataCatch)

//get id to data count for call function getID()
const totalCount = getId("total_count");
const interviewCount = getId("interview_count");
const rejectedCount = getId("rejected_count");
const totalArticleJobCount = getId("total_article_job_count");
// console.log(totalCount, interviewCount, rejectedCount)

//get id to data filter for call function getID()
const allFilterBtn = getId("all_Filter_Btn");
const interviewFilterBtn = getId("interview_Filter_Btn");
const rejectedFilterBtn = getId("rejected_Filter_Btn");

// all job container
const jobCardContainer = getId("job_card_container");
const mainContainer = getId("mainContainer");
const filterDivContainer = getId("filterDiv_container");

const statusTitleBtn = document.querySelectorAll(".status_title_btn");
// console.log(statusTitleBtn)

const noDataAll = getId("no_data_all_section");
const noDataInterview = getId("no_data_interview_section");
const noDataRejected = getId("no_data_rejected_section");
console.log(noDataAll)

// for counter calculation
function calculation() {
  // set counter to data
  totalCount.innerText = jobCardContainer.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

  // for show or hide no jobs card for all toggle btn
  if (totalCount.innerText == '0') {
    noDataAll.classList.remove("hidden");

  }else {
    noDataAll.classList.add("hidden");
    noDataInterview.classList.add("hidden")
    noDataRejected.classList.add("hidden")
  }

}

calculation();

// toggle onclick for filter btn
function toggleStyle(id) {
  //add common class
  allFilterBtn.classList.add("bg-base-100", "text-black");
  interviewFilterBtn.classList.add("bg-base-100", "text-black");
  rejectedFilterBtn.classList.add("bg-base-100", "text-black");

  // remove default class
  allFilterBtn.classList.remove("bg-black", "text-amber-50");
  interviewFilterBtn.classList.remove("bg-black", "text-amber-50");
  rejectedFilterBtn.classList.remove("bg-black", "text-amber-50");

  // add current id click class
  getId(id).classList.remove("bg-base-100", "text-black");
  getId(id).classList.add("bg-black", "text-amber-50");

  currentStatus = id;
  console.log(currentStatus);

  if (id == "interview_Filter_Btn") {
    jobCardContainer.classList.add("hidden");
    filterDivContainer.classList.remove("hidden");
    totalArticleJobCount.innerText = interviewList.length;

    interviewRenderCart();
  } else if (id == "all_Filter_Btn") {
    jobCardContainer.classList.remove("hidden");
    filterDivContainer.classList.add("hidden");
    filterDivContainer.innerHTML = "";
    totalArticleJobCount.innerText = jobCardContainer.children.length;
  } else if (id == "rejected_Filter_Btn") {
    jobCardContainer.classList.add("hidden");
    filterDivContainer.classList.remove("hidden");
    totalArticleJobCount.innerText = rejectedList.length;
    
    rejectedRenderCart();
  }

  calculation();

   // for show or hide no jobs card for interview and rejected toggle btn
  if (id == "interview_Filter_Btn") {
    noDataAll.classList.add("hidden");

    interviewList.length < 1 ?  noDataInterview.classList.remove("hidden") : noDataInterview.classList.add("hidden")

  }else if(id =="rejected_Filter_Btn"){
    noDataAll.classList.add("hidden");

    rejectedList.length < 1 ?  noDataRejected.classList.remove("hidden") : noDataRejected.classList.add("hidden")

  }

}

// event delegation
mainContainer.addEventListener("click", function (e) {
  // console.log(e.target.classList.contains('interview_btn'))// true

  if (e.target.classList.contains("interview_btn")) {
    const parentNode = e.target.parentNode.parentNode;
    console.log(parentNode);

    // step-1: set status_title_btn
    parentNode
      .querySelector(".status_title_btn")
      .classList.remove("border", "border-error");
    parentNode
      .querySelector(".status_title_btn")
      .classList.add("border", "border-success");
     parentNode.querySelector('.status_title_btn').innerText = 'Interview';

    // step-2:
    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    console.log(position);
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const status = parentNode.querySelector(".status_title_btn").innerText;

    parentNode.querySelector(".status_title_btn").innerText = "Interview";
    console.log(companyName);
    console.log(position);

    const jobCartInfo = {
      companyName,
      position,
      location,
      type,
      salary,
      description,
      status: "Interview",
    };
    // console.log(jobCartInfo)

    const companyNameExist = interviewList.find(
      (items) => items.companyName == jobCartInfo.companyName,
    );
    // console.log(companyNameExist)

    if (!companyNameExist) {
      interviewList.push(jobCartInfo);
    }

    // removing company name from rejectList
    rejectedList = rejectedList.filter(
      (item) => item.companyName != jobCartInfo.companyName,
    );
    console.log(rejectedList);

    // Re-render the active filter view after status change
    if (currentStatus == "interview_Filter_Btn") {
      totalArticleJobCount.innerText = interviewList.length;
      interviewRenderCart();
    } else if (currentStatus == "rejected_Filter_Btn") {
      totalArticleJobCount.innerText = rejectedList.length;
      rejectedRenderCart();
    }

    calculation();
  }
  if (e.target.classList.contains("rejected_btn")) {
    const parentNode = e.target.parentNode.parentNode;
    console.log(parentNode);

    parentNode
      .querySelector(".status_title_btn")
      .classList.remove("border", "border-success");
    parentNode
      .querySelector(".status_title_btn")
      .classList.add("border", "border-error");
    // parentNode.querySelector('.status_title_btn').innerText = 'Rejected';

    // step-2:
    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const status = parentNode.querySelector(".status_title_btn").innerText;

    parentNode.querySelector(".status_title_btn").innerText = "Rejected";
    console.log(companyName);
    console.log(position);

    const jobCartInfo = {
      companyName,
      position,
      location,
      type,
      salary,
      description,
      status: "Rejected",
    };
    // console.log(jobCartInfo)

    const companyNameExist = rejectedList.find(
      (items) => items.companyName == jobCartInfo.companyName,
    );
    console.log(companyNameExist);

    if (!companyNameExist) {
      rejectedList.push(jobCartInfo);
    }

    // removing company name from rejectList

    interviewList = interviewList.filter(
      (item) => item.companyName != jobCartInfo.companyName,
    );

    // Re-render the active filter view after status change
    if (currentStatus == "interview_Filter_Btn") {
      totalArticleJobCount.innerText = interviewList.length;
      interviewRenderCart();
    } else if (currentStatus == "rejected_Filter_Btn") {
      totalArticleJobCount.innerText = rejectedList.length;
      rejectedRenderCart();
    }

    calculation();
  } else if (e.target.classList.contains("delete_btn")) {
    const parentNode = e.target.parentNode.parentNode.parentNode;
    const childNode = e.target.parentNode.parentNode;

    console.log(parentNode);
    console.log(childNode);
    parentNode.removeChild(childNode);
    totalArticleJobCount.innerText = jobCardContainer.children.length;

    if (currentStatus == "delete_btn") {
      interviewRenderCart();
      rejectedRenderCart();
    }
    calculation();
  }
});

function interviewRenderCart() {
  filterDivContainer.innerHTML = "";

  for (let interview of interviewList) {
    const section = document.createElement("section");

    section.innerHTML = `
    <section class="bg-base-100 p-6 md:p-10 space-y-4 rounded-2xl relative">
                  <div>
                      <h3 class="companyName font-medium text-lg"> ${interview.companyName}</h3>
                      <p class="position">${interview.position}</p>
                  </div>
                  <ul class="space-x-4">
                      <span class="location">${interview.location}</span>
                      <span class="type">${interview.type}</span>
                      <span class="salary">${interview.salary}</span>
                  </ul>
                  <div>
                      <p class="status_title_btn bg-base-300 inline-block px-4 py-2">${interview.status}</p>
                      <p class="description">${interview.description}</p>
      
                  </div>
                  <ul class="space-x-4">
                      <button class="interview_btn btn text-success font-medium">Interview</button>
                      <button class="rejected_btn btn text-error font-medium">Rejected</button>
                  </ul>
      
                  <button class="delete_btn btn absolute top-6 md:top-10 right-6 md:right-20">X</button>
              </section>
    
    
    `;
    filterDivContainer.appendChild(section);
  }
}

function rejectedRenderCart() {
  filterDivContainer.innerHTML = "";

  for (let rejected of rejectedList) {
    const section = document.createElement("section");

    section.innerHTML = `
    <section class="bg-base-100 p-6 md:p-10 space-y-4 rounded-2xl relative">
                  <div>
                      <h3 class="companyName font-medium text-lg"> ${rejected.companyName}</h3>
                      <p class="position">${rejected.position}</p>
                  </div>
                  <ul class="space-x-4">
                      <span class="location">${rejected.location}</span>
                      <span class="type">${rejected.type}</span>
                      <span class="salary">${rejected.salary}</span>
                  </ul>
                  <div>
                      <p class="status_title_btn bg-base-300 inline-block px-4 py-2">${rejected.status}</p>
                      <p class="description">${rejected.description}</p>
      
                  </div>
                  <ul class="space-x-4">
                      <button class="interview_btn btn text-success font-medium">Interview</button>
                      <button class="rejected_btn btn text-error font-medium">Rejected</button>
                  </ul>
      
                  <button class="delete_btn btn absolute top-6 md:top-10 right-6 md:right-20">X</button>
              </section>
    
    
    `;

    filterDivContainer.appendChild(section);
  }
}

totalArticleJobCount.innerText = jobCardContainer.children.length;

 

