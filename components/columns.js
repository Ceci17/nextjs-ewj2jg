export const COLUMNS = [
  {
    Header: 'ID',
    Footer: 'ID',
    accessor: 'id'
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name'
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name'
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender'
  },
  {
    Header: 'Birthday',
    Footer: 'Birthday',
    accessor: 'birthday'
  },
  {
    Header: 'Age',
    Footer: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone'
  }
];

export const GROUPED_COLUMNS = [
  {
    Header: 'ID',
    Footer: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender'
      },
      {
        Header: 'Birthday',
        Footer: 'Birthday',
        accessor: 'birthday'
      },
      {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
];
