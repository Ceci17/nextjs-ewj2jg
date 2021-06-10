import Head from 'next/head';
import {
  Typography,
  TextField,
  Box,
  Button,
  FormControl
} from '@material-ui/core';
import styles from '../styles/Home.module.css';
import { useFormik } from 'formik';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../lib/apolloClient';
import BasicTable from '@components/BasicTable';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

export default function Home(props) {
  // console.log(props);
  // const { data } = useQuery(ViewerQuery);
  // console.log(data);

  // const { values, errors, handleSubmit, handleChange } = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: ''
  //   },
  //   onSubmit: values => {
  //     console.log(values);
  //   }
  // });

  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Create Next App</title>
      </Head>
      <Typography variant="h3">Formik</Typography>
      <form onSubmit={handleSubmit}>
        <Box m={3}>
          <TextField
            variant="outlined"
            id="email"
            type="email"
            label="Email"
            onChange={handleChange}
            value={values.email}
          />
        </Box>
        <Box m={3}>
          <TextField
            variant="outlined"
            id="password"
            type="password"
            label="Password"
            onChange={handleChange}
            value={values.passoword}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form> */}
      <BasicTable />
    </div>
  );
}

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: ViewerQuery
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract()
//     }
//   };
// }
