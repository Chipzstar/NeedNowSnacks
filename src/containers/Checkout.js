import React, {Component} from 'react';
import logo from "../assets/logo.png";
import basket from "../assets/basket.svg";
import QuantityPicker from "../components/QuantityPicker/QuantityPicker";

class Checkout extends Component {
	render() {
		return (
			<div className={"container-fluid"}>
				<div className="header-container pb-5">
					<div className="logo">
						<img src={logo} alt={"NeedNowSnacks"} className="img-fluid"
						     height={90} width={230}/>
					</div>
					<div className="basket">
						<img src={basket} alt="Basket" height={40} width={30}/>
						<div className="basket-badge">1</div>
					</div>
				</div>
				<div className="flex-center row w-100 py-4">
					<header className="text-center font-weight-bold h1-responsive">Checkout&nbsp;</header>
				</div>
				{/*list of items boxes*/}
				<div className="">
					<div className="">
						<img src="" alt=""/>
						<div className="">
							<span>Item name</span>
							<span>Item price</span>
						</div>
						<div className="">
							<QuantityPicker max={5} min={0}/>
							<span>remove</span>
						</div>
					</div>
					<div>

					</div>
				</div>
				<div className="">
					<div className="">
						<span className=""></span>
						<span className=""></span>
					</div>
					<form action="" className="">
						<input type="text"/>
						<input type="text"/>
						<input type="text"/>
						<button>order</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Checkout;