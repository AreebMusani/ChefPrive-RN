import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: "center"
    width: '100%',
    marginTop: 5
  },

  fieldContainer: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#000"
  },

  label: {
    color: "#1F1F1F",
    fontSize: 12,
    marginVertical: 5
  }
})

export default styles;