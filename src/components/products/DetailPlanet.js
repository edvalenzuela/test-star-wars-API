
export const DetailPlanet = ({item}) => {
	const { name, climate, gravity, terrain, population } = item;
 
	return (
		<>
			<div className="card text-bg-secondary mb-3">
				<div className="card-header">{`Nombre : ${name}`}</div>
				<div className="card-body">
					<p className="card-text">{`Clima : ${climate}`}</p>
					<p className="card-text">{`Gravedad : ${gravity}`}</p>
					<p className="card-text">{`Terreno : ${terrain}`}</p>
					<p className="card-text">{`Población : ${population}`}</p>
				</div>
			</div>
		</>
	)
}
