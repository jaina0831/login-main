
import { Carousel ,Image} from 'antd';
import { useState,useContext } from "react";
import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"

const contentStyle = {
    height: 'auto',
    color: '#fff',
    textAlign: 'center',
  };


function CarouselNewContent({isNavBarVisible}) {
    const { state: { page: { title, products } } } = useContext(StoreContext);
  
    return (
        <Carousel autoplay
        autoplaySpeed={7000}
        >
                <div className="carousel-newContent">
                    <h3 style={contentStyle}>
                        <div className="carousel-artists">
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/artists/gfriend.jpeg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BTS</div>
                            </div>
                            
                            
                        </div>
                    </h3>
                    
                </div>
                <div className="carousel-newContent">
                    <h3 style={contentStyle}>
                        <div className="carousel-artists">
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px",
                                }}
                                    src="https://github.com/unbeliebubble/img/blob/main/artists/dreamcatcher.jpeg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Dreamcatcher</div>
                            </div>
                            
                            
                        </div>
                    </h3>
                    
                </div>
                <div className="carousel-newContent">
                    <h3 style={contentStyle}>
                        <div className="carousel-artists">
                            
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/artists/cl.jpeg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">CL</div>
                            </div>
                            
                        </div>
                    </h3>
                    
                </div>
                <div className="carousel-newContent">
                    <h3 style={contentStyle}>
                        <div className="carousel-artists">
                            
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/artists/enhypen.jpeg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Enhypen</div>
                            </div>
                            
                            
                        </div>
                    </h3>
                    
                </div>
                
            </Carousel>
            
    );
}

export default CarouselNewContent;