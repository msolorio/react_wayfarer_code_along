import CitySidebarCity from './CitySidebarCity';

function CitySidebar() {
  return (
    <aside className="city-sidebar">
      <h2>Cities</h2>
      <ul className="cities-list">
        <CitySidebarCity />
        <CitySidebarCity />
        <CitySidebarCity />
      </ul>
    </aside>
  )
}

export default CitySidebar;