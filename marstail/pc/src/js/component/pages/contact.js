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
    render() {
        return(
            <div className="contact" id="Contact">
                <div className="building">
                </div>
                <LinkArea
                    linkList={this.state.linkList}
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