// import './assets/fonts/impact.ttf';
import duplicateMarqueeContent from './js/tech-skills';

import { setupEmailInput, sendContactRequest } from './js/work-together';

document.addEventListener('DOMContentLoaded', setupEmailInput);
document.addEventListener('DOMContentLoaded', sendContactRequest);

duplicateMarqueeContent('marquee-content-angled');
duplicateMarqueeContent('marquee-content');

import './js/header'
import './js/menu';
import './js/faq';
import './js/reviews';
import initializeProjects from './js/my-projects';

initializeProjects();
