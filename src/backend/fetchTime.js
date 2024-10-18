async function fetchTime(con, city) {
  const response = await fetch('https://worldtimeapi.org/api/timezone/America/Panama'); 
  const data = await response.json();

  return data;
};

export default fetchTime