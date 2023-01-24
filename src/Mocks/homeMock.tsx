import { ReactElement } from 'react';

import IconAlarm from '~/Assets/IconAlarm';
import IconSettings from '~/Assets/IconSettings';
import IconClipboardText from '~/Assets/IconClipboardText';
import IconLayersSubtract from '~/Assets/IconLayersSubtract';

interface IProps {
  icon: ReactElement;
  color: `#${string}`;
  title: string;
  text: string;
}

export const processMock: IProps[] = [
  {
    icon: <IconClipboardText strokeWidth={2} />,
    color: '#b4e0c5',
    title: 'Business idea',
    text: 'What you want your business to be.'
  },
  {
    icon: <IconAlarm strokeWidth={2} />,
    color: '#ffeeb6',
    title: 'Planning',
    text: 'A business plan helps formalize your idea.'
  },
  {
    icon: <IconSettings strokeWidth={2} />,
    color: '#ffcbc3',
    title: 'Develop',
    text: 'What you want your business to be.'
  },
  {
    icon: <IconLayersSubtract strokeWidth={2} />,
    color: '#e7e7e7',
    title: 'Business structure',
    text: 'Key parts of your business.'
  }
];

export const servicesMock = [
  {
    color: '#b4e0c5',
    title: 'Data Analysis',
    text: 'Data Analysis is the process of systematically applying statistical and/or logical techniques to describe and illustrate, condense and recap, and evaluate data.'
  },
  {
    color: '#ffeeb6',
    title: 'Economy',
    text: 'The ability to independently value an enterprise is an essential tool for making business and strategic decisions.'
  },
  {
    color: '#ffcbc3',
    title: 'Statistics and Data Science',
    text: 'Strategic Business Leader is a training course from the Strategic Professional level.'
  },
  {
    color: '#e7e7e7',
    title: 'Backend Developer',
    text: 'The ability to independently value an enterprise is an essential tool for making business and strategic decisions.'
  }
];

export const questionMock = [
  {
    open: true,
    title: 'Will I get lifetime updates',
    text: 'Ceanny is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts.'
  },
  {
    open: false,
    title: 'Can I use the Ceanny for a client\'s product?',
    text: 'Ceanny is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts.'
  },
  {
    open: false,
    title: 'Who can use Ceanny',
    text: 'Ceanny is a landing page UI kit for Figma. The kit consists of 170+ blocks from 15 categories with ready-to-use sample pages. Also, it comes with blocks for desktop, tablet and mobile layouts.'
  }
];
