import React from 'react'
import TopBar from './components/TopBar'

export function AppContextCommunication() {
	return (
		<div>
			<header className="hero is-primary mb-5">
				<div className="hero-body">
					<p className="title">
						<code>7.5</code> Context API
					</p>
				</div>
			</header>
			<main className="container">
				<TopBar title="Witaj w aplikacji z user'em" userName={''} isAuth={false} />
				<div className="is-flex is-justify-content-center">
					<button className="button is-info"> 🔑 Zaloguj </button>
				</div>
			</main>
		</div>
	)
}
