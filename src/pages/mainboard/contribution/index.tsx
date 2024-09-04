import React from 'react';
import Slider from 'react-slick';
import ContributionMain from 'src/components/dashboard/contribution/ContributionMain';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'src/components/dashboard/contribution/CustomSlider.css'; // 스타일 파일
import { images } from 'src/assets/contribution/images';

const ContributionContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContributionTitle = styled.h1`
  color: #1a0737;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  padding: 20px;
`;

const ContributionContent = styled.div`
  width: 80%;
`;

const Contribution: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slidesData = [
    {
      pjt_id: 1,
      projectLogo: `${images.MYX}`,
      projectTitle: 'MYX Finance Research',
      kohortLabel: '',
      totalAvg: '',
      xpValue: '100 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '50%',
      progressText: '5 / 10',
      bannerImage: `${images.MYX_banner}`,
    },
    {
      pjt_id: 2,
      projectLogo: `${images.NIBIRU}`,
      projectTitle: 'Nibiru Chain Marketing',
      kohortLabel: '',
      totalAvg: '',
      xpValue: '200 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '47%',
      progressText: '14 / 30',
      bannerImage: `${images.NIBIRU_banner2}`,
    },
    {
      pjt_id: 3,
      projectLogo: `${images.Exocore}`,
      projectTitle: 'Exocore Marketing',
      kohortLabel: '',
      totalAvg: '',
      xpValue: '100 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '71%',
      progressText: '10 / 14',
      bannerImage: `${images.Exocore_banner}`,
    },

    {
      pjt_id: 4,
      projectLogo: `${images.OG}`,
      projectTitle: 'Og Labs Research',
      kohortLabel: '',
      totalAvg: '',
      xpValue: '200 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '100%',
      progressText: '10 / 10',
      bannerImage: `${images.OG_banner}`,
    },
    {
      pjt_id: 5,
      projectLogo: `${images.Airstack}`,
      projectTitle: 'Airstack Validator',
      kohortLabel: '',
      totalAvg: '',
      xpValue: '100 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '40%',
      progressText: '6 / 15',
      bannerImage: `${images.Airstack_banner}`,
    },
    {
      pjt_id: 6,
      projectLogo: `${images.Airstack}`,
      projectTitle: 'Airstack Research',
      kohortLabel: '',
      totalAvg: '',
      xpValue: '200 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '45%',
      progressText: '18 / 40',
      bannerImage: `${images.Airstack_banner2}`,
    },
  ];

  return (
    <>
      <ContributionTitle>Contribution</ContributionTitle>

      <ContributionContainer>
        <ContributionContent>
          <Slider {...settings}>
            {slidesData.map((slide) => (
              <ContributionMain
                key={slide.pjt_id}
                projectLogo={slide.projectLogo}
                projectTitle={slide.projectTitle}
                kohortLabel={slide.kohortLabel}
                totalAvg={slide.totalAvg}
                xpValue={slide.xpValue}
                dates={slide.dates}
                progress={slide.progress}
                progressText={slide.progressText}
                bannerImage={slide.bannerImage}
              />
            ))}
          </Slider>
        </ContributionContent>
      </ContributionContainer>
    </>
  );
};

export default Contribution;
