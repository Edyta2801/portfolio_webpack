
import React from 'react';
import * as Icon from 'react-feather';
import FsLightbox from 'fslightbox-react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  state = {
    toggler: false,
  };
  setToggler(event) {
    this.setState({
      toggler: event,
    });
  }
  render() {
    const {title, subtitle, imageUrl, largeImageUrl, url} = this.props;
    return (
      <div className="mi-portfolio">
        <div className="mi-portfolio-image">
          <img src={imageUrl} alt="Haltico" />
          <ul>
            {!largeImageUrl ? null : <li>
              <button onClick={() => this.setToggler(!this.state.toggler)}>
                <Icon.ZoomIn/>
              </button>
            </li>}
            { url ? <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link/>
              </a>
            </li> : null}
          </ul>
        </div>
        {!url ? <h5>{title}</h5> : <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>}
        {subtitle ? <h6>{subtitle}</h6> : null}
        {!largeImageUrl ? null : <FsLightbox
          toggler={this.state.toggler}
          sources={largeImageUrl}
        />
        }
      </div>
    );
  }
}
Home.propTypes = {
  url: PropTypes.string,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  imageUrl: PropTypes.string,
  largeImageUrl:PropTypes.string,
};

export default Home;
