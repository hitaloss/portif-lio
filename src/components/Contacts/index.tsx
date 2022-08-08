import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

export const Contacts = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useViewportScroll();

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ opacity: scrollYProgress }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
                Vamos conversar e{" "}
                <Text as="span" type="heading2" color="brand1">
                  desenvolver nossa criatividade
                </Text>{" "}
                juntos?
              </Text>
              <Text color="grey2" type="body1">
                Fique a vontade para me contatar.
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu Whatsapp
                </Text>
                <Text color="grey2" type="body2">
                  Estou disponivel para ligações, vamos conversar?
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  style={{
                    transition: "300ms ease-in-out",
                  }}
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  Chamar no Whatsapp
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu Email
                </Text>
                <Text color="grey2" type="body2">
                  Me mande um email, compartilhando feedbacks, sugestões ou
                  idéias
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  style={{
                    transition: "300ms ease-in-out",
                  }}
                  type="body2"
                  target="_blank"
                  href={`mailto:hitalo.2014.hs@gmail.com`}
                >
                  Enviar Email agora
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu LinkedIn
                </Text>
                <Text color="grey2" type="body2">
                  Nós podemos criar uma conexão tanto quanto compartilhar
                  histórias
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  style={{
                    transition: "300ms ease-in-out",
                  }}
                  type="body2"
                  target="_blank"
                  href={"https://www.linkedin.com/in/hitalosantossilva/"}
                >
                  Ir para o LinkedIn
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
