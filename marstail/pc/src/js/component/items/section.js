/**
 * Created by Administrator on 2018/3/20.
 */
import React,{Component} from 'react';

class Section extends Component{
    render() {
        return(
            <div className="section">
                <p className="title">{this.props.title}</p>
                <p className="content">{this.props.content}</p>
            </div>
        )
    }
}

export default Section;