import { useTable } from 'react-table';
import { columns } from 'columns';
import MOCK_DATA from '../MOCK_DATA.json';

const BasicTable = () => {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => columns, []);

  const table = useTable();

  console.log(table);

  return (
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BasicTable;
