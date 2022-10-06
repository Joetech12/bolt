import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer2 from '../components/Footer2';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import { API_KEY, CONTEXT_KEY } from '../Keys';
import Response from '../Response';

const Search = ({ results }) => {
  const router = useRouter();

  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/google-fav.png" />
      </Head>

      <Header />

      {/* Search results */}
      <SearchResults results={results} />

      <Footer2 />

    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.staff || '0';

  // useDummyData ? Response  : 

  const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
