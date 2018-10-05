import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/core/styles';
import {styles} from "./styles";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        const {classes, userType} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            <Link to='/' className={classes.noDeco}>
                                Store
                            </Link>
                        </Typography>
                        <Typography variant="title" color="inherit">{userType}</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header);