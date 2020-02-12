import React from 'react';
import Layout2 from '../components/Layout2';


// console.log(document.getElementById('donate').style.backgroundColor ='red')


const IndexPage = () => (


  <Layout2 fullMenu>
    <article id="main">
      <header id="donate">
        <h2>Donations</h2>
        <p>support our mission</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Donation information</h3>
          <p>
            *ONLINE CONTRIBUTIONS COMING SOON*
          </p>
          <p>
            I've pledged to never accept contributions from large corporate sponsors or companies that don't align with our core values. Help us keep corruption and greed out of Pinellas county government, and add a challenger to the ballot!
          </p>


          <div className="row">
            <div className="col-6 col-12-medium">
              <p>
                To make a contribution to the campaign, please mail a check to:
    
    
          </p>
            </div>
            <div className="col-6 col-12-medium">
              <p>Kane4Pinellas<br />
                500 Trinity Ln, Apt 8304 <br />
                St. Petersburg, FL 33716</p>
            </div>
          </div>
          <hr />


        </div>
      </section>
    </article>
  </Layout2>
);

export default IndexPage;
