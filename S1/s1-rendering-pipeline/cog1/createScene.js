/**
 * Populate the scene-graph with nodes,
 * calling methods form the scene-graph and node modules.
 *
 * Texture files have to exist in the "textures" sub-directory.
 *
 * @namespace cog1
 * @module createScene
 */
define(["exports", "scenegraph", "animation"], function (
  //
  exports,
  scenegraph,
  animation
) {
  "use strict";

  /**
   * 	Call methods form the scene-graph (tree) module to create the scene.
   *
   */
  function init() {
    // BEGIN exercise Scenegraph

    var upperJointRight = scenegraph.createNodeWithModel(
      "upperJointRight",
      "sphere",
      { recursionDepth: 2, scale: 40 }
    );
    upperJointRight.translate([-270, 340, 0]);

    var upperArmRight = scenegraph.createNodeWithModel(
      "upperArmRight",
      "sphere",
      { scale: 40 },
      upperJointRight
    );
    upperArmRight.translate([-80, -65, 0]);
    upperArmRight.scale([2, 0, 0]);
    upperArmRight.rotate([-0.6, -0.3, 0.6]);

    var jointRight = scenegraph.createNodeWithModel(
      "jointRight",
      "sphere",
      { recursionDepth: 2, scale: 40 },
      upperJointRight
    );
    jointRight.translate([-135, -120, 0]);
    jointRight.rotate([0.21, -4.07, 0]);

    var foreArmRight = scenegraph.createNodeWithModel(
      "foreArmRight",
      "sphere",
      { scale: 35 },
      jointRight
    );
    foreArmRight.scale([3, 0, 0]);
    foreArmRight.translate([-130, -4, 0]);

    var handRight = scenegraph.createNodeWithModel(
      "handRight",
      "sphere",
      { recursionDepth: 2, scale: 40 },
      jointRight
    );
    handRight.translate([-270, -4, -0]);
    handRight.rotate([0.8, 0.3, 0]);

    var book = scenegraph.createNodeWithModel(
      "book",
      "cube",
      { scale: 40 },
      handRight
    );
    book.scale([0.7, 1.4, -0.7]);
    book.translate([-50, 20, 90]);
    book.rotate([24.6, 0.9, 1.27]);

    var upperJointLeft = scenegraph.createNodeWithModel(
      "upperJointLeft",
      "sphere",
      { recursionDepth: 2, scale: 40 }
    );
    upperJointLeft.translate([-50, 340, 0]);

    var upperArmLeft = scenegraph.createNodeWithModel(
      "upperArmLeft",
      "sphere",
      { scale: 40 },
      upperJointLeft
    );
    upperArmLeft.translate([65, -60, 0]);
    upperArmLeft.scale([2, 0, 0]);
    upperArmLeft.rotate([-0.3, 0, 2.4]);

    var jointLeft = scenegraph.createNodeWithModel(
      "jointLeft",
      "sphere",
      { resursionDepth: 2, scale: 40 },
      upperJointLeft
    );
    jointLeft.translate([125, -120, 0]);
    jointLeft.rotate([-0.9	, -3.5, 5.7]);

    var foreArmLeft = scenegraph.createNodeWithModel(
      "foreArmLeft",
      "sphere",
      { scale: 35 },
      jointLeft
    );
    foreArmLeft.scale([2, 0, 0]);
    foreArmLeft.translate([106, -4, 0]);

    var handLeft = scenegraph.createNodeWithModel(
      "handLeft",
      "sphere",
      { recursionDepth: 2, scale: 40 },
      jointLeft
    );
    handLeft.translate([234, -4, 0]);
    handLeft.rotate([0.8, 0.3, 0]);

    return;

    // END exercise Scenegraph

    // Assign animations.
    // animation.assign(cubeNode, "move");
    // animation.assign(cubeNode1, "move");
    // animation.assign(cubeNode2, "rotate");

    // BEGIN exercise Rotating-Planet-Animation

    // Mind the the order of transformation types get mixed up
    // then traversing the hierarchy in the scene-graph.
    //
    // Animation of a Planet with an also rotation moon or a ring.
    // The planet rotates around an small sun.

    // END exercise Rotating-Planet-Animation

    // Set visibility of nodes (hide: set to false).
    // Comment out what you want to see as the default is visible.
    // cubeNode.setVisible(false);
    cubeNode1.setVisible(false);
    cubeNode2.setVisible(false);
    cubeNode3.setVisible(false);
    cubeNode4.setVisible(false);
    cubeNode5.setVisible(false);
    cubeNode6.setVisible(false);
    insideOutPolyNode.setVisible(false);
    diamondNode.setVisible(false);
    torusNode.setVisible(false);
    torusNode1.setVisible(false);
    teapotNode.setVisible(false);
    dirtyTeapotNode.setVisible(false);
    waltheadNode.setVisible(false);
    plainNode1.setVisible(false);
    emptyNode1.setVisible(false);

    // Set the initially interactive node [by name].
    // If not set, it is the first node created.
    // scenegraph.setInteractiveNodeByName("mySphere");
    //scenegraph.setInteractiveNode(torusNode);
    // scenegraph.setInteractiveNodeByName("insideOutPoly");

    // Create a node for the light, which is not visible by default.
    var lightnode = scenegraph.createPointLightNode("light", "diamond");

    // Set light parameter.
    // ambientLI, pointLI, pointPos, specularLI, specularLIExpo
    // scenegraph.setLights(0.5, 0.6, [200, 200, 300], 4.0, 10);
  }

  // Public API.
  exports.init = init;
});
