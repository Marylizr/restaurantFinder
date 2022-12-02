import React from 'react';
import styles from '../business/business.module.css';

class Business extends React.Component {
  render() {
    return (
      <div className={styles.Business}>
        <div className={styles.image_container}>
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className={styles.Business_information}>
          <div className={styles.Business_address}>
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
          </div>
          <div className={styles.Business_reviews}>
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className={styles.rating}>{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;