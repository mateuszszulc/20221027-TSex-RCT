import { Link, Outlet } from 'react-router-dom';

function AdvicesSite () {
	return (
		<div>
			  <h2>Podpowiadamy, co wybrać</h2>
				<div className="row">
					<div className="col-4">
						<ul className="list-group">
						   <li className="list-group-item">
							   <Link to="1" > Super sprawy 1 </Link>
						   </li>
							<li className="list-group-item">
								<Link to="3" > Super sprawy 3 </Link>
							</li>
							<li className="list-group-item">
								<Link to={`45`} > Fajne rzeczy 45 </Link>
							</li>
						</ul>
					</div>
					<div className="col-8">
							<Outlet/>
					</div>
				</div>
		</div>
	)
}

export default AdvicesSite
