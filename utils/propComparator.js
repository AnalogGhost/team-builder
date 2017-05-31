module.exports = function(prop, order, type) {

  order = order || 'asc';
  type = type || 'string';

  return function(a,b) {

    if (typeof a[prop] !== 'string' || typeof b[prop] !== 'string') {
      throw new Error("Invalid property or property type" + prop + "\nProperties are " + typeof a[prop] + ' ' + typeof b[prop]);
    }

    if (order === 'asc') {
      return asc(prop,a,b);
    } else if (order === 'desc') {
      return desc(prop,a,b);
    } else {
      throw new Error("Invalid Sort Order - " + order);
    }

  };

};

function asc(prop, a, b) {
  if(a[prop] < b[prop]) return -1;
  if(a[prop] > b[prop]) return 1;
  return 0;
}

function desc(prop, a, b) {
  if(a[prop] > b[prop]) return -1;
  if(a[prop] < b[prop]) return 1;
  return 0;
}
