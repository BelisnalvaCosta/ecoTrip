document.getElementById('form').addEventListener('submit', async e => {
  e.preventDefault();

  const data = {
    distance: Number(distance.value),
    passengers: Number(passengers.value),
    transport: transport.value
  };

  const res = await fetch('http://localhost:3000/api/calculate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const json = await res.json();
  const div = document.getElementById('result');
  div.className = json.impact;
  div.textContent = `CO₂: ${json.co2.toFixed(2)} kg | Impacto: ${json.impact}`;
});