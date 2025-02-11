document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const posts = document.querySelectorAll('.post');

    // Ocultar todos los posts al inicio
    posts.forEach(post => post.style.display = 'none');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.trim();  // Agregamos trim() para manejar espacios

        // Si el campo de búsqueda está vacío, ocultar todos los posts
        if (searchTerm === '') {
            posts.forEach(post => post.style.display = 'none');
            return;
        }

        // Mostrar todo si es "AA"
        if (searchTerm === 'AA') {
            posts.forEach(post => post.style.display = 'block');
            return;
        }

        // Convertir a minúsculas solo para la búsqueda de contenido
        const searchTermLower = searchTerm.toLowerCase();
        posts.forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const description = post.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(post.querySelectorAll('.tag'))
                .map(tag => tag.textContent.toLowerCase());

            if (title.includes(searchTermLower) || 
                description.includes(searchTermLower) || 
                tags.some(tag => tag.includes(searchTermLower))) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});
