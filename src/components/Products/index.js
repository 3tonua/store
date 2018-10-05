import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import {withStyles} from '@material-ui/core/styles';
import {styles} from "./styles";

import ProductCard from '../../containers/ProductCard';

const initState = {
    name: '',
    price: '',
    img: '',
    descr: '',
};

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initState);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const {classes, products, isAdmin} = this.props;
        return (
            <div className={classes.productsWrapper}>
                <Grid container spacing={40}>
                    {products.map(item => {
                        return <Grid key={item.id} item xs={3}>
                            <ProductCard item={item}/>
                        </Grid>
                    })}
                </Grid>

                {isAdmin && <Link to='/add-product'>
                    <Button variant="fab" color="primary" aria-label="Add product" className={classes.addButton}>
                        <AddIcon/>
                    </Button>
                </Link>}
            </div>
        )
    }
}

export default withStyles(styles)(Products);