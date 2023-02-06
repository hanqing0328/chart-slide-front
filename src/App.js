import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SvgElement from './components/svgElement';
import ErrorBoundary from './components/errorBoundry';
import { chartDataMap } from './utils/chartDataMap';
import "swiper/css";
import "swiper/css/pagination";
import './App.css';


function App() {

  const rowList = [1,2,3];
  const colList = [1,2,3];
  const [activeRowIndex, setActiveRowIndex] = useState(0)
  const [activeColIndex, setActiveColIndex] = useState(0)

  const activeRowColKey = `r${activeRowIndex + 1}c${activeColIndex + 1}` 

  return (
    <div className="app">
      <div className='swiper-container'>
        <Swiper
          onSlideChange={(swiperCore) => {
              const { activeIndex } = swiperCore;
              setActiveRowIndex(activeIndex)
          }}
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
            el:'.row-swiper-pagination'
          }}
          modules={[Pagination]}
        >
          {
            rowList.map((row) => {
              return (
                <SwiperSlide key={row}>
                  <Swiper
                    className="mySwiper2 swiper-v"
                    direction={"vertical"}
                    spaceBetween={50}
                    pagination={{
                      clickable: true,
                      el:'.col-swiper-pagination'
                    }}
                    modules={[Pagination]}
                    onSlideChange={(swiperCore) => {
                      const { activeIndex } = swiperCore;
                      setActiveColIndex(activeIndex)
                  }}
                  >
                    {
                      colList.map((col) => {
                        return (
                          <SwiperSlide key={`${row}${col}`}>
                            <ErrorBoundary>
                              <SvgElement row={row} col={col}/>
                            </ErrorBoundary>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <div className='description' >
        {chartDataMap[activeRowColKey].description}
      </div>
      <div className='row-swiper-pagination'/>
      <div className='col-swiper-pagination'/>
    </div>
  );
}

export default App;
