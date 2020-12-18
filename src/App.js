import React, {Component} from 'react';
import Checkout from "./containers/Checkout";
import Home from "./containers/Home";
import { Route, Switch,} from "react-router-dom";
import Payment from "./containers/Payment";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/checkout" component={Checkout}/>
				<Route exact path="/payment" component={Payment}/>
			</Switch>
		);
	}
}

export default App;