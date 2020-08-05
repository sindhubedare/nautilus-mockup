import React from 'react';
import bioImg from '../assets/bio_and_beyond.jpeg';
import wise_sciImg from '../assets/wise_sci_and_engineering.png';
import tlas from '../assets/tlas.jpeg';
import abstract from '../assets/abstractions.jpeg';
import earth from '../assets/earth.jpeg';
import cosmos from '../assets/cosmos.jpeg';
import poetry from '../assets/poetry.jpeg';
import aging from '../assets/aging.png';
import alliance from '../assets/alliance.png' ;
import maxplanck from '../assets/maxplanck.jpeg' ;


function Content(){
    return(
        <React.Fragment>
        <div className="container">
            <div className="image1" id= "img1">
                <h3 id="biology"> BIOLOGY+BEYOND</h3>
                <img src={bioImg} alt= "dgdd" height= '200px' width='300px' className="img" />
                <h5>Making Sense of the Geome, at Last <br/><em>by Adam Pierre</em></h5>
            </div>
            <div className="image2" id="img2">
                    <h3 id="women_sci">
                       Women in Science & Enginerring </h3>
                    <img src={wise_sciImg} alt="sdfsd" height='200px' width="300px" className="img"/>
                    <h5 id="brain">Your Brain is On the Brink of Chaos <br/><em>by Kelly Clancy</em></h5>
                </div>
                <div className="image3" id="img3">
                    <h3 id="abstract">QUANTA ABSTRACTIONS</h3>
                       <img src={abstract} alt="sdf" height='200px' width="300px" className="img"/>
                    <h5>Mathematicians Calcualte How Randomness<br/>Creeps In <em>by Marcus Woo</em></h5>
                </div>
                <div className="image4">
                <h3>EARTH</h3>
                    <img src={earth} alt="dsf" height='200px' width="300px" className="img"/>
                    <h5>The Deep Time of Walden Pond <br/><em>by Cart Stager</em> </h5>
                </div>
                <div className="image5">
                <h3>THINK LIKE A SCIENTIST</h3>
                    <img src={tlas} alt="sdfsdfsdf"height='200px' width="300px" className="img"/>
                    <h5>The Best Burgr Place Is a Lab<br/><em>by Thomas King</em></h5>
                </div>
                <div className="image6">
                <h3>Cosmos</h3>
                    <img src={cosmos} alt="sdsdfsdff" height='200px' width="300px" className="img"/>
                    <h5>How Much Should Expectation Drive Science? <br/><em>
                        by Claudia Gibb</em></h5>
                </div>
                <div className="image7">
                <h3>POETRY IN SCIENCE</h3>
                    <img src={poetry} alt="sdf"height='200px' width="300px" className="img"/>
                    <h5>On Observation and Imagination<br/><em>by Gillian Osborne</em></h5>
                </div> 
                <div className="image8">
                <h3>Aging</h3>
                    <img src={aging} alt="sdf" height='200px' width="300px" className="img"/>
                    <h5>Yes, Life in the Fast Lane Kills You <br/><em>by Philip Bell</em></h5>
                </div>
                <div className="image9">
                <h3>SCIENCE PHILANTHROPHY ALLIANCE</h3>
                    <img src={alliance} alt="sdf" height='200px' width="300px" className="img"/>
                    <h5>Taking to the Stars <br/><em>by Science Philanthrophy Alliance</em></h5>
                </div>
                <div className="image10">
                <h3>MPNeuro</h3>
                    <img src={maxplanck} alt="sdf" height='200px' width="300px" className="img"/>
                    <h5>Understanding the Brain with the Help of <br/>Artificial Intelligence <br/><em>by Max Planck Institute of Nuerobilogy</em></h5>
                </div>  
        </div>
        </React.Fragment>
    );
}
export default Content;