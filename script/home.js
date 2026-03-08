let allIssues = [];

window.onload = function () {
    document.getElementById("hero-button-all").style.backgroundColor = "#4A00FF";
    document.getElementById("hero-button-all").style.color = "white";
};

let heroBUttonAll = document.getElementById("hero-button-all");
let heroBUttonOpen = document.getElementById("hero-button-open");
let heroBUttonClosed = document.getElementById("hero-button-closed");



function resetStyle() {
    const buttons = [heroBUttonAll, heroBUttonOpen, heroBUttonClosed];
    buttons.forEach(function (allBtn) {
        if (allBtn) {
            allBtn.style.backgroundColor = "";
            allBtn.style.color = "";
        }
    })
}

heroBUttonAll.addEventListener("click", function () {
    resetStyle();
    this.style.backgroundColor = "#4A00FF";
    this.style.color = "white";
    displayIssues(allIssues);
});
heroBUttonOpen.addEventListener("click", function () {
    resetStyle();
    this.style.backgroundColor = "#4A00FF";
    this.style.color = "white";
    const openIssues = allIssues.filter(i => i.status.toLowerCase() === 'open');
    displayIssues(openIssues);
});
heroBUttonClosed.addEventListener("click", function () {
    resetStyle();
    this.style.backgroundColor = "#4A00FF";
    this.style.color = "white";
    const closedIssues = allIssues.filter(i => i.status.toLowerCase() === 'closed');
    displayIssues(closedIssues);
});



const displayIssues = (issues) => {
    issuesContainer.innerHTML = "";

    const elements = document.getElementsByClassName("totalCount");

    for (let el of elements) {
        el.innerText = issues.length;
    }

    issues.forEach(issue => {
        const status = issue.status ? issue.status.toLowerCase() : 'open';
        const borderColor = status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]';

        const card = document.createElement("div");
        card.className = `card bg-white shadow-xl border-t-4 ${borderColor} p-4`;

        // modal add

        card.setAttribute("onclick", "my_modal_5.showModal()");

        card.onclick = async () => {

            const id = issue.id
            const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
            const result = await res.json();
            const singleIssues = result.data;


            const modal = document.getElementById("my_modal_5");

            const modalStatusBtn = modal.querySelector(".modal-status-btn");
            if (modalStatusBtn) {
                modalStatusBtn.innerText = singleIssues.status.toLowerCase();

                if (singleIssues.status.toLowerCase() === 'open') {
                    modalStatusBtn.className = "text-white px-2 py-1 rounded-full modal-status-btn bg-[#00A96E]";
                } else {
                    modalStatusBtn.className = "text-white px-2 py-1 rounded-full modal-status-btn bg-[#A855F7]";
                }
            }

            const modalAuthorName = modal.querySelector(".author-name");
            modalAuthorName.innerText = singleIssues.author;

            const modalDate = modal.querySelector(".modalDate");
            modalDate.innerText = singleIssues.updatedAt.split("T")[0];

            const modalTitle = modal.querySelector("h1.modalStatus");
            modalTitle.innerText = singleIssues.title;

            const modalDesc = modal.querySelector("p.description");
            modalDesc.innerText = singleIssues.description;

            const modalAssignee = modal.querySelector("h1.assigneeName");
            modalAssignee.innerText = singleIssues.author;

            const modalPriority = modal.querySelector(".status");
            modalPriority.innerText = singleIssues.priority;

            modal.showModal();
        };

        card.innerHTML = `
            <div class="card ">
            <div class="p-4">
                <div class="flex justify-between">
                    <img src="${status === 'open' ? './assets/Open-Status.png' : './assets/Closed- Status .png'}" class="w-5 h-5">
                    <span class="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">${issue.priority}</span>
                    
                </div>
                <div>
                    <h3 class="font-semibold text-[#1F2937] mt-3">${issue.title}</h3>
                    <p class="text-[#64748B] text-[12px] mt-2">${issue.description}</p>
                </div>
                <div class="flex  mt-3 space-x-1">
                    <span class=" bg-red-100 px-2 py-2 text-[12px] rounded-full text-red-600 border border-red-400 ml-1 whitespace-nowrap "><i class="fa-solid fa-bug"></i> ${issue.labels[0]}</span>
                    <span class="bg-[#d977064d] text-[12px] px-2 py-2 rounded-full text-[#ff5e00]  border border-[#D97706] whitespace-nowrap"><i class="fa-solid fa-life-ring"></i> ${issue.labels[1] ? issue.labels[1] : "No Data Found"}</span>
                </div>

            </div>
<hr>
            <div class="p-4 ">
                <p>${issue.author}</p>
                <p class="mt-1">${issue.updatedAt.split("T")[0]}</p>
            </div>
        </div>
        `;
        issuesContainer.appendChild(card);
    });
};



const issuesContainer = document.getElementById("issue-container")

const loadIssues = async () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url);
    const data = await res.json();
    allIssues = data.data;
    displayIssues(allIssues);

    console.log(data);
    console.log(issuesContainer);
}
loadIssues();

// search functionality

document.getElementById("search-btn").addEventListener("click", () => {
    const input = document.getElementById("input-search")
    const searchValue = input.value.trim().toLowerCase();
    console.log(searchValue);

    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(data => {
            const allWord = data.data;
            console.log(allWord)

            const filterIssues = allWord.filter(word =>
                word.title.toLowerCase().includes(searchValue) ||
                word.description.toLowerCase().includes(searchValue));
            displayIssues(filterIssues);
        })
})