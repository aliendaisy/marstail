/**
 * Created by Administrator on 2018/3/16.
 */
import React, {Component} from 'react';
import Header from '../items/header';
import Card from '../items/card';

//图片
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
            <div className="home">
                <Header
                    title={'Marstail'}
                    navList={this.state.navList}
                >
                </Header>
                <div className="homeImg">
                    <div className="contentArea">
                        <div className="bigTitle">
                            <p>Workplace Community for</p>
                            <p>Commercial Real Estate</p>
                        </div>
                        <div className="smallTitle">
                            <p>Cross-platform mobile App</p>
                            <p>for tenant engagement</p>
                        </div>
                        <div className="btnArea">
                            <div className="button active">get started</div>
                            <div className="button">learn more</div>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <Card
                        icon={Icon1}
                        title="Ecosystem"
                        content="Dynamic, Vibrant, Interactive"
                    />

                    <Card
                        icon={Icon2}
                        title="Community"
                        content="Connectivity, Sharing, Creativity"
                    />

                    <Card
                        icon={Icon3}
                        title="Marketplace"
                        content="Food, Wellness, Services"
                    />
                </div>
                <p className="caption">
                    Designed for Technology Driven Commercial Real Estate
                </p>
            </div>
        )
    }
}

export default Home;