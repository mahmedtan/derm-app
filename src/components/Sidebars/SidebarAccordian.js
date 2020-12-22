import { Accordion, AccordionPanel, Button, Text, Anchor } from "grommet";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      margin="medium"
      gap="medium"
      activeIndex={activeIndex}
      onActive={([index]) => setActiveIndex(index)}
    >
      {serviceTypes.map(({ name, services, slug }) => (
        <AccordionPanel label={<Text size="xlarge">{name}</Text>} key={slug}>
          {services
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
