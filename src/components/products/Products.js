import { useFetch, useSweet } from "../../hooks/";
import { ProductsLayout } from "../Layouts/ProductsLayout";
import { Calories, Fats, CardLuke, Loading } from "./";

export const Products = () => {
	
	const { getCalories, getGrasa, getTotal } = useSweet();
	const { dataAPI, fetching } = useFetch('https://swapi.dev/api/people');

	return (
		<div className="container mt-5">
			<h1 className="text-center my-5">Entrevista técnica front end <small className="text-muted">Data Observatory</small></h1>
			<ProductsLayout 
				text={"1.- Obtener aquellos postres bajos en calorías (< 300 kcal/100g)"}
			>
				{
					getCalories().map( item => (
						<Calories key={item.name} item={item} />
					))
				}
			</ProductsLayout>

			<ProductsLayout 
				text={"2.- Obtener costo total de los postres con más de 4 g de proteínas"}
			>
				<p className="fs-3 fw-semibold">{`Costo total de los productos = $ ${getTotal()} pesos`}</p>
			</ProductsLayout>

			<ProductsLayout 
				text={"3.- Obtener los 3 postres con menos grasa"}
			>
				{
					getGrasa().slice(0, 3).map( item => (
						<Fats key={item.name} item={item} />
					))
				}
			</ProductsLayout>

			{
				!fetching ? (
					dataAPI.map((item, i) => (
						<CardLuke key={i} item={item} />
					))
				) : (
					<Loading />
				)
			}
		</div>
	)
}
