import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f8f8f8',
    },
    titleContainer: {
      flexDirection: 'row',  
      alignItems: 'center', 
      marginBottom: 25,
    },
    icon: {
      width: 40, 
      height: 40, 
      marginRight: 10,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    armText: {
      color: "#007BFF",
    },
    meText: {
      color: 'red',
    },
    welcomeText: {
      fontSize: 16,
      color: '#555',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingLeft: 10,
      marginBottom: 15,
      backgroundColor: '#fff',
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 15,
      backgroundColor: '#fff',
      width: '100%',
    },
    passwordInput: {
      flex: 1,
      height: 50,
    },
    eyeIcon: {
      marginLeft: 10,
    },
    buttonContainer: {
      width: '100%',
      marginTop: 10,
    },
});
