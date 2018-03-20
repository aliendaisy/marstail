/**
 * Created by Administrator on 2018/3/16.
 */
import React,{Component} from 'react';

// import Image1 from '../../../images/'

class Partnership extends Component{
    render() {
        return(
            <div className="partnership">
                <p className="caption">Designed for Our Partners to Enhance Customer Experience</p>
                <div className="sub-title">
                    We constantly look for business partners to enhance our platform and create benefits for all parties.
                    Whether you are a real estate owner trying to improve your tenants’ leasing experience or a service
                    provider looking for exposures to customers on a whole new ecological platform, or even you are just
                    a group of people who share the same interest and want to create a virtual territory online and stay
                    connected, you should join us and we will make this happen!
                </div>
                {/*<img src="" alt=""/>*/}
                <div className="martian">
                    <div className="green-bg"></div>
                </div>
            </div>
        )
    }
}

export default Partnership;