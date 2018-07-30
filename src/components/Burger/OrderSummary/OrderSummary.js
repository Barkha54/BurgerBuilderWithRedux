import React, { Component } from 'react';
import Aux from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btntype='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btntype='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

// class OrderSummary extends Component {
//     componentWillUpdate() {
//         console.log('[OrderSummary] WillUpdate');
//     }
//
//     render() {
//         const ingredientSummary = Object.keys(this.props.ingredients)
//             .map(igKey => {
//                 return (
//                     <li key={igKey}>
//                         <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
//                     </li>)
//             });
//         return (
//             <Aux>
//                 <h3>Your Order</h3>
//                 <p>A delicious burger with the following ingredients:</p>
//                 <ul>
//                     {ingredientSummary}
//                 </ul>
//                 <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
//                 <p>Continue to Checkout?</p>
//                 <Button btntype='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
//                 <Button btntype='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
//             </Aux>
//         );
//     }
// }

export default orderSummary;
