import { Footer, Text, Box, Button } from "grommet";
const NavFooter = () => {
  return (
    <Footer
      align="center"
      direction="row-responsive"
      flex={false}
      justify="between"
      gap="medium"
      fill="horizontal"
      pad="medium"
      background={{ color: "background-front" }}
    >
      <Text>
        © 2020 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
        neque.
      </Text>
      <Box align="center" justify="start" direction="row" gap="small">
        <Button label="Terms" plain />
        <Button label="Privacy" plain />
        <Button label="Security" plain />
        <Button label="Feedback" plain />
      </Box>
    </Footer>
  );
};

export default NavFooter;
