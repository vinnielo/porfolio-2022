import { motion } from "framer-motion";
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  ButtonBase,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import full from "../../images/glasses-full.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, padding: 2 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <ButtonBase sx={{ width: 470, height: 600 }}>
                <Img
                  alt="complex"
                  src={full}
                  sx={{ width: 470, height: 600, borderRadius: "35px" }}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={7}>
              <Typography
                variant="h2"
                wrap
                component="p"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  // flexGrow: 1,
                  fontFamily: "Oswald",
                  fontWeight: 600,
                  color: "inherit",
                  justifyContent: "center",
                }}
              >
                About
              </Typography>
              <Typography
                // variant="h2"
                wrap
                component="p"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  // flexGrow: 1,
                  fontFamily: "Roboto",
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: '25px',
                  color: "#717173",
                  justifyContent: "center",
                  paddingTop: 1,
                }}
              >
                Hey there and welcome! My name is Jose Lopez, aka Vinnie, and I
                am a highly innovative full stack developer and coder who aims
                to not only meet expectations, but exceed them every time.
                Overall, I have a strong professional background involving
                diverse front-end and back-end frameworks, full stack coding,
                and understand the various programming languages to create
                spearheading, aesthetically pleasing apps/websites that operate
                at maximum capacity.
              </Typography>
              <Typography
                // variant="h2"
                wrap
                component="p"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Roboto",
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: '25px',
                  color: "#717173",
                  justifyContent: "center",
                  paddingTop: 1,
                }}
              >
                A little bit about myself, I am a family-oriented person who was
                born and raised in Los Angeles and spent the majority of my life
                in the San Fernando Valley. Growing up as a middle child with
                two older brothers, one older sister, and one younger sister who
                is disabled is the core reason why I am so adamant about putting
                family first and helping others succeed in life. With that as my
                rooted foundation, I chose to intertwine my passion for
                technology and coding, using that as my way to genuinely help
                people expand their knowledge and obtain optimal business growth
                within the competitive digital world. To date, I have earned the
                Full Stack Coding Boot Camp certification from UCLA, am the
                Co-Founder of Third Project Development, and have been coding
                full-time for over a year now.
              </Typography>
              <Typography
                // variant="h2"
                wrap
                component="p"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Roboto",
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: '25px',
                  color: "#717173",
                  justifyContent: "center",
                  paddingTop: 1,
                }}
              >
                In the end, nothing makes me happier than helping others achieve
                their development and/or coding objectives, all while having a
                fun experience along the way. I have a true ardency for what I
                do, am a hardcore team player, and demonstrate that by providing
                powerhouse services that result in high functioning, profitable
                platforms that provoke invested attraction. This, along with my
                rich history in the field and reputation for always putting my
                clients' best interests first, can give you the confidence that
                whatever it is you are looking to create or become educated in,
                I am the guy who can make it happen.
              </Typography>

              <Typography
                // variant="h2"
                wrap
                component="p"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Roboto",
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: '25px',
                  color: "#717173",
                  justifyContent: "center",
                  paddingTop: 1,
                }}
              >
                I love what I do and am always staying updated with the
                ever-evolving industry trends to give my clients the white glove
                support they deserve. However, when I am not working, you can
                often find me playing video games (primarily PlayStation, but
                Xbox isn't too shabby either), enjoying family movie nights, and
                hosting a weekly YouTube show called ‘The Screen Squad’ podcast
                with my brothers.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </motion.div>
  );
}
