export const getRandomNumber = () => (Math.random() * 100).toFixed(0);

export const isPair = number => number % 2 === 0;

export const calculateTime = addHours => {
  const now = new Date();
  
  const hours = parseInt(now.getHours().toString().padStart(2, '0')) + addHours;
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}`;
}
