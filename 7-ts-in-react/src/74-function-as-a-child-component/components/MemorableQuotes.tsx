import { QuotesLoadingData } from '../providers/QuotesProvider'
import { BlockQuote } from './BlockQuote'

type MemorableQuotesProps = {title?: string} & QuotesLoadingData

export function MemorableQuotes({ isLoading, quotes = [], title = ''}: MemorableQuotesProps) {
	
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
