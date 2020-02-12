import React from 'react';

import Layout2 from '../components/Layout2';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


const IndexPage = () => (
    <Layout2 fullMenu>
        <article id="main">
            <header>
                <h2>Get in touch</h2>
                <p>we want to hear from you</p>
            </header>
            <section className="wrapper style5">
                <div className="inner">
                    <h3>contact information</h3>
                    <p>
                        Comments? Questions? Press inquiries? Interested in getting involved? Let us know! We want to hear from everyone and will meet with just about anyone. Email the campaign directly at: 
                    </p>
                    <ul className="icon style4">
                        <li className="features"><i class="features fas fa-envelope"></i> <br /><a href="mailto:kane@kane4pinellas.com" target="_blank" rel="noopener noreferrer"> kane@kane4pinellas.com</a></li>
                        {/* <li><i class="fas fa-phone"></i>  000-000-0000</li> */}
                    </ul>
                    <hr />
                    <p>Or fill out the form below to get in contact: </p>
                    <Form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <p class="hidden">
                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <Row form>
                            <Col >
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="name" />
                                </FormGroup>
                            </Col>
                            <Col >
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="email" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="message">Message</Label>
                                    <textarea required name="message" id="message" placeholder="enter your message" rows="6"></textarea>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" className="primary" /></li>
                                        <li><input type="reset" value="Reset" /></li>
                                    </ul>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>

                    <div className="col-lg-5">



                    </div>





                   


                </div>
            </section>
        </article>
    </Layout2>
);

export default IndexPage;
