import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WILL THERE BE WHITELIST SPOTS?" >
  Whitelist spots will be given for some of our NFT collection. For more information follow us.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="HOW TO CONTACT?" >
  club@tycoonies.com

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHY DO WE NEED ROYALTIES?" >
  The amount of royalties was fixed at 5% to finance the Tycoonies Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of gamers, entrepreneurs and investors with the same mindset and common interests.
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="HOW CAN I USE MY NFT?" >
You will be able to use your NFT as an avatar in the Metaverse and our future video game(avatar,item ,land, pets, mounts). Holding also means that you are VIP and have always first to get acces.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHEN IS THE MINTING DATE?
" >
The official mint date has not ben released, follow us for more info.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS TYCOONIE KINGDOMS?
" >
Tycoonie Kingdoms is a P2E MMORPG game where land holders can build their castle and embark on adventures in this upcoming magical world.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq