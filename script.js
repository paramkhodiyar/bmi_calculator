document.addEventListener('DOMContentLoaded', function () {
    let modes = document.querySelectorAll(".mode");
    let body = document.querySelector("body");
    const form = document.querySelector("form");
    let header = document.querySelector("#header")
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
        dropdown.addEventListener('click', function (e) {
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
        resultDiv.classList.add("visible");
    
        let bmiPosition;
        
        if (bmi <= 18.5) {
            bmiPosition = ((bmi - 15) / (18.5 - 15)) * 20; 
        } else if (bmi <= 25) {
            bmiPosition = 20 + ((bmi - 18.5) / (25 - 18.5)) * 30; 
        } else if (bmi <= 30) {
            bmiPosition = 50 + ((bmi - 25) / (30 - 25)) * 25; 
        } else {
            bmiPosition = 75 + ((bmi - 30) / (40 - 30)) * 25; 
        }
    
        bmiIndicator.style.left = `${Math.min(Math.max(bmiPosition, 0), 100)}%`;
    });
    
    document.addEventListener('click', function (e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                dropdownContent.style.display = 'none';
            }
        });
    });
});