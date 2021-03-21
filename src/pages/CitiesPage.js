import React from 'react';
import CitySidebar from '../components/citiesPage/CitySidebar';
import FeaturedCityInfo from '../components/citiesPage/FeaturedCityInfo';
import PostsList from '../components/citiesPage/PostsList';
import citiesData from '../citiesData';
import AddPostForm from '../components/citiesPage/AddPostForm';

class CitiesPage extends React.Component {
  state = {
    showForm: false,
    cityIdx: 0,
    citiesData: citiesData
  }

  toggleForm = () => {
    this.setState((state) => {
      return { showForm: !state.showForm };
    });
  }

  updateCity = (index) => {
    this.setState({ cityIdx: index });
  }

  addPost = (newPost) => {
    this.setState((state) => {
      const stateClone = JSON.parse(JSON.stringify(state));
      stateClone.citiesData[state.cityIdx].posts.unshift(newPost);

      return stateClone;
    });
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
          cities={this.state.citiesData} 
          updateCity={this.updateCity}
        />
  
        <main className="featured-city">
          <FeaturedCityInfo 
            featuredCity={this.state.citiesData[this.state.cityIdx]} 
          />
  
          { this.renderButtons() }
  
          {
            this.state.showForm
            ? <AddPostForm addPost={this.addPost} toggleForm={this.toggleForm} />
            : <PostsList posts={this.state.citiesData[this.state.cityIdx].posts} />
          }
        </main>
      </div>
    );
  }
}

export default CitiesPage;