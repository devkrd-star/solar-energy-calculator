const $=id=>document.getElementById(id);
const fmt=n=>Number.isInteger(n)?n.toString():n.toFixed(2);

function calculate(){
  const daily=+$('dailyEnergy').value;
  const sun=+$('sunHours').value;
  const panel=+$('panelPower').value;
  const efficiency=+$('efficiency').value/100;
  const autonomy=+$('autonomy').value;
  const dod=+$('dod').value/100;
  const inverterFactor=+$('inverterFactor').value/100;

  if(!daily||!sun||!panel||!efficiency||!autonomy||!dod||!inverterFactor) return;

  const solarKw=daily/(sun*efficiency);
  const panels=Math.ceil((solarKw*1000)/panel);
  const actualArray=panels*panel/1000;
  const battery=daily*autonomy/dod;
  // A practical first estimate when peak-load data is unavailable.
  const estimatedPeak=daily/5;
  const inverter=Math.max(1,estimatedPeak*inverterFactor);
  const production=actualArray*sun*efficiency;

  $('solarSize').textContent=fmt(actualArray);
  $('panelCount').textContent=`${panels} × ${panel} W panels`;
  $('inverterSize').textContent=fmt(inverter);
  $('batterySize').textContent=fmt(battery);
  $('production').textContent=fmt(production);
}

$('calculator').addEventListener('submit',e=>{e.preventDefault();calculate()});
calculate();