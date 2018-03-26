/**
 * Created by Administrator on 2018/3/16.
 */
import React, {Component} from 'react';

class Header extends Component{
    handleClick(id) {
        this.props.triggerClick(id);
    }
    render() {
        return (
            <div className="header">
                <p className="title">{this.props.title}</p>
                <div className="nav">
                    {this.props.navList.map((list,i) => {
                        return(
                            <span
                                key={i}
                                className={this.props.activeId === i ? 'active' : ''}
                                onClick={this.handleClick.bind(this,i)}
                            >
                                {list}
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Header;