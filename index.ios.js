import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  Text
} from 'react-native';

import MoviesTab from './components/MoviesTab';
import TvTab from './components/TvTab';
import AboutTab from './components/AboutTab';

const moviesIcon = require('./images/movies.png');
const tvIcon = require('./images/tv.png');
const aboutIcon = require('./images/about.png');

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

class Watchtower extends Component {
  // Constructor
  constructor(props) {
    super(props);
    
    this.state = {
      selectedTab: 'movies'
    }
  }
  
  // Render
  render() {
    return (
      <TabBarIOS style={styles.container}>
        <TabBarIOS.Item
          title='Movies'
          icon={moviesIcon}
          selected={this.state.selectedTab === 'movies'}
          onPress={() => {
            this.setState({
              selectedTab: 'movies'
            });
          }}>
          <MoviesTab />
        </TabBarIOS.Item>
        
        <TabBarIOS.Item
          title='TV'
          icon={tvIcon}
          selected={this.state.selectedTab === 'tv'}
          onPress={() => {
            this.setState({
              selectedTab: 'tv'
            });
          }}>
          <TvTab />
        </TabBarIOS.Item>
        
        <TabBarIOS.Item
          title='About'
          icon={aboutIcon}
          selected={this.state.selectedTab === 'about'}
          onPress={() => {
            this.setState({
              selectedTab: 'about'
            });
          }}>
          <AboutTab />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('Watchtower', () => Watchtower);
