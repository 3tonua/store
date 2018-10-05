import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {withStyles} from '@material-ui/core/styles';
import {styles} from "./styles";

const initState = {
    name: '',
    price: '',
    img: '',
    descr: '',
};

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initState);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    handleChange = name => e => {
        this.setState(Object.assign({}, this.state, {[name]: e.target.value}))
    };

    handleSubmit(e) {
        e.preventDefault();
        const data = this.state;
        data.id = this.rand();
        this.props.addProduct(data);
        return this.setState(initState)
    };

    rand = () => {
        let rand = 100 - 0.5 + Math.random() * (999 - 100 + 1);
        rand = Math.round(rand);
        return rand;
    };

    render() {
        const {classes, products, isAdmin} = this.props;
        return (
            <div>
                {isAdmin ?
                    <div className={classes.root}>
                        <form onSubmit={this.handleSubmit} className={classes.addFormWrapper} autoComplete="off">
                            <Paper className={classes.addForm}>
                                <TextField
                                    id="name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                />
                                <TextField
                                    id="price"
                                    label="Price"
                                    className={classes.textField}
                                    value={this.state.price}
                                    onChange={this.handleChange('price')}
                                    margin="normal"
                                    type='number'
                                />
                                <TextField
                                    id="img"
                                    label="Image url"
                                    className={classes.textField}
                                    value={this.state.img}
                                    onChange={this.handleChange('img')}
                                    margin="normal"
                                />
                                <TextField
                                    id="descr"
                                    label="Description"
                                    className={classes.textField}
                                    value={this.state.descr}
                                    onChange={this.handleChange('descr')}
                                    margin="normal"
                                />
                                <Button type='submit' variant="contained" color="primary" className={classes.button}>
                                    Add
                                </Button>
                            </Paper>
                        </form>
                        <div className={classes.tableWrapper}>
                            <Paper className={classes.table}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell numeric>Price</TableCell>
                                            <TableCell>URL</TableCell>
                                            <TableCell>Description</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {products.map(item => <TableRow key={item.id}>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell numeric>{item.price}</TableCell>
                                                <TableCell>{item.img}</TableCell>
                                                <TableCell>{item.descr}</TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>

                    </div> :
                    <div className={classes.noAdmin}>
                        <Typography variant='title'>
                            Unfortunately you are not allowed to add products
                        </Typography>
                    </div>}
            </div>
        )
    }
}

export default withStyles(styles)(AddProduct);