import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  },

  header: {
    marginVertical: 20
  },

  heading: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
  },

  error: {
    color: "#DE2C2C",
    fontSize: 12
  },


  successContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },

  successMsg: {
    fontSize: 20,
    color: "#1F1F1F",
    textAlign: 'center'
  },

  successImg: {
    marginTop: '30%',
    marginBottom: 20,
  }
})

export default styles;