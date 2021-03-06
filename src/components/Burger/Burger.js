import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
import { withRouter} from 'react-router-dom';

//withRouter is a HOC which will contain the history and match in props even in components nested in BurgerBuilder. By default, it won't
//get it.

const burger = (props) => {
    //console.log(props);
    let transformedIngredients = Object.keys(props.ingredients) //mapping object into an array of ingredients
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    //console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);
