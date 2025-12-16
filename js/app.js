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

const btnTema = document.getElementById("toggleTema");
btnTema?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const formContato = document.getElementById("formContato");
const outContato = document.getElementById("resultadoContato");

formContato?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome")?.value ?? "";
  const msg = document.getElementById("msg")?.value ?? "";
  if (outContato) outContato.textContent = `Recebido de ${nome}: ${msg}`;
});

console.log("app ok"); 
