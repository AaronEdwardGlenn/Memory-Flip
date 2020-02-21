import React, { Component } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import styles from './ImagesPage.css';
import { moonImages } from '../../services/spaceAPI';



const photos = [
  {
    photo: 'https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg',
    caption: 'Nearside of the Moon',
    subcaption: 'Nearside of the Moon',
    thumbnail: 'https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg',
  },
  {
    photo: 'https://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse~thumb.jpg',
    caption: 'NASA TV provided coverage of Super Blue Moon Lunar Eclipse on Jan. 31. The full moon was the third in a series of “supermoons,” when the Moon is closer to Earth in its orbit -- known as perigee -- and about 14 percent brighter than usual. It was also the second full moon of the month, commonly known as a “blue moon.” As the super blue moon passed through Earth’s shadow, viewers in some locations experienced a total lunar eclipse. While in Earth’s shadow, the moon also took on a reddish tint – which is sometimes referred to as a “blood moon.',
    subcaption: 'Super Blue Moon Lunar Eclipse',
    thumbnail: 'https://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse~thumb.jpg',
  },  {
    photo: 'https://images-assets.nasa.gov/image/PIA12229/PIA12229~thumb.jpg',
    caption: 'January 31 brings a lunar trifecta: the Super Blue Blood Moon! NASA TV will offer a livestream starting at 5:30 a.m. This full moon is the third in a series of “supermoons,” when the Moon is closer to Earth in its orbit -- known as perigee -- and about 14 percent brighter than usual. It’s the second full moon of the month, commonly known as a “blue moon.” The super blue moon will pass through Earth’s shadow to give viewers in the right location a total lunar eclipse. While the Moon is in the Earth’s shadow it will take on a reddish tint, known as a “blood moon.”  More: https://www.nasa.gov/feature/super-blue-blood-moon-coming-jan-31  Credit: NASA 360',
    subcaption: 'Jan. 31, 2018 Super Blue Blood Moon',
    thumbnail: 'https://images-assets.nasa.gov/image/PIA12229/PIA12229~thumb.jpg',
  }];

class Photos extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: true };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  componentDidMount() {
    moonImages();
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render() {
    return (
      <>
        <div className={styles.Images}>
          <ReactBnbGallery
            show={this.state.galleryOpened}
            photos={photos}
            onClose={this.toggleGallery} />
        </div>
      </>
    );
  }
}

export default Photos; 
