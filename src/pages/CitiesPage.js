function CitiesPage() {
  return (
    <div className="main-content">
      <aside className="city-sidebar">
        <h2>Cities</h2>
        <ul className="cities-list">
          <li className="city-selector">
            <img src="" alt=""/>
            <p>San Francisco</p>
          </li>
          <li className="city-selector">
            <img src="" alt=""/>
            <p>Madrid</p>
          </li>
          <li className="city-selector">
            <img src="" alt=""/>
            <p>Chiang Mai</p>
          </li>
        </ul>
      </aside>
      <main className="featured-city">
        <div className="featured-city-info">
          <div className="featured-city-content">
            <h2>London</h2>
            <h3>United Kingdom</h3>
          </div>
          <img src="https://picsum.photos/id/1047/400/250" alt=""/>
        </div>
        <ul className="posts-list">
          <li className="post">
            <img src="" alt=""/>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus fuga aliquam porro iste quasi ex id ipsum velit, esse, sunt saepe delectus. Fugit neque expedita officia iusto vel molestias?</p>
          </li>
          <li className="post">
            <img src="" alt=""/>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus fuga aliquam porro iste quasi ex id ipsum velit, esse, sunt saepe delectus. Fugit neque expedita officia iusto vel molestias?</p>
          </li>
          <li className="post">
            <img src="" alt=""/>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus fuga aliquam porro iste quasi ex id ipsum velit, esse, sunt saepe delectus. Fugit neque expedita officia iusto vel molestias?</p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default CitiesPage;