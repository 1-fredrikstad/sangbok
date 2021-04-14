import Layout from "@components/templates/Layout";
import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const NotFound404 = () => {
  return (
    <Layout>
      <Heading as="h4" padding="10">
        Oisann! Sangen er ikke funnet
      </Heading>
      <Image
        src="/images/404error.svg"
        alt="No song found"
        width={500}
        height={500}
      />
    </Layout>
  );
};

export default NotFound404;
