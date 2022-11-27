import { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';

const lyrics = `
No!
We can't tek di brain people dem
zeen!
All dem people licky licky too much
And will sell you out
like weh dem do Marcus Garvey fi rice an peas
zeen!
So we say,
don't
friend
dem
deh
dem wi kill yuh!
huh!
No wanga gut
No wanga belly
(licky licky)
No wanga gut
No wanga belly
(nyamy nyamy)
No licky licky
No nyamy nyamy
(too greedy)`.split('\n');

function generateLightColor() {
    const red = Math.floor(((1 + Math.random()) * 256) / 2);
    const green = Math.floor(((1 + Math.random()) * 256) / 2);
    const blue = Math.floor(((1 + Math.random()) * 256) / 2);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function App() {
    const [count, setCount] = useState(0);
    const [lyric, setLyric] = useState(lyrics[count]);

    useEffect(() => {
        $('.App').css('background-color', generateLightColor());
        setLyric(lyrics[count]);
    }, [count]);

    return (
        <>
            <div className='App'>
                <audio src='sound.mp3' autoPlay></audio>
                <h1 id='mainLyric'>{lyric}</h1>
            </div>
            <div id='lyricNavigator'>
                <button
                    onClick={() => {
                        setCount(count === 0 ? lyrics.length - 1 : count - 1);
                    }}>
                    previous
                </button>
                <button
                    onClick={() => {
                        setCount(count === lyrics.length - 1 ? 0 : count + 1);
                    }}>
                    next
                </button>
            </div>
        </>
    );
}

export default App;
