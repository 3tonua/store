import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/Delete';

import {withStyles} from '@material-ui/core/styles';
import {styles} from "./styles";

class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    deleteProduct = (productId) => e => {
        this.props.deleteProduct(productId);
    };

    render() {
        const {classes, item, isAdmin} = this.props;
        return (
                <Card className={classes.productCard}>
                    <CardHeader
                        action={isAdmin &&
                        <IconButton onClick={this.deleteProduct(item.id)}>
                            <Delete/>
                        </IconButton>
                        }
                        title={item.name}
                        subheader={`Price: ${item.price}`}
                    />
                    <CardMedia
                        className={classes.media}
                        image={item.img}
                        title={item.name}
                    />
                    <CardContent>
                        <Typography component="p">
                            {item.descr}
                        </Typography>
                    </CardContent>
                </Card>
        )
    }
}

export default withStyles(styles)(ProductCard);