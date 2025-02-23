import React, { useState } from 'react';

const songs = [
    { id: 1, title: 'Song A', artist: 'Artist 1', album: 'Album X' },
    { id: 2, title: 'Song B', artist: 'Artist 2', album: 'Album Y' },
    { id: 3, title: 'Song C', artist: 'Artist 1', album: 'Album X' },
    { id: 4, title: 'Song D', artist: 'Artist 3', album: 'Album Z' },
];

const MusicLibrary: React.FC = () => {
    const [filter, setFilter] = useState('');
    const [sortKey, setSortKey] = useState<'title' | 'artist' | 'album'>('title');

    const filteredSongs = songs
        .filter(
            (song) =>
                song.title.toLowerCase().includes(filter.toLowerCase()) ||
                song.artist.toLowerCase().includes(filter.toLowerCase()) ||
                song.album.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => a[sortKey].localeCompare(b[sortKey]));

    return (
        <div>
            <h2>Music Library</h2>
            <input
                type="text"
                placeholder="Filter by title, artist, or album"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <select value={sortKey} onChange={(e) => setSortKey(e.target.value as any)}>
                <option value="title">Title</option>
                <option value="artist">Artist</option>
                <option value="album">Album
