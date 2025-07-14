function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".contenido");
  secciones.forEach((sec) => sec.classList.remove("activo"));
  document.getElementById(id).classList.add("activo");
}

const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1yiJIXGTr4dF43d6z-MXvzVGsbfKEo-PGpy1gsyOoZ3GYbtyRUId6VQNC5v3JSEFUyvxVM_W2uanV/pubhtml';

    function showMenu(data, tabletop) {
      const contenedor = document.getElementById('menu');
      let categoriaActual = "";

      data.forEach(item => {
        if (item.Categoría !== categoriaActual) {
          const cat = document.createElement('div');
          cat.className = "categoria";
          cat.textContent = item.Categoría;
          contenedor.appendChild(cat);
          categoriaActual = item.Categoría;
        }

        const div = document.createElement('div');
        div.className = "producto";
        div.innerHTML = `<strong>${item.Producto}</strong> - ${item.Precio}`;
        contenedor.appendChild(div);
      });
    }

    Tabletop.init({
      key: publicSpreadsheetUrl,
      callback: showMenu,
      simpleSheet: true
    });