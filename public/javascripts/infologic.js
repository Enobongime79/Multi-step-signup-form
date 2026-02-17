const fname = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const postBtn = document.getElementById("postBtn");
const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const numberErr = document.getElementById("numberErr");
const nameErrDesktop = document.getElementById("nameErrDesktop");
const emailErrDesktop = document.getElementById("emailErrDesktop");
const numberErrDesktop = document.getElementById("numberErrDesktop");
const postBtnDesktop = document.getElementById("postBtnDesktop");
const fnameDesktop = document.getElementById("nameDesktop");
const emailDesktop = document.getElementById("emailDesktop");
const numberDesktop = document.getElementById("numberDesktop");


const arcade = document.getElementById("arcade");
const advanced = document.getElementById("advanced");
const pro = document.getElementById("pro");

let plan = '';

arcade.addEventListener("click", () => {
    arcade.classList.remove("border-[#D9D8DD]");
    arcade.classList.add("bg-[#EEF5FF]", "border-[#6661A1]");
    advanced.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    advanced.classList.add("border-[#D9D8DD]");
    pro.classList.add("border-[#D9D8DD]");
    pro.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    plan = "arcade";
    console.log(plan)
})

advanced.addEventListener("click", () => {
    advanced.classList.remove("border-[#D9D8DD]");
    arcade.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    advanced.classList.add("bg-[#EEF5FF]", "border-[#6661A1]");
    arcade.classList.add("border-[#D9D8DD]");
    pro.classList.add("border-[#D9D8DD]");
    pro.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    plan = "advanced";
    console.log(plan)
})

pro.addEventListener("click", () => {
    pro.classList.remove("border-[#D9D8DD]");
    arcade.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    advanced.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    pro.classList.add("bg-[#EEF5FF]", "border-[#6661A1]");
    advanced.classList.add("border-[#D9D8DD]");
    arcade.classList.add("border-[#D9D8DD]");
    plan = "pro";
    console.log(plan)
})

const toggleBtn = document.getElementById("toggleBtn");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const arcadeMonth = document.getElementById("arcadeMonth");
const arcadeYear = document.getElementById("arcadeYear");
const advancedMonth = document.getElementById("advancedMonth");
const advancedYear = document.getElementById("advancedYear");
const proMonth = document.getElementById("proMonth");
const proYear = document.getElementById("proYear");

toggleBtn.addEventListener("click", (event) => {
    if (event.target.checked) {
        console.log("Checkbox is checked!")
        yearly.classList.add("text-[#15273F]")
        yearly.classList.remove("text-[#B9BABE]")
        monthly.classList.remove("text-[#15273F]");
        monthly.classList.add("text-[#B9BABE]");
        arcadeYear.classList.remove("hidden");
        arcadeMonth.classList.add("hidden");
        advancedYear.classList.remove("hidden");
        advancedMonth.classList.add("hidden");
        proYear.classList.remove("hidden");
        proMonth.classList.add("hidden");
    }
    else{
        console.log("Checkbox is unchecked!")
        monthly.classList.add("text-[#15273F]")
        monthly.classList.remove("text-[#B9BABE]")
        yearly.classList.remove("text-[#15273F]");
        yearly.classList.add("text-[#B9BABE]");
        arcadeYear.classList.add("hidden");
        arcadeMonth.classList.remove("hidden");
        advancedYear.classList.add("hidden");
        advancedMonth.classList.remove("hidden");
        proYear.classList.add("hidden");
        proMonth.classList.remove("hidden");
    }
})