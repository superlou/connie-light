import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  var period = params[0].format('{12hr}{tt}');
  period = period.replace('pm', '<span class="period pm">pm</span>');
  period = period.replace('am', '<span class="period am">am</span>');
  return period.htmlSafe();
});
