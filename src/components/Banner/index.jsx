import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string,
};

function Banner(props) {
    const {title, backgroundUrl} = props;
    const bannerStyle = backgroundUrl ? {backgroundUrl: backgroundUrl} : {}
    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    );
}

export default Banner;