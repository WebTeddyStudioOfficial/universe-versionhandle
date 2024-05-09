let versionhandleconnected = true;
let serverversion = "1.4";

if (localVersion !== serverversion) {
  ask('Universe is outdated, please update to <b> ' + serverversion + ' </b> click below to download.), function() {
      window.location.href = "webteddystudioofficial.github.io/web-teddy-studio/universe/1-4-1.zip";
  };
}
