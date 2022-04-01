import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Switch} from 'react-native';
import {Card, Icon} from 'react-native-elements';

function Settings() {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const [isEnabled3, setIsEnabled3] = useState(true);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const [isEnabled6, setIsEnabled6] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
  const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
  const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);

  return (
    <View style={style.view}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 10,
          color: '#ffa31a',
        }}>
        {' '}
        VIEW OPTIONS{' '}
      </Text>
      <View style={style.card}>
        <View style={style.params}>
          <Text style={{color: 'black'}}>Reduce animation</Text>
          <Switch
            trackColor={{false: '#767577', true: '#ffa31a'}}
            thumbColor={isEnabled1 ? '#ffa31a' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={isEnabled1}
          />
        </View>
        <View style={style.params}>
          <Text style={{marginTop: 5, color: 'black'}}>Auto Play</Text>
          <Switch
            trackColor={{false: '#767577', true: '#ffa31a'}}
            thumbColor={isEnabled2 ? '#ffa31a' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={style.params}>
          <Text style={{marginTop: 5, color: 'black'}}>
            Show NSFW cotent (I'm over 18)
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#ffa31a'}}
            thumbColor={isEnabled3 ? '#ffa31a' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 10,
          marginTop: 10,
          color: '#ffa31a',
        }}>
        {' '}
        ADVENCED{' '}
      </Text>
      <View style={style.card}>
        <View style={style.params}>
          <Text style={{marginTop: 5, color: 'black'}}>
            Saved image attribution
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#ffa31a'}}
            thumbColor={isEnabled4 ? '#ffa31a' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch4}
            value={isEnabled4}
          />
        </View>
        <View style={style.params}>
          <Text style={{marginTop: 5, color: 'black'}}>Open web</Text>
          <Switch
            trackColor={{false: '#767577', true: '#ffa31a'}}
            thumbColor={isEnabled5 ? '#ffa31a' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch5}
            value={isEnabled5}
          />
        </View>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 10,
          marginTop: 10,
          color: '#ffa31a',
        }}>
        {' '}
        ABOUT{' '}
      </Text>
      <View style={style.card}>
        <View style={style.params}>
          <Text style={{marginTop: 5, color: 'black'}}>2021.42.0.378193</Text>
          <Icon
            style={{marginRight: 10}}
            name="east"
            color="grey"
            size={30}
            onPress={() => console.log('onPress')}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
  },
  params: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default Settings;
