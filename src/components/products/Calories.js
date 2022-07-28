export const Calories = ({item}) => {
	const { name, calories } = item;

	return (
		<div className="card col-3 text-bg-light mb-3 px-0">
			<div className="card-header w-100">{name}</div>
			<div className="card-body">
				<h5 className="card-title">{`${calories} calorias`}</h5>
			</div>
		</div>
	)
}
