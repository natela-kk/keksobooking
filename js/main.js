import {createAnnouncement} from './data.js';
import {render} from './announcement.js';
import {switchState} from './form.js';
const cardsList = document.querySelector('.map__canvas');
cardsList.appendChild(render(createAnnouncement(1)));
switchState(true);
// const getAnnouncementsList = () => {
//   const announcements =[];
//   for(let i = 1; i <= 10; i++){
//     announcements.push(createAnnouncement(i));
//   }
//   return announcements;
// };
// const getOffersDom = () => {
//   getAnnouncementsList().forEach((announcement) => {
//     cardsList.appendChild(renderOffer(announcement));
//   });
// };
// getOffersDom();
