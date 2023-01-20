// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  ContainerFlex,
  ContainerAbout,
  InnerContainerAbout
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, meu nome é {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            {" "}
              <Text as="span" type="heading1" color="brand1">
                Criação
              </Text>{" "}
              e{" "}
              <Text as="span" type="heading1" color="brand1">
                desenvolvimento
              </Text>{" "}
              de projetos
            </Text>
            <Text type="body1" color="grey2">
              Aqui você vai envontrar os projetos e algumas tecnologias que domino.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver Projetos
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ContainerFlex id="about-me">
        <ContainerAbout>
              <InnerContainerAbout>
                  <Text as="h1" type="heading3" color="grey4">Sobre Mim:</Text>
                  <Text as="p" type="body1" color="grey2">
                      Trabalhei inicialmente como aprendiz no setor de compras, onde pude perceber a necessidade de abastecimento de estoque da empresa e como isso influencia diretamente em seu bom funcionamento, bem como no lançamento atividades para os colaboradores. 
                  </Text>
                  
                  <Text as="p" type="body1" color="grey2">
                      Posteriormente como estagiário na Controladoria Financeira, pude ter uma ideia a respeito da criação e controle de projetos, por meio da gestão de recursos, criação e remanejamento de orçamentos, relatórios financeiros e de prestação de contas. 
                  </Text>

                  <Text as="p" type="body1" color="grey2">
                      Passando por um processo de transição de carreira, levando em consideração as mudanças contínuas no mundo e a evolução da tecnologia, estudo programação Full Stack Front-End e Back-End na Kenzie Academy. 
                  </Text>
              </InnerContainerAbout>
        </ContainerAbout>
      </ContainerFlex>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus{" "}
                <Text as="span" color="brand5">
                  projetos:
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
