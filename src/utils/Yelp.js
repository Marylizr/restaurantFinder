const apiKey = 'vz0dgHdUm2d2vky9ZMFhNsfDcc59SNIzpvTzE-9ukubF7TvcauRSouuWptdRAZ7FvU8Z-oAsdPvtTL99mHcm2QzmZMxgCIofDX0sZIpnNodEIoZcbN_wlxbTffuJY3Yx';


const Yelp = {
  async search(term, location, sortBy) {
    return await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
