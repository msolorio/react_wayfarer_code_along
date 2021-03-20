import CitySidebarCity from './CitySidebarCity';

function CitySidebar(props) {
  const citiesList = props.cities.map((city) => {
    return (
      <CitySidebarCity
        key={city.id}
        cityName={city.cityName}        
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