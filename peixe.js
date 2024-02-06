var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

var peixe;
var tartaruga;

function preload() {
  this.load.image("mar", "assets/bg_azul-claro.png");
  this.load.image("logo", "assets/logo-inteli_branco.png");
  this.load.image("peixe", "assets/peixes/baiacu.png");
  this.load.image("tartaruga", "assets/tartaruga.png");
}
function create() {
  this.add.image(400, 300, "mar");
  this.add.image(400, 525, "logo").setScale(0.5);

  peixe = this.add.image(400, 300, "peixe");
  peixe.setFlip(true, false);

  tartaruga = this.add.image(400, 300, "tartaruga");
}

function update() {
  peixe.x = this.input.x;
  peixe.y = this.input.y;

  tartaruga.x = this.input.x + 200;
  tartaruga.y = this.input.y + 200;
}
