// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview A script for adaptive favicon module.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.ex.adapt.favicon');

goog.require('orga.ex.Environment');
goog.require('orga.ex.adapt');
goog.require('orga.favicon');
goog.require('orga.favicon.chrome.ex');


/**
 * Returns a favicon helper that is adapted environment where the script runs
 * on.
 * @return {goog.storage.mechanism.Mechanism} An adaptive favicon helper.
 */
orga.ex.adapt.getAdaptedFaviconGetter = function() {
  return orga.ex.adapt.getDefaultConstructor('orga.favicon');
};


/**
 * Sets a favicon helper that is adapted environment where the script runs
 * on.
 * @param {number} environment An environment where the constructor can works.
 * @param {goog.storage.mechanism.Mechanism} An favicon helper.
 */
orga.ex.adapt.setAdaptedFaviconGetter = function(environment, ctor) {
  return orga.ex.adapt.setDefaultConstructor(
      environment, 'orga.favicon', ctor);
};


orga.ex.adapt.setAdaptedFaviconGetter(
    /* environment */ orga.ex.Environment.DEFAULT,
    /* constructor */ orga.favicon.FaviconGetter);

orga.ex.adapt.setAdaptedFaviconGetter(
    /* environment */ [
                        orga.ex.Environment.CHROME_EX_BACKGROUND,
                        orga.ex.Environment.CHROME_EX_NEWTAB,
                        orga.ex.Environment.CHROME_EX_POPUP
                      ],
    /* constructor */ orga.favicon.chrome.ex.FaviconGetter);
