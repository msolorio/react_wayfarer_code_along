function CityName(props) {
  const handleCityClick = () => {
    props.updateCity(props.index);
  }

  return (
    <li className="city-selector">
      <img src="" alt=""/>
      <button onClick={handleCityClick}>
        {props.cityName}
      </button>
    </li>
  );
}

export default CityName;
