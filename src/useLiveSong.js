import { useEffect, useState } from 'react';
import { subscribeLiveSong } from './firebase';

/** React hook: returns { liveId, loading } and updates in real time. */
export function useLiveSong() {
  const [liveId, setLiveId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      subscribeLiveSong((id) => {
        setLiveId(id);
        setLoading(false);
      }),
    []
  );

  return { liveId, loading };
}
