import * as lodash from 'lodash';
import {filter} from './filter';
import {forEach} from './forEach';
import {map} from './map';
import {reduce} from './reduce';

const m = {
  filter,
  forEach,
  map,
  reduce
};

global.m = m;
global._ = lodash;
