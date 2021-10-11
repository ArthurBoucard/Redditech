import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

const Lave = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        Je suis {props.name}, et je veux {isHungry ? ":" : "plus : "} {props.food}!
      </Text>
      <View style={{paddingHorizontal: '10%'}}>
        <Button
          onPress={() => {
            {isHungry ? setIsHungry(false) : setIsHungry(true)}
          }}
          color={isHungry ? "red" : "black"}
          title={isHungry ? "donner : " + props.food : "Y'a plus " + props.food} // {props.food=="" ? "..." : props.food}
        />
      </View>
    </View>
  );
};

const App = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Image
        source={{
          uri: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/7/e/77eaf47d0c_97018_difference-magma-lave.jpg',
        }}
        style={{ width: '100%', height: '50%' }}
      />
      <ScrollView>
        <View style={{paddingHorizontal: '25%', paddingVertical: '5%'}}>
          <TextInput
            style={{height: 40, backgroundColor: "#DDDDDD", color: "#666666", paddingHorizontal: 20}}
            placeholder="Que veux tu donner?"
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
        </View>
        <Lave name="Souheil" food={text} />
        <Lave name="Jamie" food={text} />
      </ScrollView>
    </View>
  );
}

export default App;
