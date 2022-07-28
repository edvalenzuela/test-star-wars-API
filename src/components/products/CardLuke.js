import { useEffect, useState } from "react";
import { DetailPlanet, Loading } from "./";

export const CardLuke = ({item}) => {
	const { name, homeworld, height, hair_color, skin_color, eye_color, gender } = item;

	const [dataDetail, setdataDetail] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getDataDetail = async() => {
			try {
				const resp = await fetch(`${homeworld}`);
				const data = await resp.json();
				setdataDetail(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error)
			}
		}
		getDataDetail();
	}, [homeworld]);
	
	return (
		<>
			<h2 className="mb-3">Datos del personaje</h2>
			<div className="card text-bg-primary mb-3">
				<div className="card-header">{`Nombre : ${name}`}</div>
				<div className="card-body">
					<p className="card-text">{`Altura : ${height}`}</p>
					<p className="card-text">{`Color de pelo : ${hair_color}`}</p>
					<p className="card-text">{`Color de piel : ${skin_color}`}</p>
					<p className="card-text">{`Color de ojos : ${eye_color}`}</p>
					<p className="card-text">{`Genero : ${gender}`}</p>
				</div>
			</div>
			{
				!isLoading ? (
					<>
						<h2 className="mb-3">Datos del planeta</h2>
						<DetailPlanet key={dataDetail?.name} item={dataDetail}/>	
					</>
				) : <Loading />
			}
		</>
	)
}
