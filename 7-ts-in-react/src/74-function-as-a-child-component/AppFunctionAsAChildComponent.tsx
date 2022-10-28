import { useEffect, useState } from 'react'
import { MemorableQuotes } from './components/MemorableQuotes'
import { OnlyYodaQuotes } from './components/OnlyYodaQuotes'
import { starWarsQuotesService } from './services/swQuotesService'

function QuotesProvider({ children }: any) {

	const [isLoading, setLoading] = useState(false)
	const [quotes, setQuotes] = useState<any[]>([])

	useEffect(() => {
		setLoading(true)
		starWarsQuotesService.getAll()
			.then((quotes) => {
				setQuotes(quotes)
			})
			.finally(() => setLoading(false))
	}, [])


	return children({isLoading, quotes})
}


export function AppFunctionAsAChildComponent() {
	return (
		<>
			<header className="hero is-primary mb-5">
				<div className="hero-body">
					<p className="title">
						<code>7.4</code> Function as a Child component
					</p>
				</div>
			</header>
			<main className="container">
				<div className="columns">
					<QuotesProvider>
						{
							(props: any) => (
								<>
									<div className="column">
										<MemorableQuotes {...props} />
									</div>
									<div className="column">
										<OnlyYodaQuotes {...props} />
									</div>
								</>
							)
						}
					</QuotesProvider>

				</div>
			</main>
		</>
	)
}
