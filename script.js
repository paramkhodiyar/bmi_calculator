document.addEventListener('DOMContentLoaded', function() {
    let modes = document.querySelectorAll(".mode");
    let body = document.querySelector("body");
    const form = document.querySelector("form");
    body.classList.add('light-theme');
    modes.forEach((mode) => {
        mode.addEventListener("click", () => {
            if (mode.id === "dark") {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
            }
        });
    });
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                if (dropdownContent.style.display === 'flex') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'flex';
                }
                e.stopPropagation();
            }
        });
    });
    form.addEventListener("submit", (f) => {
        f.preventDefault();
        const height = parseInt(document.querySelector("#height").value);
        const weight = parseInt(document.querySelector("#weight").value);
        const resultDiv = document.querySelector(".result");
        const bmiValueSpan = document.querySelector("#bmi-value");
        const bmiIndicator = document.querySelector("#bmi-indicator");
        if (isNaN(weight) || weight <= 0) {
            bmiValueSpan.textContent = "Invalid Weight";
            return;
        }
        if (isNaN(height) || height <= 0) {
            bmiValueSpan.textContent = "Invalid Height";
            return;
        }
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        bmiValueSpan.textContent = bmi;
        resultDiv.classList.add('visible');
        let bmiPosition;
        if (bmi < 18.5) bmiPosition = "5%";
        else if (bmi >= 18.5 && bmi < 25) bmiPosition = "30%";
        else if (bmi >= 25 && bmi < 30) bmiPosition = "65%";
        else bmiPosition = "90%";
        bmiIndicator.style.left = bmiPosition;
    });
    document.addEventListener('click', function(e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                dropdownContent.style.display = 'none';
            }
        });
    });
});