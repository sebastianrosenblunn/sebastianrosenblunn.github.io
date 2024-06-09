function showSidebar() {
  const sidebar = document.querySelector('.sidebar'); // Selecciona el elemento con la clase 'sidebar'
  sidebar.style.display = 'flex'; // Cambia el estilo de visualización para mostrar la barra lateral como una fila flexible
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar'); // Selecciona el elemento con la clase 'sidebar'
  sidebar.style.display = 'none'; // Oculta la barra lateral estableciendo su estilo de visualización en 'none'
}

// script.js

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <img src="${src}" alt="Imagen">
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-button').addEventListener('click', () => {
      modal.remove();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  });
});
