// window.onload = function() {
//     document.getElementById("all-button-hero").style.backgroundColor = "black";
//     document.getElementById("all-button-hero").style.color = "white";
//     updateCounter();
// };

// let firstAllButton = document.getElementById("all-button-hero");
// let firstInterviewButton = document.getElementById("interview-button-hero");
// let firstRejectButton = document.getElementById("rejected-button-hero");

// function resetStyle(){
//     const buttons = [ firstAllButton, firstInterviewButton, firstRejectButton];
//     buttons.forEach(function(sobBtn){
//         if(sobBtn){
//             sobBtn.style.backgroundColor = "";
//             sobBtn.style.color = "";
//         }
//     })
// }

// firstAllButton.addEventListener("click", function(){
//     resetStyle();
//     this.style.backgroundColor = "black";
//     this.style.color = "white";
// });
// firstInterviewButton.addEventListener("click", function(){
//     resetStyle();
//     this.style.backgroundColor = "black";
//     this.style.color = "white";
// });
// firstRejectButton.addEventListener("click", function(){
//     resetStyle();
//     this.style.backgroundColor = "black";
//     this.style.color = "white";
// });





    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
            <div class="p-3">
                <div>
                    <h1 class="font-bold text-[1.5rem]">Fix broken image uploads</h1>
                    <div class="space-x-2">
                        <span class="bg-[#00A96E] text-white px-2 py-1 rounded-full">Opened</span> <span class="font-bold text-[2rem]">.</span>
                        <span class="text-[#64748B] text-[12px]">Opened by Fahim Ahmed</span><span class="font-bold text-[2rem]">.</span>
                        <span class="text-[#64748B] text-[12px]">22/02/2026</span>
                    </div>
                </div>
                <div class="flex  mt-3 space-x-1">
                    <span class=" bg-red-100 px-2 py-2 text-[12px] rounded-full text-red-600 border border-red-400 ml-1 whitespace-nowrap "><i class="fa-solid fa-bug"></i> BUG</span>
                    <span class="bg-[#d977064d] text-[12px] px-2 py-2 rounded-full text-[#ff5e00]  border border-[#D97706] whitespace-nowrap"><i class="fa-solid fa-life-ring"></i> HELP WANTED</span>
                </div>

                <div class="mt-6">
                    <p class="text-[#64748B]">The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>
                </div>
                <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg mt-5">
                    <div class=" justify-start">
                        <p>Assignee:</p>
                        <h1>Fahim Ahmed</h1>
                    </div>
                    <div class="">
                        <p>Priority:</p>
                        <span class="bg-red-50 text-red-500 font-bold px-2 py-1 rounded-full uppercase">High</span>
                    </div>
                </div>
            </div>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn btn-primary">Close</button>
                </form>
            </div>
        </div>
    </dialog>