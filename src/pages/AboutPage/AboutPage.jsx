import ActionBox from "../../Components/ActionBox/ActionBox";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import educationData from './educationData';
import experienceData from './experienceData';

function TimelineSection({ title, data }) {
  return (
    <div className={style.timeline_container}>
      <h1 className={style.timeline_title}>{title}</h1>
      <div className={style.timeline_box}>
        {data.map((item, index) => (
          <div className={`${style.action_container} ${index % 2 === 0 ? style.left_container : style.right_container}`}>
            <ActionBox {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <TimelineSection title="My Education" data={educationData} />
          <TimelineSection title="My Experience" data={experienceData} />
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
