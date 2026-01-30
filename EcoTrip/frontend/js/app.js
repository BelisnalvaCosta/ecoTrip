// Prevent native form submission (e.g., pressing Enter)
document.getElementById('form').addEventListener('submit', e => e.preventDefault());

// Use explicit button click to calculate
document.getElementById('calculate').addEventListener('click', async e => {
  e.preventDefault();

  const distanceEl = document.getElementById('distance');
  const passengersEl = document.getElementById('passengers');
  const transportEl = document.getElementById('transport');

  const data = {
    distance: Number(distanceEl.value),
    passengers: Number(passengersEl.value),
    transport: transportEl.value
  };

  try {
    const res = await fetch('http://localhost:3000/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Erro na requisição');
    }

    const json = await res.json();
    const div = document.getElementById('result');
    div.className = json.impact;
    div.textContent = `CO₂: ${json.co2.toFixed(2)} kg | Impacto: ${json.impact}`;
    console.log('Resultado recebido:', json);
  } catch (err) {
    console.error(err);
    const div = document.getElementById('result');
    div.className = '';
    div.textContent = 'Erro ao calcular. Verifique os dados.';
  }
});