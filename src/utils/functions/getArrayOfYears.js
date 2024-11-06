function getArrayOfYears(start, end = new Date().getFullYear()) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

export default getArrayOfYears;
