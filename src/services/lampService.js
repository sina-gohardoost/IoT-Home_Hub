const API_URL = 'http://localhost:3000'; // backend => must be in .env for professional look

const getLampStatus = async () => {
  const res = await fetch(`${API_URL}/lamp`);
  if (!res.ok) throw new Error('Failed to fetch lamp status');
  return res.json();
};

const setLampStatus = async ({ isOn, brightness, colorTemperature }) => {
  const res = await fetch(`${API_URL}/lamp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isOn, brightness, colorTemperature })
  });
  if (!res.ok) throw new Error('Failed to update lamp status');
  return res.json();
};

export default { getLampStatus, setLampStatus };
