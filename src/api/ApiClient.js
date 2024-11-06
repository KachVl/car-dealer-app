const BASE_URL =
  'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json';

export async function getData() {
  const data = await fetch(BASE_URL).then((response) => response.json());

  return data;
}

export async function getDataByParams(makeId, year) {
  const data = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  ).then((response) => response.json());

  return data;
}
