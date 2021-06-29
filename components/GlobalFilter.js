import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export default function GlobalFilter({ filter = '', setFilter }) {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce(value => {
    setFilter(value);
  }, 1000);

  return (
    <div>
      Search:{' '}
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="search table"
      />
    </div>
  );
}
