import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: '#fff',
    padding: 10
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "flex-start",
    marginBottom: 10
  },

  forgetPassText: {
    color: "#1E8EF5",
  },

  forgetPassCon: {
    alignSelf: "flex-end",
    marginVertical: 5
  },

  guest: {
    color: "#FF9E2C", 
    fontSize: 16, 
    marginVertical: 5
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },

  line: {
    borderWidth: 0.5,
    borderColor: 'grey',
    alignSelf: "center",
    flex: 1,
    marginTop: 2
  }, 

  lineInnerText: {
    color: 'grey',
    fontSize: 14,
    marginHorizontal: 15,
  },

  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 30,
  }
})

export default styles;