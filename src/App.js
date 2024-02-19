import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [artistas, setArtistas] = useState([]);
    const [albuns, setAlbuns] = useState([]);
    const [musicas, setMusicas] = useState([]);

    useEffect(() => {
        fetchArtistas();
        fetchAlbuns();
        fetchMusicas();
    }, []);

    const fetchArtistas = async () => {
        try {
            const response = await axios.get('/artistas');
            setArtistas(response.data);
        } catch (error) {
            console.error('Erro ao buscar artistas:', error);
        }
    };

    const fetchAlbuns = async () => {
        try {
            const response = await axios.get('/albuns');
            setAlbuns(response.data);
        } catch (error) {
            console.error('Erro ao buscar álbuns:', error);
        }
    };

    const fetchMusicas = async () => {
        try {
            const response = await axios.get('/musicas');
            setMusicas(response.data);
        } catch (error) {
            console.error('Erro ao buscar músicas:', error);
        }
    };

    return (
        <div>
            <h1>Artistas</h1>
            <ul>
                {artistas.map((artista) => (
                    <li key={artista.id}>{artista.nome}</li>
                ))}
            </ul>

            <h1>Álbuns</h1>
            <ul>
                {albuns.map((album) => (
                    <li key={album.id}>{album.titulo}</li>
                ))}
            </ul>

            <h1>Músicas</h1>
            <ul>
                {musicas.map((musica) => (
                    <li key={musica.id}>{musica.titulo}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
