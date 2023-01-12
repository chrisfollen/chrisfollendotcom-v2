import {
  PATH_JOURNAL_30_LESSONS,
  PATH_JOURNAL_BOOTCAMP_TAKEAWAYS,
  PATH_JOURNAL_DESIGN_FOR_DEVS,
  PATH_JOURNAL_PHILOSOPHY_BOOKS,
  PATH_JOURNAL_STOIC_PRACTICES,
  PATH_JOURNAL_SUCCEED_IN_BOOTCAMP,
  PATH_JOURNAL_35_LESSONS
} from '../../constants/paths';
import { content as ThirtyLessons } from './Articles/30Lessons/copy';
import { content as BootcampTakeaways } from './Articles/BootcampTakeaways/copy';
import { content as DesignForDevs } from './Articles/DesignForDevs/copy';
import { content as PhilosophyBooks } from './Articles/PhilosophyBooks/copy';
import { content as StoicPractices } from './Articles/StoicPractices/copy';
import { content as SucceedInBootcamp } from './Articles/SucceedInBootcamp/copy';
import { content as ThirtyFiveLessons } from './Articles/35/copy';

export const content = {
  pageTitle: 'Journal - CHRIS FOLLEN',
  heading: 'journal',
  subheading: 'some thoughts',
  articles: [
    {
      title: ThirtyFiveLessons.title,
      path: PATH_JOURNAL_35_LESSONS,
      date: ThirtyFiveLessons.date,
      intro: ThirtyFiveLessons.intro,
      thumbnail: ThirtyFiveLessons.heroImage,
      thumbnailAlt: ThirtyFiveLessons.imageAltText
    },
    {
      title: BootcampTakeaways.title,
      path: PATH_JOURNAL_BOOTCAMP_TAKEAWAYS,
      date: BootcampTakeaways.date,
      intro: BootcampTakeaways.intro,
      thumbnail: BootcampTakeaways.heroImage,
      thumbnailAlt: BootcampTakeaways.imageAltText
    },
    {
      title: DesignForDevs.title,
      path: PATH_JOURNAL_DESIGN_FOR_DEVS,
      date: DesignForDevs.date,
      intro: DesignForDevs.intro,
      thumbnail: DesignForDevs.heroImage,
      thumbnailAlt: DesignForDevs.imageAltText
    },
    {
      title: SucceedInBootcamp.title,
      path: PATH_JOURNAL_SUCCEED_IN_BOOTCAMP,
      date: SucceedInBootcamp.date,
      intro: SucceedInBootcamp.intro,
      thumbnail: SucceedInBootcamp.heroImage,
      thumbnailAlt: SucceedInBootcamp.imageAltText
    },
    {
      title: StoicPractices.title,
      path: PATH_JOURNAL_STOIC_PRACTICES,
      date: StoicPractices.date,
      intro: StoicPractices.intro,
      thumbnail: StoicPractices.heroImage,
      thumbnailAlt: StoicPractices.imageAltText
    },

    {
      title: PhilosophyBooks.title,
      path: PATH_JOURNAL_PHILOSOPHY_BOOKS,
      date: PhilosophyBooks.date,
      intro: PhilosophyBooks.intro,
      thumbnail: PhilosophyBooks.heroImage,
      thumbnailAlt: PhilosophyBooks.imageAltText
    },
    {
      title: ThirtyLessons.title,
      path: PATH_JOURNAL_30_LESSONS,
      date: ThirtyLessons.date,
      intro: ThirtyLessons.intro,
      thumbnail: ThirtyLessons.heroImage,
      thumbnailAlt: ThirtyLessons.imageAltText
    }
  ]
};
