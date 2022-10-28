import { BlockQuote } from './BlockQuote'

export function MemorableQuotes({ isLoading, quotes = []}: any) {
	
	return (
		<section className="panel is-primary">
			<p className="panel-heading">
				Wszystkie cytaty
			</p>
			{
				isLoading &&
				<div className="panel-block"> ładowanie... </div>
			}
			{
				!isLoading &&
				quotes.map((q: any) => (<BlockQuote key={q.text} quote={q} />))
			}
		</section>
	)
}
