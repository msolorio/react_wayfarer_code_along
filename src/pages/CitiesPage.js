import CitySidebar from '../components/citiesPage/CitySidebar';
import FeaturedCityInfo from '../components/citiesPage/FeaturedCityInfo';
import PostsList from '../components/citiesPage/PostsList';
import citiesData from '../citiesData';
import AddPostForm from '../components/citiesPage/AddPostForm';

function CitiesPage() {
  return (
    <div className="main-content"> 
      <CitySidebar cities={citiesData} />

      <main className="featured-city">
        <FeaturedCityInfo featuredCity={citiesData[0]} />
        <PostsList posts={citiesData[0].posts} />
        {/* <AddPostForm /> */}
      </main>
    </div>
  );
}

export default CitiesPage;