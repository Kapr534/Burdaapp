document.getElementById('submitButton').addEventListener('click', function() {
    var passwordInput = document.getElementById('Textinput').value;
    if (passwordInput === "Burdovapleska") {
        document.getElementById('podminky').style.display = 'block';
        document.getElementById('podminkyButton').addEventListener('click', function() {
            var podminky = true;
            if (podminky === true) {
                document.getElementById('song1Container').style.display = 'block';
            }
        });
    }
});