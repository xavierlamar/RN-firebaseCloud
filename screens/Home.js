import { Text, View ,StyleSheet} from 'react-native'
import React, { useState} from 'react'

import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
// import * as Progress from 'react-native-progress';



const Home = ()=>{
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

 
    return (
      <View>
        <Text>home</Text>
      </View>
    )
  }


const styles = StyleSheet.create({});
export default Home