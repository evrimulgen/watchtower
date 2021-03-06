import React, {
  Component,
  Image,
  NavigatorIOS,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import SafariView from './SafariView';

import colors from '../utils/colors';

const appIcon = require('../images/app-icon.png');
const nextIcon = require('../images/next.png');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    backgroundColor: '#efeff4',
    marginTop: 44
  },
  section: {
    borderColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 44,
    paddingLeft: 10,
    backgroundColor: 'white'
  },
  sectionFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 10
  },
  sectionWide: {
    flex: 1
  },
  icon: {
    width: 75,
    height: 75,
    marginRight: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '500'
  },
  description: {
    color: colors.lightFont,
    flex: 1
  },
  linkFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    paddingRight: 10
  },
  linkLabel: {
    fontSize: 16,
    flex: 1
  },
  linkArrow: {
    width: 16,
    height: 16
  }
});

class AboutContent extends Component {
  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <TouchableOpacity onPress={() => SafariView(link.url)} key={index}>
          <View style={styles.linkFlex}>
            <Text style={styles.linkLabel}>{link.label}</Text>
            <Image
              style={styles.linkArrow}
              source={nextIcon}
            />
          </View>
        </TouchableOpacity>
      );
    });
  }
  
  render() {
    return (
      <ScrollView
        style={styles.body}
        contentInset={{bottom: 49}}>
        <View style={styles.section}>
          <View style={styles.sectionFlex}>
            <Image
              style={styles.icon}
              source={appIcon}
            />
            
            <View style={styles.sectionWide}>
              <Text style={styles.title}>Watchtower</Text>
              
              <Text>
                The most popular Movies and TV Shows of the day, coupled with easy access to trailers and additional content.
              </Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          {this.renderLinks([
            {
              url: 'https://darylchan.net',
              label: 'Built by Daryl Chan'
            },
            {
              url: 'https://twitter.com/dvrylc',
              label: 'Follow @dvrylc'
            },
            {
              url: 'https://github.com/dvrylc/watchtower',
              label: 'Watchtower on GitHub'
            }
          ])}
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionFlex}>
            <Text style={styles.description}>
              Icons designed by Freepik.{'\n'}
              This app uses the TMDb API but is not endorsed or certified by TMDb.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class AboutTab extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'About',
          component: AboutContent
        }}
      />
    );
  }
}

export default AboutTab;
