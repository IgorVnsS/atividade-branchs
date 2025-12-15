let valor = 0;

const elValor = document.getElementById("valor");
const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");

function render() {
  if (elValor) elValor.textContent = String(valor);
}

btnMais?.addEventListener("click", () => {
  valor += 1;
  render();
});

btnMenos?.addEventListener("click", () => {
  valor -= 1;
  render();
});

render();

console.log("app ok"); 
