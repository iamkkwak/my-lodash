import * as lodash from 'lodash';
import {filter} from './filter';
import {forEach} from './forEach';
import {map} from './map';

const m = {
  filter,
  forEach,
  map
};

global.m = m;
global._ = lodash;
