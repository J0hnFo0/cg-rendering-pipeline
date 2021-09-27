/**
 * My model for programming assignment two.
 *
 * @namespace cog1.data
 * @module empty
 */
define(["exports", "data"], function (exports, data) {
  "use strict";

  /**
   * Create an instance of the model defined in this module.
   *
   * @parameter object with fields:
   * @returns instance of this model.
   */
  exports.create = function (parameter) {
    if (parameter) {
      var scale = parameter.scale;
      var textureURL = parameter.textureURL;
      // Each face shows a different area of the given texture (e.g, a dice).
      var sixFacesTexture = parameter.sixFacesTexture;
    }
    // Set default values if parameter is undefined.
    if (scale == undefined) {
      scale = 200;
    }
    if (textureURL == undefined) {
      textureURL = "";
    }
    if (sixFacesTexture == undefined) {
      sixFacesTexture = false;
    }

    // Instance of the model to be returned.
    var instance = {};

    // x, y, z
    instance.vertices = [
      [-1, -1, 0], // 0
      [1, -1, 0], // 1
      [1, -1, 1], // 2
      [-1, -1, 1], // 3

      [1, 0.5, 0], // 4
      [1, 0.5, 1], // 5
      [0.7, 1, 0], // 6
      [0.7, 1, 1], // 7

      [-0.5, 1, 0], // 8
      [-0.5, 1, 1], // 9

      [-0.75, 3, 0], // 10
      [-0.75, 3, 1], // 11
      [-1, 1, 0], // 12
      [-1, 1, 1], // 13

      [-0.5, -1, 1], //14
      [0.5, -1, 1], // 15
      [0.5, 0.25, 1], // 16
      [-0.5, 0.25 , 1], // 17
      
      [0, -1, 1], // 18
      [0, 0.25, 1] // 19
    ];

    instance.polygonVertices = [
      [3, 2, 1, 0], // Floor
      [1, 2, 5, 4], // Side right
      [4, 5, 7, 6], // Inclined right
      [6, 7, 9, 8], // Roof
      [8, 9, 11, 10], // Tower side right
      [12, 13, 11, 10], // Tower left side
      [0, 3, 13, 12], // Side left
      [14, 15 , 16, 17], // Door frame
      [18, 19] // Door inner
    ];

    instance.polygonColors = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    data.applyScale.call(instance, scale);

    return instance;
  };
});
