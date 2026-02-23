const jobs = [
  {
    companyName: "TechNova Ltd",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "40000",
    description: "Build and maintain modern web applications.",
    notApplied: true
  },
  {
    companyName: "CodeCrafters",
    position: "Backend Developer",
    location: "Chattogram",
    type: "Remote",
    salary: "50000",
    description: "Develop APIs and manage databases.",
    notApplied: true
  },
  {
    companyName: "SoftSolutions",
    position: "UI/UX Designer",
    location: "Khulna",
    type: "Contract",
    salary: "35000",
    description: "Design user-friendly interfaces.",
    notApplied: true
  },
  {
    companyName: "NextGen IT",
    position: "MERN Stack Developer",
    location: "Rajshahi",
    type: "Full-time",
    salary: "60000",
    description: "Work on full stack JavaScript projects.",
    notApplied: true
  },
  {
    companyName: "DigitalWave",
    position: "QA Engineer",
    location: "Sylhet",
    type: "Part-time",
    salary: "30000",
    description: "Test and ensure software quality.",
    notApplied: true
  },
  {
    companyName: "InnoTech",
    position: "DevOps Engineer",
    location: "Dhaka",
    type: "Full-time",
    salary: "70000",
    description: "Manage CI/CD pipelines and cloud services.",
    notApplied: true
  },
  {
    companyName: "WebMatrix",
    position: "React Developer",
    location: "Barishal",
    type: "Remote",
    salary: "45000",
    description: "Develop interactive React applications.",
    notApplied: true
  },
  {
    companyName: "SkyNet Systems",
    position: "Cyber Security Analyst",
    location: "Dhaka",
    type: "Full-time",
    salary: "80000",
    description: "Monitor and secure network infrastructure.",
    notApplied: true
  }
];


function getData(){
  
  for(const job of jobs){
      // console.log(job)

      // step-1 : get parent node 
    const parentJobContainer = document.querySelector('#job_card_container');
    //  console.log(parentJobContainer)

    // step-2 : create child section and set innerHtml 
    const section = document.createElement('section');
    section.innerHTML= `
    <section class="bg-base-100 p-6 md:p-10 space-y-4 rounded-2xl relative">
                  <div>
                      <h3 class="font-medium text-lg"> ${job.companyName}</h3>
                      <p>${job.position}</p>
                  </div>
                  <ul class="space-x-4">
                      <span>${job.location}</span>
                      <span>${job.type}</span>
                      <span>${job.salary}</span>
                  </ul>
                  <div>
                      <p class="bg-base-300 inline-block px-4 py-2">Not Applied</p>
                      <p>${job.description}</p>
      
                  </div>
                  <ul class="space-x-4">
                      <button class="btn text-success font-medium">Interview</button>
                      <button class="btn text-error font-medium">Rejected</button>
                  </ul>
      
                  <button class="btn absolute top-6 md:top-10 right-6 md:right-20">X</button>
              </section>
    
    
    `
    // step-3 : append child
    parentJobContainer.appendChild(section)
  }
}

const result = getData();
// console.log(result)