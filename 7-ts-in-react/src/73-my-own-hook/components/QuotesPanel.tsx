import { QuotesPanelBlock } from './QuotesPanelBlock';

function QuotesPanel ({ isLoading, quotes, title = 'Cytaty tylko Yoda' }: any ) {
	return (
		<section className="panel is-info">
			<p className="panel-heading">
				{title}
			</p>
			{ isLoading &&
				<div className="panel-block"> ładowanie... </div>
			}
			{ !isLoading &&
				quotes.map((q: any) => (<QuotesPanelBlock key={q.text} quote={q} />))
			}
		</section>
	)
}

export default QuotesPanel
