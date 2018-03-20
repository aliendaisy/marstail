/**
 * Created by Administrator on 2018/3/20.
 */
import React,{Component} from 'react';

class LinkArea extends Component{
    render() {
        return(
            <div className="linkArea">
                <div className="mainTitle">
                    <p>Marstail</p>
                    <p>Workplace Community</p>
                </div>
                <ul className="linkList">
                    {this.props.linkList.map((res,i) => {
                        return(
                            <li key={i}>
                                {res.map((data,j) => {
                                    return(
                                        <span key={j}>{data}</span>
                                    )
                                })}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default LinkArea;