import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './styles.module.css'

export default class AsNavFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
      imageIndex: 0,
      lightBoxOpen: false,
      images:[]
      
    }
  }

  openLightBox = () =>{
    if(this.props.width > 650){
      this.setState({
        lightBoxOpen : true
      })
    }
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      imageIndex: 0,
      images: this.props.images
    })
  }

  render() {
    const settings = {
      responsive: [
        {
          breakpoint: 970,
          settings: {
            centerMode: true,
          },
        },
        {
          breakpoint: 650,
          settings: {
            centerMode: false,
            arrows:true,
          },
        },
      ],
    }
    const settings2 = {
      responsive: [
        {
          breakpoint: 970,
          settings: {
            vertical: true,
          },
        },
      ],
    }

    return (
      <div className={styles.wrapper}>
        <pre>{JSON.stringify(this.state.images,null,2)}</pre>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          fade='false'
          lazyLoad={true}
          className={styles.topSlider}
          slidesToShow={1}
          arrows = {false}
        >
          { this.state.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className={styles.image}
                alt = 'product'
                onClick={ () => this.openLightBox()}
              />
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          focusOnSelect={true}
          infinite = {true}
          className={styles.bottomSlider}
          arrows = {false}
          beforeChange={(current, next) => {
            this.setState({ imageIndex: next })
          }}
          
          
        >
          { this.state.images.map((image, index) => (
            <div key={index}>
              <div className={`${index === this.state.imageIndex && styles.imgBox}`}>
                <img
                  src={image}
                  alt='product'
                  className={`${styles.image} ${index === this.state.imageIndex && styles.active}`}
                />
              </div>
            </div>
          ))}
        </Slider>
        
      </div>
    )
  }
}
/*{this.state.lightBoxOpen && (
          <CarouselLightBox
            closeLightBox={() =>
              this.setState({
                lightBoxOpen: false,
              })
            }
          />
        )}*/