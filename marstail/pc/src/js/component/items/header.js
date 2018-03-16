/**
 * Created by Administrator on 2018/3/16.
 */
import React, {Component} from 'react';

class Header extends Component{
    render() {
        return (
            <div className="header">
                <p>{this.props.title}</p>
                <div className="nav">
                    
                </div>
            </div>
        )
    }
}

export default Header;