import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import YouTubePlayer from './YouTubePlayer';

import api from '../utils/api';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginTop: 44,
    marginLeft: 10
  },
  row: {
    paddingVertical: 10,
    paddingRight: 10,
    borderColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  video: {
    height: 200,
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '500'
  }
});

class Trailers extends Component {
  // Constructor
  constructor(props) {
    super(props);
    
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      loaded: false
    }
  }
  
  // Lifecycle
  componentDidMount() {
    this.fetchData(this.props.type, this.props.id);
  }
  
  // Functions
  fetchData(type, id) {
    api.loadTrailers(type, id)
      .then(response => {
        return response.results.filter(r => ['Trailer', 'Teaser'].indexOf(r.type) > -1)
      })
      .then(results => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(results),
          loaded: true
        });
      })
      .done();
  }
  
  renderLoadingView() {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading trailers...</Text>
      </View>
    );
  }
  
  renderEmptyView() {
    return (
      <View style={styles.loadingContainer}>
        <Text>No trailers available</Text>
      </View>
    );
  }
  
  renderRow(row) {
    return (
      <View style={styles.row}>
        <YouTubePlayer style={styles.video} youtubeID={row.key} />
        <Text style={styles.title}>{row.name}</Text>
      </View>
    );
  }
  
  // Render
  render() {
    // Check if trailers have loaded
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    
    if (this.state.dataSource._cachedRowCount === 0) {
      return this.renderEmptyView();
    }
    
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        contentInset={{bottom: 49}}
      />
    );
  }
}

export default Trailers;
