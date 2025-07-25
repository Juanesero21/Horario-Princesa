function showInfo(nombre, creditos, prerequisitos) {
  const box = document.getElementById('infoBox');
  box.innerHTML = `
    <h3>${nombre}</h3>
    <p><strong>Créditos:</strong> ${creditos}</p>
    <p><strong>Prerrequisitos:</strong> ${prerequisitos}</p>
  `;
  box.classList.remove('hidden');
}
