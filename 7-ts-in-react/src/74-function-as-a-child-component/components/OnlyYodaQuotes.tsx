import { BlockQuote } from './BlockQuote'

export function OnlyYodaQuotes({ isLoading, quotes = [] }: any) {

	const yodaQuotes = quotes.filter((q: any) => q.author === 'Yoda')

	return (
		<section className="panel is-info">
			<p className="panel-heading">
				Cytaty tylko Yoda
			</p>
			{isLoading &&
				<div className="panel-block"> ładowanie... </div>
			}
			{!isLoading &&
				yodaQuotes.map((q: any) => (<BlockQuote key={q.text} quote={q} />))
			}
		</section>
	)
}
