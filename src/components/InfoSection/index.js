import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer,
         InfoWrapper,
         InfoRow,
         Coulmn1,
         Coulmn2,
         TextWrapper,
         TopLine,
         Heading,
         Subtitle,
         BtnWrap,Img,ImgWrap
       } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine,primary,dark,dark2,
   lightText, headline, darkText, description, buttonLabel, img, alt}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart} >
                <Coulmn1>
                  <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                      <Button to='home'
                      smooth={true} duration={500} spy={true} 
                      exact='true' offset={-80} 
                      primary={primary ? 1 :0}
                      dark={dark ? 1:0}
                      dark2={dark2 ? 1 : 0}
                      >{buttonLabel}</Button>
                    </BtnWrap>
                  </TextWrapper>
                </Coulmn1>
                <Coulmn2>
                    <ImgWrap>
                      <Img src={img} alt={alt} />
                    </ImgWrap>
                </Coulmn2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
