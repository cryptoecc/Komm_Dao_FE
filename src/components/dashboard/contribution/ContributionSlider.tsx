// import React from 'react';
// import Slider from 'react-slick';
// import ContributionMain from './ContributionMain'; // 위에서 만든 컴포넌트
// import { images } from 'src/assets/contribution/images'; // 이미지 불러오기

// const sliderData = [
//   {
//     projectLogo: images.NIBIRU,
//     projectTitle: 'NIBIRU Community management Validator',
//     kohortLabel: 'Kohort only',
//     totalAvg: '2000 XP',
//     xpValue: '2000 XP',
//     dates: '24/08/08 ~ 24/11/07',
//     progress: '82%',
//     progressText: '41 / 50',
//     bannerImage: images.NIBIRU_banner,
//   },
//   {
//     projectLogo: images.NIBIRU,
//     projectTitle: 'Project 2',
//     kohortLabel: 'Kohort only',
//     totalAvg: '1500 XP',
//     xpValue: '1500 XP',
//     dates: '24/08/08 ~ 24/11/07',
//     progress: '60%',
//     progressText: '30 / 50',
//     bannerImage: images.NIBIRU_banner,
//   },
//   // 다른 슬라이드 데이터 추가
// ];

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// const ContributionSlider = () => {
//   return (
//     <Slider {...sliderSettings}>
//       {sliderData.map((data, index) => (
//         <ContributionMain
//           key={index}
//           projectLogo={data.projectLogo}
//           projectTitle={data.projectTitle}
//           kohortLabel={data.kohortLabel}
//           totalAvg={data.totalAvg}
//           xpValue={data.xpValue}
//           dates={data.dates}
//           progress={data.progress}
//           progressText={data.progressText}
//           bannerImage={data.bannerImage}
//         />
//       ))}
//     </Slider>
//   );
// };

// export default ContributionSlider;
