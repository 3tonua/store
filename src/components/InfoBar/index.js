import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import {withStyles} from '@material-ui/core/styles';
import {styles} from "./styles";

class InfoBar extends Component {
    constructor(props) {
        super(props);
    }

    deleteAllProducts = () => {
        this.props.deleteAllProducts();
    };

    render() {
        const {classes, products, isAdmin} = this.props;
        const productsQuantity = products.length;
        const productsSum = products.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
        const averagePrice = isNaN(Math.round(productsSum / productsQuantity)) ? 0 : Math.round(productsSum / productsQuantity);
        return (
            <div className={classes.infoBarWrapper}>
                <Paper className={classes.infoBar} elevation={1}>
                    <Typography>
                        Products: {productsQuantity}
                    </Typography>
                    <Typography>
                        Amount of prices: {productsSum}
                    </Typography>
                    <Typography>
                        Average price: {averagePrice}
                    </Typography>
                    {isAdmin && <Button variant="outlined" color="secondary" size='small' onClick={this.deleteAllProducts}>
                        Delete all
                        <DeleteIcon/>
                    </Button>}
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(InfoBar);