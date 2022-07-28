import { useEffect, useState } from 'react'

export const useFetch = (url = '') => {
	const [dataAPI, setDataAPI] = useState([]);
  const [fetching, setFetching] = useState(true);

	const NAME = 'Luke Skywalker';
	
	useEffect(() => {
		const getData = async()=>{
			try {
					const resp = await fetch(url);
					const {results} = await resp.json();
					setDataAPI(results.filter( item => item?.name === NAME));
					setFetching(false);
			} catch (error) {
				console.log(error);
			}
		}
		getData();
}, [url])
	
	return {
		dataAPI,
		fetching
	}
}
