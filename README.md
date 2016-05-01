# react Playlist Viewer
React learning course

## Installation

```console
$ git clone https://github.com/kimak/react-playlist-viewer.git
$ npm i
```
## Development

```console
npm start
```

Then open in your browser at http://localhost:8080

## Production

To generate a minified bundle for prod environment

```console
$ npm run build
```
-----------------------------------------------------------------------------
TP React

## Features
Chose to focus on each artist's features using Spotify Developer API Artists
in itemDetails:
Get an Artist's Albums
Get an Artist's Top Tracks
Get an Artist's Related Artists
For each features : added API enpoints to consts.js so they would be export in
itemDetails automatically.
.map constructor to get an automatic default objects list for each features
same for .name /& Avatar

Connected each feature in PageArtist to make them appear in this page using
PropTypes & artist params Id.   

## Design
Material UI - List : Avatar / List / List Item / Divider
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

##Difficulties
Change css for material UI

------------------------------------------------------------------------------
