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
            tabs: [
                {tabName: 'Get Started',id: 1},
                {tabName: 'Learn More',id: 2}
            ],
            currentIndex: 1
        }
    }
    tabSelect(id) {
        this.setState({
            currentIndex: id
        });
    }
    render() {
        return (
            <div className="home" id="Home">
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
                        <ul className="btnArea">
                            {this.state.tabs.map((res,i) => {
                                let tabStyle = res.id === this.state.currentIndex ? 'button active' : 'button';
                                return (
                                    <li
                                        key={i}
                                        onClick={this.tabSelect.bind(this,res.id)}
                                        className={tabStyle}
                                    >
                                        <a href={i === 0 ? '#Partnership' : '#About'}>{res.tabName}</a>
                                    </li>
                                )
                            })}
                        </ul>
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