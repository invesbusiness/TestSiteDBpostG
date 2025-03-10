import { FC } from 'react';
import useSPPnP from './utils/useSPPnP';
import React from 'react';

const App: FC = () => {
    const { userProfile } = useSPPnP();

    return <>{`Welcome ${userProfile?.Title}`}</>;
};

export default App;