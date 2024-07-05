import axios from "axios"

export async function fetchCars(){
	const headers = {
		  'x-rapidapi-key': 'd836f6b905msh213416dbfe7ed99p135b42jsnea914816b7ed',
   		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const response  = await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
		{
		headers: headers,
	});

	return response.data;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};