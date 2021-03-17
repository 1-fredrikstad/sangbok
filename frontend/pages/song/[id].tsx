import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface ISongView {
  verses: string[];
}

const SongView = ({ verses }: ISongView) => (
  // const versesOld = [
  //   'Hos den kjære, gamle første tropp,\n er humøret stadig høyt på topp.\n Når humøret er tilstede,\n da går alt med liv og glede,\n i den kjære, gamle første tropp.',
  //   ':/: Vi ofte trasker rundt i vær og vind. :/:\n Men når ryggsekken den tynger,\n vi en liten vise synger.\n Dermed er vi jo straks lysere i sinn.',
  //   ' :/: Når lederne er strenge mang en gang. :/:\n Vi da tar en serenade\n og straks føler vi oss glade,\n selv om lederne er harde mang en gang.',
  //   ':/: Å koke mat er ofte nokså stritt. :/:\n Med en liten sang så jager\n vi bort alle dagens plager,\n og straks smiler vi jo bredere og blidt.',
  //   ':/: Vi lengter etter mamma og han far. :/:\n Vi en liten strofe nynner\n og vår lengsel straks forsvinner,\n og vi glemmer både mamma og han far.',
  //   'Første tropp har jo alltid vært bekjent,\n for å synge både høyt og klart og rent.\n Ja, vi alltid har det målet,\n høyt mot him’lens sky og skråle,\n så det høres kan at Første tropp er her!',
  // ];

  <Flex>
    <Spacer />
    <Box>
      <Stack spacing={6}>
        {verses.map((verseText, verseNumber) => (
          <div>
            {verseText.split("\n").map((lineText, lineIndex) =>
              lineIndex === 0 ? (
                <Text fontSize="lg">
                  {verseNumber + 1}: {lineText}
                </Text>
              ) : (
                <Text fontSize="lg">{lineText}</Text>
              ),
            )}
          </div>
        ))}
      </Stack>
    </Box>
    <Spacer />
  </Flex>
);

export default SongView;
