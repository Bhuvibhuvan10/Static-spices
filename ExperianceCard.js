import React from 'react';
import { Card } from 'react-bootstrap';
import '../appcss/Tab.css'
function ExperienceCards() 
{ 
        return <div>
          <Card className = 'card-border'>
          <Card.Body>
          <Card.Title> <h2>Personal Porfolio</h2> </Card.Title>
          <Card.Text>
            <h6>
                The website contains REACTJS,HTML,CSS,BOOTSTRAP.
                Explaining my career and experiances with interactive web design, and
                 I have learnt lot of short-hand tools and functions.
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title> <h2>Static Online Shoping Webpage</h2> </Card.Title>
          <Card.Text>
            <h6>
The project uses HTML,CSS,BOOTSTRAP to create a static web page for online shopping.
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title> <h2>School portal</h2> </Card.Title>
          <Card.Text>
            <h6>
                School Portal website contains all information that about a school.
           </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
}
export default ExperienceCards;