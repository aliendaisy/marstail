/**
 * Created by Administrator on 2018/3/16.
 */
import React,{Component} from 'react';

class Footer extends Component{
    render() {
        return(
            <div className="footer">
                <p className="left">{this.props.left}</p>
                <p className="right">{this.props.right}</p>
            </div>
        )
    }
}

export default Footer;