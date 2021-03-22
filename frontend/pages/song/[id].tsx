import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Header from "@components/molecules/Header";
import SongDetails from "@components/molecules/SongDetails";
import Layout from "@components/templates/Layout";
import React, { FC } from "react";


const SongView: FC = () => {
  const title = "Østfoldsangen";
  const author = "Odd Nordstoga"
  // Remember to ask client to remove space after \n
  const verses = [
    "1: Hos den kjære, gamle første tropp,\ner humøret stadig høyt på topp.\nNår humøret er tilstede,\nda går alt med liv og glede,\ni den kjære, gamle første tropp.",
    "2: :/:  Vi ofte trasker rundt i vær og vind. :/:\nMen når ryggsekken den tynger,\nvi en liten vise synger.\nDermed er vi jo straks lysere i sinn.",
    "3: :/: Når lederne er strenge mang en gang. :/:\nVi da tar en serenade\nog straks føler vi oss glade,\nselv om lederne er harde mang en gang.",
    "4: :/: Å koke mat er ofte nokså stritt. :/:\nMed en liten sang så jager\nvi bort alle dagens plager,\nog straks smiler vi jo bredere og blidt.",
    "5: :/: Vi lengter etter mamma og han far. :/:\nVi en liten strofe nynner\nog vår lengsel straks forsvinner,\nog vi glemmer både mamma og han far.",
    "Første tropp har jo alltid vært bekjent,\nfor å synge både høyt og klart og rent.\nJa, vi alltid har det målet,\nhøyt mot him’lens sky og skråle,\n så det høres kan at Første tropp er her!",
  ];
  return (
    <Layout>
      <Header color="#D6F2E6">
        <Heading>
          <SongDetails title={title} author={author} />
        </Heading>
      </Header>
      <Box p="0 2.5rem">
        <Stack spacing={6}>
          {verses.map((verse) => (
            <Text whiteSpace="pre-wrap">{verse}</Text>
          ))}
        </Stack>
      </Box>
    </Layout>
  );
};

export default SongView;
