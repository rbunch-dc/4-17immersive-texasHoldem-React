import React, {Component} from 'react'

class Buttons extends Component{
	render(){
		return(
			<div className="col-sm-12 buttons">
				<div className="col-sm-4">
					<button className="btn btn-danger">Deal</button>
				</div>
				<div className="col-sm-2">
					<button className="btn btn-danger">Bet 10</button>
				</div>
				<div className="col-sm-2">
					<button className="btn btn-danger">Bet 100</button>
				</div>
				<div className="col-sm-2">				
					<button className="btn btn-danger">Check</button>
				</div>
				<div className="col-sm-2">				
					<button className="btn btn-danger">Fold</button>
				</div>

			</div>
		)
	}
}

export default Buttons;