import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {withStyles} from '@material-ui/core/styles';
import {styles} from "./styles";

class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: ''
        }
    }

    handleChange = e => {
        this.setState({userType: e.target.value})
    };

    setUserType = () => {
        this.props.logIn(this.state.userType)
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.startPageWrapper}>
                <span>
                    Please, select user type
                </span>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Type</InputLabel>
                    <Select
                        value={this.state.userType}
                        onChange={this.handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'user'}>User</MenuItem>
                        <MenuItem value={'admin'}>Admin</MenuItem>
                    </Select>
                </FormControl>

                <Link to={'/products'} className={classes.noDeco}>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.setUserType}
                            disabled={this.state.userType.length === 0}>
                        Log In
                    </Button>
                </Link>
            </div>
        )
    }
}

export default withStyles(styles)(StartPage);