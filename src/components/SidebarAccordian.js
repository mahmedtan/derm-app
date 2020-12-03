import { Accordion, AccordionPanel, Anchor, Box, Button, Text } from "grommet";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarAccordian = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Accordion
      margin="large"
      gap="medium"
      activeIndex={activeIndex}
      onActive={([index]) => setActiveIndex(index)}
    >
      <AccordionPanel label={<Text size="xlarge">Dermatology</Text>}>
        <Box pad="small">
          <Link to="/acne">
            <Button>
              <Text weight="normal" size="large">
                Acne
              </Text>
            </Button>
          </Link>
          <Link to="/rosacea">
            <Button>
              <Text weight="normal" size="large">
                Rosacea
              </Text>
            </Button>
          </Link>
          <Link to="/acne">
            <Button>
              <Text weight="normal" size="large">
                Alopea
              </Text>
            </Button>
          </Link>
          <Link to="/acne">
            <Button>
              <Text weight="normal" size="large">
                Eczema
              </Text>
            </Button>
          </Link>
          <Link to="/acne">
            <Button>
              <Text weight="normal" size="large">
                Dry Skin
              </Text>
            </Button>
          </Link>
          <Link to="/acne">
            <Button>
              <Text weight="normal" size="large">
                Cold Sores
              </Text>
            </Button>
          </Link>
          <Link to="/acne">
            <Button>
              <Text weight="normal" size="large">
                Contact Dermatitus
              </Text>
            </Button>
          </Link>
          <Link to="/acne">
            <Button>
              <Text weight="normal" size="large">
                Warts
              </Text>
            </Button>
          </Link>
        </Box>
      </AccordionPanel>
      <AccordionPanel label={<Text size="xlarge">Injectables</Text>}>
        <Box pad="small">
          <Link to="/botox">
            <Button>
              <Text weight="normal" size="large">
                Botox
              </Text>
            </Button>
          </Link>
          <Link to="/fillers">
            <Button>
              <Text weight="normal" size="large">
                Fillers
              </Text>
            </Button>
          </Link>
        </Box>
      </AccordionPanel>
      <AccordionPanel label={<Text size="xlarge">Cosmetic</Text>}>
        <Link to="/costemic">
          <Button>
            <Text weight="normal" size="large">
              Learn more
            </Text>
          </Button>
        </Link>
      </AccordionPanel>
      <AccordionPanel label={<Text size="xlarge">Sclerotherapy</Text>}>
        <Link to="/sclerotherapy">
          <Button>
            <Text weight="normal" size="large">
              Learn more
            </Text>
          </Button>
        </Link>
      </AccordionPanel>
      <AccordionPanel label={<Text size="xlarge">PRP</Text>}>
        <Link to="/prp">
          <Button>
            <Text weight="normal" size="large">
              Learn more
            </Text>
          </Button>
        </Link>
      </AccordionPanel>
      <AccordionPanel label={<Text size="xlarge">Microneedling</Text>}>
        <Link to="/microneedling">
          <Button>
            <Text weight="normal" size="large">
              Learn more
            </Text>
          </Button>
        </Link>
      </AccordionPanel>
    </Accordion>
  );
};

export default SidebarAccordian;
