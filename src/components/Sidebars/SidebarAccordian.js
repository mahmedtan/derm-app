import { Accordion, AccordionPanel, Button, Text, Anchor, Box } from "grommet";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SidebarAccordian = ({ serviceTypes }) => {
  const selectedItem = useSelector(({ selectedItem }) => selectedItem);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (selectedItem)
      setActiveIndex(
        serviceTypes.indexOf(
          serviceTypes.find(
            (serviceType) => serviceType.slug === selectedItem.serviceTypeSlug
          )
        )
      );
  }, [selectedItem, serviceTypes]);
  if (!selectedItem) return null;

  return (
    <Accordion
      focusIndicator={false}
      margin="medium"
      gap="medium"
      activeIndex={activeIndex}
      onActive={([index]) => setActiveIndex(index)}
    >
      {serviceTypes.map(({ name, services, slug }) => (
        <AccordionPanel label={<Text size="xlarge">{name}</Text>} key={slug}>
          {services
            .filter((item) => !item.hideOnAccordian)
            .sort((a, b) => a.orderAccordian - b.orderAccordian)

            .map((service) => {
              return (
                <Anchor href={`/services/${service.slug}`} key={service._id}>
                  <Button>
                    <Text
                      weight={
                        service.slug === selectedItem.serviceSlug
                          ? "bold"
                          : "normal"
                      }
                      size="large"
                    >
                      {service.name}
                    </Text>
                  </Button>
                </Anchor>
              );
            })}
        </AccordionPanel>
      ))}
    </Accordion>
  );
};

export default SidebarAccordian;
