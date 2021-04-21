import { Heading, Box, Image, Divider, Center, useColorMode, Flex, Link } from '@chakra-ui/react';
import ThemeToggler from '@components/atoms/ThemeToggler';
import Header from '@components/molecules/Header';
import Layout from '@components/templates/Layout';
import React, { FC } from 'react';

const SettingsView: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Header>
        <Heading fontWeight="300" as="h1" size="xl" margin="1.5rem 2.5rem 0.5rem">
          Innstillinger
        </Heading>
      </Header>
      <Box p="1.5rem 2.5rem 0rem">
        <ThemeToggler />
        <Divider size="L" mt="1rem" mb="1rem" />
      </Box>
      <Flex justifyContent="space-between">
        <div>
          <img
            src={colorMode === 'light' ? 'images/logo.gif' : 'images/logo-white.gif'}
            alt="1. Fredrikstad speidergruppes logo"
            width="100px"
            height="120px"
          />
        </div>
        <p style={{ maxWidth: '60%' }}>
          Appen er laget for 1. Fredrikstad speidergruppe som et bachelorprosjekt av studenter ved NTNU. For mer info om
          prosjektet se
          <Link href="https://github.com/1-fredrikstad/sangbok/" style={{ textDecoration: 'underline' }}>
            {' '}
            GitHub.
          </Link>
        </p>
      </Flex>
      <Center height="100%">
        <Image
          src={colorMode === 'light' ? '/images/camping.svg' : '/images/camping_dark.svg'}
          width="auto"
          height="20rem"
        />
      </Center>
    </Layout>
  );
};

export default SettingsView;
