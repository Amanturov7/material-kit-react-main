/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Узнать
                    <br />
                    подробнее
                  </>
                }
                description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                image={bgBack}
                title="Услуги"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Подробнее",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Детокс-капельницы"
                  description="Это эффективный способ восстановить организм после перенесенных заболеваний и других испытаний. Она ускоряет выздоровление и повышает эффективность дальнейших лечебных мероприятий."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Психологические услуги"
                  description="Психологические услуги - область практического применения психологии, ориентированная на повышение социально-психологической компетентности людей и оказания психологической помощи как отдельному человеку, так и группе или организации"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Духовные услуги"
                  description="Духовные услуги - подход, позволяющий улучшить качество жизни пациентов (детей и взрослых) и их семей, столкнувшихся с проблемами, связанными с опасным для жизни заболеванием, путём предотвращения и облегчения страданий за счёт раннего выявления, тщательной оценки и лечения боли и других физических симптомов, а также оказания психосоциальной и духовной поддержки."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Мотивационные услуги"
                  description="Проблема поведенческих мотивов является одной из основных в психологии. Особое значение эта проблема приобретает при терапии зависимостей, так как более 50% людей, зависимых от наркотиков и алкоголя, не видят необходимости проходить курс лечения, так как не считают себя больными людьми."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Услуги поддержки в СОЦИО"
                  description="Услуги поддержки в СОЦИО - помощь гражданину в целях улучшения условий его жизнедеятельности или расширения его возможностей, самостоятельно обеспечивать свои основные жизненные потребности. Социальные услуги оказываются в процессе социальной работы. "
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
