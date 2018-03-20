/**
 * Created by Administrator on 2018/3/16.
 */
import React,{Component} from 'react';
import Section from '../items/section';

import Image1 from '../../../images/Marstail Mockup.png'

class Community extends Component{
    render() {
        return(
            <div className="community">
                <p className="caption">Designed for Workplace Community Users</p>
                <div className="sub-title">
                    <p>Every workplace is a community.</p>
                    <p>Every community will have a mobile App in the future.</p>
                </div>
                <div className="container">
                    <div>
                        <Section
                            title="Group Meal"
                            content="Tired of the same restaurants nearby your office?
                            Join other tenants in your building, order lunch from your
                            favorite restaurants that usually don’t delivery in your area."
                        />
                        <Section
                            title="Wellness"
                            content="Work like a Google employee. Join the wellness sessions
                            in your building during or after the working hours. Find class
                            schedule and reserve a spot right from your finger tip."
                        />
                        <Section
                            title="Networking"
                            content="Explore the building-wide networking events, continue education
                            classes or plan a party and invite others. Meet other tenants from different
                            industries from the same building."
                        />
                    </div>
                    <img src={Image1} alt=""/>
                    <div>
                        <Section
                            title="Marketplace"
                            content="Save on various services and products via group-buying.
                            From getting your shoe shined to ordering flowers. Take care of
                            your personal needs at where you work."
                        />
                        <Section
                            title="Space Sharing"
                            content="Reserve facilities or space in your building for personal
                            or work related activities such as co-working, team events or meetings.
                            Explore the “living room” at your workplace."
                        />
                        <Section
                            title="Communication"
                            content="Text or send photos to your neighbors, property management crews or
                            venders via the app. Receive the latest updates of your workplace. You can even
                            create a mini blog and follow others’ posts."
                        />
                    </div>


                </div>

            </div>
        )
    }
}

export default Community;