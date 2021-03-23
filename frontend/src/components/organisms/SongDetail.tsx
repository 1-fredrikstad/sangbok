import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import Header from "@components/molecules/Header";
import HeaderDetails from "@components/molecules/HeaderDetails";
import Layout from "@components/templates/Layout";
import { SongDetailQuery_details } from "@graphqlTypes/SongDetailQuery";
import React, { FC } from "react";
import { SwipeableHandlers } from "react-swipeable";

interface SongDetailProps {
  song: SongDetailQuery_details;
  onSwipe: SwipeableHandlers;
}

const SongDetail: FC<SongDetailProps> = ({ song, onSwipe }) => {
  const { author, title, verses } = song;

  // const tempVerses = [
  //   "1: Hos den kjære, gamle første tropp,\ner humøret stadig høyt på topp.\nNår humøret er tilstede,\nda går alt med liv og glede,\ni den kjære, gamle første tropp.",
  //   "2: :/:  Vi ofte trasker rundt i vær og vind. :/:\nMen når ryggsekken den tynger,\nvi en liten vise synger.\nDermed er vi jo straks lysere i sinn.",
  //   "3: :/: Når lederne er strenge mang en gang. :/:\nVi da tar en serenade\nog straks føler vi oss glade,\nselv om lederne er harde mang en gang.",
  //   "4: :/: Å koke mat er ofte nokså stritt. :/:\nMed en liten sang så jager\nvi bort alle dagens plager,\nog straks smiler vi jo bredere og blidt.",
  //   "5: :/: Vi lengter etter mamma og han far. :/:\nVi en liten strofe nynner\nog vår lengsel straks forsvinner,\nog vi glemmer både mamma og han far.",
  //   "Første tropp har jo alltid vært bekjent,\nfor å synge både høyt og klart og rent.\nJa, vi alltid har det målet,\nhøyt mot him’lens sky og skråle,\n så det høres kan at Første tropp er her!",
  // ];

  return (
    <Layout>
      <Header color="#D6F2E6">
        <Heading>
          <HeaderDetails title={title} author={author} />
        </Heading>
      </Header>

      <Box p="0 2.5rem">
        <Stack spacing={6} {...onSwipe} h="100%">
          {verses.map((verse, i) => (
            <Text key={`verse${i}`} whiteSpace="pre-wrap">
              {verse}
            </Text>
          ))}
        </Stack>
      </Box>
    </Layout>
  );
};

export default SongDetail;
