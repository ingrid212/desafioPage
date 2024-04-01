const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const min = document.getElementById("min");
const seg = document.getElementById("seg");

const lancamento = "26 May 2024";

function countDown(){
  const datalanc = new Date(lancamento);
  const hoje = new Date();

  const segTotal = (datalanc - hoje) / 1000;

  const finalDias = Math.floor(segTotal/60/60/24);
  const finalHoras = Math.floor(segTotal/60/60)%24;
  const finalMinutos = Math.floor(segTotal/60)%60;
  const finalSegundos = Math.floor(segTotal)%60; 

  dia.innerHTML = `<strong>${finalDias}D</strong>`
  hora.innerHTML = `<strong>${finalHoras}H</strong>`
  min.innerHTML = `<strong>${finalMinutos}M</strong>`
  seg.innerHTML = `<strong>${finalSegundos}S</strong>`
}
countDown();
setInterval(countDown, 1000);

