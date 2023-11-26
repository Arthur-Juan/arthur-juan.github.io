 // Função para atualizar os resultados com base nos checkboxes selecionados
function atualizarFiltros() {
    const filtro1 = document.getElementById('filtro1').checked;
    const filtro2 = document.getElementById('filtro2').checked;
    const filtro3 = document.getElementById('filtro3').checked;

    const resultados = document.querySelectorAll('.content li');

    resultados.forEach(resultado => {
        resultado.style.display = 'none';
        if ((filtro1 && resultado.classList.contains('filtro1')) ||
            (filtro2 && resultado.classList.contains('filtro2')) ||
            (filtro3 && resultado.classList.contains('filtro3'))) {
            resultado.style.display = 'block';
        }
    });
}

// Adicione eventos de alteração aos checkboxes
document.getElementById('filtro1').addEventListener('change', atualizarFiltros);
document.getElementById('filtro2').addEventListener('change', atualizarFiltros);
document.getElementById('filtro3').addEventListener('change', atualizarFiltros);
