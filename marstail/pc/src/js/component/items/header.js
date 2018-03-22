/**
 * Created by Administrator on 2018/3/16.
 */
import React, {Component} from 'react';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeId: 0,
            link: 'http://marstail.com:20000/v1'
        }
    }
    handleClick(id) {
        this.setState({
            activeId: id
        });
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
                                className={this.state.activeId == i ? 'active' : ''}
                                onClick={this.handleClick.bind(this,i)}
                            >
                                <a href={i === this.props.navList.length - 1 ? this.state.link : `#${list}`}>{list}</a>
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Header;