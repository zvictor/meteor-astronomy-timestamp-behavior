events = {};

events.beforeInsert = function() {
  var doc = this;
  var Class = doc.constructor;
  Class.getBehavior('timestamp').setCreationDate(doc);
};

events.beforePushed = function() {
  var doc = this;
  var Class = doc.constructor;

  if(doc._isNew) {
    Class.getBehavior('timestamp').setCreationDate(doc);
  } else {
    Class.getBehavior('timestamp').setModificationDate(doc);
  }
};

events.beforeUpdate = function() {
  var doc = this;
  var Class = doc.constructor;
  Class.getBehavior('timestamp').setModificationDate(doc);
};
