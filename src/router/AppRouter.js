import { Navigate, Route, Routes } from 'react-router-dom';
import { Products } from '../components/products';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={ <Products />  } />
			<Route path='/*' element={ <Navigate to='/' />  } />
		</Routes>
	)
}
