var VAction;

VAction = (function() {
  VAction.prototype.type = null;
  VAction.prototype.namespace = null;
  VAction.prototype.action = null;
  VAction.prototype.fullName = null;
  VAction.prototype.el = null;

  function VAction(el, fullName) {
    this.el = el;
    this.fullName = fullName;

    var argArr = this.fullName.split(':');
    if(argArr.length !== 3) {
      throw new Error("You need type:namespace:action to create an action");
    }
    this.type = argArr[0];
    this.namespace = argArr[1];
    this.action = argArr[2];
    //$(@el).on @type, (ev) =>
     //Mediator.Publish(@namespace + ':' + @action, ev);
  }
  return VAction;
})()

root = typeof exports !== "undefined" && exports !== null ? exports : window;
root.VAction = VAction;
