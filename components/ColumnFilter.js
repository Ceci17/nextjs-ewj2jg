export default function ColumnFilter({ column: { filterValue, setFilter } }) {
  return (
    <div>
      Search:{' '}
      <input
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
        placeholder="search column"
      />
    </div>
  );
}
