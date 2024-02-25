import { List, Map } from 'immutable';

const concatElements = (page1, page2) => List(page1.concat(page2));

const mergeElements = (page1, page2) => {
  const mergedMap = Map(page1).merge(Map(page2));
  return List(mergedMap.values());
};

export { concatElements, mergeElements };
