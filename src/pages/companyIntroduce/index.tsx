import React from 'react';
import styles from './style.less';
import { Carousel, Image } from 'antd';
import img from '../../assets/210129842919_s.jpg';
export default () => {
  return (
    <div className={styles.context}>
      <div className={styles.title}>公司介绍</div>
      <div className={styles.subTitle}>公司简介</div>
      <div className={styles.carousel}>
        <Carousel autoplay>
          <div>
            <Image src={img} width={200} />
          </div>
          <div>
            <Image
              src={'https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF'}
              width={200}
            />
          </div>
          <div>
            <Image src={img} width={200} />
          </div>
          <div>
            <Image
              src={'https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF'}
              width={200}
            />
          </div>
        </Carousel>
      </div>
      <div className={styles.content}>
        <h3 style={{ marginTop: 90 }}>浦光生物</h3>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          创新正在改变我们生活的方方面面，工作和娱乐的方式。在这一高速进步的时期，南京浦光生物科技有限公司正竭力为世界各国卫生机构、医院、医师及患者们增添价值。我们的目标是激发对创新技术的信任，通过技术的变革来实现提完诊断的。这一承诺也体现在我们的新主张——“创新”之中。
        </div>
        <div style={{ marginBottom: 30 }}>
          南京浦光生物科技有限公司总部坐落于南京，集自主创新研发、规模化生产及全球营销为一体，拥有海内外专业自主研发团队，现利用“石墨烯邻位触击化学发光免疫分析技术”面向临床检验及相关领域，为各层医疗机构提供完整的临床诊断解决方案。目前我司已开发了多款覆盖弱势群体和妇科的免疫检测品类，如激*类，细*感染类，凝血类，神经疾病类，心脑血管类，肿瘤类，药*检测等项目，并广泛应用于门急诊，ICU，CCU，生殖中心，儿科，胸痛中心，神经内科，检验科等科室，为经销商及终端客户提供完善的专业化服务。
        </div>
        <div style={{ marginBottom: 30 }}>
          浦光生物秉承“精益求精、质量为本、创新变革、服务客户”的理念，将POCT化学发光技术*优化，以更小的体积，更快的时间，更少的样品量，为全球医疗机构提供多维度超高体验。
        </div>
        <div>欲了解更多信息，请下载公司介绍手册。</div>
      </div>
    </div>
  );
};
