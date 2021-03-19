import CitySidebar from '../components/citiesPage/CitySidebar';
import FeaturedCityInfo from '../components/citiesPage/FeaturedCityInfo';
import PostsList from '../components/citiesPage/PostsList';

function CitiesPage() {
  return (
    <div className="main-content"> 
      <CitySidebar />

      <main className="featured-city">
        <FeaturedCityInfo />

        <PostsList />
      </main>
    </div>
  );
}

export default CitiesPage;