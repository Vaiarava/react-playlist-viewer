import React, { Component } from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider'

import styles from "./index.css"

const Item = ({name ="", image=null, kinds=[], songs=[], albums=[], topTracks=[], relatedArtists=[]}) =>

(<div className={styles.itemDetails}>
    {
      image &&
      <img src={image} className={styles.image} />
    }
    <h2 className={styles.title}>{name}</h2>
    <div className={styles.kinds}>
      {
        kinds &&
        kinds.map((item, index) => {
          const isLastItem = index<kinds.length-1;
          return <span key={index}>{item}{isLastItem && ", "}</span>
        })
      }
    </div>

    <ul className={styles.list}>
      {
        songs &&
        songs.map((song, index) => {
          return <li className={styles.song} key={index}>{song.name}</li>
        })
      }
    </ul>



    <Divider />


    <List subheader="Albums" >
      {
        albums &&
        albums.map((album, index) => {
          return <ListItem key={index}
                           primaryText={album.name}
                           leftAvatar={<Avatar src={album.images[0].url} />} />
        })
      }

      </List>

    <Divider />

    <List subheader="TopTracks">
      {
        topTracks &&
        topTracks.map((topTracks, index) => {
          return <ListItem key={index}
                            primaryText={topTracks.name}/>
        })
      }
    </List>

    <Divider />

    <List subheader="Related Artists">
      {
        relatedArtists &&
        relatedArtists.map((relatedArtists, index) => {
          return <div key={index}>
          <ListItem key={index}
                    primaryText={relatedArtists.name}
                    leftAvatar={<Avatar src={relatedArtists.images[0].url}/>} />

          </div>
        })
      }

    </List>

</div>)

export default Item
