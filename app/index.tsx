import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export default function Index() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={styles.fontColor}>
          Edit app/index.tsx to edit this screen rafi.
        </Text>
        <Button title={'Wanna Click Me!?'} />
        <TextInput placeholder='type here bro' />
        <Image
          style={{
            height: 100,
            width: 100,
          }}
          source={require('@/assets/images/icon.png')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  fontColor: {
    color: 'red',
  },
})
