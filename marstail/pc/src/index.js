import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Header from './js/component/items/header';
import Home from './js/component/pages/home';
import About from './js/component/pages/about';
import Community from './js/component/pages/community';
import Partnership from './js/component/pages/partnership';
import Contact from './js/component/pages/contact';
import registerServiceWorker from './registerServiceWorker';

export class App extends Component{
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
            activeId: 0
        }
    }
    componentDidMount() {
        //滚动时页面高度和顶部导航联动
        window.addEventListener('scroll',() => {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            let a = document.getElementById('Home').scrollHeight;
            let b = document.getElementById('About').scrollHeight;
            let c = document.getElementById('Community').scrollHeight;
            let d = document.getElementById('Partnership').scrollHeight;
            if(scrollTop > (a + b + c + d)) {
                this.setState({activeId: 4});
            }else if(scrollTop > (a + b + c)) {
                this.setState({activeId: 3});
            }else if(scrollTop > (a + b)) {
                this.setState({activeId: 2});
            }else if(scrollTop > (a)) {
                this.setState({activeId: 1});
            }else{
                this.setState({activeId: 0});
            }
        });
    }
    triggerClick(e) {
        let a = document.getElementById('Home').scrollHeight;
        let b = document.getElementById('About').scrollHeight;
        let c = document.getElementById('Community').scrollHeight;
        let d = document.getElementById('Partnership').scrollHeight;

        this.setState({
            activeId: e
        });
        //点击时页面高度和顶部导航联动
        if(e === 5) {
            window.location.href = 'http://marstail.com:20000/v1';
        }else if(e === 4) {
            window.scrollTo(0, a + b + c + d + 1);
        }else if(e === 3) {
            window.scrollTo(0, a + b + c + 1);
        }else if(e === 2) {
            window.scrollTo(0, a + b + 1);
        }else if(e === 1) {
            window.scrollTo(0, a + 1);
        }else{
            window.scrollTo(0, 0);
        }
    }
    render() {
        return(
            <div>
                {/*固定导航头部*/}
                <Header
                    title={'Marstail'}
                    navList={this.state.navList}
                    activeId={this.state.activeId}
                    triggerClick={this.triggerClick.bind(this)}
                >
                </Header>
                <div>
                    <Home/>
                    <About/>
                    <Community/>
                    <Partnership/>
                    <Contact/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
