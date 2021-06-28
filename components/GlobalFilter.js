export default function GlobalFilter({ filter, setFilter }) {
  return (
    <div>
      Search:{' '}
      <input
        value={filter || ''}
        onChange={e => setFilter(e.target.value)}
        placeholder="search table"
      />
    </div>
  );
}
