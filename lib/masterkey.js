// Generated by IcedCoffeeScript 108.0.11
(function() {
  var Base, Masterkey, SubkeyBase, constants, iced, __iced_k, __iced_k_noop,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-runtime');
  __iced_k = __iced_k_noop = function() {};

  Base = require('./base').Base;

  constants = require('./constants').constants;

  SubkeyBase = require('./subkey').SubkeyBase;

  exports.Masterkey = Masterkey = (function(_super) {
    __extends(Masterkey, _super);

    Masterkey.prototype.get_field = function() {
      return "masterkey";
    };

    Masterkey.prototype.get_new_key_section = function() {
      return this.masterkey;
    };

    Masterkey.prototype.set_new_key_section = function(m) {
      return this.masterkey = m;
    };

    Masterkey.prototype.get_new_km = function() {
      return this.masterkm;
    };

    Masterkey.prototype._type = function() {
      return constants.sig_types.masterkey;
    };

    Masterkey.prototype._type_v2 = function() {
      return constants.sig_types_v2.masterkey;
    };

    Masterkey.prototype.need_reverse_sig = function() {
      return true;
    };

    Masterkey.prototype._v_include_pgp_details = function() {
      return true;
    };

    Masterkey.prototype._required_sections = function() {
      return Masterkey.__super__._required_sections.call(this).concat(["masterkey"]);
    };

    Masterkey.prototype._v_check = function(_arg, cb) {
      var err, json, v, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      json = _arg.json;
      err = null;
      (function(_this) {
        return (function(__iced_k) {
          var _ref, _ref1;
          if (typeof (v = json != null ? (_ref = json.body) != null ? (_ref1 = _ref.masterkey) != null ? _ref1.generation : void 0 : void 0 : void 0) !== 'number') {
            return __iced_k(err = new Error("Need masterkey.generation to be an integer"));
          } else {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/proofs/src/masterkey.iced",
                funcname: "Masterkey._v_check"
              });
              Masterkey.__super__._v_check.call(_this, {
                json: json
              }, __iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return err = arguments[0];
                  };
                })(),
                lineno: 24
              }));
              __iced_deferrals._fulfill();
            })(__iced_k);
          }
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    function Masterkey(obj) {
      this.masterkey = obj.masterkey;
      this.masterkm = obj.masterkm;
      Masterkey.__super__.constructor.call(this, obj);
    }

    return Masterkey;

  })(SubkeyBase);

}).call(this);