import BlackWomenInspire from "./bloginfopages/BlackWomenInspire";
import CelebrateMotherhood from "./bloginfopages/CelebrateMotherhood";
import FeminineEnergy from "./bloginfopages/FeminineEnergy";
import ImproveMentalHealth from "./bloginfopages/ImproveMentalHealth";
import SexPostPartum from "./bloginfopages/SexPostPartum";
import TheRealityOfBeingASAHM from "./bloginfopages/TheRealityOfBeingAStayAtHomeMum";
import ThingsYouShouldNeverSayToSingleMothers from "./bloginfopages/ThingsYouShouldNeverSayToSingleMothers";
import WhyCantMothersHeadTheHome from "./bloginfopages/WhyCantMothersHeadTheHome";

const blogMap = {
  'black-women-who-inspire': {
    component: BlackWomenInspire,
    readTime: '6 mins read',
  },
  'how-to-improve-your-mental-health-as-a-woman': {
    component: ImproveMentalHealth,
    readTime: '7 mins read',
  },
  'how-to-celebrate-motherhood-without-expecting-every-woman-to-embrace-it': {
    component: CelebrateMotherhood,
    readTime: '7 mins read',
  },
  'why-can-t-mothers-head-the-home': {
    component: WhyCantMothersHeadTheHome,
    readTime: '7 mins read',
  },
  'the-reality-of-being-a-stay-at-home-mom': {
    component: TheRealityOfBeingASAHM,
    readTime: '7 mins read',
  },
  'what-no-one-tells-you-about-tapping-into-your-feminine-energy':{
    component: FeminineEnergy,
    readTime: '7 mins read',
  },
  '5-african-women-on-sex-postpartum':{
    component: SexPostPartum,
    readTime: '5 mins read',
  },
  'things-you-should-never-say-to-women-who-choose-single-motherhood':{
    component: ThingsYouShouldNeverSayToSingleMothers,
    readTime: '5 mins read',
  }
};

export default blogMap;
