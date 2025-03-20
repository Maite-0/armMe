import React, {FC} from 'react';
import Navigators from './src/navigators';
import {AuthProvider} from './src/services/providers/auth';
import {PartitionStatusProvider} from './src/services/providers/partitionStatus';
import {AwayArmProvider} from './src/services/providers/awayArm';
import { OpenAccessProvider } from './src/services/providers/OpenAccess';

const App: FC<any> = () => {
  return (
    <>
      <AuthProvider>
        <AwayArmProvider>
          <OpenAccessProvider>
          <PartitionStatusProvider>
            <Navigators />
          </PartitionStatusProvider>
          </OpenAccessProvider>
        </AwayArmProvider>
      </AuthProvider>
    </>
  );
};

export default App;