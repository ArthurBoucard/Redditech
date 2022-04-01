import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import axios from 'axios';

import Feed from '../components/Feed';
import SubFeed from '../components/SubFeed';
import Filter from '../components/Filter';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const GetProfile = () => {
  const [User, setUser] = useState({all: null});

  const options = {
    method: 'GET',
    url: 'https://oauth.reddit.com/api/v1/me',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + global.Token,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (res) {
        setUser({
          all: res.data,
        });
      });
      .catch(function (error) {
        console.error(error);
      });
    // console.log(User.all);
  }, []);

  return (
    <View>
      {!User.all ? (
        <Icon
          name="search"
          color="#fff"
          size={30}
          onPress={() => navigation.navigate('Search')}
        />
      ) : (
        <Image
          style={styles.avatar}
          source={{uri: User.all.icon_img.split('?')[0]}}
        />
      )}
    </View>
  );
};

function Home({navigation}) {
  var filter = 'all/' + global.Filter;

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 5}}>
          <Icon
            name="search"
            color="#fff"
            size={30}
            onPress={() => navigation.navigate('Search')}
          />
          <View style={{marginLeft: 20}} />
          {!global.Token ? (
            <Icon
              name="person"
              color="#fff"
              size={30}
              onPress={() => navigation.navigate('Profile')}
            />
          ) : (
            <GetProfile />
          )}
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      {refreshing ? (
        <></>
      ) : (
        <View>
          <ScrollView
            style={{zIndex: 0}}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {!global.Token ? (
              <View>
                <Feed subreddit={filter} />
              </View>
            ) : (
              <View>
                <SubFeed subreddit={filter} />
              </View>
            )}
          </ScrollView>
          <Filter style={{zIndex: 3}} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Home;
