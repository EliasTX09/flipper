// flipper-api.js
import * as FlipperRPC from "./flipper-rpc.js";

if (typeof window !== "undefined") {
  window.flipper = {
    connect: FlipperRPC.connect,
    disconnect: FlipperRPC.disconnect,
    write: FlipperRPC.write,
    read: FlipperRPC.read,
    closeReader: FlipperRPC.closeReader,
    commands: FlipperRPC.commands,
    emitter: FlipperRPC.emitter
  };

  console.log("✅ Flipper API erfolgreich geladen!");
  console.log("🔍 window.flipper:", window.flipper);
}
