
function openModal(movieId) {
    var modal = document.getElementById("movieModal");
    var title = document.getElementById("movie-title");
    var description = document.getElementById("movie-description");

    
    if (movieId === 'movie1') {
        title.textContent = 'JUJUTSU KAISEN';
        description.textContent = 'Yuta Okkotsu es un chico de instituto bastante nervioso con un grave problema: Su amigo Rika se ha convertido en un Curse y no le deja a solas. Ya que Rika no es un Curse ordinario, capta la atención de Satoru Gojo, un profesor del Instituto Jujutsu, donde los exorcistas aprenden a combatir a los Curse. Gojo convence a Yuta para enrolarse en al academia... ¿Podrá aprender Yuta a controlar al Curse que le atormenta?.';
        title.style.color = "#000";
    } else if (movieId === 'movie2') {
        title.textContent = 'Los indestructibles 1';
        description.textContent = 'Un mercenario dirige un grupo heterogéneo de pistoleros para derrocar a un déspota, un trabajo que ninguna unidad militar oficial está dispuesta a realizar.';
        title.style.color = "#000"; 
    } else if (movieId === 'movie3') {
        title.textContent = 'La favorita';
        description.textContent = 'A principios del siglo XVIII, Inglaterra está en guerra con Francia y la reina Anne delega sus responsabilidades en su amiga Lady Sarah porque tiene problemas de salud. La llegada de una sirvienta dotada de un talento especial, Abigaíl, pone en peligro la posición de Sarah.';
        title.style.color = "#000"; 
    } 
    else if (movieId === 'movie5') {
        title.textContent = 'Halloween(2018)';
        description.textContent = 'Descripción de la Película 4: Ciencia ficción futurista con efectos visuales sorprendentes.';
        title.style.color = "#000"; 
    } else if (movieId === 'movie6') {
        title.textContent = '¿Que paso ayer?';
        description.textContent = 'Descripción de la Película 5: Una comedia que te hará reír sin parar.';
        title.style.color = "#000"; 
    } else if (movieId === 'movie7') {
        title.textContent = 'Black widow';
        description.textContent = 'Descripción de la Película 6: Acción intensa y secuencias épicas.';
        title.style.color = "#000"; 
    } else if (movieId === 'movie8') {
        title.textContent = 'Dune';
        description.textContent = 'Descripción de la Película 7: Un drama emocional que toca el alma.';
        title.style.color = "#000"; 
    } else if (movieId === 'movie9') {
        title.textContent = 'Lost in translation';
        description.textContent = 'Durante un viaje a Japón, Bob, un famoso actor, conoce a Charlotte. Ambos comparten el descontento con sus vidas lo que origina una sólida amistad.';
        title.style.color = "#000"; 
    } else if (movieId === 'movie10') {
        title.textContent = 'Berserk: The golden age arc';
        description.textContent = 'En una época medieval oscura y violenta, un mercenario destaca por encima de todos los demás por su ferocidad y habilidades. Este hombre llamado Guts es contratado para luchar por el sueño inquebrantable de un líder.';
        title.style.color = "#000"; 
    } else if (movieId === 'movie11') {
        title.textContent = 'La novia de Chucky ';
        description.textContent = 'Chucky, el muñeco poseído por un asesino en serie, descubre al compañero perfecto para matar y revivir en el cuerpo de otro muñeco.';
        title.style.color = "#000"; 
    }
    else if (movieId === 'movie4') {
        title.textContent = 'La propuesta';
        description.textContent = 'Margaret, una famosa e influyente editora de Nueva York, está a punto de ser deportada a Canadá. Para evitarlo, declara que está comprometida con su ayudante Andrew. Él está dispuesto a participar en la farsa, pero imponiendo ciertas condiciones.';
        title.style.color = "#000"; 
    }

    modal.style.display = "flex";
}


function closeModal() {
    var modal = document.getElementById("movieModal");
    modal.style.display = "none";
}


window.onclick = function(event) {
    var modal = document.getElementById("movieModal");
    if (event.target == modal) {
        closeModal();
    }
}


document.getElementById("genre").addEventListener("change", function() {
    var selectedGenre = this.value;
    var movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie) {
        if (selectedGenre === 'all' || movie.getAttribute('data-genre') === selectedGenre) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
});



