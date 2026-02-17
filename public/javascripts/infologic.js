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

const toggleBtnMob = document.getElementById("toggleBtnMob");
const monthlyMob = document.getElementById("monthlyMob");
const yearlyMob = document.getElementById("yearlyMob");
const arcadeMonthMob = document.getElementById("arcadeMonthMob");
const arcadeYearMob = document.getElementById("arcadeYearMob");
const advancedMonthMob = document.getElementById("advancedMonthMob");
const advancedYearMob = document.getElementById("advancedYearMob");
const proMonthMob = document.getElementById("proMonthMob");
const proYearMob = document.getElementById("proYearMob");

toggleBtnMob.addEventListener("click", (event) => {
    if (event.target.checked) {
        console.log("Checkbox is checked!")
        yearlyMob.classList.add("text-[#15273F]")
        yearlyMob.classList.remove("text-[#B9BABE]")
        monthlyMob.classList.remove("text-[#15273F]");
        monthlyMob.classList.add("text-[#B9BABE]");
        arcadeYearMob.classList.remove("hidden");
        arcadeMonthMob.classList.add("hidden");
        advancedYearMob.classList.remove("hidden");
        advancedMonthMob.classList.add("hidden");
        proYearMob.classList.remove("hidden");
        proMonthMob.classList.add("hidden");
    }
    else{
        console.log("Checkbox is unchecked!")
        monthlyMob.classList.add("text-[#15273F]")
        monthlyMob.classList.remove("text-[#B9BABE]")
        yearlyMob.classList.remove("text-[#15273F]");
        yearlyMob.classList.add("text-[#B9BABE]");
        arcadeYearMob.classList.add("hidden");
        arcadeMonthMob.classList.remove("hidden");
        advancedYearMob.classList.add("hidden");
        advancedMonthMob.classList.remove("hidden");
        proYearMob.classList.add("hidden");
        proMonthMob.classList.remove("hidden");
    }
})

const arcadeMob = document.getElementById("arcadeMob");
const advancedMob = document.getElementById("advancedMob");
const proMob = document.getElementById("proMob");



arcadeMob.addEventListener("click", () => {
    arcadeMob.classList.remove("border-[#D9D8DD]");
    arcadeMob.classList.add("bg-[#EEF5FF]", "border-[#6661A1]");
    advancedMob.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    advancedMob.classList.add("border-[#D9D8DD]");
    proMob.classList.add("border-[#D9D8DD]");
    proMob.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    plan = "arcade";
    console.log(plan)
})

advancedMob.addEventListener("click", () => {
    advancedMob.classList.remove("border-[#D9D8DD]");
    arcadeMob.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    advancedMob.classList.add("bg-[#EEF5FF]", "border-[#6661A1]");
    arcadeMob.classList.add("border-[#D9D8DD]");
    proMob.classList.add("border-[#D9D8DD]");
    proMob.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    plan = "advanced";
    console.log(plan)
})

proMob.addEventListener("click", () => {
    proMob.classList.remove("border-[#D9D8DD]");
    arcadeMob.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    advancedMob.classList.remove("bg-[#EEF5FF]", "border-[#6661A1]");
    proMob.classList.add("bg-[#EEF5FF]", "border-[#6661A1]");
    advancedMob.classList.add("border-[#D9D8DD]");
    arcadeMob.classList.add("border-[#D9D8DD]");
    plan = "pro";
    console.log(plan)
})