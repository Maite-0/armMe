import {StyleSheet} from 'react-native';

export const getStyling = (props:any) => {
  console.log("PROPS",props);
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#f8f8f8",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 30,
    },
    statusContainer: {
      alignItems: "center",
      marginBottom: 40,
    },
    statusLabel: {
      fontSize: 18,
      fontWeight: "500",
      marginBottom: 10,
      color: "#333",
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
    armMetitle: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    armText: {
      //color: '#FFFFFF',
      color: "#007BFF",
    },
    meText: {
      color: 'red',
    },
    status: {
      fontSize: 20,
      fontWeight: "bold",
    },
    radioButtonContainer: {
      marginTop: 20,
      marginBottom: 30,
    },
    radioButtonLabel: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 10,
      color: "#333",
    },
    radioButton: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#007BFF",
    },
    selectedRadio: {
      backgroundColor: "#007BFF",
    },
    radioButtonText: {
      fontSize: 16,
      color: "#007BFF",
      fontWeight: "500",
    },
    buttonContainer: {
      width: "80%",
      marginTop: 20,
    },
  });
};