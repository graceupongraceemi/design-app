import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../store';

const Tab = ({ tab, isFilerTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilerTab ? 'rounded-full glassmorhism' : 'rounded-4'
      }`}
    ></div>
  );
};

export default Tab;
