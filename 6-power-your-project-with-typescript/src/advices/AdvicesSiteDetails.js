import { useParams } from 'react-router-dom';

export function AdvicesSiteDetails () {

	const { articleId } = useParams();

	return (
		<div> Kliknąłeś na id: { articleId } </div>
	)
}


