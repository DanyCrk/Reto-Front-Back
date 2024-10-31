function incluirHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach((el) => {
      const file = el.getAttribute('include-html');
      if (file) {
          fetch(file)
              .then(response => response.text())
              .then(data => {
                  el.innerHTML = data;
                  el.removeAttribute('include-html');
              })
              .catch(err => console.log('Error:', err));
      }
  });

}


document.addEventListener('DOMContentLoaded', incluirHTML);
function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenido').innerHTML = data;

            // Verifica si el script ya está presente antes de agregarlo
            if (url.includes("listaTareas.html")) {
                const script = document.createElement('script');
                script.src = 'js/lista.js';
                document.body.appendChild(script);
            }
            if (url.includes("reloj.html")) {
                const script = document.createElement('script');
                script.src = 'js/reloj.js';
                document.body.appendChild(script);
            }
        })
        .catch(error => console.log('Error al cargar contenido:', error));
}


