import React from "react";

export default class UserCard extends React.Component {

  hideEmail = (email) => {
    const [username, domain] = email.split('@');
    const firstThreeChars = username.substring(0, 3);
    const hiddenEmail = `${firstThreeChars}...@${domain}`;
    return hiddenEmail;
  }

  render() {
    return (
      <div className="user">
        <img src={this.props.picture} alt='userImg'/> 
        <h3>{this.props.name}</h3>
        <p>{this.hideEmail(this.props.email)}</p>
        <p>{this.props.date}</p>
      </div>
    );
  }
}



// export default class App extends Component {
//     render() {
//     return (
//     <View style={styles.container}>
//     <FlatList
//     data={data.results}
//     renderItem={({item}) => <Text>{item.name.first}</Text>}
//     />
//     </View>
//     );
//     }
//     }
    
//     const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     }
//     });

// import { useEffect, useState } from "react";
// interface Data {
//   name: string
//   website: string
//   email: string
//   country: [{
//     id: string
//     name: string
//   }]
// }
// export const UsersDetails = () =>{
// const [data, setData] = useState<Data>()
// const fetchJson = () => {
//   fetch('./data.json')
//   .then(response => {
//     return response.json();
//   }).then(data => {
//     setData(data);
//   }).catch((e: Error) => {
//     console.log(e.message);
//   });
// }
// useEffect(() => {
//   fetchJson()
// },[])
// return(
//   <>
//   <div>
//     <div>Name : {data?.name}</div>
//     <div>Email : {data?.email}</div>
//     <div>Website : {data?.website}</div>
//     <div><label>Country :</label>
//     <select>
//       {data?.country?.map((country) => {
//         return <option key={country.id} value={country.id}>{country.name}</option>
//       })}
//     </select>
//     </div>
//   </div>
//   </>
// )
// }

