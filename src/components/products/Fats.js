export const Fats = ({item}) => {
	const { name, fat } = item;

	return (
		<div className="card col-3 text-bg-warning mb-3 px-0">
			<div className="card-header w-100">{name}</div>
			<div className="card-body">
				<h5 className="card-title">{`${fat} grasa`}</h5>
			</div>
		</div>
	)
}
