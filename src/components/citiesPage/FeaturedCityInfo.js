function FeaturedCityInfo(props) {
  return (
    <div className="featured-city-info">
      <div className="featured-city-content">
        <h2>{props.featuredCity.cityName}</h2>
        <h3>{props.featuredCity.country}</h3>
      </div>
      <img src={props.featuredCity.imgUrl} alt=""/>
    </div>
  );
}

export default FeaturedCityInfo;