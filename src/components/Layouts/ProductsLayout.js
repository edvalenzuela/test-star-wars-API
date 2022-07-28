import React from 'react'

export const ProductsLayout = ({children, text = ''}) => {
	return (
		<ul className="row justify-content-between">
				<p className="fw-bold text-decoration-underline">{text}</p>
				{ children }
		</ul>
	)
}
