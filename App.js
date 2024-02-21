import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const handlePress = () => {
    setCurrentSection(prevSection => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about';
        case 'about':
          return 'contact';
        case 'contact':
          return 'name';
        default:
          return 'name';
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {currentSection === 'name' && (
            <View style = {styles.container}>
              <Image source={require('./assets/pic.jpg')} style = {styles.img}/>
              <Text style = {styles.head}>𝑲𝑰𝑴𝑩𝑬𝑹𝑳𝒀 𝑨𝑵𝑵 𝑨𝑹𝑩𝑶𝑳𝑬𝑫𝑨</Text>
              <Text style = {styles.par3}>ᴮᴬᶜᴴᴱᴸᴼᴿ ᴼᶠ ˢᶜᴵᴱᴺᶜᴱ ᴵᴺ ᴵᴺᶠᴼᴿᴹᴬᵀᴵᴼᴺ ᵀᴱᶜᴴᴺᴼᴸᴼᴳʸ</Text>
              <Text style = {styles.par} style = {{fontWeight: 'bold'}}>PINAKA MAGANDA SA GRC</Text>
            </View>
          )}

          {currentSection === 'education' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>College</Text>
              <Text style = {styles.par}>ɢʟᴏʙᴀʟ ʀᴇᴄɪᴘʀᴏᴄᴀʟ ᴄᴏʟʟᴇɢᴇꜱ (2021 - ᴘʀᴇꜱᴇɴᴛ)</Text>
              <Text style = {styles.head3}>Senior High</Text>
              <Text style = {styles.par}>ʙʜꜱ ꜱᴇɴɪᴏʀ ʜɪɢʜ (2018-2020)</Text>
              <Text style = {styles.head3}>Highschool</Text>
              <Text style = {styles.par}>ʙʜꜱ ᴊᴜɴɪᴏʀ ʜɪɢʜ ᴄᴏᴍᴘʟᴇᴛᴇʀ ( 2016-2017)</Text>
              <Text style = {styles.head3}>Elementary</Text>
              <Text style = {styles.par}>ᴘʀɪᴍᴀʀʏ ꜱᴄʜᴏᴏʟ (2011-2018 )</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>About</Text>
              <Text style = {styles.par2}>
              I'm currently studying Bachelor of Science in Information Technology at Global Reciprocal College. I am always active and eager to learn new skills.
              </Text>
            </View>
          )}

          {currentSection === 'contact' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>My Project</Text>
              <Image source = {require('./assets/project.jpg')} style = {styles.img}/>
              <Text style = {styles.head3}>Website Portfolio</Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },

  img: {
    height: 250,
    width: 250,
    borderRadius: 200
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  head2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  head3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30, 
    textAlign: 'center'
  },

  par: {
    fontSize: 13,
    textAlign: 'center',
  },

  par3: {
    fontSize: 20,
    textAlign: 'center',
  },

  par2: {
    fontSize: 15,
    marginTop: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    textAlign: 'center'
  }
  
});

export default App;