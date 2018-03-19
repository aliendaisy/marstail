/**
 * Created by Administrator on 2018/3/16.
 */
import React, {Component} from 'react';
import Header from '../items/header';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                'Home',
                'About',
                'Community',
                'Partnership',
                'Contact',
                'Partner Login'
            ],
        }
    }
    render() {
        return (
            <Header
                title={'marstail'}
                navList={this.state.navList}
            >
            </Header>
        )
    }
}

export default Home;