import { dataProducts } from "../utils/data"

export const useSweet = () => {
	const getCalories = () => (
		dataProducts.filter( ({calories}) => ( calories < 300 ))
	)

	const getTotal = () => (
		dataProducts
		.filter( ({protein}) => protein > 4)
		.reduce((total, item) => total + item?.price, 0)
	)

	const getGrasa = () => {
		return dataProducts.sort((a, b) => {
			if (a?.fat > b?.fat) {
				return 1;
			}
			if (a?.fat < b?.fat) {
				return -1;
			}
			return 0;
		});
	}

	return {
		getCalories,
		getTotal,
		getGrasa
	}
}
