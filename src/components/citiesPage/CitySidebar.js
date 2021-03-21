import CityName from './CityName';

function CitySidebar(props) {

  const citiesList = props.cities.map((city, index) => {
    return (
      <CityName
        key={city.id}
        index={index}
        cityName={city.cityName}
        updateCity={props.updateCity}
      />
    );
  });

  return (
    <aside className="city-sidebar">
      <h2>Cities</h2>
      <ul className="cities-list">
        { citiesList }
      </ul>
    </aside>
  )
}

export default CitySidebar;