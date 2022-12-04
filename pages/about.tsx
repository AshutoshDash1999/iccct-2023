import { Box, Button, Heading, Text, Input,InputGroup, ButtonGroup,InputRightElement } from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout"

function About() {
  return (
    <BaseLayout>
    {/* write from here */}
    <Heading  as='h1' size='3xl' pt={10} bgGradient='linear(to-r, #ae67fa, #f49867)' bgClip='text'>About the Conference</Heading>
    <Box width="70%">
    <Text fontSize='2xl' pt={10} bgGradient='linear(to-r, #3e42fa, #9395f5)' bgClip='text'>1st International Conference on Communication and Computational Techniques (ICCCT-2023)</Text>
    </Box>
    <Text fontSize='2xl' pt={10} bgGradient='linear(to-r, #3e42fa, #9395f5)' bgClip='text'>ICCCT aims to bring together leading academic scientists, researchers and research scholars to exchange and share their experiences and research results on all aspects of Communication and Computational Techniques. It also provides a premier interdisciplinary platform for researchers, practitioners and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Computational Techniques and Communication</Text>
    <Box pt={20}>
    <InputGroup size='md' width="50%">
      <Input
        pr='4.5rem'
        type="email"
        placeholder='Your Email Address'
      />
      <InputRightElement width='5.5rem' >
        <Button h='2.5rem' size='sm' colorScheme='orange' >Get Started</Button>
      </InputRightElement>
    </InputGroup>
    </Box>

    <Box>
    <Heading  as='h1' size='xl' pt={10} bgGradient='linear(to-r, #ae67fa, #f49867)' bgClip='text'>About - Odisha University of Technology and Research (OUTR)</Heading>
    <Text fontSize='25px' color='#3eb2f0' pt={10} >(Formerly College of Engineering and Technology)</Text>
    <Text color='#0b65db'  fontSize='20px'>The Odisha University of Technology and Research, (Formerly CET), Bhubaneswar was established by the Government of Odisha in 1981 to meet the growing technical man power need in the State. It was a Constituent College of the Odisha University of Agriculture & Technology, Bhubaneswar since inception. After creation of a Technical University for Odisha State, the College has become a Constituent College of Biju Patnaik University of Technology (BPUT), Odisha with effect from 09th July, 2002 as per section-37(1) of BPUT Act, 2002.</Text>
    <br />
    <Text color='#0b65db' fontSize='20px'>The College is located in the Techno-campus (an area of more than 100 Acres) at Kalinga Nagar, Bhubaneswar about 2.0 Kms. away from Khandagiri-Udayagiri caves. The College was shifted to the new Techno Campus in March, 2001. A full-fledged branch of Syndicate Bank is operating in the college campus. At present, students are residing in the Ladies Hostel (KCHR) of 500 capacity and a Boys Hostel (RHR) of 500 capacity inside the campus. Boys are also staying in a rented Hostel very near to Campus. The construction of another Ladies Hostel and Boys Hostel, Academic & Administrative Blocks with four-stored buildings, Bank ATM facility, Sports complex (gym), etc. are under full swing. Limited numbers of faculty quarters are available inside the campus.</Text>
    </Box>
    </BaseLayout>
  )
}
export default About