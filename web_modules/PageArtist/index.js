import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtist } from "app/reducers/artist"
import { get as getAlbums } from "app/reducers/albums"
import { get as getTopTracks } from "app/reducers/topTracks"
import { get as getRelatedArtists } from "app/reducers/relatedArtists"

import ItemDetails from "ItemDetails"


@connect(
    (state) => ({
        artist : state.artist,
        albums : state.albums,
        topTracks : state.topTracks,
        relatedArtists : state.relatedArtists,
    }),
    (dispatch) => ({
        getArtist : (value) => dispatch(getArtist(value)),
        getAlbums : (value) => dispatch(getAlbums(value)),
        getTopTracks : (value) => dispatch(getTopTracks(value)),
        getRelatedArtists : (value) => dispatch(getRelatedArtists(value)),
    })
)
export default class PageArtist extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
        albumId: PropTypes.string,
        topTracksId: PropTypes.string,
        relatedArtistsId: PropTypes.string,
      }),
      artists : PropTypes.object,
      getArtist : PropTypes.func,
      albums : PropTypes.object,
      getAlbums : PropTypes.func,
      topTracks : PropTypes.object,
      getTopTracks : PropTypes.func,
      relatedArtists : PropTypes.object,
      getRelatedArtists : PropTypes.func,
  };

  static defaultProps = {
      params: {},
      artist : null,
      getArtist : () => {},
      getAlbums : () => {},
      getTopTracks : () => {},
      getRelatedArtists : () => {},
  };
  componentDidMount(){

      const {
        params,
        getArtist,
        getAlbums,
        getTopTracks,
        getRelatedArtists,
      } = this.props

      if(params.artistId) {
        getArtist(params.artistId)
        getAlbums(params.artistId)
        getTopTracks(params.artistId)
        getRelatedArtists(params.artistId)
      }
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getArtist,
      getAlbums,
      getTopTracks,
      getRelatedArtists,
    } = this.props

    if(nextProps.params.artistId!=params.artistId){
      getArtist(nextProps.params.artistId)
      getAlbums(nextProps.params.artistId)
      getTopTracks(nextProps.params.artistId)
      getRelatedArtists(nextProps.params.artistId)
    }

    }


  render() {

    const {
      params,
      artist,
      albums,
      topTracks,
      relatedArtists,
    } = this.props


    return (
      <div>
        {
            artist && !artist.loading &&   albums && !albums.loading &&
            topTracks && !topTracks.loading && relatedArtists && !relatedArtists.loading &&
            <ItemDetails name={artist.name}
                         image={artist.picture ? artist.picture.url : null}
                         kinds={artist.genres}
                         albums={albums.items}
                         topTracks={topTracks.tracks}
                         relatedArtists={relatedArtists.artists}/>
        }
      </div>
    )
  }
}
