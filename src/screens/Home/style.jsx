import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#fff",
    padding: 10
  },

  item: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    flex: 1,
  },
  value: {
    flex: 2,
  },
})

export default styles;