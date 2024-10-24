async function fetchTime(location) {
  const response = await fetch(`https://worldtimeapi.org/api/timezone/${location}`); 
  const data = await response.json();

  return data;
};

export default fetchTime