import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/Nfts/sword1.gif';
import img2 from '../../assets/Nfts/sword2.gif';
import img3 from '../../assets/Nfts/sword3.gif';
import img4 from '../../assets/Nfts/sword4.gif';
import img5 from '../../assets/Nfts/sword5.gif';
import img6 from '../../assets/Nfts/sword6.gif';
import img7 from '../../assets/Nfts/sword7.gif';
import img8 from '../../assets/Nfts/sword8.gif';
import img9 from '../../assets/Nfts/sword9.gif';
import img10 from '../../assets/Nfts/sword10.gif';
import ETH from '../../assets/Nfts/sol.png'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;

  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;

  }
}
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};

  }

}

`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;

}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}


  return(
    <ImgContainer   onMouseOver={e => pause(e) }  onMouseOut={e => play(e) }  >
      <img width={500} height={400}  src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>TKD Swords</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
          <img width={200} height={200}  src={ETH} alt="ETH" />
          <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
} 


const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return(
    <Section id="showcase">
    <Row direction="none" ref={Row1Ref}>
      <NftItem img={img1}  number={1} price={0.0}   passRef = {Row1Ref} />
      <NftItem img={img2}  number={2} price={0.0}   passRef = {Row1Ref} />
      <NftItem img={img3}  number={3} price={0.0}   passRef = {Row1Ref} />
      <NftItem img={img4}  number={4} price={0.0}   passRef = {Row1Ref} />
      <NftItem img={img5}  number={5} price={0.0}   passRef = {Row1Ref} />


    </Row>
    <Row direction="reverse" ref={Row2Ref}>
    <NftItem img={img6}  number={6} price={0.0}   passRef = {Row2Ref} />
    <NftItem img={img7}  number={7} price={0.0}   passRef = {Row2Ref} />
    <NftItem img={img8}  number={8} price={0.0}   passRef = {Row2Ref} />
    <NftItem img={img9}  number={9} price={0.0}   passRef = {Row2Ref} />
    <NftItem img={img10}  number={10} price={0.0}   passRef = {Row2Ref} />


    </Row>
    </Section>
  )
}

export default Showcase