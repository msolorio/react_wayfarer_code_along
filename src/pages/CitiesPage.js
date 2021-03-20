import CitySidebar from '../components/citiesPage/CitySidebar';
import FeaturedCityInfo from '../components/citiesPage/FeaturedCityInfo';
import PostsList from '../components/citiesPage/PostsList';
import AddPostForm from '../components/citiesPage/AddPostForm';

function CitiesPage() {
  return (
    <div className="main-content"> 
      <CitySidebar />

      <main className="featured-city">
        <FeaturedCityInfo />

        {/* <PostsList /> */}
        <AddPostForm />
      </main>
    </div>
  );
}

export default CitiesPage;