import { Box, Center, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import Header from "@components/molecules/Header";
import Layout from "@components/templates/Layout";
import React from "react";

interface ISongView {
  verses: string[];
}

const SongView = ({}: ISongView) => {
  const title = "derp";
  const verses = [
    "1: Hos den kjære, gamle første tropp,\n er humøret stadig høyt på topp.\n Når humøret er tilstede,\n da går alt med liv og glede,\n i den kjære, gamle første tropp.",
    "2: :/:  Vi ofte trasker rundt i vær og vind. :/:\n Men når ryggsekken den tynger,\n vi en liten vise synger.\n Dermed er vi jo straks lysere i sinn.",
    "3: :/: Når lederne er strenge mang en gang. :/:\n Vi da tar en serenade\n og straks føler vi oss glade,\n selv om lederne er harde mang en gang.",
    "4: :/: Å koke mat er ofte nokså stritt. :/:\n Med en liten sang så jager\n vi bort alle dagens plager,\n og straks smiler vi jo bredere og blidt.",
    "5: :/: Vi lengter etter mamma og han far. :/:\n Vi en liten strofe nynner\n og vår lengsel straks forsvinner,\n og vi glemmer både mamma og han far.",
    "Første tropp har jo alltid vært bekjent,\n for å synge både høyt og klart og rent.\n Ja, vi alltid har det målet,\n høyt mot him’lens sky og skråle,\n så det høres kan at Første tropp er her!",
  ];
  return (
    <Layout>
      <Header color="#D6F2E6">
        <Heading>{title}</Heading>
      </Header>
      <Box p="0 2.5rem">
        <Stack spacing={6}>
          {verses.map((verseText, verseNumber) => (
            <Box mb="-1rem">
              {verseText
                .split("\n")
                .map((lineText, lineIndex) =>
                  lineIndex === 0 ? (
                    <Text fontSize="md">{lineText}</Text>
                  ) : (
                    <Text fontSize="md">{lineText}</Text>
                  ),
                )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Layout>
  );
};

export default SongView;
