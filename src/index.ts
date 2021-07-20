import * as lodash from 'lodash';
import {forEach} from './forEach';
import {map} from './map';

const m = {
  forEach,
  map
};

global.m = m;
global._ = lodash;
