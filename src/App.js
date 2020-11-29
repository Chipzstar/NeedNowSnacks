import React, {Component} from 'react';
import Checkout from "./containers/Checkout";

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
              <Checkout/>
			</div>
		);
	}
}

export default App;