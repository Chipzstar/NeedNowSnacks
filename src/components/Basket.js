import React from 'react';
import basket from "../assets/basket.svg";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const Basket = () => {
	const history = useHistory();
	const snacks = useSelector(state => state.snacks)
	return (
		<div className="basket-container">
			<figure className="mx-5 d-inline-block">
				<img src={basket} alt="Basket" height={40} width={30}/>
				<figcaption className="basket-badge">&nbsp;{snacks.length}</figcaption>
			</figure>
			{snacks.length > 0 && (
				<div>
					<button onClick={() => history.push('/checkout')} className="btn btn-success btn-md btn">
						<span className="text-dark">Checkout</span>
					</button>
				</div>
			)}
		</div>
	);
};

export default Basket;
