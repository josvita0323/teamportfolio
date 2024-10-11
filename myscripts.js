
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    const name = this.querySelector('input[name="Name"]').value;
    const email = this.querySelector('input[name="Email"]').value;
    const message = this.querySelector('textarea').value;

    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
        
        this.reset(); 
    }
});
