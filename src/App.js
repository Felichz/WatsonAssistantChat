import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import { GlobalStyles } from './GlobalStyles';
import { Container } from './styles';
import { ChatBox } from './containers/ChatBox';

const App = () => {

    return (
        <>
            <GlobalStyles />
            <Container>
                <ChatBox />
            </Container>
        </>
    );
};

export default App;
