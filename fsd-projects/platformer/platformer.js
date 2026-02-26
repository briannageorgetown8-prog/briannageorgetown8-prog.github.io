$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(100, 650, 80, 20, "black");
    createFakePlatform(250, 600, 80, 20, "green");
    createPlatform(400, 550, 80, 20, "blue");
    createFakePlatform(550, 500, 80, 20, "gold");
    createPlatform(700, 450, 80, 20, "red");
    createFakePlatform(850, 400, 80, 20, "purple");
    createPlatform(1000, 350, 80, 20, "orange");
    createFakePlatform(1150, 300, 80, 20, "yellow");
    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("grace", 1100, 100, 0.6, 0.6);
    createCollectable("kennedi", 900, 250, 0.5, 0.5);
    createCollectable("max", 250, 550, 0.4, 0.4);

    // TODO 4 - Create Cannons
    createCannon("top", 200, 2000);
    createCannon("right", 200, 2500);
    createCannon("bottom", 800, 3000);
    createCannon("left", 1400, 2500);
    createCannon("top", 200, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
