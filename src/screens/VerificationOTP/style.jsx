import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10
  },

  mailImg: {
    marginTop: "20%",
    marginBottom: 20
  },

  successMsg: {
    textAlign: "center",
    fontSize: 16,
    color: "#1F1F1F80"
  },

  digitMsg: {
    fontSize: 15,
    color: "#000",
    marginVertical: 20
  },

//   OTP INPUT
    root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginBottom: 20},
  cell: {
    width: 40,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    marginHorizontal: 15,
    color: "#FF9E2C"
  },
  focusCell: {
    borderColor: '#FF9E2C',
  },

  forgetPassText: {
    color: "#1E8EF5",
    fontWeight: "bold"
  },
})

export default styles;