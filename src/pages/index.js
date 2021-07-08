import React from 'react';
import { Button } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';

import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

function Home({ data }) {
  return (
    <Layout title='Kombine videos'>
      <Box p={ 2 }>
        <Grid container spacing={ 4 }>
          { data.map((item) => (
            <Grid key={ item._id } item xl={ 3 } lg={ 3 } md={ 4 } sm={ 6 } xs={ 12 }>
              <VideoCard item={ item } />
            </Grid>
          )) }
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {

  const data = [
    {
      id: 1,
      title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/new-video.svg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'XXX DO XXXXX | XX XX XX XXXXXXXXXXXXXXXXXX',
      authorId: 1,
      authorName: 'XX XXX',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/new-video.svg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'XXX DO XXXXX | XX XX XX XXXXXXXXXXXXXXXXXX',
      authorId: 1,
      authorName: 'XX XXX',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/new-video.svg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'XX XXXXX ',
      authorId: 1,
      authorName: 'XX XXX',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/new-video.svg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];

  return {
    props: { data: JSON.parse(JSON.stringify(data)) },
  };
}

export default Home;
