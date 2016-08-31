import React from 'react';
import Divider from '../../Divider/Divider';
import Heading from '../Heading';
import { card, doc, ns } from 'corkboard';

ns('Heading');

card('Heading',
    doc`# Headings

In all their glory.`,
    null,
    {},
    { heading: false });

card('Sizes',
  doc`Comes in a variety of sizes:`,
  <div>
    <Divider />
    <Heading size="xs">{'Heading extra small'}</Heading>
    {' '}
    <Heading locale="ja" size="xs">{'こんにちは'}</Heading>
    <Divider />
    <Heading size="s">{'Heading small'}</Heading>
    {' '}
    <Heading locale="ja" size="s">{'こんにちは'}</Heading>
    <Divider />
    <Heading size="m">{'Heading medium'}</Heading>
    {' '}
    <Heading locale="ja" size="m">{'こんにちは'}</Heading>
    <Divider />
    <Heading size="l">{'Heading large'}</Heading>
    {' '}
    <Heading locale="ja" size="l">{'こんにちは'}</Heading>
    <Divider />
    <Heading size="xl">{'Heading extra large'}</Heading>
    {' '}
    <Heading locale="ja" size="xl">{'こんにちは'}</Heading>
    <Divider />
  </div>,
  {},
  { heading: false });

card('Colors',
  doc`And a variety of colors:`,
  <div>
    <div style={{ backgroundColor: '#555' }}>
      <Heading color="white" size="m">{'White'}</Heading>
    </div>
    <Heading size="m">{'Dark gray (default)'}</Heading>
    <Heading color="light-gray" size="m">{'Light gray'}</Heading>
    <Heading color="blue" size="m">{'Blue'}</Heading>
  </div>,
  {},
  { heading: false });
