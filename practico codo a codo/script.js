const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const showTimes = this.previousElementSibling;
        if (showTimes.style.display === 'none') {
            showTimes.style.display = 'block';
            this.textContent = 'Ocultar Horarios';
        } else {
            showTimes.style.display = 'none';
            this.textContent = 'Mostrar Horarios';
        }

        document.querySelector('.back-button').addEventListener('click', function() {
            window.location.href = 'CineCodo.html';
        });
    });
});
