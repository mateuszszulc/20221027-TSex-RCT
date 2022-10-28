import { Component } from 'react'
import { BlockQuote } from './BlockQuote'
import swQuotesService from '../services/swQuotesService'
import { Quote } from '../../74-function-as-a-child-component/model/Quote'

type MyProps = {
	title: string
}
type MyState =  {
	isLoading: boolean,
	quotes: Quote[],
	error?: Error
}

class MemorableQuotes extends Component<MyProps, MyState> {

	state: MyState = {
		isLoading: false,
		quotes: [],
		error: undefined
	}

	loadAllTheQuotes() {
		this.setState({isLoading: true, error: undefined})
		swQuotesService.getAll()
			.then((quotes) => {
				this.setState({quotes, isLoading: false})
			})
			.catch((error: Error) => {
				this.setState({error, isLoading: false})
			})
	}

	componentDidMount () {
		this.loadAllTheQuotes();
	}

	render () {
		const { title } = this.props
		const { isLoading, quotes, error } = this.state;

		return (
			<section className="panel is-info">
				<p className="panel-heading">
					{ title }
				</p>
				<div className="panel-block is-justify-content-right">
					<button className="button" onClick={() => this.loadAllTheQuotes() }> 🔁 Odśwież </button>
				</div>
				{
					isLoading &&
					<div className="panel-block is-justify-content-center p-4">
						<div className="notification is-info is-light"> ⌛ ładowanie... </div>
					</div>
				}
				{
					!isLoading &&
					!error &&
					quotes.map((q: any) => <BlockQuote key={q.text} quote={q} />)
				}
				{
					error &&
					<div className="panel-block is-justify-content-center p-4">
						<div className="notification is-danger is-light">{(error as any).message}</div>
					</div>
				}
			</section>
		)
	}
}

export default MemorableQuotes
