import React,{useState} from 'react'; 
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import{Overlay,Header,SlickWrapper,ImgWrapper,Indicator,Global,CloseBtn} from './styles';

const ImagesZoom=({images,onClose})=>{
    const [currentSlide,setCurrentSlide]= useState(0);
    return(
        <Overlay>
            <Global/>
            <Header>
                <h1>상세이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <div>
                <SlickWrapper>
                    <Slick
                        initialSlide={0}
                        afterChange={(slide)=>setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((v,idx)=>(
                            <ImgWrapper key={`${idx}_${v.src}`}>
                                <img key={v.src} src={v.src} alt={v.src}/>
                            </ImgWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide+1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </SlickWrapper>
            </div>
        </Overlay>
    )
}

ImagesZoom.propTypes={
    images:PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose:PropTypes.func.isRequired,
};

export default ImagesZoom;