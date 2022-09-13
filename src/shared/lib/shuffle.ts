export const shuffle = (arr: any[]): any[] => {
  const arrCopy = [...arr];
  const randomIndex = (to: number) => {
    return Math.floor(Math.random() * to);
  };

  let loopSteps = arrCopy.length - 1;
  while (loopSteps > -1) {
    const currentRandomIndex = randomIndex(loopSteps);
    [arrCopy[loopSteps], arrCopy[currentRandomIndex]] = [
      arrCopy[currentRandomIndex],
      arrCopy[loopSteps],
    ];
    loopSteps--;
  }

  return arrCopy;
};
