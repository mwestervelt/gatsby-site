import React from 'react';
import { useState, useRef } from 'react';

import Layout2 from '../components/Layout2';
import Accordion from '../components/Accordion';

// import { Collapse, Button, CardBody, Card, ButtonGroup } from 'reactstrap';


const IndexPage = () => {
 
    return (
        <Layout2 fullMenu>
            <article id="main">
                <header>
                    <h2>on the issues</h2>
                    {/* <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p> */}
                </header>
                <section className="wrapper style5">
                    <div className="inner">
                    <h3>Candidate Forward</h3>
                        <blockquote><p>
                        There’s really no way of overstating how incredibly important this moment in our history is. Compared to most advanced countries, we are a very young nation. Our institutions, our form of government, our standing throughout the world—none of these things are guaranteed to last. Ben Franklin said we have a Republic, if only we can keep it. But keeping it has meant more than maintaining. The story of “keeping it” has always been a story of activism, of vision, and of powerful leadership. The only way to maintain a democracy is to actively fight for it. And to continue to expand the franchise to more and more people until everyone, regardless of race, of sex, of gender, of sexuality, of income, of nationality, of ethnicity, of religion, of style, of party affiliation—is represented equally, treated fairly under the law, and judged only by the content of their character. That is the goal. That activism, that leadership—those need to happen at the local level first. Just electing a Democrat president is not going to be enough. Certainly not now. To continue “keeping it,” to heal the division that is preventing us from expanding the franchise, we have to meet people where they are and share a vision that includes everyone. 
                  Our platform is ambitious. Not because our plans are difficult but because political will is hard to gather and coordinate. Pinellas County can only achieve the results we want by coordinating with every group and board, every city and town that calls this place home.  </p><p> 
 
“where there is no vision, the people perish”  </p><p> 
 
We are running a different kind of campaign. A campaign that says leadership needs more visionaries and less resumes. The things that we are advocating for are not radical—they’re smart, they’re human. Our vision is simply one of a Pinellas where tomorrow is better than today. Our platform is a reflection of that basic, shared goal. At just under a million residents and a GDP of around 50 billion USD—Pinellas County can make a global impact.

                            </p><p> 
                        Signature here
                        </p></blockquote>
                        <h3>Our platform</h3>
                        <p>Click on the headings below to read more about our beliefs and plans for Pinellas county and the country as a whole. </p>
                        <br></br>
                        <Accordion
                            title="Environment and Resource Management"
                            content="Are you a tree hugger? If not, maybe you should be. Florida’s biggest industry, tourism, generated 88.6 billion dollars of revenue in 2017. The foundation of that tourism moolah is our incredibly biodiverse landscapes. The everglades alone are responsible for pumping in more than $100 million into the state every year. But these figures will begin to shrink as humans continue to overwork the planet. Tallahassee has taken notice—Florida’s Republican governor recently took steps to increase fines for breaking environmental laws by 50%. It’s nice outside in Pinellas and that means jobs, tax revenue, and recreation. 
                            A warming climate threatens far more than tourism, especially when you happen to live on a flat peninsula surrounded by water (meaning sea level rise will go farther inland faster). The good news is that preserving and protecting the planet isn’t nearly as contentious of an issue as the media portrays it. The ‘debate’ over climate action is mostly a debate between corporations seeking short-term profits and everyone else. No one—conservative or liberal—wants an ocean that’s more plastic than fish or air that poisons their children. Unfortunately—and despite what those three green arrows would have you believe—recycling is not the answer. What can Pinellas do?<ul>
                            <li>Ban plastic bags and other single-use plastics</li>
                            <li>Ban single-use plastic manufacturing within the county</li>
                            <li>Implement a carbon tax and develop plans for county-wide carbon neutrality</li>
                            <li>Improve wastewater treatment and protect natural drainage areas</li>
                            <li>Reduce algae blooms by limiting agricultural fertilizers and regularly testing farm sites</li>
                            <li>Create a comprehensive network of carbon-neutral transportation options</li>
                            <li>Program to rebuild reef habitats and enlist aquatic enthusiast in maintaining them</li>
                        </ul>                            
                        "
                        />
                        <Accordion
                            title="Combating and Preventing Homelessness"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <Accordion
                            title="Public Transportation"
                            content="
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            "
                        />
                        {/* <ButtonGroup vertical>
                            <Button block outline color="info" onClick={toggle}>Environment and Resource Management</Button>
                            <Collapse isOpen={isOpen}>
                                <Card>
                                    <CardBody>
                                        Anim pariatur cliche reprehenderit,
                                       enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                       anim keffiyeh helvetica, craft beer labore wes anderson cred
                                       nesciunt sapiente ea proident.
                                </CardBody>
                                </Card>
                            </Collapse>
                            <Button outline color="info" onClick={toggle} >Combatting and Preventing Homelessness</Button>
                            <Collapse isOpen={isOpen}>
                                <Card>
                                    <CardBody>
                                        Anim pariatur cliche reprehenderit,
                                       enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                       anim keffiyeh helvetica, craft beer labore wes anderson cred
                                       nesciunt sapiente ea proident.
                                </CardBody>
                                </Card>
                            </Collapse>
                    </ButtonGroup> */}

                    </div>
                </section>
            </article>
        </Layout2>
    )
};

export default IndexPage;
