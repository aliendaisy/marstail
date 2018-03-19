/**
 * Created by Administrator on 2018/3/19.
 */
import React,{Component} from 'react';

class Card extends Component{
    render() {
        return(
            <div className="card">
                <img src={this.props.icon} alt="" className={this.props.iconClass}/>
                <div className="content">
                    <p>{this.props.title}</p>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default Card;