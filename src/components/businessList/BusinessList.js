import React from 'react';
import Business from '../business/Business';
import styles from './businessList.module.css';




const BusinessList = ({businesses}) => {
  

  return(
    <div className={styles.BusinessList}>
        {
          businesses.map((business) => {
            return <Business business={business} key={business.id} />
          })
        }
    </div>
  )
}

export default BusinessList

// class BusinessList extends React.Component {

    
//   render() {
//     return (
//       <div className={styles.BusinessList}>
//         {
//           this.props.business.map(business => {
//             return <Business business={business} key={business.id} />
//           })
//         }
//       </div>
//     );
//   }
// }

// export default BusinessList;



