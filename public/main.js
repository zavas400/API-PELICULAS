fetch('/peliculas').then(response => response.json())
.then(data => {
        const tableBody = document.getElementById('tableBody');
        if (data.length === 0) {
            const row = tableBody.insertRow();
            alert('No hay peliculas que mostrar al momento.');
            row.insertCell(0).textContent = 'vacío';
            row.insertCell(1).textContent = 'vacío';
            row.insertCell(2).textContent = 'vacío';
            row.insertCell(3).textContent = 0;
            row.insertCell(4).textContent = 'vacío';
            row.insertCell(5).textContent = ['vacío'];
        } else {
            data.forEach(movie => {
                const row = tableBody.insertRow();
                const nombre = row.insertCell(0);
                const sinopsis = row.insertCell(1);
                const genero = row.insertCell(2);
                const duracion = row.insertCell(3);
                const director = row.insertCell(4);
                const elenco = row.insertCell(5);
                
                nombre.textContent = movie.name;
                sinopsis.textContent = movie.synopsis;
                genero.textContent = movie.genre;
                duracion.textContent = movie.duration;
                director.textContent = movie.director;
                elenco.textContent = movie.actors;
                
            });
        }
    })
    .catch(e => {
        console.error('tuve el error: ', e);
    });




