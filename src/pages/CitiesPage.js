import React from 'react';
import CitySidebar from '../components/citiesPage/CitySidebar';
import FeaturedCityInfo from '../components/citiesPage/FeaturedCityInfo';
import PostsList from '../components/citiesPage/PostsList';
import citiesData from '../citiesData';
import AddPostForm from '../components/citiesPage/AddPostForm';

class CitiesPage extends React.Component {
  state = {
    showForm: false,
    cityIdx: 0
  }

  toggleForm = () => {
    this.setState((state) => {
      return { showForm: !state.showForm };
    });
  }

  updateCity = (index) => {
    this.setState({ cityIdx: index });
  }

  renderButtons() {
    return (
      this.state.showForm
      ? <button onClick={this.toggleForm}>All Posts</button>
      : <button onClick={this.toggleForm}>Add Post</button>
    );
  }

  render() {
    return (
      <div className="main-content"> 
        <CitySidebar
          cities={citiesData} 
          updateCity={this.updateCity}
        />
  
        <main className="featured-city">
          <FeaturedCityInfo featuredCity={citiesData[this.state.cityIdx]} />
  
          { this.renderButtons() }
  
          {
            this.state.showForm
            ? <AddPostForm />
            : <PostsList posts={citiesData[this.state.cityIdx].posts} />
          }
        </main>
      </div>
    );
  }
}

export default CitiesPage;