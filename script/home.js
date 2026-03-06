

const issuesContainer = document.getElementById("issue-container")

const loadIssues = async () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url);
    const data = await res.json();

    

    console.log(data);
    console.log(issuesContainer);
    data.data.forEach(allData => {
        console.log(allData);

        const card = document.createElement("div");
        const status = allData.status ? allData.status.toLowerCase() : 'open';
        const borderColor = status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]';

        card.className = `card bg-white shadow-xl border-t-4 ${borderColor} p-4`;

        card.innerHTML = `
                <div>
            <div class="p-4">
                <div class="flex justify-between">
                    <img src="${status === 'open' ? './assets/Open-Status.png' : './assets/Closed- Status .png'}" class="w-5 h-5">
                    <span class="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">${allData.priority}</span>
                    
                </div>
                <div>
                    <h3 class="font-semibold text-[#1F2937] mt-3">${allData.title}</h3>
                    <p class="text-[#64748B] text-[12px] mt-2">${allData.description  }</p>
                </div>
                <div class="flex  mt-3 space-x-1">
                    <span class=" bg-red-100 px-2 py-2 text-[12px] rounded-full text-red-600 border border-red-400 ml-1 whitespace-nowrap "><i class="fa-solid fa-bug"></i> ${allData.labels[0]}</span>
                    <span class="bg-[#d977064d] text-[12px] px-2 py-2 rounded-full text-[#ff5e00]  border border-[#D97706] whitespace-nowrap"><i class="fa-solid fa-life-ring"></i> ${allData.labels[1]}</span>
                </div>

            </div>
<hr>
            <div class="p-4">
                <p>${allData.author}</p>
                <p>${allData.updatedAt}</p>
            </div>
        </div>
        `;
        issuesContainer.appendChild(card);
    });
    // issuesContainer.innerHTML = " akane card bosbe"
}
loadIssues();














































































// const displayIssues = (issues) => {
//     const issuesContainer = document.getElementById("issue-container");
//     issuesContainer.innerHTML = "";

//     issues.forEach(issue => {

//         const status = issue.status ? issue.status.toLowerCase() : 'open';
//         const borderColor = status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]';
//         const card = document.createElement("div");
//         card.className = `card bg-white shadow-xl border-t-4 ${borderColor} p-4`;

//         card.innerHTML = `
//         <div>
//             <div class="p-4">
//                 <div class="flex justify-between">
//                     <img src="./assets/Open-Status.png" alt="">
//                     <p>${issue.priority}</p>
//                 </div>
//                 <div>
//                     <h3 class="font-semibold text-[#1F2937] mt-3">${issue.title}</h3>
//                     <p class="text-[#64748B] text-[12px] mt-2">${issue.description.slice(0, 50)}</p>
//                 </div>
//                 <div class="flex justify-between mt-3">
//                     <p>bug</p>
//                     <p>help wanted</p>
//                 </div>

//             </div>
//               <hr>
//             <div class="p-4">
//                 <p>${issue.author}</p>
//                 <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
//             </div>
//         </div>
//         `;
//         issuesContainer.appendChild(card);
//     });
// }



