// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native'
// const TestSnippets = () => {
//     return(
//         <View style={styles.spaceTop}>
//         <Text>My code  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
//         </View>
//     )
// }
// const styles = StyleSheet.create(
//     { spaceTop: {
//       marginTop: 50
//         }
//     }
//   )
// export default TestSnippets

// import React from 'react'
// import {Text, View, StyleSheet} from 'react-native'
// const TestSnippets = props => {
// const myThings = ['A', 'B', 'C']

// return(
//     myThings.map(thing =>  <Text style={styles.spaceTop}>{thing}</Text>)  
// )

// }
// const styles = StyleSheet.create(
//     {
//         spaceTop: {
//             marginTop: 50
//         }
//     })
// export default TestSnippets

import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
const TestSnippets = props => {
const myThings = ['A', 'B', 'C']

return(
    myThings.map(thing =>  <ThingyItem thing={thing}/>)  
)

}
const ThingyItem = (props) => {
    return(
        <Text style={styles.spaceTop}>{props.thing}</Text>
    )  
}
const styles = StyleSheet.create(
    {
        spaceTop: {
            marginTop: 50
        }
    })
export default TestSnippets