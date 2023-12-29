// Page one
let formContainer = document.getElementsByClassName("form-field")[0];
let bttnContainer = document.getElementsByClassName("first-bttn")[0];
let infoBtnCon = document.getElementsByClassName("info-bttn")[0];
let bttn = bttnContainer.getElementsByTagName("button");
let errMessage = formContainer.getElementsByTagName("span");
let inputValues = formContainer.getElementsByTagName("input");
let errBorder = formContainer.getElementsByClassName("errBorder");

function formValidatioin() {
    let isValid = true;
    let firstEmptyInput = null;

    for (let i = 0; i < inputValues.length; i++) {
        const input = inputValues[i];
        const errId = "error" + input.id.slice(-1);
        const borderId = "border" + input.id.slice(-1);
        if (!input.checkValidity() || input.value.trim() == "") {
            document.getElementById(errId).textContent = input.validationMessage;
            document.getElementById(borderId).classList.add("active");
            
            isValid = false;
            if (firstEmptyInput == null) {
                firstEmptyInput = input;
            }
        } else {
            input.classList.remove("active");
            document.getElementById(errId).textContent = "";
            document.getElementById(borderId).classList.remove("active");
        }

    }
    if (!isValid) {
        firstEmptyInput.focus();
        return;
    } else {
        nextPage();
    }
}

// Button Integration 
let currentPage = sessionStorage.getItem("currentPage") || 1;
let nextButton = document.getElementsByClassName("next");
let prevButton = document.getElementsByClassName("prev");
const pageNumb = document.getElementsByClassName("page-num");

for (let i = 0; i < nextButton.length; i++) {
    nextButton[i].addEventListener("click", () => {
        nextPage();
    });
}
for (let i = 0; i < prevButton.length; i++) {
    prevButton[i].addEventListener("click", () => {
        prevPage();
    });
}
function showPage(pageNumber) {
    const pages = document.getElementsByTagName("section");
    for (let i of pages) {
        i.classList.remove("active");
    }
    for (let i of pageNumb) {
        i.classList.remove("img-active");
    }
    document.getElementById(`page${currentPage}`).classList.add("active");
    if (currentPage == 5) {
        currentPage = 4;
        document.getElementById(`num${currentPage}`).classList.add("img-active");
    } 
    document.getElementById(`num${currentPage}`).classList.add("img-active");
    sessionStorage.setItem("currentPage", pageNumber);
}

function nextPage() {
    if (currentPage < 5) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage  > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

showPage(currentPage);

for (let i = 0; i < pageNumb.length; i++) {
    pageNumb[i].addEventListener("click", () => {
        let numId = pageNumb[i].id.slice(-1);
        currentPage = numId;
        showPage(currentPage);
    });
}
bttn[0].addEventListener("click", () => {
    formValidatioin();
});


// page two
let planCheck = document.getElementById("my");
let freePlan = document.querySelectorAll(".free");
let month = document.querySelectorAll(".month");
let planCards = document.querySelectorAll(".cad");
let planCheckbox = document.querySelectorAll("[name='none']");

// & page 3 

let page3 = document.getElementById("page3");
let page3Input = page3.getElementsByTagName("input");
let page3Label = page3.getElementsByTagName("label");
let storedItem = sessionStorage.getItem("selectedItem") || 1;

let total = document.getElementById("total-value");
let totalValue = 0;
function monthYear() {
    freePlan.forEach((item) => {
        if (planCheck.checked) {
            item.classList.remove("free");
        } else {
            item.classList.add("free");
        }
    });
    
    month.forEach((item) => {
        if (!planCheck.checked) {
            item.classList.remove("free");
        } else {
            item.classList.add("free");
        }
    });
}

planCheck.addEventListener("change", () => {
    monthYear();
});

planCheckbox[0].addEventListener("change", () => {
    if (planCheckbox[0].checked) {
        planCards[0].classList.add("checked");
        planCards[1].classList.remove("checked");
        planCards[2].classList.remove("checked");
        planCheckbox[1].checked = false;
        planCheckbox[2].checked = false;
    } else {
        planCards[0].classList.remove("checked");
    }
});

planCheckbox[1].addEventListener("change", () => {
    if (planCheckbox[1].checked) {
        planCards[1].classList.add("checked");
        planCards[0].classList.remove("checked");
        planCards[2].classList.remove("checked");
        planCheckbox[0].checked = false;
        planCheckbox[2].checked = false;
    } else {
        planCards[1].classList.remove("checked");
    }
});

planCheckbox[2].addEventListener("change", () => {
    if (planCheckbox[2].checked) {
        planCards[2].classList.add("checked");
        planCards[0].classList.remove("checked");
        planCards[1].classList.remove("checked");
        planCheckbox[0].checked = false;
        planCheckbox[1].checked = false;
    } else {
        planCards[2].classList.remove("checked");
    }
});

window.addEventListener("load", () => {
    monthYear();

    if (!planCheckbox[0].checked && !planCheckbox[1].checked && !planCheckbox[2].checked) {
        planCheckbox[0].checked = true;
    }

    if (planCheckbox[0].checked) {
        planCards[0].classList.add("checked");
        planCards[1].classList.remove("checked");
        planCards[2].classList.remove("checked");
        planCheckbox[1].checked = false;
        planCheckbox[2].checked = false;
    } else {
        planCards[0].classList.remove("checked");
    }
    
    if (planCheckbox[1].checked) {
        planCards[1].classList.add("checked");
        planCards[0].classList.remove("checked");
        planCards[2].classList.remove("checked");
        planCheckbox[0].checked = false;
        planCheckbox[2].checked = false;
    } else {
        planCards[1].classList.remove("checked");
    }
    
    if (planCheckbox[2].checked) {
        planCards[2].classList.add("checked");
        planCards[0].classList.remove("checked");
        planCards[1].classList.remove("checked");
        planCheckbox[0].checked = false;
        planCheckbox[1].checked = false;
    } else {
        planCards[2].classList.remove("checked");
    }
});

// Page 3

function check() {
    for (let i = 0; i < page3Input.length; i++) {
        page3Input[i].addEventListener("change", () => {
            if (page3Input[i].checked) {
                page3Label[i].classList.add("checked");
            } else {
                page3Label[i].classList.remove("checked");
            }
        });

        window.addEventListener("load", () => {
            for (let i = 0; i < page3Label.length; i++) {
                if (page3Input[i].checked) {
                    page3Label[i].classList.add("checked");
                } else {
                    page3Label[i].classList.remove("checked");
                }
            }
        });
    }

}
check();

// Page 4 (Finishing Up)
let plan = document.getElementById("item");
let planCost = document.getElementById("cost");
let subCheck = document.getElementsByClassName("subCheck");
let changeCheck = document.getElementById("change");
let totalV = document.getElementById("total-value");
let visible = document.getElementsByClassName("check");
let tap = document.getElementById("tap");

function checkout() {
    if (planCheckbox[0].checked) {
        plan.innerText = planCheck.checked ? "Arcade (Yearly)" : "Arcade (monthly)";
        planCost.innerText = planCheck.checked ? "$90/yr" : "$9/mo";
        planCheckbox[0].value = planCheck.checked ? 90 : 9;
    }
    
    if (planCheckbox[1].checked) {
        plan.innerText = planCheck.checked ? "Advanced (Yearly)" : "Advanced (monthly)";
        planCost.innerText = planCheck.checked ? "$120/yr" : "$12/mo";
        planCheckbox[1].value = planCheck.checked ? 120 : 12;
    }
    
    if (planCheckbox[2].checked) {
        plan.innerText = planCheck.checked ? "Pro (Yearly)" : "Pro (monthly)";
        planCost.innerText = planCheck.checked ? "$150/yr" : "$15/mo";
        planCheckbox[2].value = planCheck.checked ? 150 : 15;
    }

    if (page3Input[0].checked) {
        page3Input[0].value = planCheck.checked ? 10 : 1;
    }

    if (page3Input[1].checked) {
        page3Input[1].value = planCheck.checked ? 20 : 2;
    }

    if (page3Input[2].checked) {
        page3Input[2].value = planCheck.checked ? 20 : 2;
    }

    if (planCheck.checked) {
        subCheck[0].innerText = "+$10/yr";
        subCheck[1].innerText = "+$20/yr";
        subCheck[2].innerText = "+$20/yr";
        tap.innerText = "Total (per year)";
    } else {
        subCheck[0].innerText = "+$1/mo";
        subCheck[1].innerText = "+$2/mo";
        subCheck[2].innerText = "+$2/mo";
        tap.innerText = "Total (per month)";
    }

    totalCheckout();
}

changeCheck.addEventListener("click", () => {
    planCheck.checked = !planCheck.checked;

    const event = new Event("change");
    planCheck.dispatchEvent(event);
});

planCheck.addEventListener("change", () => {
    checkout();
});

checkout();

window.addEventListener("load", () => {
    if (page3Input[0].checked) {
        visible[0].classList.remove("van");
    } else {
        visible[0].classList.add("van");
    }

    if (page3Input[1].checked) {
        visible[1].classList.remove("van");
    } else {
        visible[1].classList.add("van");
    }

    if (page3Input[2].checked) {
        visible[2].classList.remove("van");
    } else {
        visible[2].classList.add("van");
    }

    // totalValue = 9;
    // total.innerText = `$${totalValue}/mo`;
});

page3Input[0].addEventListener("change", () => {
    if (page3Input[0].checked) {
        visible[0].classList.remove("van");
    } else {
        visible[0].classList.add("van");
    }
    totalCheckout();
});

page3Input[1].addEventListener("change", () => {
    if (page3Input[1].checked) {
        visible[1].classList.remove("van");
    } else {
        visible[1].classList.add("van");
    }
    totalCheckout();
});

page3Input[2].addEventListener("change", () => {
    if (page3Input[2].checked) {
        visible[2].classList.remove("van");
    } else {
        visible[2].classList.add("van");
    }
    totalCheckout();
});


for (let i = 0; i < planCheckbox.length; i++) {
    planCheckbox[i].addEventListener("change", () => {
        checkout();
    });
}





function totalCheckout() {
    totalValue = 0;
    if (planCheckbox[0].checked) {
        totalValue += parseInt(planCheckbox[0].value);
    }
    
    if (planCheckbox[1].checked) {
        totalValue += parseInt(planCheckbox[1].value);
    }
    
    if (planCheckbox[2].checked) {
        totalValue += parseInt(planCheckbox[2].value);
    }
    
    if (page3Input[0].checked) {
        totalValue += parseInt(page3Input[0].value);
    }
    
    if (page3Input[1].checked) {
        totalValue += parseInt(page3Input[1].value);
    }
    
    if (page3Input[2].checked) {
        totalValue += parseInt(page3Input[2].value);
    }
    
    if (planCheck.checked) {
        total.innerText = `$${totalValue}/yr`;
    } else {
        total.innerText = `$${totalValue}/mo`;
    }
}

totalCheckout();




