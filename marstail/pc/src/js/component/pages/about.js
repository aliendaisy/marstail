/**
 * Created by Administrator on 2018/3/16.
 */
import React,{Component} from 'react';
import Card from '../items/card';

import Icon1 from '../../../icons/Community.png';
import Icon2 from '../../../icons/Rocket.png';
import Image1 from '../../../images/hands-people-woman-working.jpg';
import Image2 from '../../../images/Cafe.jpg';

class About extends Component{
    render() {
        return(
            <div className="about" id="About">
                <p className="caption">
                    Designed for Technology Driven Commercial Real Estate
                </p>
                <p className="sub-title">
                    Marstail improves traditional workplace by driving toward a people-centered building
                    ecosystem with the proprietary software and vibrant community services.
                </p>
                <div className="cardLine">
                    <img src={Image1} alt=""/>
                    <Card
                        icon={Icon1}
                        content="We believe future generations have the opportunity to live on Mars,
                        where human will explore a new ecology. The line between work and life blurs
                        during the Mars settlement. Advanced technology is constantly changing the
                        balance, efficiency and connectivity among a group, a community or our species."
                    />
                </div>
                <div className="cardLine">
                    <Card
                        icon={Icon2}
                        content="Marstail represents the concept of our vision. Our mission is to
                        allow people to enjoy workdays by improving office building micro ecology
                        to create a healthier social and economic impact."
                    />
                    <img src={Image2} alt=""/>
                </div>
            </div>
        )
    }
}

export default About;