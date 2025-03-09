import { useCallback, useEffect, useState } from '@lynx-js/react';
import {furnituresP}
import './App.css';


export function App() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>

    </view>
  );
}
