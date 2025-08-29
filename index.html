// notoga.js – Browser Build

// interne Variablen
let device = null;
let writer = null;
let reader = null;

// Event Emitter (ganz simpel)
const emitter = {
  events: {},
  on(ev, fn) {
    (this.events[ev] || (this.events[ev] = [])).push(fn);
  },
  emit(ev, data) {
    (this.events[ev] || []).forEach(fn => fn(data));
  }
};

// ---- Serial Funktionen ----
async function connect() {
  if (!("serial" in navigator)) throw new Error("WebSerial wird nicht unterstützt!");
  device = await navigator.serial.requestPort();
  await device.open({ baudRate: 115200 });

  reader = device.readable.getReader();
  writer = device.writable.getWriter();

  listen();
  emitter.emit("connect");
  return true;
}

async function disconnect() {
  if (!device) return;
  try {
    if (reader) {
      await reader.cancel();
      reader.releaseLock();
    }
    if (writer) {
      await writer.close();
      writer.releaseLock();
    }
    await device.close();
  } catch (e) {
    console.error(e);
  }
  emitter.emit("disconnect");
  device = null;
}

// liest kontinuierlich vom Flipper
async function listen() {
  try {
    while (device && reader) {
      const { value, done } = await reader.read();
      if (done) break;
      if (value) emitter.emit("data", new TextDecoder().decode(value));
    }
  } catch (e) {
    console.warn("Reader stopped:", e);
  }
}

// schreiben
async function write(data) {
  if (!writer) throw new Error("Not connected");
  const enc = new TextEncoder();
  await writer.write(enc.encode(data));
}

async function read() {
  // primitive read, besser über events nutzen
  return new Promise(res => {
    emitter.on("data", d => res(d));
  });
}

// Dummy-RPC Commands (nur Platzhalter, später mit flipper-rpc.js ersetzen)
const commands = {
  system: {
    async reboot(mode) {
      await write("reboot " + (mode || "") + "\r");
      emitter.emit("log", "Reboot Command gesendet");
    }
  },
  storage: {
    async write(path, buffer) {
      emitter.emit("log", `(${buffer.length} bytes würden nach ${path} gesendet)`);
      // TODO: Echt implementieren via RPC
    }
  }
};

// ---- window exportieren ----
if (typeof window !== "undefined") {
  window.flipper = {
    connect,
    disconnect,
    write,
    read,
    emitter,
    commands
  };
  console.log("✅ notoga.js geladen, window.flipper verfügbar:", window.flipper);
}
