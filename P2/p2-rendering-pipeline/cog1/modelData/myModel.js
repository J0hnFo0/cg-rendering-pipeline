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
      // #1 Floor
      [-4, -4, 0], // 0
      [4, -4, 0], // 1
      [4, -4, 8], // 2
      [-4, -4, 8], // 3

      // #2 Side right
      [-4, -4, 0], // 4
      [4, -4, 0], // 5
      [4, 2, 0], // 6
      [-4, 2, 0], // 7

      // #3 Side left
      [-4, -4, 8], // 8
      [4, -4, 8], // 9
      [4, 2, 8], // 10
      [-4, 2, 8], // 11

      // #4 Side back
      [-4, -4, 0], // 12
      [-4, -4, 8], // 13
      [-4, 2, 8], // 14
      [-4, 2, 0], // 15

      // #5 Side front
      [4, -4, 0], // 16
      [4, -4, 8], // 17
      [4, 2, 8], // 18
      [4, 2, 0], // 19 */

      // #6 Roof back
      [-4, 2, 0], // 20
      [-4, 2, 8], // 21
      [-4, 4, 6], // 22
      [-4, 4, 2], // 23

      // #7 Roof front
      [4, 2, 0], // 24
      [4, 2, 8], // 25
      [4, 4, 6], // 26
      [4, 4, 2], // 27

      // #8 Roof left
      [-4, 2, 8], // 28
      [4, 2, 8], // 29
      [4, 4, 6], // 30
      [-4, 4, 6], // 31

      // #9 Roof right
      [-4, 2, 0], // 32
      [4, 2, 0], // 33
      [4, 4, 2], // 34
      [-4, 4, 2], // 35

      // #10 Roof top
      [-4, 4, 2], // 36
      [-4, 4, 6], // 37
      [4, 4, 6], // 38
      [4, 4, 2], // 39

      // #11 Tower right
      [4, 4, 3], // 40
      [2, 4, 3], // 41
      [2, 6, 3], // 42
      [4, 6, 3], // 43

      // #12 Tower left
      [4, 4, 5], // 44
      [2, 4, 5], //45
      [2, 6, 5], //46
      [4, 6, 5], // 47

      // #13 Tower back
      [2, 4, 3], // 48
      [2, 4, 5], // 49
      [2, 6, 5], // 50
      [2, 6, 3], // 51

      // #14 Tower front
      [4, 4, 3], // 52
      [4, 4, 5], // 53
      [4, 6, 5], // 54
      [4, 6, 3], // 55
    ];

    instance.polygonVertices = [
      [0, 1, 2, 3], // #1 Floor

      [4, 5, 6, 7], // #2 Side right
      [8, 9, 10, 11], // #3 Side left
      [12, 13, 14, 15], // #4 Side back
      [16, 17, 18, 19], // #5 Side front

      [20, 21, 22, 23], // #6 Roof back
      [24, 25, 26, 27], // #7 Roof front
      [28, 29, 30, 31], // #8 Roof left
      [32, 33, 34, 35], // #9 Roof right
      [36, 37, 38, 39], // #10 Toof top

      [40, 41, 42, 43], // #11 Tower right
      [44, 45, 46, 47], // #12 Tower left
      [48, 49, 50, 51], // #13 Tower back
      [52, 53, 54, 55], // #14 Tower front
    ];

    /*     // x, y, z
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
    ]; */

    instance.polygonColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];

    data.applyScale.call(instance, scale);

    return instance;
  };
});
