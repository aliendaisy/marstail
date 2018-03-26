/**
 * Created by Administrator on 2018/3/16.
 */
import React,{Component} from 'react';

import LinkArea from '../items/linkArea';
import Footer from '../items/footer';

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            linkList: [
                ['Home', 'About', 'Community', 'Partnership'],
                ['Blog', 'FAQ', 'Support', 'Contact'],
                ['Careers', 'Press', 'Term of Use', 'Privacy Policy']
            ]
        }
    }
    handleClick(e) {
        let a = document.getElementById('Home').scrollHeight;
        let b = document.getElementById('About').scrollHeight;
        let c = document.getElementById('Community').scrollHeight;
        let d = document.getElementById('Partnership').scrollHeight;

        //点击时页面高度和顶部导航联动
        if(e === 'Contact') {
            window.scrollTo(0, a + b + c + d + 1);
        }else if(e === 'Partnership') {
            window.scrollTo(0, a + b + c + 1);
        }else if(e === 'Community') {
            window.scrollTo(0, a + b + 1);
        }else if(e === 'About') {
            window.scrollTo(0, a + 1);
        }else{
            window.scrollTo(0, 0);
        }
    }
    render() {
        return(
            <div className="contact" id="Contact">
                <div className="building">
                </div>
                <LinkArea
                    linkList={this.state.linkList}
                    handleClick={this.handleClick.bind(this)}
                />
                <Footer
                    left="Copyright 2018. All rights reserved."
                    right="support@marstail.com"
                />
            </div>
        )
    }
}

export default Contact;