/**
 * Created by Administrator on 2018/3/16.
 */
import React, {Component} from 'react';
import Header from '../items/header';
import Card from '../items/card';

//图片
import HomeImg from '../../../images/home.jpg';
import Icon1 from '../../../icons/earth.png';
import Icon2 from '../../../icons/Share.png';
import Icon3 from '../../../icons/Market.png';

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
            <div>
                <Header
                    title={'Marstail'}
                    navList={this.state.navList}
                >
                </Header>
                <img src={HomeImg} alt="Home"/>
                <div className="card-box">
                    <Card
                        icon={Icon1}
                        iconClass="icon"
                        title="Ecosystem"
                        content="Dynamic, Vibrant, Interactive"
                    />

                    <Card
                        icon={Icon2}
                        iconClass="icon"
                        title="Community"
                        content="Connectivity, Sharing, Creativity"
                    />

                    <Card
                        icon={Icon3}
                        iconClass="icon"
                        title="Marketplace"
                        content="Food, Wellness, Services"
                    />
                </div>
            </div>
        )
    }
}

export default Home;