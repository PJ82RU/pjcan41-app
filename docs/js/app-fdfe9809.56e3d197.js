"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[594],{

/***/ 52126:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Sl: function() { return /* reexport */ BLUETOOTH_EVENT_CONNECTED; },
  Sm: function() { return /* reexport */ BLUETOOTH_EVENT_RECEIVE; },
  JW: function() { return /* reexport */ BLUETOOTH_EVENT_SEND; },
  N4: function() { return /* reexport */ Bluetooth; },
  iy: function() { return /* reexport */ BluetoothStruct; },
  s5: function() { return /* reexport */ TConnectedStatus; }
});

// UNUSED EXPORTS: BLUETOOTH_CHARACTERISTIC_UUID, BLUETOOTH_SERVICE_UUID, BLUETOOTH_SIZE_MAX, TTypeValue

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.mjs
var eventemitter3 = __webpack_require__(8611);
// EXTERNAL MODULE: ./src/lang/index.ts + 2 modules
var lang = __webpack_require__(96188);
;// CONCATENATED MODULE: ./src/components/bluetooth/TConnectedStatus.ts
/* eslint-disable */
var TConnectedStatus;
(function (TConnectedStatus) {
  TConnectedStatus[TConnectedStatus["NO_CONNECT"] = 0] = "NO_CONNECT";
  TConnectedStatus[TConnectedStatus["CONNECT"] = 1] = "CONNECT";
  TConnectedStatus[TConnectedStatus["WAIT_CONNECT"] = 2] = "WAIT_CONNECT";
  TConnectedStatus[TConnectedStatus["DISCONNECT"] = 3] = "DISCONNECT";
})(TConnectedStatus || (TConnectedStatus = {}));
;// CONCATENATED MODULE: ./src/components/bluetooth/Bluetooth.ts

/* eslint-disable no-undef */



const BLUETOOTH_SERVICE_UUID = "cc9e7b30-9834-488f-b762-aa62f5022dd4";
const BLUETOOTH_CHARACTERISTIC_UUID = "cc9e7b31-9834-488f-b762-aa62f5022dd4";
const BLUETOOTH_SIZE_MAX = 512;
const BLUETOOTH_EVENT_CONNECTED = "Connected"; // Событие подключения
const BLUETOOTH_EVENT_RECEIVE = "Receive"; // Событие входящих данных
const BLUETOOTH_EVENT_SEND = "Send"; // Событие исходящих данных
const dev = "production" === "development";
/** Bluetooth */
class Bluetooth extends eventemitter3/* default */.A {
  constructor(counterReSendMax = 6) {
    super();
    /** Объект устройства */
    (0,defineProperty/* default */.A)(this, "_device", void 0);
    /** Характеристика устройства */
    (0,defineProperty/* default */.A)(this, "_characteristic", void 0);
    /** Счетчик повторной отправки */
    (0,defineProperty/* default */.A)(this, "_counterReSend", 0);
    /** Максимальное значение счетчика повторной отправки */
    (0,defineProperty/* default */.A)(this, "counterReSendMax", void 0);
    this.clear();
    this.counterReSendMax = counterReSendMax;
  }
  /** Очистка переменных */
  clear() {
    this._device = undefined;
    this._characteristic = undefined;
  }
  /** Статус подключения */
  get connected() {
    return !!this._device?.gatt?.connected;
  }
  /** Запустить выбор Bluetooth устройства и подключиться к выбранному */
  connect() {
    if (!navigator.bluetooth) {
      this.emit(BLUETOOTH_EVENT_CONNECTED, TConnectedStatus.NO_CONNECT);
      return Promise.resolve();
    }
    return this._device ? Promise.resolve() : this.requestBluetoothDevice().then(device => {
      this.reconnect(device);
    }).catch(e => {
      this.emit(BLUETOOTH_EVENT_CONNECTED, TConnectedStatus.NO_CONNECT);
      console.log(e);
    });
  }
  /**
   * Переподключение к устройству
   * @param {BluetoothDevice} device Объект устройства
   */
  reconnect(device) {
    return this.connectDeviceAndCharacteristic(device)?.then(characteristic => this.delayPromise(250, characteristic)).then(characteristic => this.startNotifications(characteristic));
  }
  /** Отключение от Bluetooth устройства */
  disconnect() {
    if (this._device) {
      const device = this._device;
      this.clear();
      device.gatt?.disconnect();
      if (dev) console.log((0,lang.t)("BLE.server.deviceDisconnected", {
        n: device.name
      }));
      this.emit(BLUETOOTH_EVENT_CONNECTED, TConnectedStatus.DISCONNECT);
    }
  }
  /** Запрос выбора Bluetooth устройства */
  async requestBluetoothDevice() {
    return navigator.bluetooth.requestDevice({
      filters: [{
        services: [BLUETOOTH_SERVICE_UUID]
      }]
    }).then(device => {
      if (dev) console.log((0,lang.t)("BLE.server.deviceSelected", {
        n: device.name
      }));
      // device.removeEventListener("gattserverdisconnected", null);
      device.addEventListener("gattserverdisconnected", () => this.handleDisconnection());
      this._device = device;
      return device;
    });
  }
  /** Подключение к определенному устройству, получение сервиса и характеристики */
  connectDeviceAndCharacteristic(device) {
    if (device.gatt?.connected && !!this._characteristic) return Promise.resolve(this._characteristic);
    if (dev) console.log((0,lang.t)("BLE.server.GATTConnect"));
    return device.gatt?.connect().then(server => {
      if (dev) console.log((0,lang.t)("BLE.server.getService"));
      return server.getPrimaryService(BLUETOOTH_SERVICE_UUID);
    }).then(service => {
      if (dev) console.log((0,lang.t)("BLE.server.getCharacteristic"));
      return service.getCharacteristic(BLUETOOTH_CHARACTERISTIC_UUID);
    }).then(characteristic => {
      if (dev) console.log((0,lang.t)("BLE.server.characteristicDone"));
      // characteristic.removeEventListener("characteristicvaluechanged", null);
      characteristic.addEventListener("characteristicvaluechanged", ev => this.handleCharacteristicValueChanged(ev));
      // запускает процесс чтения данных
      characteristic?.readValue();
      this._characteristic = characteristic;
      return characteristic;
    });
  }
  /** Включение получения уведомлений об изменении характеристики */
  startNotifications(characteristic) {
    if (dev) console.log((0,lang.t)("BLE.server.startNotifications"));
    return characteristic?.startNotifications().then(() => {
      if (dev) console.log((0,lang.t)("BLE.server.notificationsDone"));
      this.emit(BLUETOOTH_EVENT_CONNECTED, TConnectedStatus.CONNECT);
    });
  }
  /**
   * Переподключение к Bluetooth устройству
   * @param {number} max Максимальное кол. попыток подключения
   * @param {number} delay Таймаут подключения, сек.
   * @param {() => any} toTry Метод проверки подключения
   * @param {(server: BluetoothRemoteGATTServer) => void} success Метод вызываемый при успешном подключении
   * @param {() => void} fail Метод вызываемый при невозможности подключиться
   */
  exponentialBackoff(max, delay, toTry, success, fail) {
    toTry().then(server => {
      success(server);
    }).catch(() => {
      if (max === 0) return fail();
      if (dev) console.log((0,lang.t)("BLE.server.reconnect", {
        n: delay,
        c: max
      }));
      setTimeout(() => {
        this.exponentialBackoff(--max, delay * 2, toTry, success, fail);
      }, delay * 1000);
    });
  }
  /** Событие отключения от устройства Bluetooth */
  handleDisconnection() {
    if (!this._device) return;
    // попытка подключиться повторно
    this.exponentialBackoff(3, 2, () => {
      this.emit(BLUETOOTH_EVENT_CONNECTED, TConnectedStatus.WAIT_CONNECT);
      if (this._device) return this.reconnect(this._device);
    }, () => {
      if (dev) console.log((0,lang.t)("BLE.server.reconnectRestored"));
      // this.emit(BLUETOOTH_EVENT_CONNECTED, TConnectedStatus.CONNECT);
    }, () => {
      if (dev) console.log((0,lang.t)("BLE.server.connectionLost"));
      this.emit(BLUETOOTH_EVENT_CONNECTED, TConnectedStatus.NO_CONNECT);
      this.clear();
    });
  }
  /** Событие входящих данных */
  handleCharacteristicValueChanged(ev) {
    const {
      value
    } = ev.target;
    if (value?.byteLength > 0) {
      if (dev) console.log((0,lang.t)("BLE.server.receive", {
        n: "0x" + value.getUint8(0).toString(16)
      }), value);
      this.emit(BLUETOOTH_EVENT_RECEIVE, value);
    }
  }
  /**
   * Отправить данные
   * @param data Отправляемые данные
   */
  send(data) {
    if (!this.connected) {
      // this.emit(BLUETOOTH_EVENT_CONNECTED, TConnectedStatus.NO_CONNECT);
      return Promise.reject("No connection");
    }
    if (!data) {
      this.emit(BLUETOOTH_EVENT_SEND);
      return Promise.reject("No data available");
    }
    if (dev) console.log((0,lang.t)("BLE.server.send", {
      n: "0x" + data.getUint8(0).toString(16)
    }), data);
    return this._characteristic?.writeValue(data).then(() => {
      this._counterReSend = 0;
    }).catch(() => {
      return Promise.resolve().then(() => {
        this.delayPromise(50).then();
      }).then(() => {
        this._counterReSend++;
        return this._counterReSend < this.counterReSendMax ? this.send(data) : Promise.reject("The counter has reached its maximum value");
      });
    }) ?? Promise.reject("No characteristic");
  }
  /**
   * Таймаут Promise
   * @param {number} timeout Время паузы, мс
   * @param {T} arg Передаваемые аргументы
   */
  delayPromise(timeout, arg) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout, arg);
    });
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/bitset/bitset.js
var bitset = __webpack_require__(5514);
var bitset_default = /*#__PURE__*/__webpack_require__.n(bitset);
;// CONCATENATED MODULE: ./src/components/bluetooth/TTypeValue.ts
/* eslint-disable */
/** Типы данных */
var TTypeValue;
(function (TTypeValue) {
  TTypeValue[TTypeValue["TYPE_BIT"] = 0] = "TYPE_BIT";
  TTypeValue[TTypeValue["TYPE_UINT8"] = 1] = "TYPE_UINT8";
  TTypeValue[TTypeValue["TYPE_INT8"] = 2] = "TYPE_INT8";
  TTypeValue[TTypeValue["TYPE_UINT16"] = 3] = "TYPE_UINT16";
  TTypeValue[TTypeValue["TYPE_INT16"] = 4] = "TYPE_INT16";
  TTypeValue[TTypeValue["TYPE_UINT32"] = 5] = "TYPE_UINT32";
  TTypeValue[TTypeValue["TYPE_INT32"] = 6] = "TYPE_INT32";
  TTypeValue[TTypeValue["TYPE_FLOAT32"] = 7] = "TYPE_FLOAT32";
  TTypeValue[TTypeValue["TYPE_UINT64"] = 8] = "TYPE_UINT64";
  TTypeValue[TTypeValue["TYPE_INT64"] = 9] = "TYPE_INT64";
  TTypeValue[TTypeValue["TYPE_FLOAT64"] = 10] = "TYPE_FLOAT64";
  TTypeValue[TTypeValue["TYPE_CHAR"] = 11] = "TYPE_CHAR";
  TTypeValue[TTypeValue["TYPE_STRUCT"] = 12] = "TYPE_STRUCT";
})(TTypeValue || (TTypeValue = {}));
;// CONCATENATED MODULE: ./src/components/bluetooth/BluetoothStruct.ts




/** Парсинг структуры данных С++ */
class BluetoothStruct {
  static bit() {
    return [TTypeValue.TYPE_BIT];
  }
  static uint8(length = 0) {
    return [TTypeValue.TYPE_UINT8, length];
  }
  static int8(length = 0) {
    return [TTypeValue.TYPE_INT8, length];
  }
  static uint16(length = 0) {
    return [TTypeValue.TYPE_UINT16, length];
  }
  static int16(length = 0) {
    return [TTypeValue.TYPE_INT16, length];
  }
  static uint32(length = 0) {
    return [TTypeValue.TYPE_UINT32, length];
  }
  static int32(length = 0) {
    return [TTypeValue.TYPE_INT32, length];
  }
  static float32(length = 0) {
    return [TTypeValue.TYPE_FLOAT32, length];
  }
  static uint64(length = 0) {
    return [TTypeValue.TYPE_UINT64, length];
  }
  static int64(length = 0) {
    return [TTypeValue.TYPE_INT64, length];
  }
  static float64(length = 0) {
    return [TTypeValue.TYPE_FLOAT64, length];
  }
  static char(length) {
    return [TTypeValue.TYPE_CHAR, length];
  }
  static struct(data, length = 0) {
    return [TTypeValue.TYPE_STRUCT, data, length];
  }
  constructor(data) {
    /** Прямой порядок байтов */
    (0,defineProperty/* default */.A)(this, "littleEndian", true);
    /** Смещение */
    (0,defineProperty/* default */.A)(this, "offset", 0);
    /** Буфер данных */
    (0,defineProperty/* default */.A)(this, "buffer", null);
    /** Смещение бит */
    (0,defineProperty/* default */.A)(this, "bit_offset", 0);
    /** Буфер бит данных */
    (0,defineProperty/* default */.A)(this, "bit_buffer", null);
    /** Структура данных */
    (0,defineProperty/* default */.A)(this, "structData", void 0);
    this.structData = data;
  }
  /** Очистить буфер */
  free() {
    this.offset = 0;
    this.buffer = null;
    this.bit_offset = 0;
    this.bit_buffer = null;
  }
  /** Очистить буфер бит */
  freeBitBuffer() {
    this.bit_offset = 0;
    this.bit_buffer = null;
    this.offset++;
  }
  /** Чтение бита */
  getBit() {
    let result = false;
    if (this.buffer) {
      if (!this.bit_buffer) this.bit_buffer = new (bitset_default())(this.buffer.getUint8(this.offset));
      result = this.bit_buffer.get(this.bit_offset++) === 1;
      if (this.bit_offset > 7) this.freeBitBuffer();
    }
    return result;
  }
  /**
   * Запись бита
   * @param val Значение
   */
  setBit(val) {
    if (this.buffer) {
      if (!this.bit_buffer) this.bit_buffer = new (bitset_default())(this.buffer.getUint8(this.offset));
      // @ts-ignore
      this.buffer.setUint8(this.offset, this.bit_buffer.set(this.bit_offset++, val ? 1 : 0).data[0]);
      if (this.bit_offset > 7) this.freeBitBuffer();
    }
  }
  /**
   * Чтение Int8
   * @param u UInt8
   * @param length Количество значений массива
   */
  getInt8(u, length) {
    const result = [];
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        result.push(u ? this.buffer.getUint8(this.offset++) : this.buffer.getInt8(this.offset++));
      }
    }
    return result;
  }
  /**
   * Запись Int8
   * @param u UInt8
   * @param val Массив значений
   * @param length Количество значений массива
   */
  setInt8(u, val, length) {
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        if (u) this.buffer.setUint8(this.offset++, val[i]);else this.buffer.setInt8(this.offset++, val[i]);
      }
    }
  }
  /**
   * Чтение Int16
   * @param u UInt16
   * @param length Количество значений массива
   */
  getInt16(u, length) {
    const result = [];
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        result.push(u ? this.buffer.getUint16(this.offset, this.littleEndian) : this.buffer.getInt16(this.offset, this.littleEndian));
        this.offset += 2;
      }
    }
    return result;
  }
  /**
   * Запись Int16
   * @param u UInt16
   * @param val Значение
   * @param length Количество значений массива
   */
  setInt16(u, val, length) {
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        if (u) this.buffer.setUint16(this.offset, val[i], this.littleEndian);else this.buffer.setInt16(this.offset, val[i], this.littleEndian);
        this.offset += 2;
      }
    }
  }
  /**
   * Чтение Int32
   * @param u UInt32
   * @param length Количество значений массива
   */
  getInt32(u, length) {
    const result = [];
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        result.push(u ? this.buffer.getUint32(this.offset, this.littleEndian) : this.buffer.getInt32(this.offset, this.littleEndian));
        this.offset += 4;
      }
    }
    return result;
  }
  /**
   * Запись Int32
   * @param u UInt32
   * @param val Значение
   * @param length Количество значений массива
   */
  setInt32(u, val, length) {
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        if (u) this.buffer.setUint32(this.offset, val[i], this.littleEndian);else this.buffer.setInt32(this.offset, val[i], this.littleEndian);
        this.offset += 4;
      }
    }
  }
  /**
   * Чтение Float32
   * @param length Количество значений массива
   */
  getFloat32(length) {
    const result = [];
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        result.push(this.buffer.getFloat32(this.offset, this.littleEndian));
        this.offset += 4;
      }
    }
    return result;
  }
  /**
   * Запись Float32
   * @param val Значение
   * @param length Количество значений массива
   */
  setFloat32(val, length) {
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        this.buffer.setFloat32(this.offset, val[i], this.littleEndian);
        this.offset += 4;
      }
    }
  }
  /**
   * Чтение Int64
   * @param u UInt64
   * @param length Количество значений массива
   */
  getInt64(u, length) {
    const result = [];
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        result.push(u ? this.buffer.getBigUint64(this.offset, this.littleEndian) : this.buffer.getBigInt64(this.offset, this.littleEndian));
        this.offset += 8;
      }
    }
    return result;
  }
  /**
   * Запись Int64
   * @param u UInt64
   * @param val Значение
   * @param length Количество значений массива
   */
  setInt64(u, val, length) {
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        if (u) this.buffer.setBigUint64(this.offset, val[i], this.littleEndian);else this.buffer.setBigInt64(this.offset, val[i], this.littleEndian);
        this.offset += 8;
      }
    }
  }
  /**
   * Чтение Float64
   * @param length Количество значений массива
   */
  getFloat64(length) {
    const result = [];
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        result.push(this.buffer.getFloat64(this.offset, this.littleEndian));
        this.offset += 8;
      }
    }
    return result;
  }
  /**
   * Запись Float64
   * @param val Значение
   * @param length Количество значений массива
   */
  setFloat64(val, length) {
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        this.buffer.setFloat64(this.offset, val[i], this.littleEndian);
        this.offset += 8;
      }
    }
  }
  /**
   * Чтение строки
   * @param length Длина строки
   */
  getChars(length) {
    let result = "";
    if (this.buffer) {
      for (let i = 0; i < length; i++) {
        const byte = this.buffer.getUint8(this.offset++);
        if (byte > 19 && byte < 127) result += String.fromCharCode(byte);
      }
    }
    return result;
  }
  /**
   * Запись строки
   * @param str Строка
   * @param length Длина копирования
   */
  setChars(str, length) {
    if (this.buffer) {
      // noinspection SpellCheckingInspection
      const lenstr = str.length;
      for (let i = 0; i < length; i++) {
        this.buffer.setInt8(this.offset++, i < lenstr ? str.charCodeAt(i) : 0);
      }
    }
  }
  /**
   * Декодировать значения
   * @param buffer Буфер данных
   * @param data   Структура для данных
   * @param offset Начало смещения
   */
  decode(buffer, data, offset = 0) {
    this.buffer = buffer;
    this.offset = offset;
    for (const [key, value] of Object.entries(this.structData)) {
      if (value[0] !== TTypeValue.TYPE_BIT) {
        if (this.bit_offset > 0) this.freeBitBuffer();
        switch (value[0]) {
          case TTypeValue.TYPE_UINT8:
            if (value[1] > 0) data[key] = this.getInt8(true, value[1]);else data[key] = this.getInt8(true, 1)[0];
            break;
          case TTypeValue.TYPE_INT8:
            if (value[1] > 0) data[key] = this.getInt8(false, value[1]);else data[key] = this.getInt8(false, 1)[0];
            break;
          case TTypeValue.TYPE_UINT16:
            if (value[1] > 0) data[key] = this.getInt16(true, value[1]);else data[key] = this.getInt16(true, 1)[0];
            break;
          case TTypeValue.TYPE_INT16:
            if (value[1] > 0) data[key] = this.getInt16(false, value[1]);else data[key] = this.getInt16(false, 1)[0];
            break;
          case TTypeValue.TYPE_UINT32:
            if (value[1] > 0) data[key] = this.getInt32(true, value[1]);else data[key] = this.getInt32(true, 1)[0];
            break;
          case TTypeValue.TYPE_INT32:
            if (value[1] > 0) data[key] = this.getInt32(false, value[1]);else data[key] = this.getInt32(false, 1)[0];
            break;
          case TTypeValue.TYPE_FLOAT32:
            if (value[1] > 0) data[key] = this.getFloat32(value[1]);else data[key] = this.getFloat32(1)[0];
            break;
          case TTypeValue.TYPE_UINT64:
            if (value[1] > 0) data[key] = this.getInt64(true, value[1]);else data[key] = this.getInt64(true, 1)[0];
            break;
          case TTypeValue.TYPE_INT64:
            if (value[1] > 0) data[key] = this.getInt64(false, value[1]);else data[key] = this.getInt64(false, 1)[0];
            break;
          case TTypeValue.TYPE_FLOAT64:
            if (value[1] > 0) data[key] = this.getFloat64(value[1]);else data[key] = this.getFloat64(1)[0];
            break;
          case TTypeValue.TYPE_CHAR:
            data[key] = this.getChars(value[1]);
            break;
          case TTypeValue.TYPE_STRUCT:
            if (value[2] > 0) {
              for (let i = 0; i < value[2]; i++) {
                this.offset = new BluetoothStruct(value[1]).decode(buffer, data[key][i], this.offset);
              }
            } else {
              this.offset = new BluetoothStruct(value[1]).decode(buffer, data[key], this.offset);
            }
            break;
        }
      } else {
        data[key] = this.getBit();
      }
    }
    if (this.bit_offset > 0) this.freeBitBuffer();
    return this.offset;
  }
  /**
   * Кодировать значения
   * @param buffer Буфер данных
   * @param data Структура для данных
   * @param offset Начало смещения
   */
  encode(buffer, data, offset = 0) {
    this.buffer = buffer;
    this.offset = offset;
    for (const [key, value] of Object.entries(this.structData)) {
      if (data[key] !== undefined) {
        if (value[0] !== TTypeValue.TYPE_BIT) {
          if (this.bit_offset > 0) this.freeBitBuffer();
          switch (value[0]) {
            case TTypeValue.TYPE_UINT8:
              if (value[1] > 0) this.setInt8(true, data[key], value[1]);else this.setInt8(true, [data[key]], 1);
              break;
            case TTypeValue.TYPE_INT8:
              if (value[1] > 0) this.setInt8(false, data[key], value[1]);else this.setInt8(false, [data[key]], 1);
              break;
            case TTypeValue.TYPE_UINT16:
              if (value[1] > 0) this.setInt16(true, data[key], value[1]);else this.setInt16(true, [data[key]], 1);
              break;
            case TTypeValue.TYPE_INT16:
              if (value[1] > 0) this.setInt16(false, data[key], value[1]);else this.setInt16(false, [data[key]], 1);
              break;
            case TTypeValue.TYPE_UINT32:
              if (value[1] > 0) this.setInt32(true, data[key], value[1]);else this.setInt32(true, [data[key]], 1);
              break;
            case TTypeValue.TYPE_INT32:
              if (value[1] > 0) this.setInt32(false, data[key], value[1]);else this.setInt32(false, [data[key]], 1);
              break;
            case TTypeValue.TYPE_FLOAT32:
              if (value[1] > 0) this.setFloat32(data[key], value[1]);else this.setFloat32([data[key]], 1);
              break;
            case TTypeValue.TYPE_UINT64:
              if (value[1] > 0) this.setInt64(true, data[key], value[1]);else this.setInt64(true, [data[key]], 1);
              break;
            case TTypeValue.TYPE_INT64:
              if (value[1] > 0) this.setInt64(false, data[key], value[1]);else this.setInt64(false, [data[key]], 1);
              break;
            case TTypeValue.TYPE_FLOAT64:
              if (value[1] > 0) this.setFloat64(data[key], value[1]);else this.setFloat64([data[key]], 1);
              break;
            case TTypeValue.TYPE_CHAR:
              this.setChars(data[key], value[1]);
              break;
            case TTypeValue.TYPE_STRUCT:
              if (value[2] > 0) {
                for (let i = 0; i < value[2]; i++) {
                  this.offset = new BluetoothStruct(value[1]).encode(buffer, data[key][i], this.offset);
                }
              } else this.offset = new BluetoothStruct(value[1]).encode(buffer, data[key], this.offset);
          }
        } else this.setBit(data[key]);
      }
    }
    if (this.bit_offset > 0) this.freeBitBuffer();
    return this.offset;
  }
}
;// CONCATENATED MODULE: ./src/components/bluetooth/index.ts






/***/ }),

/***/ 92365:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ BluetoothBtn; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.mjs + 1 modules
var VIcon = __webpack_require__(79669);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BluetoothBtn.vue?vue&type=template&id=0b2ecac6&scoped=true&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                        
                                                      
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VBtn/* VBtn */.D, {
    icon: "",
    class: "bluetooth-btn",
    onClick: _cache[0] || (_cache[0] = $event => $setup.showMessage())
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$setup.connected ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
      key: 0
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[1] || (_cache[1] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-bluetooth")])),
      _: 1
    })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
      key: 1
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[2] || (_cache[2] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-bluetooth-off")])),
      _: 1
    }))]),
    _: 1
  });
}

/* Vuetify */




// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vue3-toastify/dist/index.mjs
var dist = __webpack_require__(14084);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(35679);
// EXTERNAL MODULE: ./src/api/canbus.ts + 2 modules
var canbus = __webpack_require__(62774);
// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(92089);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BluetoothBtn.vue?vue&type=script&lang=ts







/* harmony default export */ var BluetoothBtnvue_type_script_lang_ts = ({
  name: "BluetoothBtn",
  components: {
    DialogTemplate: DialogTemplate/* default */.A
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const connected = (0,reactivity_esm_bundler/* ref */.KR)(false);
    /** Показать сообщение */
    const showMessage = () => {
      store/* default */.A.commit("app/setMessage", {
        title: t("BLE.title"),
        icon: "mdi-bluetooth",
        text: t(!connected.value ? "BLE.dialog.noConnected" : "BLE.dialog.connected"),
        btns: [{
          title: t(!connected.value ? "BLE.btn.connect" : "BLE.btn.disconnect"),
          on: onDialogClick
        }, {
          title: t("btn.close"),
          icon: "mdi-close"
        }],
        width: 700
      });
    };
    /** Событие кнопки подключения/отключения Bluetooth */
    const onDialogClick = () => {
      if (canbus/* default */.A.bluetooth.connected) canbus/* default */.A.bluetooth.disconnect();else canbus/* default */.A.bluetooth.connect();
    };
    /** Событие подключения Bluetooth */
    const onConnected = status => {
      connected.value = status === bluetooth/* TConnectedStatus */.s5.CONNECT;
      // Не выводим сообщения об отключении/подключении Bluetooth в момент прошивки устройства
      if (canbus/* default */.A.update.total > 0) {
        // Если устройство отключилось, значит возникли проблемы с восстановлением соединения.
        // Просим подключить устройство
        if (status === bluetooth/* TConnectedStatus */.s5.DISCONNECT) showMessage();
        return;
      }
      switch (status) {
        case bluetooth/* TConnectedStatus */.s5.NO_CONNECT:
          dist/* toast */.oR.error(t("BLE.notify.noConnected"));
          break;
        case bluetooth/* TConnectedStatus */.s5.CONNECT:
          dist/* toast */.oR.success(t("BLE.notify.connected"));
          break;
        case bluetooth/* TConnectedStatus */.s5.WAIT_CONNECT:
          dist/* toast */.oR.error(t("BLE.notify.lostConnected"));
          break;
        case bluetooth/* TConnectedStatus */.s5.DISCONNECT:
          dist/* toast */.oR.warning(t("BLE.notify.disconnected"));
          break;
      }
    };
    /** Событие отправки данных */
    const onSend = () => dist/* toast */.oR.error(t("BLE.notify.noData"));
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      canbus/* default */.A.bluetooth.addListener(bluetooth/* BLUETOOTH_EVENT_CONNECTED */.Sl, onConnected);
      canbus/* default */.A.bluetooth.addListener(bluetooth/* BLUETOOTH_EVENT_SEND */.JW, onSend);
      showMessage();
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.hi)(() => {
      canbus/* default */.A.bluetooth.removeListener(bluetooth/* BLUETOOTH_EVENT_CONNECTED */.Sl, onConnected);
      canbus/* default */.A.bluetooth.removeListener(bluetooth/* BLUETOOTH_EVENT_SEND */.JW, onSend);
    });
    return {
      connected,
      showMessage,
      onDialogClick
    };
  }
});
;// CONCATENATED MODULE: ./src/components/BluetoothBtn.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BluetoothBtn.vue?vue&type=style&index=0&id=0b2ecac6&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/BluetoothBtn.vue?vue&type=style&index=0&id=0b2ecac6&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/BluetoothBtn.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(BluetoothBtnvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-0b2ecac6"]])

/* harmony default export */ var BluetoothBtn = (__exports__);

/***/ }),

/***/ 69815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ MenuDots; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.mjs + 1 modules
var VDivider = __webpack_require__(7511);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.mjs + 2 modules
var VList = __webpack_require__(69915);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.mjs + 1 modules
var VListItem = __webpack_require__(57254);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemTitle.mjs
var VListItemTitle = __webpack_require__(4913);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.mjs + 1 modules
var VMenu = __webpack_require__(88249);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MenuDots.vue?vue&type=template&id=499244e7&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                      
                                                                              
                                                                  
                                                              
                                                        
                                                        
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VMenu/* VMenu */.q, {
    "content-class": "menu-dots",
    location: "center end",
    transition: "slide-x-reverse-transition"
  }, {
    activator: (0,runtime_core_esm_bundler/* withCtx */.k6)(({
      props
    }) => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, (0,runtime_core_esm_bundler/* mergeProps */.v6)(props, {
      icon: $props.icon,
      color: $props.color
    }), null, 16, ["icon", "color"])]),
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VList/* VList */.x8, {
      class: "pa-0"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($props.menu, (item, index) => {
        return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [item.title?.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VListItem/* VListItem */.g, {
          key: `menu-item_${index}`,
          disabled: item?.disabled,
          onClick: $event => _ctx.$emit('click:item', item)
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VListItemTitle/* VListItemTitle */.U, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(item.title), 1)]),
            _: 2
          }, 1024)]),
          _: 2
        }, 1032, ["disabled", "onClick"])) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VDivider/* VDivider */.G, {
          key: `menu-divider_${index}`
        }))], 64);
      }), 256))]),
      _: 1
    })]),
    _: 1
  });
}

/* Vuetify */






// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MenuDots.vue?vue&type=script&lang=ts

/* harmony default export */ var MenuDotsvue_type_script_lang_ts = ({
  name: "MenuDots",
  emits: ["click:item"],
  props: {
    menu: {
      type: Array,
      required: true
    },
    color: String,
    icon: {
      type: String,
      default: "mdi-dots-vertical"
    }
  },
  setup() {
    const visibleAbout = (0,reactivity_esm_bundler/* ref */.KR)(false);
    return {
      visibleAbout
    };
  }
});
;// CONCATENATED MODULE: ./src/components/MenuDots.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/MenuDots.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(MenuDotsvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var MenuDots = (__exports__);

/***/ }),

/***/ 34453:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ MultiRange; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MultiRange.vue?vue&type=template&id=6dc9f50a&scoped=true&ts=true

const _hoisted_1 = {
  class: "multi-range"
};
const _hoisted_2 = {
  class: "multi-range__range-wrap"
};
const _hoisted_3 = ["data-idx"];
const _hoisted_4 = {
  class: "multi-range__handle"
};
const _hoisted_5 = {
  class: "multi-range__ticks"
};
const _hoisted_6 = ["data-value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.ranges, item => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
      "data-idx": item.index,
      class: "multi-range__range",
      style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
        left: item.left
      })
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
      class: (0,shared_esm_bundler/* normalizeClass */.C4)(["multi-range__handle__value", {
        'multi-range__selected': item.selected
      }])
    }, (0,shared_esm_bundler/* toDisplayString */.v_)(item.value), 3)])], 12, _hoisted_3);
  }), 256))]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.ticks, tick => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
      "data-value": tick
    }, null, 8, _hoisted_6);
  }), 256))])]);
}
;// CONCATENATED MODULE: ./src/components/MultiRange.vue?vue&type=template&id=6dc9f50a&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MultiRange.vue?vue&type=script&lang=ts

/* harmony default export */ var MultiRangevue_type_script_lang_ts = ({
  name: "MultiRange",
  props: {
    /** Список точек */
    points: {
      type: Array,
      default: () => []
    },
    /** Минимальное значение */
    min: {
      type: Number,
      default: 0
    },
    /** Максимальное значение */
    max: {
      type: Number,
      default: 100
    },
    /** Шаг линейки */
    numberOfTicks: {
      type: Number,
      default: 10
    },
    /** Выбранная точка */
    selectPoint: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const {
      points,
      min,
      max,
      numberOfTicks,
      selectPoint
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const delta = (0,runtime_core_esm_bundler/* computed */.EW)(() => max.value - min.value);
    const ranges = (0,runtime_core_esm_bundler/* computed */.EW)(() => [0, ...points.value].map((point, i) => ({
      value: point,
      selected: selectPoint.value === point,
      left: point * 100 / delta.value + "%"
    })));
    const ticks = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const result = new Array(numberOfTicks.value);
      const tick = delta.value / numberOfTicks.value;
      for (let i = 0; i < numberOfTicks.value; i++) result[i] = (tick * i).toFixed();
      return result;
    });
    return {
      ranges,
      ticks
    };
  }
});
;// CONCATENATED MODULE: ./src/components/MultiRange.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MultiRange.vue?vue&type=style&index=0&id=6dc9f50a&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/MultiRange.vue?vue&type=style&index=0&id=6dc9f50a&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/MultiRange.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(MultiRangevue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-6dc9f50a"]])

/* harmony default export */ var MultiRange = (__exports__);

/***/ }),

/***/ 17627:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ ViewSettingDialog; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.mjs + 1 modules
var VSelect = __webpack_require__(20105);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewSettingDialog.vue?vue&type=template&id=ea7d8cf6&scoped=true&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
                                                      
                                                            
  const _component_number_field = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("number-field");
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.visible = $event),
    "content-class": "view-setting-dialog",
    icon: "lcd",
    title: $props.title,
    width: "440px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.viewEnabled,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.viewEnabled = $event),
          title: _ctx.$t('onboard.viewSetting.enabled.title'),
          description: _ctx.$t('onboard.viewSetting.enabled.description'),
          disabled: $props.disabled
        }, null, 8, ["modelValue", "title", "description", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.viewType,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.viewType = $event),
          label: _ctx.$t('onboard.viewSetting.type.title'),
          items: $setup.typeItems,
          hint: _ctx.$t('onboard.viewSetting.type.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: $props.disabled
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.viewTime,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.viewTime = $event),
          label: _ctx.$t('onboard.viewSetting.time.title'),
          hint: _ctx.$t('onboard.viewSetting.time.description'),
          disabled: $props.disabled,
          min: 1,
          max: 300
        }, null, 8, ["modelValue", "label", "hint", "disabled"])]),
        _: 1
      }), !$props.delayDisabled ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 0,
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.viewDelay,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.viewDelay = $event),
          label: _ctx.$t('onboard.viewSetting.delay.title'),
          hint: _ctx.$t('onboard.viewSetting.delay.description'),
          disabled: $props.disabled,
          min: 0,
          max: 300
        }, null, 8, ["modelValue", "label", "hint", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      "prepend-icon": "mdi-check",
      onClick: $setup.onApplyClick,
      disabled: $props.disabled
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1)]),
      _: 1
    }, 8, ["onClick", "disabled"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      "prepend-icon": "mdi-close",
      onClick: _cache[4] || (_cache[4] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.close")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */





// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(92089);
// EXTERNAL MODULE: ./src/components/cards/SwitchCardItem.vue + 6 modules
var SwitchCardItem = __webpack_require__(62295);
// EXTERNAL MODULE: ./src/components/common/NumberField.vue + 3 modules
var NumberField = __webpack_require__(5076);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewSettingDialog.vue?vue&type=script&lang=ts





/* harmony default export */ var ViewSettingDialogvue_type_script_lang_ts = ({
  name: "ViewSettingDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    NumberField: NumberField/* default */.A
  },
  props: {
    /** Отображение диалога */
    modelValue: {
      type: Boolean,
      required: true
    },
    /** Заголовок */
    title: String,
    /** Параметры отображения */
    view: Object,
    /** Не показывать "Время паузы отображения" */
    delayDisabled: Boolean,
    /** Выкл. */
    disabled: Boolean
  },
  emits: ["update:modelValue", "click:apply"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      view,
      delayDisabled
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      tm
    } = (0,vue_i18n/* useI18n */.s9)();
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const viewEnabled = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const viewType = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const typeItems = (0,runtime_core_esm_bundler/* computed */.EW)(() => tm("onboard.viewSetting.type.items")?.map((x, i) => ({
      label: x,
      value: i
    })));
    const viewTime = (0,reactivity_esm_bundler/* ref */.KR)(3);
    const viewDelay = (0,reactivity_esm_bundler/* ref */.KR)(3);
    (0,runtime_core_esm_bundler/* watch */.wB)(visible, val => {
      if (val) {
        viewEnabled.value = view.value.enabled ?? false;
        viewType.value = view.value.type ?? 0;
        viewTime.value = view.value.time ?? 3;
        viewDelay.value = !delayDisabled.value ? view.value.delay ?? 3 : 0;
      }
    });
    /** Применить изменения и закрыть диалог */
    const onApplyClick = () => {
      visible.value = false;
      emit("click:apply", {
        exec: view.value.exec,
        enabled: viewEnabled.value,
        type: viewType.value,
        time: viewTime.value,
        delay: viewDelay.value
      });
    };
    return {
      visible,
      viewEnabled,
      viewType,
      typeItems,
      viewTime,
      viewDelay,
      onApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/components/ViewSettingDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewSettingDialog.vue?vue&type=style&index=0&id=ea7d8cf6&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ViewSettingDialog.vue?vue&type=style&index=0&id=ea7d8cf6&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/ViewSettingDialog.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(ViewSettingDialogvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-ea7d8cf6"]])

/* harmony default export */ var ViewSettingDialog = (__exports__);

/***/ }),

/***/ 20287:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Card; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnGroup/VBtnGroup.mjs + 1 modules
var VBtnGroup = __webpack_require__(8321);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.mjs + 1 modules
var VCard = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCardText.mjs
var VCardText = __webpack_require__(30697);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCardActions.mjs
var VCardActions = __webpack_require__(93745);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/Card.vue?vue&type=template&id=7f07389e&scoped=true&ts=true

const _hoisted_1 = {
  class: "pl-4 pr-4 text-h4 text-uppercase"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                  
                                                      
  const _component_menu_dots = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("menu-dots");
                                                                  
                                                                        
                                                        
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCard/* VCard */.J, {
    class: "card"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCardText/* VCardText */.O, {
      class: "card__text"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "body", {}, undefined, true)]),
      _: 3
    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCardActions/* VCardActions */.S, {
      class: "justify-space-between"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)($props.title), 1), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtnGroup/* VBtnGroup */._, {
        class: "border-dialog-btns"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$props.custom !== undefined ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VBtn/* VBtn */.D, {
          key: 0,
          icon: $props.custom,
          color: "primary",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('click:custom'))
        }, null, 8, ["icon"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $props.like !== undefined ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VBtn/* VBtn */.D, {
          key: 1,
          icon: "mdi-heart",
          color: "primary",
          onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('click:like'))
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $props.menu && $props.menu.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_menu_dots, {
          key: 2,
          menu: $props.menu,
          icon: "mdi-menu",
          color: "primary",
          "onClick:item": _cache[2] || (_cache[2] = $event => _ctx.$emit('click:menu', $event))
        }, null, 8, ["menu"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
        _: 1
      })]),
      _: 1
    })]),
    _: 3
  });
}

/* Vuetify */





;// CONCATENATED MODULE: ./src/components/cards/Card.vue?vue&type=template&id=7f07389e&scoped=true&ts=true

// EXTERNAL MODULE: ./src/components/MenuDots.vue + 3 modules
var MenuDots = __webpack_require__(69815);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/Card.vue?vue&type=script&lang=ts

/* harmony default export */ var Cardvue_type_script_lang_ts = ({
  name: "Card",
  components: {
    MenuDots: MenuDots/* default */.A
  },
  props: {
    title: String,
    /** Меню */
    menu: {
      type: Array,
      default: undefined
    },
    like: {
      type: Boolean,
      default: undefined
    },
    custom: {
      type: String,
      default: undefined
    }
  },
  emits: ["click:custom", "click:like", "click:menu"]
});
;// CONCATENATED MODULE: ./src/components/cards/Card.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/Card.vue?vue&type=style&index=0&id=7f07389e&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/cards/Card.vue?vue&type=style&index=0&id=7f07389e&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/cards/Card.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(Cardvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-7f07389e"]])

/* harmony default export */ var Card = (__exports__);

/***/ }),

/***/ 58847:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ IconCardItem; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var VTextField = __webpack_require__(43948);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/IconCardItem.vue?vue&type=template&id=2fbc1e5d&scoped=true&ts=true

const _hoisted_1 = {
  class: "icon-card-item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
  const _component_icon_custom = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("icon-custom");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
    "model-value": $props.title,
    hint: $props.description,
    variant: "underlined",
    density: "compact",
    "persistent-hint": "",
    readonly: "",
    dense: "",
    disabled: $props.disabled
  }, null, 8, ["model-value", "hint", "disabled"]), ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.iconList, (item, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_icon_custom, {
      ref_for: true,
      ref: "IconCustom",
      key: `icon-card-item_${index}`,
      class: "icon-card-item__icon",
      style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
        right: `${parseInt($props.size) * index + ($props.margin ? $props.margin * index : 0)}px`,
        animation: $props.rotation != undefined && $props.rotation > 0 ? 'rotating ' + $props.rotation + 's linear infinite' : undefined
      }),
      name: item.name,
      colors: item.colors,
      size: $props.size,
      onClick: $event => $setup.onChange(index)
    }, null, 8, ["style", "name", "colors", "size", "onClick"]);
  }), 128))]);
}

/* Vuetify */



;// CONCATENATED MODULE: ./src/components/cards/IconCardItem.vue?vue&type=template&id=2fbc1e5d&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./src/components/common/icon-custom/IconCustom.vue + 5 modules
var IconCustom = __webpack_require__(19011);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/IconCardItem.vue?vue&type=script&lang=ts



/* harmony default export */ var IconCardItemvue_type_script_lang_ts = ({
  name: "IconCardItem",
  components: {
    IconCustom: IconCustom/* default */.A
  },
  props: {
    /** Список значений иконок */
    modelValue: {
      type: Array,
      required: true
    },
    /** Заголовок */
    title: {
      type: String,
      required: true
    },
    /** Описание */
    description: {
      type: String,
      default: undefined
    },
    /** Список имен иконок */
    iconName: {
      type: Array,
      default: undefined
    },
    /** Цвета вкл. иконки */
    colorsTrue: {
      type: Object,
      default: () => ({
        primary: "success",
        secondary: "#e2e2e2"
      })
    },
    /** Цвета выкл. иконки */
    colorsFalse: {
      type: Object,
      default: () => ({
        primary: "disable",
        secondary: "disable"
      })
    },
    /** Размер иконок */
    size: {
      type: String,
      default: "44px"
    },
    /** Скорость вращения иконки */
    rotation: {
      type: Number,
      default: undefined
    },
    /** Отступ */
    margin: {
      type: Number,
      default: undefined
    },
    /** Нет данных */
    nodata: {
      type: Boolean,
      default: false
    },
    /** Выкл. */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      iconName,
      colorsTrue,
      colorsFalse,
      nodata,
      disabled
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    /**
     * Изменение состояния
     * @param {number} index
     */
    const onChange = index => {
      if (!disabled.value) {
        modelValue.value[index] = !modelValue.value[index];
        emit("update:modelValue", modelValue.value);
        emit("change", modelValue.value);
      }
    };
    /** Список параметров иконок */
    const iconList = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const result = [];
      modelValue.value?.forEach((x, i) => {
        result.push({
          name: iconName.value[i],
          colors: x && !nodata.value && !disabled.value ? colorsTrue.value : colorsFalse.value
        });
      });
      return result;
    });
    return {
      iconList,
      onChange
    };
  }
});
;// CONCATENATED MODULE: ./src/components/cards/IconCardItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/IconCardItem.vue?vue&type=style&index=0&id=2fbc1e5d&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/cards/IconCardItem.vue?vue&type=style&index=0&id=2fbc1e5d&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/cards/IconCardItem.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(IconCardItemvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-2fbc1e5d"]])

/* harmony default export */ var IconCardItem = (__exports__);

/***/ }),

/***/ 40720:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ InputCardItem; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var VTextField = __webpack_require__(43948);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/InputCardItem.vue?vue&type=template&id=1a4cd29e&scoped=true&ts=true

const _hoisted_1 = {
  class: "input-card-item d-flex"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
    class: "input-card-item__message",
    "model-value": $props.title,
    hint: $props.description,
    suffix: $setup.textValue,
    variant: "underlined",
    density: "compact",
    "persistent-hint": "",
    readonly: "",
    dense: "",
    disabled: $props.disabled
  }, null, 8, ["model-value", "hint", "suffix", "disabled"])]);
}

/* Vuetify */



;// CONCATENATED MODULE: ./src/components/cards/InputCardItem.vue?vue&type=template&id=1a4cd29e&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./src/utils/time.ts
var time = __webpack_require__(22918);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/InputCardItem.vue?vue&type=script&lang=ts


/* harmony default export */ var InputCardItemvue_type_script_lang_ts = ({
  name: "InputCardItem",
  props: {
    /** Значение */
    value: {
      type: [String, Number],
      required: true
    },
    /** Заголовок */
    title: {
      type: String,
      required: true
    },
    /** Описание */
    description: {
      type: String,
      default: undefined
    },
    /** Тип: text, time, temperature */
    type: {
      type: String,
      default: "text"
    },
    /** Нет данных */
    nodata: {
      type: Boolean,
      default: false
    },
    /** Выкл. */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {
      value,
      type,
      nodata
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const textValue = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      switch (type.value) {
        case "mtime":
          if (!nodata.value) {
            switch (typeof value.value) {
              case "number":
              case "bigint":
                return (0,time/* getFormatTime */.n)(value.value);
              case "string":
                return value.value;
            }
          }
          return "--:--:--";
        case "time":
          if (!nodata.value) {
            switch (typeof value.value) {
              case "number":
              case "bigint":
                return (0,time/* getFormatTime */.n)(value.value, false);
              case "string":
                return value.value;
            }
          }
          return "--:--:--";
        case "temperature":
          if (!nodata.value) {
            switch (typeof value.value) {
              case "number":
                return value.value.toFixed(1) + "°C";
              case "string":
                return value.value + "°C";
            }
          }
          return "-.-°C";
        case "volts":
          if (!nodata.value) {
            switch (typeof value.value) {
              case "number":
                return "+" + value.value.toFixed(2) + "V";
              case "string":
                return value.value;
            }
          }
          return "-";
        default:
          if (!nodata.value) {
            switch (typeof value.value) {
              case "number":
                return value.value.toFixed();
              case "string":
                return value.value;
            }
          }
          return "--";
      }
    });
    return {
      textValue
    };
  }
});
;// CONCATENATED MODULE: ./src/components/cards/InputCardItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/InputCardItem.vue?vue&type=style&index=0&id=1a4cd29e&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/cards/InputCardItem.vue?vue&type=style&index=0&id=1a4cd29e&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/cards/InputCardItem.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(InputCardItemvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-1a4cd29e"]])

/* harmony default export */ var InputCardItem = (__exports__);

/***/ }),

/***/ 19493:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ NumberCardItem; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var VTextField = __webpack_require__(43948);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/NumberCardItem.vue?vue&type=template&id=472616e9&scoped=true&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
                                                      
  const _component_v_number_input = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-number-input");
                                                      
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VRow/* VRow */.L, {
    class: "number-card-item"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
      cols: "6",
      class: "pt-0 pr-0"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
        class: "number-card-item__label",
        "model-value": $props.title,
        hint: $props.description,
        variant: "underlined",
        density: "compact",
        "persistent-hint": "",
        readonly: "",
        dense: "",
        disabled: $props.disabled
      }, null, 8, ["model-value", "hint", "disabled"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
      cols: "6",
      class: "pt-0 pl-0"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_number_input, {
        class: "number-card-item__number",
        modelValue: $setup.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.value = $event),
        min: $props.min,
        max: $props.max,
        step: $props.step,
        "control-variant": "split",
        variant: "underlined",
        density: "compact",
        dense: "",
        disabled: $props.disabled
      }, null, 8, ["modelValue", "min", "max", "step", "disabled"])]),
      _: 1
    })]),
    _: 1
  });
}

/* Vuetify */




// EXTERNAL MODULE: ./node_modules/vuetify/lib/labs/VNumberInput/VNumberInput.mjs + 1 modules
var VNumberInput = __webpack_require__(40712);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/NumberCardItem.vue?vue&type=script&lang=ts


/* harmony default export */ var NumberCardItemvue_type_script_lang_ts = ({
  name: "NumberCardItem",
  components: {
    VNumberInput: VNumberInput/* VNumberInput */.w
  },
  props: {
    /** Значение */
    modelValue: {
      type: Number,
      default: 0
    },
    /** Заголовок */
    title: {
      type: String,
      required: true
    },
    /** Описание */
    description: {
      type: String,
      default: undefined
    },
    /** Минимальное значение */
    min: {
      type: Number,
      default: 0
    },
    /** Максимальное значение */
    max: {
      type: Number,
      default: 100
    },
    /** Шаг значения */
    step: {
      type: Number,
      default: 1
    },
    /** Нет данных */
    nodata: {
      type: Boolean,
      default: false
    },
    /** Выкл. */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      modelValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const value = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    return {
      value
    };
  }
});
;// CONCATENATED MODULE: ./src/components/cards/NumberCardItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/NumberCardItem.vue?vue&type=style&index=0&id=472616e9&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/cards/NumberCardItem.vue?vue&type=style&index=0&id=472616e9&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/cards/NumberCardItem.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(NumberCardItemvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-472616e9"]])

/* harmony default export */ var NumberCardItem = (__exports__);

/***/ }),

/***/ 9288:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ ProgressCardItem; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.mjs + 1 modules
var VProgressCircular = __webpack_require__(26106);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var VTextField = __webpack_require__(43948);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/ProgressCardItem.vue?vue&type=template&id=7e2d50a4&scoped=true&ts=true

const _hoisted_1 = {
  class: "progress-card-item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
                                                                                  
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
    "model-value": $props.title,
    hint: $props.description,
    variant: "underlined",
    density: "compact",
    "persistent-hint": "",
    readonly: "",
    dense: "",
    disabled: $props.disabled
  }, null, 8, ["model-value", "hint", "disabled"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VProgressCircular/* VProgressCircular */.x, {
    class: "progress-card-item__progress",
    color: $props.color,
    "model-value": $props.value,
    size: $props.size,
    width: 6,
    disabled: $props.nodata || $props.disabled
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(!$props.nodata && !$props.disabled && $props.value ? $props.value.toFixed() : ""), 1)]),
    _: 1
  }, 8, ["color", "model-value", "size", "disabled"])]);
}

/* Vuetify */




;// CONCATENATED MODULE: ./src/components/cards/ProgressCardItem.vue?vue&type=template&id=7e2d50a4&scoped=true&ts=true

// EXTERNAL MODULE: ./src/components/common/icon-custom/IconCustom.vue + 5 modules
var IconCustom = __webpack_require__(19011);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/ProgressCardItem.vue?vue&type=script&lang=ts

/* harmony default export */ var ProgressCardItemvue_type_script_lang_ts = ({
  name: "ProgressCardItem",
  components: {
    IconCustom: IconCustom/* default */.A
  },
  props: {
    /** Значение */
    value: Number,
    /** Заголовок */
    title: String,
    /** Описание */
    description: String,
    /** Цвет прогресса */
    color: {
      type: String,
      default: "success"
    },
    /** Размер иконок */
    size: {
      type: Number,
      default: 44
    },
    /** Нет данных */
    nodata: Boolean,
    /** Выкл. */
    disabled: Boolean
  }
});
;// CONCATENATED MODULE: ./src/components/cards/ProgressCardItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/ProgressCardItem.vue?vue&type=style&index=0&id=7e2d50a4&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/cards/ProgressCardItem.vue?vue&type=style&index=0&id=7e2d50a4&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/cards/ProgressCardItem.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(ProgressCardItemvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-7e2d50a4"]])

/* harmony default export */ var ProgressCardItem = (__exports__);

/***/ }),

/***/ 61765:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ SelectCardItem; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.mjs + 1 modules
var VSelect = __webpack_require__(20105);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/SelectCardItem.vue?vue&type=template&id=20c266ba&scoped=true&ts=true

const _hoisted_1 = {
  class: "select-card-item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                            
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["text-h4", {
      'select-card-item__disabled': $props.disabled
    }])
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.title), 3), (0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
    modelValue: $setup.modelSelect,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.modelSelect = $event),
    items: $props.items,
    hint: $props.description,
    variant: "underlined",
    "item-title": $props.itemTitle,
    "item-value": $props.itemValue,
    disabled: $props.disabled,
    "persistent-hint": ""
  }, null, 8, ["modelValue", "items", "hint", "item-title", "item-value", "disabled"])]);
}

/* Vuetify */



;// CONCATENATED MODULE: ./src/components/cards/SelectCardItem.vue?vue&type=template&id=20c266ba&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./src/components/common/icon-custom/IconCustom.vue + 5 modules
var IconCustom = __webpack_require__(19011);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/SelectCardItem.vue?vue&type=script&lang=ts


/* harmony default export */ var SelectCardItemvue_type_script_lang_ts = ({
  name: "SelectCardItem",
  components: {
    IconCustom: IconCustom/* default */.A
  },
  props: {
    /** Значение select */
    modelValue: Number,
    /** Заголовок */
    title: String,
    /** Описание */
    description: String,
    /** Список значений */
    items: Array,
    /** Отображаемое в списке название */
    itemTitle: {
      type: String,
      default: "title"
    },
    /** Значение в списке */
    itemValue: {
      type: String,
      default: "value"
    },
    /** Выкл. */
    disabled: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      disabled
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const modelSelect = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => {
        if (!disabled.value) {
          emit("update:modelValue", val);
          emit("change", val);
        }
      }
    });
    return {
      modelSelect
    };
  }
});
;// CONCATENATED MODULE: ./src/components/cards/SelectCardItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/SelectCardItem.vue?vue&type=style&index=0&id=20c266ba&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/cards/SelectCardItem.vue?vue&type=style&index=0&id=20c266ba&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/cards/SelectCardItem.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(SelectCardItemvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-20c266ba"]])

/* harmony default export */ var SelectCardItem = (__exports__);

/***/ }),

/***/ 67363:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ SliderCardItem; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.mjs
var VSlider = __webpack_require__(1160);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/SliderCardItem.vue?vue&type=template&id=3d48ad1c&scoped=true&ts=true

const _hoisted_1 = {
  class: "slider-card-item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_custom = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("icon-custom");
                                                            
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["text-h4", {
      'slider-card-item__disabled': $props.disabled
    }])
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.title), 3), (0,runtime_core_esm_bundler/* createVNode */.bF)(VSlider/* VSlider */.u, {
    modelValue: $setup.modelSlider,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.modelSlider = $event),
    min: $props.min,
    max: $props.max,
    "prepend-icon": !$props.prependIcon ? $props.prependIconMdi : undefined,
    "append-icon": !$props.appendIcon ? $props.appendIconMdi : undefined,
    color: $setup.color(),
    step: 1,
    disabled: $props.disabled,
    "hide-details": "",
    "onUpdate:focused": $setup.onFocusedUpdate
  }, (0,runtime_core_esm_bundler/* createSlots */.eX)({
    _: 2
  }, [$props.prependIcon ? {
    name: "prepend",
    fn: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_custom, {
      name: $props.prependIcon,
      size: $props.sizeIcon,
      color: $props.colorIcon
    }, null, 8, ["name", "size", "color"])]),
    key: "0"
  } : undefined, $props.appendIcon ? {
    name: "append",
    fn: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_custom, {
      name: $props.appendIcon,
      size: $props.sizeIcon,
      color: $props.colorIcon
    }, null, 8, ["name", "size", "color"])]),
    key: "1"
  } : undefined]), 1032, ["modelValue", "min", "max", "prepend-icon", "append-icon", "color", "disabled", "onUpdate:focused"]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["mt-1 slider-card-item__description", {
      'slider-card-item__disabled': $props.disabled
    }])
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.description), 3)]);
}

/* Vuetify */



;// CONCATENATED MODULE: ./src/components/cards/SliderCardItem.vue?vue&type=template&id=3d48ad1c&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./src/components/common/icon-custom/IconCustom.vue + 5 modules
var IconCustom = __webpack_require__(19011);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/SliderCardItem.vue?vue&type=script&lang=ts


/* harmony default export */ var SliderCardItemvue_type_script_lang_ts = ({
  name: "SliderCardItem",
  components: {
    IconCustom: IconCustom/* default */.A
  },
  props: {
    /** Значение slider */
    modelValue: Number,
    /** Заголовок */
    title: String,
    /** Описание */
    description: String,
    /** Минимальное значение */
    min: {
      type: Number,
      default: 0
    },
    /** Максимальное значение */
    max: {
      type: Number,
      default: 32
    },
    /** Имя MDI иконки в начале */
    prependIconMdi: {
      type: String,
      default: "mdi-volume-minus"
    },
    /** Имя MDI иконки в конце */
    appendIconMdi: {
      type: String,
      default: "mdi-volume-plus"
    },
    /** Имя иконки в начале */
    prependIcon: String,
    /** Имя иконки в конце */
    appendIcon: String,
    /** Размер иконки */
    sizeIcon: {
      type: [String, Number],
      default: 24
    },
    /** Цвет иконки */
    colorIcon: {
      type: String,
      default: "#939597"
    },
    /** Точки */
    points: {
      type: Array,
      default: () => [7, 18, 26, 32]
    },
    /** Цвет точки */
    pointColors: {
      type: Array,
      default: () => ["primary", "success", "warning", "error"]
    },
    /** Выкл. */
    disabled: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      points,
      pointColors,
      disabled
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const flicking = (0,runtime_core_esm_bundler/* inject */.WQ)("flicking");
    const modelSlider = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => {
        if (!disabled.value) {
          emit("update:modelValue", val);
          emit("change", val);
        }
      }
    });
    /**
     * Блокировка flicking
     * @param {boolean} ev Статус фокуса
     */
    const onFocusedUpdate = ev => {
      if (ev) flicking.value.disableInput();else flicking.value.enableInput();
    };
    /** Цвет */
    const color = () => {
      const index = points.value?.findIndex(x => modelSlider.value <= x);
      return pointColors.value?.[index] ?? "error";
    };
    return {
      flicking,
      modelSlider,
      onFocusedUpdate,
      color
    };
  }
});
;// CONCATENATED MODULE: ./src/components/cards/SliderCardItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/SliderCardItem.vue?vue&type=style&index=0&id=3d48ad1c&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/cards/SliderCardItem.vue?vue&type=style&index=0&id=3d48ad1c&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/cards/SliderCardItem.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(SliderCardItemvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-3d48ad1c"]])

/* harmony default export */ var SliderCardItem = (__exports__);

/***/ }),

/***/ 62295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ SwitchCardItem; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.mjs + 1 modules
var VSwitch = __webpack_require__(80594);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var VTextField = __webpack_require__(43948);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/SwitchCardItem.vue?vue&type=template&id=737d97f3&scoped=true&ts=true

const _hoisted_1 = {
  class: "switch-card-item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
                                                            
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
    "model-value": $props.title,
    hint: $props.description,
    variant: "underlined",
    density: "compact",
    "persistent-hint": "",
    readonly: "",
    dense: "",
    disabled: $props.disabled
  }, null, 8, ["model-value", "hint", "disabled"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VSwitch/* VSwitch */.N, {
    modelValue: $setup.modelSwitch,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.modelSwitch = $event),
    class: "switch-card-item__switch",
    density: "compact",
    color: $props.color,
    "hide-details": "",
    disabled: $props.nodata || $props.disabled
  }, null, 8, ["modelValue", "color", "disabled"])]);
}

/* Vuetify */




;// CONCATENATED MODULE: ./src/components/cards/SwitchCardItem.vue?vue&type=template&id=737d97f3&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/SwitchCardItem.vue?vue&type=script&lang=ts

/* harmony default export */ var SwitchCardItemvue_type_script_lang_ts = ({
  name: "SwitchCardItem",
  props: {
    /** Значение switch */
    modelValue: Boolean,
    /** Заголовок */
    title: String,
    /** Описание */
    description: String,
    /** Цвет switch */
    color: {
      type: String,
      default: "success"
    },
    /** Нет данных */
    nodata: Boolean,
    /** Выкл. */
    disabled: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      disabled
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const modelSwitch = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => {
        if (!disabled.value) {
          emit("update:modelValue", val);
          emit("change", val);
        }
      }
    });
    return {
      modelSwitch
    };
  }
});
;// CONCATENATED MODULE: ./src/components/cards/SwitchCardItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/cards/SwitchCardItem.vue?vue&type=style&index=0&id=737d97f3&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/cards/SwitchCardItem.vue?vue&type=style&index=0&id=737d97f3&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/cards/SwitchCardItem.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(SwitchCardItemvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-737d97f3"]])

/* harmony default export */ var SwitchCardItem = (__exports__);

/***/ }),

/***/ 5076:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ NumberField; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var VTextField = __webpack_require__(43948);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/NumberField.vue?vue&type=template&id=55a45ba2&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VTextField/* VTextField */.W, {
    modelValue: $setup.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.value = $event),
    label: $props.label,
    hint: $props.hint,
    variant: "underlined",
    type: "number",
    min: $props.min,
    max: $props.max,
    oninput: "\r\n\t\t\tif(this.max && Number(this.value) > Number(this.max)) { this.value = this.max; }\r\n\t\t\telse if (this.min && Number(this.value) < Number(this.min)) { this.value = ''; }\r\n\t\t",
    disabled: $props.disabled,
    readonly: $props.readonly,
    "persistent-hint": "",
    dense: "",
    onBlur: $setup.onBlur,
    onChange: _cache[1] || (_cache[1] = $event => _ctx.$emit('change', $event))
  }, null, 8, ["modelValue", "label", "hint", "min", "max", "disabled", "readonly", "onBlur"]);
}

/* Vuetify */



// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/NumberField.vue?vue&type=script&lang=ts

/* harmony default export */ var NumberFieldvue_type_script_lang_ts = ({
  name: "NumberField",
  props: {
    /** Вводимое значение */
    modelValue: Number,
    /** Заголовок */
    label: String,
    /** Подсказка */
    hint: String,
    /** Минимальное значение */
    min: {
      type: Number
    },
    /** Максимальное значение */
    max: {
      type: Number
    },
    /** Значение по умолчанию */
    defaultValue: {
      type: Number,
      default: 3
    },
    /** Только чтение */
    readonly: Boolean,
    /** Выкл. */
    disabled: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      min,
      max,
      defaultValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const value = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value?.toString() ?? "",
      set: val => emit("update:modelValue", Number(val))
    });
    /** Доп. проверка вводимых цифр */
    (0,runtime_core_esm_bundler/* watch */.wB)(value, val => {
      if (min.value && Number(val) < min.value) value.value = "";else if (max.value && Number(val) > max.value) value.value = max.value;
    });
    /** Потеря фокуса */
    const onBlur = () => {
      if (min.value && Number(value.value) < min.value) value.value = defaultValue.value;
    };
    return {
      value,
      onBlur
    };
  }
});
;// CONCATENATED MODULE: ./src/components/common/NumberField.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/common/NumberField.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(NumberFieldvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var NumberField = (__exports__);

/***/ }),

/***/ 19011:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ IconCustom; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.mjs + 1 modules
var VIcon = __webpack_require__(79669);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/icon-custom/IconCustom.vue?vue&type=template&id=746945aa&ts=true

const _hoisted_1 = {
  class: "icon-custom"
};
const _hoisted_2 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                        
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [$setup.html ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
    key: 0,
    class: "d-flex",
    innerHTML: $setup.html
  }, null, 8, _hoisted_2)) : $setup.mdi ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
    key: 1,
    size: $props.size,
    color: $props.color
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.name), 1)]),
    _: 1
  }, 8, ["size", "color"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]);
}

/* Vuetify */



;// CONCATENATED MODULE: ./src/components/common/icon-custom/IconCustom.vue?vue&type=template&id=746945aa&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/theme.mjs
var theme = __webpack_require__(47664);
;// CONCATENATED MODULE: ./src/components/common/icon-custom/svg-icon-template.ts
// noinspection RequiredAttributes,CssInvalidHtmlTagReference,CssInvalidPseudoSelector
/* harmony default export */ var svg_icon_template = ({
  "on-board": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500.07 345.84"><path d="M442.67,296a24.87,24.87,0,0,0-23.82,17.72c-19.7-.12-41.91-.05-60.79,0a19,19,0,0,1-14-5.68c-3.78-3.76-7.73-7.39-11.28-11.36-9.73-10.88-21.69-15.73-36.4-15.22-18.82-.28-46.37.12-46.37.12l-.11,19.61s34.35-.48,51.43-.49a18.66,18.66,0,0,1,13.53,5.35c5.14,4.93,10.17,10,15.22,15,7.85,7.82,17.18,12,28.43,11.82,5.81-.12,11.62,0,17.43,0,10.83,0,21.66-.1,32.49-.13h12.32a24.87,24.87,0,1,0,21.88-36.68Zm0,41a16.21,16.21,0,1,1,16.23-16.19v0a16.21,16.21,0,0,1-16.21,16.21h0ZM304.11,83.69c-9.53,8.85-18.9,17.88-28,27.16-5.48,5.57-11.48,8.29-19.52,8.26H250v19s13.38-.38,18-1a30.23,30.23,0,0,0,17.12-8.6c10-9.61,19.93-19.35,29.92-29a19,19,0,0,1,13.67-5.66c17.23,0,34.46.14,51.68-.11a24.85,24.85,0,1,0,.93-19c-4.31,0-8.63,0-12.95,0-13.41,0-26.82-.15-40.23.06C319.11,74.85,310.77,77.5,304.11,83.69Zm99.62-14.55a16.21,16.21,0,1,1-16.22,16.2,16.21,16.21,0,0,1,16.22-16.2Zm0,25.93A9.73,9.73,0,1,0,394,85.34a9.73,9.73,0,0,0,9.73,9.73Zm71.39,116.67A24.87,24.87,0,0,0,452,227.5H436.79a31.81,31.81,0,0,0-22.63,8.66c-6.25,5.87-12.2,12.07-18.39,18-1.61,1.54-3.5,3.31-5.54,3.79-10.54,2.46-20.61,3-28.68-6.52-4.56-5.39-9.91-10.16-15.14-14.94-6.32-5.79-14-8.38-22.56-8.4H250l-.12,19.14s54.75,0,76,.16a13.34,13.34,0,0,1,8,3.42c6.12,5.55,11.71,11.67,17.65,17.44,5,4.86,10.86,8.57,17.87,9.37,5.82.67,11.76.43,17.64.4a28.68,28.68,0,0,0,19.2-7.55c6-5.31,11.72-10.94,17.16-16.79,4.69-5.05,9.94-7.72,17-7.15a110.62,110.62,0,0,0,12.08.12,24.87,24.87,0,1,0,22.74-34.91Zm0,41.06a11.47,11.47,0,1,1,.05,0h-.05ZM310.71,34.57A9.73,9.73,0,1,0,301,24.82v0A9.74,9.74,0,0,0,310.71,34.57Zm62.74,172.85a24.85,24.85,0,1,0-23-34.42c-1.93.09-3.87,0-5.81,0-65.19-.15-94.64-.15-94.64-.15l-.11,19.5H350.56a24.88,24.88,0,0,0,22.89,15.07Zm0-41a11.51,11.51,0,1,1-.06,0h.06Zm69.22,144.76a6.91,6.91,0,1,0,.06-.05h-.06ZM373.45,192.3a9.73,9.73,0,1,0-9.74-9.73,9.73,9.73,0,0,0,9.74,9.73Zm101.67,34.55a9.72,9.72,0,1,0,9.74,9.72,9.72,9.72,0,0,0-9.74-9.72ZM261.78,33.42c8.54-.1,17.08-.06,25.59,0A24.85,24.85,0,1,0,288,14.67H249.88l.05,19.2S258.08,33.46,261.78,33.42ZM310.71,8.64a16.21,16.21,0,1,1-16.22,16.21A16.21,16.21,0,0,1,310.71,8.64Z" transform="translate(0 0.03)" style="fill:{primary}"/><path d="M236.31,119.09c-12.18,0-24.56-.31-18.34-.24-102.74-1.3-139.45-9-139.45-9l32.37-58.06a61.09,61.09,0,0,1,26-16c3.49-.81,7.42-1.57,11.89-2.25,17.54.08,87.53-.4,87.53-.4V14.67s-75.09-.34-83.86,0c-10.64.35-20.7,1.9-30.43,6.26A82.82,82.82,0,0,0,85.75,51.62c-7.08,10.83-13.38,22.16-20,33.31L61.58,92C57,85.44,48.79,80.57,37.5,80.57,19.28,80.57,0,93.23,0,105.15S19.28,123.7,37.5,123.7c1.6,0,3.1-.07,4.57-.17-10.58,9.37-21.06,18-21.06,18C13.59,148.4,7.52,162.3,7.52,172.41V251c0,6.85,4,13,11.49,18.47V311a13.08,13.08,0,0,0,13,13h57.5a13.08,13.08,0,0,0,13-13V294.2c5.56.77,12.52,1.52,20.23,2.22,5.34.73,13.58,1.43,26,2.06,38.62,2.7,62.93,3,87.74,2.76Zm-112,53.57c-1.45,16.53-27.8,22.52-50.39,20.54S41,182,42.49,165.49c1-11.65,12.68-18.3,35.26-16.33C110.1,152,125.3,161,124.29,172.66Z" transform="translate(0 0.03)" style="fill:{secondary}"/></svg>',
  "key": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 499.96"><path d="M492.86,175.63,459,141.79l-19-19.07L377.26,60,358.2,41,324.36,7.14a24.4,24.4,0,0,0-34.49,0L164.19,132.82a65.27,65.27,0,0,0,0,92.31h0l19.57,19.58,71.5,71.49,19.58,19.58a65.3,65.3,0,0,0,92.33,0L492.86,210.11a24.38,24.38,0,0,0,0-34.48ZM310.12,266.5a25.17,25.17,0,0,1-35.59,0l-41-41a25,25,0,0,1-7.37-17.8,25.44,25.44,0,0,1,.63-5.63,25.18,25.18,0,0,1,42.32-12.16l1.67,1.67,37.55,37.54,1.84,1.85a25.17,25.17,0,0,1,0,35.58Zm123.74-74.6-24.44,24.44a40.46,40.46,0,0,1-57.2,0l-68.57-68.57a40.44,40.44,0,0,1,0-57.19h0l24.44-24.44a15.1,15.1,0,0,1,21.35,0h0l5.69,5.68,93,93,5.68,5.68a15.11,15.11,0,0,1,.08,21.37l0,0Z" transform="translate(0 0)" style="fill:{primary}"/><path d="M476.76,72.57,427.42,23.24a36.41,36.41,0,0,0-51.48,0l-8.21,8.2L386.8,50.51,395,42.3a9.45,9.45,0,0,1,13.35,0l49.34,49.34a9.44,9.44,0,0,1,0,13.34l-8.21,8.21,19.07,19.07,8.21-8.21A36.45,36.45,0,0,0,476.76,72.57ZM30.39,398.08c-19.75,19.74-42.55,74.55-22.8,94.3,15.14,15.14,50.92,5.25,75.68-9.09a7.73,7.73,0,0,0,3.47-5.62c.84-16.12,2.94-40.35,2.94-40.35A1.19,1.19,0,0,1,90.76,436H91l43.47-.95a2.07,2.07,0,0,0,2-2l.91-43.42a1.2,1.2,0,0,1,1.08-1.29h.21l40-.35a13.65,13.65,0,0,0,8.29-3.48l58.76-58.76-71.5-71.49ZM257.63,201.3A9,9,0,1,0,244,213.06a7.91,7.91,0,0,0,.91.92L286,255a9,9,0,0,0,12.71-12.71Z" transform="translate(0 0)" style="fill:{secondary};fill-rule:evenodd"/></svg>',
  "passenger": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 377.19 500.03"><path d="M188.61,101.23A50.62,50.62,0,1,0,138,50.61h0a50.61,50.61,0,0,0,50.6,50.62ZM364.07,347c-13.83-10.37-52.21-48.23-57-77.66-4.12-25-8.5-85.45-41.88-123.2l68-68.92a14.93,14.93,0,1,0-21.23-21h0L242.07,127c-14.2-8.28-31.73-13.29-53.46-13.29-105.45,0-112.22,117.9-118.42,155.58C65.36,298.72,27,336.58,13.19,347s-17.88,30.39-6.65,42.49,27.92,8.62,41.36-.59c14.7-10.08,29.51-30.37,29.51-30.37-6.81,19-4.46,44.11,5.2,62.32,7,13.27,27.24,53,35,65,8.15,12.66,20.89,18.61,35.35,10.54,14.91-8.32,19.43-25.32,8.94-40.15-11.6-16.42-42.43-69.79-28.82-82.59H244.22c13.61,12.8-17.21,66.17-28.82,82.59-10.49,14.83-6,31.83,8.94,40.15,14.46,8.07,27.19,2.12,35.35-10.54,7.72-12,27.91-51.7,35-65,9.66-18.21,12-43.33,5.2-62.32,0,0,14.81,20.29,29.51,30.37,13.44,9.21,30.12,12.69,41.36.59S377.9,357.33,364.07,347Zm-76.62-7.67a14.94,14.94,0,0,1-20,6.78h0c-38.51-19-127.71-19.07-164.56-.12L88,353.67,69.1,303.21l154.51-156.7a14.93,14.93,0,0,1,21.24,21h0l-141.12,143,1,2.52c49.31-16.42,134.26-14.35,176,6.25a14.91,14.91,0,0,1,6.77,20h0Z" transform="translate(-0.06 0.01)" style="fill:{primary}"/></svg>',
  "arrow-right": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 24 24" fill="{primary}"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 8.83L17.17 12 14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8-8-8z"/></svg>',
  "arrow-left": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 24 24" fill="{primary}"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 8.83L17.17 12 14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8-8-8z" transform="translate(24 24) rotate(180)"/></svg>',
  "lcd": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 512 404.99"><path d="M456.35,418.4c2.89,10,2.12,18.91-3.49,27-5.78,8.33-13.81,12.86-24,12.86q-107.22,0-214.44,0c-42.92,0-85.84-.44-128.75.25-21.05.34-36.44-19-30.46-38.16a3.63,3.63,0,0,0,0-1.27c-6.8-.72-13.64-.76-20.14-2.28a45.5,45.5,0,0,1-35-44.65q0-124.28.1-248.55c0-10.41-.68-21,.73-31.19C4,69.63,23.24,53.66,46.36,53.59c31.27-.1,62.54,0,93.82,0H413.52c17.06,0,34.12.25,51.17-.06C490.93,53,512.09,74.7,512,101.13c-.32,90.17-.12,180.33-.11,270.5a46.23,46.23,0,0,1-45.68,46.76C463.11,418.46,460,418.4,456.35,418.4ZM255.92,399H281.1c61,0,122.12-.24,183.17.19,13.9.1,28.56-11.24,28.5-28.74-.29-89.48-.13-179-.16-268.45A43.38,43.38,0,0,0,492,94c-2-10.61-12.71-21.38-27-21.26-37,.3-73.92.1-110.87.1H193.72c-48.46,0-96.93.3-145.4-.18-16.63-.17-29.49,12.84-29.14,28.9.52,24.49.12,49,.12,73.49q0,97.87,0,195.76c0,16.74,11.54,28.25,28.29,28.25Zm.08,40.12V439H421.31c2.71,0,5.42.06,8.12-.08,4.22-.23,7-2.57,8.59-6.38s.83-7.39-1.83-10.56c-2.49-3-5.74-3.62-9.45-3.61q-80.83.08-161.65,0H84.75c-6.8,0-11.57,4.26-11.61,10.26S77.64,439,84.63,439q15.23.14,30.45.13Q185.55,439.18,256,439.16Z" transform="translate(0 -53.5)" style="fill:{primary}"/><path d="M256,383.44q-40.22,0-80.41,0-63.75.07-127.5.2c-9.15,0-13.35-4.25-13.34-13.82q0-107.43.07-214.86c0-17.73-.07-35.47-.07-53.2,0-9.29,4.37-13.68,13.62-13.68q67.62,0,135.25,0c13.63,0,27.26.49,40.89.47q116.92-.16,233.83-.48c2.82,0,5.65,0,8.46.18a11.16,11.16,0,0,1,10.36,11.06c.19,6.62.06,13.26.06,19.89q0,98.09,0,196.18,0,27,0,54c0,10.33-3.88,14.29-14.08,14.29l-202.27-.06H256ZM458.18,107.49H53.92V364.22c1.27.08,2.31.2,3.36.2q67.79,0,135.57,0H249.7q88.55,0,177.07,0c9.47,0,18.94.28,28.41.45,1.93,0,3.3-.08,3.27-2.77q-.27-26.53-.25-53.08,0-96.86,0-193.72Z" transform="translate(0 -53.5)" style="fill:{primary}"/><path d="M326.58,231.43q0-28.83,0-57.66c0-7,3.39-10.65,10.36-10.69,14.89-.09,29.8-.4,44.67.15,28.64,1.05,49.48,21.66,50.8,50.27.58,12.69.48,25.46-.1,38.15-1.26,27.11-24.44,48.73-51.63,48.73H338.05c-7.95,0-11.45-3.42-11.46-11.28Q326.56,260.26,326.58,231.43Zm19.35,49.69c12.56,0,24.75.48,36.89-.12,15.39-.75,28.63-12.81,29.93-28.13a261.16,261.16,0,0,0,.34-40.53c-1.09-15.22-12.2-27.85-26-29.16-13.5-1.27-27.21-.28-41.11-.28Z" transform="translate(0 -53.5)" style="fill:{primary}"/><path d="M199.14,231.47c0-12.46,0-24.92,0-37.37.09-16.18,13-30.26,29.14-30.72,19.62-.57,39.26-.3,58.89-.23a9.16,9.16,0,0,1,9.56,9.4c-.05,5.64-3.95,9.56-9.83,9.58-18,.06-36,0-54,0-9.6,0-14.49,4.95-14.48,14.48q0,34.94,0,69.87c0,9.86,4.8,14.67,14.64,14.67h52.8c6.8,0,10.94,3.74,10.89,9.78-.05,5.65-4.29,9.36-10.92,9.38-18.24.05-36.49.12-54.74,0s-32-14.09-32-32.31C199.18,255.84,199.15,243.65,199.14,231.47Z" transform="translate(0 -53.5)" style="fill:{primary}"/><path d="M102.69,281.18H120.2q25,0,50,0c6.92,0,11,3.62,11.05,9.63,0,5.81-4.34,9.54-11.2,9.54q-37.57,0-75.15,0c-7.65,0-11.18-3.52-11.18-11.11q0-57.9-.05-115.78c0-4.38,1.51-7.71,5.56-9.47,3.77-1.64,7.83-1.47,10.43,1.76a14.44,14.44,0,0,1,3,8.39c.18,34,.09,68,.07,102Z" transform="translate(0 -53.5)" style="fill:{primary}"/></svg>',
  "start-stop": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 500"><path d="M251.12,73.1a178,178,0,1,0,178,178,178,178,0,0,0-178-178Zm62.6,110.2h28.43v6.49H321.46v8.5h19.25v6.46H321.46v10.44h21.42v6.46H313.72Zm-99.38-72.25h64.73a21.77,21.77,0,0,1,.93,43.53H214.34a21.77,21.77,0,0,1,0-43.53Zm91.19,72.25v38.35h-7.77l-15.46-25v25h-7.19V183.3h7.53l15.7,25.61V183.3ZM180.62,252.41v-9.19h43.17v9.19H207.71v45.13h-11V252.41Zm47.54-40.14a10.11,10.11,0,0,0,8,3.42,13.18,13.18,0,0,0,4.88-1,16.55,16.55,0,0,0,4.2-2.31v-4.87h-8.87v-6.46H253v15.28a21,21,0,0,1-7,4.14,25.6,25.6,0,0,1-9.35,1.79,21,21,0,0,1-10.49-2.52,16,16,0,0,1-6.73-7.22,23.4,23.4,0,0,1-2.25-10.21,22,22,0,0,1,2.51-10.65,17,17,0,0,1,7.36-7.14,19.79,19.79,0,0,1,9.18-1.91q7.14,0,11.15,3a13.53,13.53,0,0,1,5.17,8.27l-7.69,1.44a8.14,8.14,0,0,0-3-4.46,9.23,9.23,0,0,0-5.58-1.63,10.47,10.47,0,0,0-8.07,3.22q-3,3.21-3,9.54Q225.12,208.86,228.16,212.27Zm12.71,30.95h11.6l21.75,54.32H262.29l-4.74-12.34H235.83l-4.48,12.34H219.71Zm19-21.57V183.3h7.74v38.35Zm-80-38.35h7.53l15.7,25.61V183.3h7.19v38.35h-7.77l-15.46-25v25h-7.19Zm-35.81,0h28.43v6.49H151.8v8.5h19.25v6.46H151.8v10.44h21.42v6.46H144.06Zm-6.35,110.45q-5.52-4.77-6.6-13.88l10.67-1q1,5.37,3.91,7.89a11.83,11.83,0,0,0,7.95,2.52c3.53,0,6.2-.74,8-2.24a6.64,6.64,0,0,0,2.68-5.24,4.91,4.91,0,0,0-1.13-3.28,9.16,9.16,0,0,0-3.94-2.36q-1.94-.66-8.79-2.37c-5.88-1.45-10-3.25-12.37-5.37a14.14,14.14,0,0,1-5-10.93,14,14,0,0,1,2.36-7.76,14.76,14.76,0,0,1,6.78-5.51,27.15,27.15,0,0,1,10.69-1.89q10.23,0,15.4,4.49a15.88,15.88,0,0,1,5.43,12l-11,.49q-.7-4.19-3-6c-1.55-1.22-3.86-1.83-7-1.83a12.56,12.56,0,0,0-7.49,2,4,4,0,0,0-1.74,3.38,4.22,4.22,0,0,0,1.63,3.3q2.08,1.74,10.08,3.63a53,53,0,0,1,11.84,3.91,15.19,15.19,0,0,1,6,5.52,17.11,17.11,0,0,1-.42,17.4,15.59,15.59,0,0,1-7.34,6,30.59,30.59,0,0,1-11.82,2q-10.26-.11-15.78-4.87Zm59.14,60.05a13.59,13.59,0,0,1-6.47,5.34A27,27,0,0,1,180,360.89q-9.09,0-14-4.2t-5.82-12.24l9.41-.92q.85,4.74,3.45,7a10.46,10.46,0,0,0,7,2.22q4.67,0,7-2a5.9,5.9,0,0,0,2.37-4.62,4.38,4.38,0,0,0-1-2.9,8,8,0,0,0-3.49-2.07q-1.69-.6-7.75-2.1-7.77-1.92-10.92-4.74a12.61,12.61,0,0,1-2.34-16.5,13,13,0,0,1,6-4.85,24.14,24.14,0,0,1,9.43-1.67q9,0,13.59,4a14,14,0,0,1,4.79,10.56l-9.68.42a8.26,8.26,0,0,0-2.67-5.31c-1.33-1.08-3.38-1.62-6.13-1.62a11,11,0,0,0-6.6,1.74,3.47,3.47,0,0,0-1.54,3,3.65,3.65,0,0,0,1.44,2.91c1.22,1,4.19,2.09,8.89,3.21a47.59,47.59,0,0,1,10.45,3.44,13.46,13.46,0,0,1,5.3,4.88,14.26,14.26,0,0,1,1.91,7.63,14.08,14.08,0,0,1-2.24,7.64Zm45.09-33.58H227.75V360h-9.68V320.22H203.85v-8.11h38.09Zm43.26,34.09q-6.31,6.56-16.87,6.55t-17-6.52q-6.32-6.52-6.31-18a30.42,30.42,0,0,1,2.19-12.29,22.32,22.32,0,0,1,4.46-6.58,18.56,18.56,0,0,1,6.2-4.31,26.27,26.27,0,0,1,10.33-1.9q10.59,0,16.95,6.57t6.36,18.28q0,11.64-6.31,18.2Zm8.07-79.44h-2.22v22.67h-11V243.22h23.09q8.7,0,12.65,1.46a12.5,12.5,0,0,1,6.32,5.21,15.67,15.67,0,0,1,2.37,8.56,14.56,14.56,0,0,1-3.59,10.1q-3.6,4-10.75,5a25.23,25.23,0,0,1,5.87,4.56,61.15,61.15,0,0,1,6.25,8.82l6.63,10.59H315.8l-7.93-11.82a75.57,75.57,0,0,0-5.78-8,8.37,8.37,0,0,0-3.3-2.26,18,18,0,0,0-5.52-.57Zm40.91,59.41a13.05,13.05,0,0,1-4.07,4.72,14,14,0,0,1-5,2.28,56.74,56.74,0,0,1-10,.68H308.8v18h-9.68V312.11H314.6q8.82,0,11.5.72a12.52,12.52,0,0,1,6.9,4.69,14.85,14.85,0,0,1,2.78,9.34,15.72,15.72,0,0,1-1.6,7.42Zm39.95-81.87H358.05v45.13h-11V252.41H331v-9.19h43.17ZM268.3,319.56a12.3,12.3,0,0,0-9.65,4.11Q255,327.77,255,336t3.76,12.35a12.92,12.92,0,0,0,18.26.74c.25-.23.5-.48.74-.74q3.72-4.17,3.72-12.51t-3.62-12.29A12.24,12.24,0,0,0,268.3,319.56Zm-21.76-63.67-7.33,20.16H254Zm73.84,64.66a45.47,45.47,0,0,0-7-.33H308.7v13.6H314q5.72,0,7.65-.75a6.28,6.28,0,0,0,4.12-6.08,6.18,6.18,0,0,0-1.54-4.32,6.67,6.67,0,0,0-3.85-2.12Zm-8.28-57.32a7.1,7.1,0,0,0,1.11-4.08,6.52,6.52,0,0,0-1.47-4.43,6.72,6.72,0,0,0-4.13-2.13c-.89-.12-3.55-.18-8-.18h-8.56v13.78h8.11c5.27,0,8.55-.22,9.86-.66A5.9,5.9,0,0,0,312.1,263.23Z" style="fill:{secondary}"/><path d="M250,0C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Zm.92,449.35c-109.1,0-196.66-90.22-196.66-199.32S141.82,54.26,250.92,54.26,449.35,140.93,449.35,250,360,449.35,250.92,449.35Z" style="fill:{primary}"/></svg>',
  "climate": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500.01 486.02"><path d="M187.4,272.5c-18.42-1.17-39.55-5.24-55.74-16.14-59.35-40-144.68-3.83-130,86.15,15,91.53,103.41,108.29,161.75,79,47.06-23.61,60.75-77.62,64.46-114.11C222.18,298.24,202,275.55,187.4,272.5Zm310.93-129C483.38,52,394.92,35.22,336.58,64.49c-47.06,23.61-60.75,77.61-64.46,114.1,5.7,9.19,25.89,31.88,40.48,34.94,18.42,1.16,39.55,5.23,55.74,16.13,59.35,40,144.66,3.83,130-86.15ZM309.6,258.66c-9,6-31.08,26.85-33.68,41.53-.61,18.45-4,39.69-14.43,56.21-38.14,60.53.58,144.73,90.07,127.29C442.6,466,456.65,377,425.61,319.61,400.58,273.3,346.18,261.26,309.6,258.66ZM150.76,2.33c-91,17.73-105.09,106.68-74,164.08,25,46.31,79.42,58.35,116,61,9-6,31.08-26.85,33.68-41.53.61-18.45,4-39.69,14.43-56.21C279,69.09,240.24-15.11,150.76,2.33Z" transform="translate(0.01 0)" style="fill:{primary};fill-rule:evenodd"/><path d="M251.26,168.79a83.87,83.87,0,1,0,83.87,83.87h0A83.87,83.87,0,0,0,251.26,168.79Zm.49,121.66a37.39,37.39,0,1,1,37.39-37.39,37.39,37.39,0,0,1-37.39,37.39Z" transform="translate(0.01 0)" style="fill:{secondary};fill-rule:evenodd"/></svg>',
  "air-outside": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 280"><path d="M152.21,0a50.14,50.14,0,0,0-42.5,23.4L74.1,80.61l-31.31,4.7A49.89,49.89,0,0,0,0,134.71V200a30.23,30.23,0,0,0,30,30H50.9a59.93,59.93,0,0,0,118.2,0H330.9a59.93,59.93,0,0,0,118.2,0H470a30,30,0,0,0,29.9-29.9l.1-56.29a50,50,0,0,0-41.89-49.1L420.2,88.2l-18.6,17.31,53.4,8.88a29.61,29.61,0,0,1,25,29.42V200a9.77,9.77,0,0,1-9.53,10H449.1a59.93,59.93,0,0,0-118.2,0H169.1a59.93,59.93,0,0,0-118.2,0H30a9.78,9.78,0,0,1-10-9.55V134.71A29.8,29.8,0,0,1,45.61,105l36-5L126.9,34.1A29.67,29.67,0,0,1,152.21,20H290a29.92,29.92,0,0,1,24.1,11.89l33.5,42,13.49-12.58L330,20A50.08,50.08,0,0,0,290,0ZM110,180a39.86,39.86,0,1,1-.28,0Zm280,0a39.86,39.86,0,1,1-.28,0Z" transform="translate(0 0)" style="fill:{secondary}"/><polygon points="453.18 2.69 306.06 140 250 140 250 110 200 150 250 190 250 160 313.94 160 466.82 17.3 453.18 2.69" style="fill:{primary}"/></svg>',
  "air-inside": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500.02 280"><path d="M152.17,0a50,50,0,0,0-42.4,23.5L74,80.76,42.93,85.2A50.11,50.11,0,0,0,0,134.69V200a30.15,30.15,0,0,0,30,30H50.84A60,60,0,0,0,65,261c10.17,11.43,25.82,19,45,19a60.14,60.14,0,0,0,59.08-50H330.84A60,60,0,0,0,345,261c10.17,11.43,25.82,19,45,19a60.14,60.14,0,0,0,59.08-50H470a30.15,30.15,0,0,0,30-30V143.89a50.1,50.1,0,0,0-41.78-49.32L375.61,80.8,330,20A50,50,0,0,0,290,0Zm0,20H290a30,30,0,0,1,24,12l50.4,67.2,90.54,15.1A29.88,29.88,0,0,1,480,143.89V200a9.84,9.84,0,0,1-9.68,10H449.08A60.14,60.14,0,0,0,390,160c-19.16,0-34.81,7.55-45,19a60,60,0,0,0-14.18,31H169.08A60.14,60.14,0,0,0,110,160c-19.16,0-34.81,7.55-45,19a60,60,0,0,0-14.18,31H30a9.84,9.84,0,0,1-10-9.68h0V134.69A29.93,29.93,0,0,1,45.76,105L86,99.26l40.72-65.14A30,30,0,0,1,152.17,20ZM110,180a40,40,0,0,1,0,80c-14.16,0-23.52-4.95-30-12.27S70,230.28,70,220s3.48-20.42,10-27.73S95.84,180,110,180Zm280,0a40,40,0,0,1,0,80c-14.16,0-23.52-4.95-30-12.27S350,230.28,350,220s3.48-20.42,10-27.73S375.84,180,390,180Z" style="fill:{secondary}"/><path d="M150.4,60V80h120a30,30,0,0,1,0,60h-40V110l-50,40,50,40V160h40a50,50,0,0,0,0-100Z" style="fill:{primary}"/></svg>',
  "blow-windshield": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 499.99 412.81"><path d="M301.38,412.8c1-45.93-5-90.27-28.71-130.87-21-36-28.34-75.43-29-116.52-.07-4-.35-7.93-.56-12.49H210.94l38.92-45.42,38.78,45.16H254.93c2.22,21.51,2.91,42.17,6.87,62.19,3.28,16.56,7.94,33.81,16.32,48.24,27,46.57,37.35,96.65,36.94,149.68Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M210.79,412.8c1-47.28-6.09-92.59-30.48-134.27-20.36-34.81-26.56-73.39-27.42-113.11-.08-4-.33-8-.53-12.53H120.23l38.83-45.37,38.8,45.16H165.53c.43,36.55,3,71.68,18.52,104.56,4.6,9.76,9.6,19.35,14.67,28.91,19.15,36.11,24,75.32,25.31,115.34l.36,11.31Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M392.12,412.8c.94-44.57-4.06-87.9-27-127.4-21.08-36.39-30-75.91-30.64-117.58-.08-4.71,0-9.43,0-14.83H301.64l39-45.47,38.86,45.24H347c.68,36.77,3.31,72,18.88,105.23C376,279.54,387,300.9,394.7,323.32c9.93,28.74,10.56,59.23,11,89.46Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M389.32,259.49c-7.68-10.71-7.69-10.71-.55-20.13l91.29-120.3c1.52-2,3-4,4.47-6C363.38-10.48,161.06-28.94,15.3,112.7L141.64,279.2l13.21-7.33L160.3,283c-5.6,3.78-10.69,7.39-16,10.71-4.83,3.06-7.87.19-10.69-3.54q-22.53-29.76-45.23-59.53l-84-110.71c-6.14-8.1-6-9.51,1.1-16.38,49.08-47.26,106-80.49,172.83-95.39,77.08-17.18,151-7,221.57,28,35,17.35,66.24,40.05,94.3,67.18,7.3,7.06,7.48,8.57,1.57,16.37q-51,67.36-102.15,134.72C392.32,256.14,390.81,257.74,389.32,259.49Z" transform="translate(0.05 0.01)" style="fill:{secondary}"/><path d="M296.38,252.87c10.56,3.58,21.6,6.21,31.42,11.24,3.6,1.84,4.27,9.39,6.82,15.64-11.47-4.11-21.87-6.79-31.12-11.66-4-2.13-5.73-8.73-8.49-13.3Z" transform="translate(0.05 0.01)" style="fill:{secondary}"/><path d="M240.54,260.31c-9.77,1.55-18.44,3.83-27.1,3.8-3.31,0-6.61-5.33-9.91-8.24l1.13-2.9,31.4-5.27Z" transform="translate(0.05 0.01)" style="fill:{secondary}"/><path d="M348.93,54.33c-4.23,2.85-6.84,5.94-9.36,5.88-2.1,0-4.12-3.81-6.17-5.93,2.27-2.18,4.29-5.64,6.87-6.11C342.22,47.81,344.87,51.27,348.93,54.33Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M112.8,83c-2.83-4.19-6.21-7.1-5.7-8.93.7-2.53,4.34-4.25,6.72-6.31,1.91,2.25,5.27,4.45,5.34,6.75S115.92,79.07,112.8,83Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M70.38,129.6c3.18,4.07,6.65,6.62,6.35,8.59-.39,2.57-3.77,4.69-5.86,7-2.16-2-5.93-3.89-6.07-6C64.59,136.69,67.59,134,70.38,129.6Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M102.88,170.93c2.86,3.79,6.31,6.45,6,8.37-.49,2.56-4,4.55-6.16,6.78-2.12-2.3-5.53-4.38-5.93-7C96.38,177.19,99.94,174.64,102.88,170.93Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M237.06,48.81c-2.74-4.17-5.82-6.8-5.52-9s3.81-4.2,5.91-6.27c2.17,2.27,5.61,4.3,6.08,6.87C243.83,42.31,240.23,44.93,237.06,48.81Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M211.26,51.32c-2.83-4.23-6.18-7.13-5.68-9,.67-2.5,4.34-4.19,6.72-6.23,1.92,2.25,5.27,4.46,5.34,6.77S214.38,47.4,211.26,51.32Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M185.86,38.13c3.08,4,6.59,6.68,6.2,8.52-.53,2.54-4,4.47-6.22,6.66-2-2.12-5.47-4.07-5.74-6.39C179.85,44.78,183,42.25,185.86,38.13Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M170,53.72c-4,3.1-6.7,6.62-8.53,6.23-2.57-.56-4.5-4-6.71-6.24,2.1-2,4-5.51,6.35-5.76S165.82,50.83,170,53.72Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M145.71,62.93c-4.14,3-6.62,6.24-8.79,6s-4.34-3.62-6.5-5.64c2.15-2.27,4-5.79,6.54-6.4C138.8,56.53,141.56,59.93,145.71,62.93Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M373.2,63.4c-4,2.9-6.83,6.34-8.76,5.91-2.56-.57-4.46-4.15-6.64-6.43,2.24-2,4.38-5.4,6.74-5.55S369.23,60.45,373.2,63.4Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M99.48,86.67c-3.91,3-6.31,6.23-8.54,6.11s-4.53-3.44-6.79-5.38c2.14-2.3,4-5.88,6.53-6.48C92.59,80.47,95.38,83.85,99.48,86.67Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M419.23,86.93c-4,3.17-6.38,6.46-8.56,6.36s-4.43-3.48-6.64-5.42c2.07-2.35,3.79-5.91,6.32-6.62C412.14,80.77,415.06,84.11,419.23,86.93Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M63.9,118.57c-4.35,2.8-7.19,6-9.12,5.52-2.5-.62-4.27-4.17-6.36-6.46,2.25-1.87,4.45-5.13,6.76-5.21S59.8,115.5,63.9,118.57Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M453.94,119.11c-4.2,2.92-6.74,6.06-8.91,5.83s-4.28-3.7-6.4-5.75c2.19-2.24,4.11-5.72,6.67-6.28C447.14,112.49,449.84,116,453.94,119.11Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M437.86,139.58c-4.14,2.81-6.66,5.87-8.86,5.65s-4.38-3.58-6.54-5.57c2.23-2.16,4.22-5.6,6.77-6.09C431.16,133.2,433.81,136.59,437.86,139.58Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M413.38,150.73c2.65,4.44,5.59,7.19,5.38,9.67-.18,2.13-4,3.95-6.14,5.91-2-2.35-5.36-4.52-5.71-7.1C406.7,157.23,410.18,154.75,413.38,150.73Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M134.75,229.67c-2.94-4.16-6.09-6.66-5.89-8.86s3.6-4.36,5.6-6.54c2.25,2.18,5.77,4.08,6.33,6.62C141.21,222.78,137.77,225.52,134.75,229.67Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M380.76,191.82c3,4.14,6.14,6.66,6.12,9.14,0,2.11-4.16,6.16-5.72,5.83-2.59-.55-5.84-3.66-6.39-6.22C374.38,198.67,377.77,195.93,380.76,191.82Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M298.38,42c-4.08,3.18-6.64,6.64-8.54,6.3-2.52-.44-4.51-3.84-6.73-6,2.05-2,3.92-5.44,6.2-5.74S294.06,39.25,298.38,42Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M315.38,56.21c-3.16-4-6.36-6.33-6.27-8.49s3.3-4.49,5.14-6.72c2.32,2,5.86,3.7,6.56,6.18C321.27,49,318.06,51.93,315.38,56.21Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M78.06,101.93c-4.29,2.69-6.92,5.65-9.08,5.34s-4.16-3.75-6.22-5.82c2.3-2.1,4.3-5.42,6.91-5.85C71.55,95.33,74.06,98.82,78.06,101.93Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M440.64,101.65c-4,3.08-6.35,6.33-8.52,6.2-2.34-.14-4.5-3.43-6.74-5.34,2.1-2.3,3.87-5.85,6.39-6.49C433.64,95.55,436.47,98.85,440.64,101.65Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M263.48,48.93c-2.93-4.12-6-6.58-5.84-8.74.21-2.33,3.52-4.37,5.48-6.54,2.22,2.17,5.67,4,6.24,6.59C269.78,42.08,266.38,44.8,263.48,48.93Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M396.75,74.64c-4.28,2.82-6.82,5.82-9,5.57s-4.23-3.62-6.32-5.62c2.22-2.14,4.18-5.5,6.72-6C390.06,68.2,392.64,71.57,396.75,74.64Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M87.12,150.08c2.8,4.34,6,7.17,5.49,9-.66,2.49-4.17,4.22-6.46,6.28-1.87-2.21-5.1-4.37-5.21-6.67S84,154.19,87.12,150.08Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M118.23,209c-2.68-4.28-5.64-6.91-5.33-9.06s3.76-4.14,5.84-6.19c2.09,2.28,5.41,4.36,5.86,6.94C124.92,202.58,121.38,205.1,118.23,209Z" transform="translate(0.05 0.01)" style="fill:{primary}"/><path d="M405.84,180.09c-4.08,3-6.45,6.19-8.6,6-2.34-.16-4.46-3.38-6.68-5.25,2.08-2.28,3.86-5.76,6.36-6.4C398.77,174,401.57,177.24,405.84,180.09Z" transform="translate(0.05 0.01)" style="fill:{primary}"/></svg>',
  "blow-feet-body": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 466.69"><circle cx="438.87" cy="72.31" r="61.13" style="fill:{secondary}"/><path d="M403.07,144.88a58.18,58.18,0,0,0-46.56,27.5v.33L297.94,270l-14.68-3.1L196.45,246a42.16,42.16,0,0,0-43.12,16L53,397.38a43.43,43.43,0,0,0,9,60.77c.48.35,1,.7,1.45,1,19,12.9,45.11,8.9,59-9.33l75.37-98.71L312.29,395.9c.34.11.8.34,1.24.45a57,57,0,0,0,16,3.45H336c6,0,14.67-2.45,14.67-2.45,1.56-.45,3.12-1,4.56-1.56.22-.11.32-.11.54-.22a56.46,56.46,0,0,0,28.64-25.3l73.36-134.38.34-.35c18.79-30.56,5.55-71.35-26.46-85.47a63,63,0,0,0-20.45-5.23C408.52,144.77,405.74,144.77,403.07,144.88Z" style="fill:{secondary}"/><polygon points="222.3 0 222.3 44.46 133.38 44.46 133.38 88.92 222.3 88.92 222.3 133.38 288.99 66.69 222.3 0" style="fill:{primary}"/><polygon points="44.46 122.26 44.46 200.07 0 200.07 66.69 266.76 133.38 200.07 88.92 200.07 88.92 122.26 44.46 122.26" style="fill:{primary}"/></svg>',
  "blow-feet": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 466.69"><circle cx="438.87" cy="72.31" r="61.13" style="fill:{secondary}"/><path d="M403.07,144.88a58.18,58.18,0,0,0-46.56,27.5v.33L297.94,270l-14.68-3.1L196.45,246a42.16,42.16,0,0,0-43.12,16L53,397.38a43.43,43.43,0,0,0,9,60.77c.48.35,1,.7,1.45,1,19,12.9,45.11,8.9,59-9.33l75.37-98.71L312.29,395.9c.34.11.8.34,1.24.45a57,57,0,0,0,16,3.45H336c6,0,14.67-2.45,14.67-2.45,1.56-.45,3.12-1,4.56-1.56.22-.11.32-.11.54-.22a56.46,56.46,0,0,0,28.64-25.3l73.36-134.38.34-.35c18.79-30.56,5.55-71.35-26.46-85.47a63,63,0,0,0-20.45-5.23C408.52,144.77,405.74,144.77,403.07,144.88Z" style="fill:{secondary}"/><polygon points="222.3 0 222.3 44.46 133.38 44.46 133.38 88.92 222.3 88.92 222.3 133.38 288.99 66.69 222.3 0" style="fill:#676b6d"/><polygon points="44.46 122.26 44.46 200.07 0 200.07 66.69 266.76 133.38 200.07 88.92 200.07 88.92 122.26 44.46 122.26" style="fill:{primary}"/></svg>',
  "blow-body": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 466.69"><circle cx="438.87" cy="72.31" r="61.13" style="fill:{secondary}"/><path d="M403.07,144.88a58.18,58.18,0,0,0-46.56,27.5v.33L297.94,270l-14.68-3.1L196.45,246a42.16,42.16,0,0,0-43.12,16L53,397.38a43.43,43.43,0,0,0,9,60.77c.48.35,1,.7,1.45,1,19,12.9,45.11,8.9,59-9.33l75.37-98.71L312.29,395.9c.34.11.8.34,1.24.45a57,57,0,0,0,16,3.45H336c6,0,14.67-2.45,14.67-2.45,1.56-.45,3.12-1,4.56-1.56.22-.11.32-.11.54-.22a56.46,56.46,0,0,0,28.64-25.3l73.36-134.38.34-.35c18.79-30.56,5.55-71.35-26.46-85.47a63,63,0,0,0-20.45-5.23C408.52,144.77,405.74,144.77,403.07,144.88Z" style="fill:{secondary}"/><polygon points="222.3 0 222.3 44.46 133.38 44.46 133.38 88.92 222.3 88.92 222.3 133.38 288.99 66.69 222.3 0" style="fill:{primary}"/><polygon points="44.46 122.26 44.46 200.07 0 200.07 66.69 266.76 133.38 200.07 88.92 200.07 88.92 122.26 44.46 122.26" style="fill:#676b6d"/></svg>',
  "blow-none": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 466.69"><circle cx="438.87" cy="72.31" r="61.13" style="fill:{secondary}"/><path d="M403.07,144.88a58.18,58.18,0,0,0-46.56,27.5v.33L297.94,270l-14.68-3.1L196.45,246a42.16,42.16,0,0,0-43.12,16L53,397.38a43.43,43.43,0,0,0,9,60.77c.48.35,1,.7,1.45,1,19,12.9,45.11,8.9,59-9.33l75.37-98.71L312.29,395.9c.34.11.8.34,1.24.45a57,57,0,0,0,16,3.45H336c6,0,14.67-2.45,14.67-2.45,1.56-.45,3.12-1,4.56-1.56.22-.11.32-.11.54-.22a56.46,56.46,0,0,0,28.64-25.3l73.36-134.38.34-.35c18.79-30.56,5.55-71.35-26.46-85.47a63,63,0,0,0-20.45-5.23C408.52,144.77,405.74,144.77,403.07,144.88Z" style="fill:{secondary}"/><polygon points="222.3 0 222.3 44.46 133.38 44.46 133.38 88.92 222.3 88.92 222.3 133.38 288.99 66.69 222.3 0" style="fill:#676b6d"/><polygon points="44.46 122.26 44.46 200.07 0 200.07 66.69 266.76 133.38 200.07 88.92 200.07 88.92 122.26 44.46 122.26" style="fill:#676b6d"/></svg>',
  "ass": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 467.5"><path d="M163.14,397.82c30.2,7.6,59,11.28,89,6.88-.66,3.64-.85,6.64-1.76,9.4-3,9.06-6.66,17.9-9.28,27a258,258,0,0,0-6.64,29.17c-.85,5.18,1.51,10,6.09,13.27,10.77,7.66,25.57,8.54,36.13.57a79.81,79.81,0,0,0,18.35-19c8.24-12.45,14.9-25.94,22.32-38.94.93-1.63,2.16-3.63,3.73-4.23,5.47-2.13,11.15-3.71,16.94-5.57.39,3.84.75,7.76,1.19,11.67,1.09,9.71,2.89,19.25,8.14,27.7,8.57,13.84,25,17.63,38.13,8.93,11.12-7.36,12.78-20.23,3.11-29.38-3.9-3.69-4.45-7.12-3.24-11.74,6.74-25.6,13.37-51.23,20.23-76.8.3-1.13,2.34-2.22,3.75-2.56,8.29-2,16.85-3,24.92-5.65a80.27,80.27,0,0,0,34.64-22.36c6.64,4.94,12.93,9.68,19.28,14.33,2.05,1.51,4.71,3.05,6.14-.17.52-1.17-1.13-4-2.54-5.19-5.94-4.88-12.16-9.41-18.47-14.22l3.75-5.54c1.55.67,2.74,1.2,3.95,1.7,6.37,2.66,12.67,5.52,19.18,7.82,1.62.57,3.9-.7,5.87-1.12a31.39,31.39,0,0,0-3.66-4.88c-1-.94-2.7-1.13-4.06-1.71l-18.14-7.75c.71-2,1.2-3.4,1.68-4.78.54-1.56,1.15-3.09,1.57-4.68,7.19-26.73,2-51.88-12-74.85-5.62-9.22-6.24-17.49-3.92-27,1.17-4.79,2.53-9.54,3.6-14.35,1.77-8,3.92-16,4.94-24.13,1.3-10.5-3.64-15.31-13.91-13-8.09,1.84-15.9,5.2-23.59,8.47-6.75,2.87-13.16,6.55-20.5,10.27,0-3.26.13-5.82,0-8.38-.54-9.52-.79-19.08-1.88-28.54-.85-7.34-3.27-8.88-10.53-8.71-8.19.18-15.31,3.56-22.11,7.69-12.54,7.62-22.94,17.72-32.24,28.89-6.79,8.16-12.91,16.88-19.34,25.37a4.89,4.89,0,0,1-.84-.39c-.67-.48-1.3-1-1.95-1.52-27-21.48-57.89-32.64-92.15-32.89-14.65-.11-29.38,3-44,5.28-15.72,2.42-26-2.45-32.79-17a57.82,57.82,0,0,1-4.77-14c-2.12-11.81-2.75-23.93-5.51-35.55-6.49-27.28-24.35-44.53-51-51.75-26.87-7.28-64.36,8-80.62,31.78C7,72.43,4.5,91.12,6.75,110.65c.78,6.82,3.13,13.18,8,18.2,6.22,6.36,13.91,9.08,22.51,6.69,8.32-2.3,10.13-9.84,11.06-17.13.89-7,.94-14.12,1.25-21.19a27.16,27.16,0,0,1,12.24-22C81.43,61.56,107.36,72.08,112.49,96,114.37,104.85,115,114,115.7,123c1.69,21.08,10,38,29.34,48.29a10.77,10.77,0,0,1,1.67,1.46c-1,1.08-1.75,2.09-2.65,3-23.21,22.69-39.33,49.84-48.91,80.63-12.81,41.21-12.49,83.06-3.55,125,6.25,29.27,16.8,56.76,35.14,80.8,6,7.92,13,15,22.2,19.21,9.66,4.44,19.54,2.06,26.12-6.24a21.57,21.57,0,0,0,4.35-18.2c-2.4-11.39-5.58-22.62-8.67-33.86C168.53,415,165.94,407.06,163.14,397.82Z" transform="translate(-6 -22.25)" style="fill:{primary}"/><path d="M163.14,397.82c2.8,9.24,5.39,17.17,7.6,25.19,3.09,11.24,6.27,22.47,8.67,33.86a21.57,21.57,0,0,1-4.35,18.2c-6.58,8.3-16.46,10.68-26.12,6.24-9.22-4.25-16.15-11.29-22.2-19.21-18.34-24-28.89-51.53-35.14-80.8-8.94-41.91-9.26-83.76,3.55-125,9.58-30.79,25.7-57.94,48.91-80.63.9-.89,1.69-1.9,2.65-3a10.77,10.77,0,0,0-1.67-1.46C125.69,161,117.39,144.05,115.7,123c-.72-9-1.33-18.12-3.21-26.93-5.13-24-31.06-34.48-50.64-20.85a27.16,27.16,0,0,0-12.24,22c-.31,7.07-.36,14.18-1.25,21.19-.93,7.29-2.74,14.83-11.06,17.13-8.6,2.39-16.29-.33-22.51-6.69-4.91-5-7.26-11.38-8-18.2C4.5,91.12,7,72.43,18.33,55.86,34.59,32.06,72.08,16.8,99,24.08c26.62,7.22,44.48,24.47,51,51.75,2.76,11.62,3.39,23.74,5.51,35.55a57.82,57.82,0,0,0,4.77,14c6.8,14.51,17.07,19.38,32.79,17,14.61-2.25,29.34-5.39,44-5.28,34.26.25,65.19,11.41,92.15,32.89.65.51,1.28,1,1.95,1.52a4.89,4.89,0,0,0,.84.39c6.43-8.49,12.55-17.21,19.34-25.37,9.3-11.17,19.7-21.27,32.24-28.89,6.8-4.13,13.92-7.51,22.11-7.69,7.26-.17,9.68,1.37,10.53,8.71,1.09,9.46,1.34,19,1.88,28.54.15,2.56,0,5.12,0,8.38,7.34-3.72,13.75-7.4,20.5-10.27,7.69-3.27,15.5-6.63,23.59-8.47,10.27-2.33,15.21,2.48,13.91,13-1,8.12-3.17,16.11-4.94,24.13-1.07,4.81-2.43,9.56-3.6,14.35-2.32,9.52-1.7,17.79,3.92,27,14,23,19.16,48.12,12,74.85-.42,1.59-1,3.12-1.57,4.68-.48,1.38-1,2.76-1.68,4.78l18.14,7.75c1.36.58,3.05.77,4.06,1.71a31.39,31.39,0,0,1,3.66,4.88c-2,.42-4.25,1.69-5.87,1.12-6.51-2.3-12.81-5.16-19.18-7.82-1.21-.5-2.4-1-3.95-1.7L473.25,311c6.31,4.81,12.53,9.34,18.47,14.22,1.41,1.16,3.06,4,2.54,5.19-1.43,3.22-4.09,1.68-6.14.17-6.35-4.65-12.64-9.39-19.28-14.33a80.27,80.27,0,0,1-34.64,22.36c-8.07,2.62-16.63,3.69-24.92,5.65-1.41.34-3.45,1.43-3.75,2.56C398.67,372.4,392,398,385.3,423.63c-1.21,4.62-.66,8.05,3.24,11.74,9.67,9.15,8,22-3.11,29.38-13.13,8.7-29.56,4.91-38.13-8.93-5.25-8.45-7.05-18-8.14-27.7-.44-3.91-.8-7.83-1.19-11.67-5.79,1.86-11.47,3.44-16.94,5.57-1.57.6-2.8,2.6-3.73,4.23-7.42,13-14.08,26.49-22.32,38.94a79.81,79.81,0,0,1-18.35,19c-10.56,8-25.36,7.09-36.13-.57-4.58-3.26-6.94-8.09-6.09-13.27a258,258,0,0,1,6.64-29.17c2.62-9.15,6.29-18,9.28-27,.91-2.76,1.1-5.76,1.76-9.4C222.15,409.1,193.34,405.42,163.14,397.82Zm243.2-60.24c10.47.18,19.52-2.76,28.43-6.21,33-12.78,49.79-42.43,44-77.21-6.43-38.51-30.89-63.14-62.86-82.11a8.19,8.19,0,0,1-3.71-5,151.13,151.13,0,0,1-1.1-16.23c-.35-9.7-.55-19.41-.83-29.12-.1-3.61-1.73-5.85-5.53-4.69-6.06,1.85-12.63,3.1-17.86,6.39-20.17,12.71-35.05,30.68-47.61,50.68a4.58,4.58,0,0,0,.36,4.1c8.85,12.24,18.84,23.77,26.56,36.67,8.06,13.48,14.08,28.19,20.67,42.51.64,1.38-1,3.8-1.55,5.74-1.56-1.27-3.79-2.22-4.57-3.86-4.21-8.9-7.49-18.3-12.17-26.93-10.59-19.53-21.18-39.15-38.9-53.57-35.24-28.69-74.9-40.91-120.16-32.56Q199.78,148,190,149.4c-15.59,2.25-30.23-6.2-36.37-22.54-3.85-10.23-5.91-21.18-8.17-31.93-1.68-8-1-16.77-3.78-24.27C130.57,41.14,100.22,22,68.12,31.19,29.78,42.17,11,65.86,13,103.49c.48,8.66,2.35,17.18,9.87,22.83,9.17,6.91,17.29,3.51,18.62-7.79.77-6.53.94-13.13,1.2-19.71C43.19,86.5,48,76.49,58.35,69.54,81.57,54,112,65.46,118.47,92.79c2.54,10.65,3.19,21.79,4.21,32.75,1.71,18.58,10.36,32.53,27.19,40.64,18.42,8.86,37.7,11.13,57.61,5.39,2.32-.67,5.1-2,6.25,1.38s-1.81,4.09-4.12,4.92a48.3,48.3,0,0,1-4.74,1.34c-15.83,3.93-31.4,2.11-46.77-2.42-3-.9-5-.57-7.42,1.69a178.42,178.42,0,0,0-47.44,74.71C85.71,306.44,89,359.61,107.47,412.06c6.88,19.53,16,38,30.79,52.93a51.2,51.2,0,0,0,16.16,10.8c7.28,3.06,15.84-1.94,17.73-9.67a27.7,27.7,0,0,0,.26-12.15c-1.8-8.17-4.63-16.1-6.81-24.19-3-10.92-5.62-21.93-8.62-32.84A8.35,8.35,0,0,0,153.9,393c-5.1-3.87-10.46-7.41-15.51-11.35-2-1.52-4.56-3.7-1.77-6.52,2.57-2.59,4.35-.09,6.18,1.55,9.06,8.17,19.2,14.43,31.29,16.91,8.21,1.69,16.45,3.35,24.76,4.44,16.53,2.18,33.1,2.86,49.73.56,4.16-.58,5.95-2.07,6.2-6.32q.71-12.07,2.26-24.08c.21-1.57,2.24-2.9,3.44-4.34,1,1.57,3,3.18,2.92,4.69-1.33,25.75-4.74,51-15.4,75-3.32,7.44-5.22,15.56-7.17,23.52-1.1,4.48,0,8.86,4.39,11.67,9.51,6.05,21.78,5.74,30.45-1.49,4.25-3.55,8.44-7.6,11.36-12.23,13.49-21.44,27.07-43,35.62-66.94,9-25.16,15.11-50.86,8.06-77.84-.33-1.25,1.12-3,1.74-4.48,1.51.88,4.06,1.51,4.35,2.7,1.45,5.88,2.93,11.88,3.25,17.89,1.32,25.34-5,49.26-14.23,72.58-.63,1.6-1.2,3.22-2.13,5.69,23.12-9.76,39.78-24.84,50.11-46.65,1.19-2.51,1.55-5.44,2.9-7.83.84-1.49,2.81-2.34,4.28-3.48.62,1.77,1.76,3.55,1.72,5.31,0,2.06-1,4.14-1.75,6.13-6.17,16-16.95,28.56-30.4,38.73-4.67,3.52-6.75,6.92-5.51,12.61,2.09,9.59,3.24,19.43,6.07,28.78,2.3,7.62,8.35,12.5,16.4,14.24,7.83,1.69,16.73-2,19.68-8.07,2.67-5.49.9-11.21-6.12-17.13-3.36-2.83-3.78-6-2.9-9.68,3.91-16.48,7.34-33.09,12-49.35,6.82-23.73,12.27-47.48,9.46-72.43-.31-2.76-1.91-7.31,2.64-7.71,5.05-.43,3.9,4.49,4,7.4C406.48,315.93,406.34,326.43,406.34,337.58ZM459.09,197.8c.47-2.81.72-5,1.23-7.21,2.89-12.48,6.09-24.9,8.71-37.44,2.14-10.28-.21-12.66-10-8.8-13.12,5.15-25.74,11.57-38.5,17.58-3.65,1.72-2.43,3.33.28,5.2,8,5.51,15.93,11,23.53,17C449.43,188.13,453.9,192.93,459.09,197.8Z" transform="translate(-6 -22.25)"/><path d="M406.34,337.58c0-11.15.14-21.65-.1-32.14-.06-2.91,1.09-7.83-4-7.4-4.55.4-2.95,4.95-2.64,7.71,2.81,24.95-2.64,48.7-9.46,72.43-4.67,16.26-8.1,32.87-12,49.35-.88,3.69-.46,6.85,2.9,9.68,7,5.92,8.79,11.64,6.12,17.13-2.95,6.07-11.85,9.76-19.68,8.07-8.05-1.74-14.1-6.62-16.4-14.24-2.83-9.35-4-19.19-6.07-28.78-1.24-5.69.84-9.09,5.51-12.61,13.45-10.17,24.23-22.73,30.4-38.73.77-2,1.71-4.07,1.75-6.13,0-1.76-1.1-3.54-1.72-5.31-1.47,1.14-3.44,2-4.28,3.48-1.35,2.39-1.71,5.32-2.9,7.83-10.33,21.81-27,36.89-50.11,46.65.93-2.47,1.5-4.09,2.13-5.69,9.22-23.32,15.55-47.24,14.23-72.58-.32-6-1.8-12-3.25-17.89-.29-1.19-2.84-1.82-4.35-2.7-.62,1.5-2.07,3.23-1.74,4.48,7.05,27,.92,52.68-8.06,77.84C314.1,422,300.52,443.53,287,465c-2.92,4.63-7.11,8.68-11.36,12.23-8.67,7.23-20.94,7.54-30.45,1.49-4.42-2.81-5.49-7.19-4.39-11.67,1.95-8,3.85-16.08,7.17-23.52,10.66-23.92,14.07-49.21,15.4-75,.08-1.51-1.9-3.12-2.92-4.69-1.2,1.44-3.23,2.77-3.44,4.34q-1.56,12-2.26,24.08c-.25,4.25-2,5.74-6.2,6.32-16.63,2.3-33.2,1.62-49.73-.56-8.31-1.09-16.55-2.75-24.76-4.44-12.09-2.48-22.23-8.74-31.29-16.91-1.83-1.64-3.61-4.14-6.18-1.55-2.79,2.82-.19,5,1.77,6.52,5.05,3.94,10.41,7.48,15.51,11.35a8.35,8.35,0,0,1,3.08,3.94c3,10.91,5.66,21.92,8.62,32.84,2.18,8.09,5,16,6.81,24.19a27.7,27.7,0,0,1-.26,12.15c-1.89,7.73-10.45,12.73-17.73,9.67A51.2,51.2,0,0,1,138.26,465c-14.78-14.89-23.91-33.4-30.79-52.93C89,359.61,85.71,306.44,103.24,253.19a178.42,178.42,0,0,1,47.44-74.71c2.39-2.26,4.38-2.59,7.42-1.69,15.37,4.53,30.94,6.35,46.77,2.42a48.3,48.3,0,0,0,4.74-1.34c2.31-.83,5.26-1.53,4.12-4.92s-3.93-2-6.25-1.38c-19.91,5.74-39.19,3.47-57.61-5.39-16.83-8.11-25.48-22.06-27.19-40.64-1-11-1.67-22.1-4.21-32.75C112,65.46,81.57,54,58.35,69.54,48,76.49,43.19,86.5,42.71,98.82c-.26,6.58-.43,13.18-1.2,19.71-1.33,11.3-9.45,14.7-18.62,7.79-7.52-5.65-9.39-14.17-9.87-22.83C11,65.86,29.78,42.17,68.12,31.19c32.1-9.18,62.45,10,73.57,39.47,2.82,7.5,2.1,16.26,3.78,24.27,2.26,10.75,4.32,21.7,8.17,31.93,6.14,16.34,20.78,24.79,36.37,22.54q9.78-1.41,19.49-3.21c45.26-8.35,84.92,3.87,120.16,32.56,17.72,14.42,28.31,34,38.9,53.57,4.68,8.63,8,18,12.17,26.93.78,1.64,3,2.59,4.57,3.86.57-1.94,2.19-4.36,1.55-5.74-6.59-14.32-12.61-29-20.67-42.51-7.72-12.9-17.71-24.43-26.56-36.67a4.58,4.58,0,0,1-.36-4.1c12.56-20,27.44-38,47.61-50.68,5.23-3.29,11.8-4.54,17.86-6.39,3.8-1.16,5.43,1.08,5.53,4.69.28,9.71.48,19.42.83,29.12a151.13,151.13,0,0,0,1.1,16.23,8.19,8.19,0,0,0,3.71,5c32,19,56.43,43.6,62.86,82.11,5.8,34.78-11,64.43-44,77.21C425.86,334.82,416.81,337.76,406.34,337.58Zm-214-112.45c-1.23-2.23-1.89-4.22-3.2-5.58s-3.73-3.42-5-3c-3.3,1.07-2,3.89-.87,6.14,1.24,2.47,2.65,4.86,4.14,7.55-3.69,1.57-7.29,2.8-10.53,4.65-1.13.65-1.37,2.85-2,4.35,1.51.52,3.15,1.71,4.5,1.44,2.62-.53,5.09-1.88,8.27-3.15-.86,3.73-2,6.71-2.09,9.73-.08,1.63,1.5,3.34,2.33,5,1.33-1.15,3.25-2,3.86-3.49,1.21-2.89,1.7-6.09,2.64-9.75,3.72,3.54,6.8,6.47,9.87,9.41,1.85,1.78,4.1,3.79,6.12,1.05.75-1-.28-4.3-1.5-5.63-2.91-3.17-6.42-5.8-9.69-8.66l1.12-1.62A106.54,106.54,0,0,0,212,232.51c1.66-.31,3-2.11,4.53-3.23-1.56-1.1-3-3-4.67-3.13-3.7-.32-7.47.23-12.19.47,1.81-2.83,3.53-4.85,4.45-7.18.59-1.49,0-3.45,0-5.19-1.71.41-4,.27-5,1.35C196.65,218.24,194.88,221.43,192.36,225.13Zm241,50.36c6-.1,9.62-3.55,8.84-8-1.4-8-14.43-14-21.32-9.88-3.59,2.14-4.62,5.08-2.34,8.68C422,271.9,427.11,275.14,433.31,275.49Zm-34.5-45.09c0-5.08-3.68-9.49-8-9.64-4.58-.15-8.35,4.23-8.35,9.71,0,5.26,3.49,9.47,7.94,9.61C395,240.22,398.83,235.85,398.81,230.4ZM467,255c0-5.21-3.56-9.46-8-9.45s-8.11,4.47-8,9.5,3.65,9.06,7.83,9.16C463.36,264.31,467,260.21,467,255Z" transform="translate(-6 -22.25)" style="fill:{primary}"/><path d="M459.09,197.8c-5.19-4.87-9.66-9.67-14.76-13.67-7.6-6-15.57-11.49-23.53-17-2.71-1.87-3.93-3.48-.28-5.2,12.76-6,25.38-12.43,38.5-17.58,9.8-3.86,12.15-1.48,10,8.8-2.62,12.54-5.82,25-8.71,37.44C459.81,192.76,459.56,195,459.09,197.8Z" transform="translate(-6 -22.25)" style="fill:{primary}"/><path d="M192.36,225.13c2.52-3.7,4.29-6.89,6.68-9.53,1-1.08,3.29-.94,5-1.35.05,1.74.63,3.7,0,5.19-.92,2.33-2.64,4.35-4.45,7.18,4.72-.24,8.49-.79,12.19-.47,1.63.14,3.11,2,4.67,3.13-1.5,1.12-2.87,2.92-4.53,3.23a106.54,106.54,0,0,1-11.61,1.05l-1.12,1.62c3.27,2.86,6.78,5.49,9.69,8.66,1.22,1.33,2.25,4.61,1.5,5.63-2,2.74-4.27.73-6.12-1.05-3.07-2.94-6.15-5.87-9.87-9.41-.94,3.66-1.43,6.86-2.64,9.75-.61,1.45-2.53,2.34-3.86,3.49-.83-1.67-2.41-3.38-2.33-5,.13-3,1.23-6,2.09-9.73-3.18,1.27-5.65,2.62-8.27,3.15-1.35.27-3-.92-4.5-1.44.64-1.5.88-3.7,2-4.35,3.24-1.85,6.84-3.08,10.53-4.65-1.49-2.69-2.9-5.08-4.14-7.55-1.13-2.25-2.43-5.07.87-6.14,1.24-.4,3.62,1.61,5,3S191.13,222.9,192.36,225.13Z" transform="translate(-6 -22.25)"/><path d="M433.31,275.49c-6.2-.35-11.27-3.59-14.82-9.2-2.28-3.6-1.25-6.54,2.34-8.68,6.89-4.12,19.92,1.91,21.32,9.88C442.93,271.94,439.35,275.39,433.31,275.49Z" transform="translate(-6 -22.25)"/><path d="M398.81,230.4c0,5.45-3.78,9.82-8.41,9.68-4.45-.14-7.93-4.35-7.94-9.61,0-5.48,3.77-9.86,8.35-9.71C395.13,220.91,398.79,225.32,398.81,230.4Z" transform="translate(-6 -22.25)"/><path d="M467,255c0,5.23-3.66,9.33-8.17,9.21-4.18-.1-7.73-4.26-7.83-9.16s3.66-9.5,8-9.5S467.05,249.77,467,255Z" transform="translate(-6 -22.25)"/></svg>',
  "steering-wheel": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 500"><path d="M250,266.22a27,27,0,1,0,27,27A27,27,0,0,0,250,266.22Zm196.27-76c-66.84,44.72-132.61,59.85-190.8,59.85-102.78,0-181.91-46.87-201.78-59.8a206,206,0,0,0-9.8,57c64.24,0,113,18.87,145,56C239.36,362,231.08,445.7,229.38,459.11q10.17,1,20.63,1a208.37,208.37,0,0,0,24.84-1.55c-2.11-19.35-7.11-97.47,40.78-153.11,31.23-36.29,78.6-55,140.62-55.86a204.85,204.85,0,0,0-10-59.38ZM133.48,254,68.15,225.87l3.41-8L136.88,246ZM250,328.9a35.67,35.67,0,1,1,35.67-35.68A35.67,35.67,0,0,1,250,328.9ZM371.06,254l-3.43-8L433,217.92l3.42,8Z" fill="{primary}" fill-rule="evenodd"/><path d="M250,0C112.16,0,0,112.15,0,250S112.16,500,250,500,500,387.84,500,250,387.84,0,250,0Zm0,468.78c-118.55,0-215-96.43-215-215s96.46-215,215-215,215,96.44,215,215S368.54,468.78,250,468.78Z" fill="{secondary}"/></svg>',
  "engine-statistic": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 500"><path d="M456.59,202.81,309.19,55.41a4.86,4.86,0,0,0-6.85,0l-96,96a4.86,4.86,0,0,0,0,6.85l52,52-53.18,53.18C180.47,288,127.26,328.94,93.59,295.27a7,7,0,0,0-9.94,0L46.89,332l6.91,6.91-2.46,2.46-6.91-6.91L8.05,370.87a7.06,7.06,0,0,0,0,9.94l14.72,14.72a84.7,84.7,0,0,0,93.7,93.7L131.19,504a7.06,7.06,0,0,0,9.94,0l36.39-36.38-6.88-6.88,2.46-2.46,6.88,6.88,36.76-36.76a7,7,0,0,0,0-9.94c-33.67-33.67,7.23-86.89,31.88-111.54l53.19-53.18,52,51.95a4.85,4.85,0,0,0,6.85,0l96-96A4.86,4.86,0,0,0,456.59,202.81ZM142.06,429.93a42.42,42.42,0,1,1,0-60A42.42,42.42,0,0,1,142.06,429.93ZM337,215.26A28.47,28.47,0,1,1,337,175,28.46,28.46,0,0,1,337,215.26Z" transform="translate(-6 -6)" fill="{secondary}" fill-rule="evenodd"/><path d="M141.13,504h-9.94A7.06,7.06,0,0,0,141.13,504ZM504.59,154.82,357.18,7.41a4.86,4.86,0,0,0-6.85,0L336.62,21.13a4.86,4.86,0,0,0,0,6.85L484,175.38a4.85,4.85,0,0,0,6.85,0l13.72-13.71A4.86,4.86,0,0,0,504.59,154.82Zm-174.83-120a4.85,4.85,0,0,0-6.85,0l-6.86,6.85a4.86,4.86,0,0,0,0,6.86L463.45,196a4.86,4.86,0,0,0,6.85,0l6.86-6.86a4.85,4.85,0,0,0,0-6.85Z" transform="translate(-6 -6)" fill="{primary}" fill-rule="evenodd"/></svg>',
  "bose": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 500.02"><path d="M500,250A249.92,249.92,0,0,0,440.91,88.71a34.71,34.71,0,0,0-50.61-45.6,249.78,249.78,0,0,0-283.37,1.94A34.68,34.68,0,0,0,56.26,92a249.89,249.89,0,0,0,4.81,321.64A34.71,34.71,0,1,0,112.77,459a249.92,249.92,0,0,0,270.94,2.22,34.7,34.7,0,1,0,54.86-42.51c-.62-.8-1.28-1.57-2-2.32A249.39,249.39,0,0,0,500,250ZM416.26,54.41A11.55,11.55,0,1,1,404.71,66a11.55,11.55,0,0,1,11.55-11.59Zm-334.82,0A11.55,11.55,0,1,1,69.89,66,11.55,11.55,0,0,1,81.44,54.41ZM79.81,457.12a11.55,11.55,0,1,1,11.54-11.56h0A11.56,11.56,0,0,1,79.81,457.12Zm334.81,0a11.55,11.55,0,1,1,11.55-11.55h0A11.55,11.55,0,0,1,414.62,457.12ZM250,463.76C132,463.76,36.24,368.05,36.24,250S132,36.24,250,36.24,463.77,131.92,463.77,250,368.05,463.76,250,463.76ZM58.08,225.58H50.42a3.78,3.78,0,0,0-3.56,3.95v19.62a3.77,3.77,0,0,0,3.56,3.93h7.66a3.76,3.76,0,0,0,3.55-3.93V229.53A3.78,3.78,0,0,0,58.08,225.58ZM258.59,47H239a3.79,3.79,0,0,0-4,3.55v7.71a3.77,3.77,0,0,0,4,3.53h19.64a3.77,3.77,0,0,0,4-3.53V50.58a3.79,3.79,0,0,0-4-3.59Zm0,391.16H238.94A3.79,3.79,0,0,0,235,441.7v7.69a3.76,3.76,0,0,0,3.95,3.53h19.63a3.76,3.76,0,0,0,3.95-3.53V441.7a3.78,3.78,0,0,0-3.95-3.51Zm-153.07-312a3.77,3.77,0,0,0,5.29-.28l13-13v-.07l.83-.81a3.78,3.78,0,0,0,.28-5.29l-5.42-5.42a3.76,3.76,0,0,0-5.29.26l-13,13-.89.88a3.77,3.77,0,0,0-.27,5.29ZM392,373.8a3.8,3.8,0,0,0-5.31.27l-13,13-.89.88a3.76,3.76,0,0,0-.29,5.27l5.45,5.43a3.77,3.77,0,0,0,5.29-.27l13-13h0l.86-.84a3.76,3.76,0,0,0,.26-5.29ZM123.8,387.13h0l-13-13a3.77,3.77,0,0,0-5.29-.27l-5.42,5.43a3.75,3.75,0,0,0,.26,5.27l13,13,.88.88a3.79,3.79,0,0,0,5.3.27l5.41-5.43a3.76,3.76,0,0,0-.28-5.27ZM373.72,112.89h0l13,13a3.78,3.78,0,0,0,5.3.28l5.4-5.44a3.73,3.73,0,0,0-.27-5.27l-.85-.85h0l-13-13a3.78,3.78,0,0,0-5.31-.26l-5.43,5.42a3.79,3.79,0,0,0,.28,5.29Zm75.53,112.69h-7.69a3.77,3.77,0,0,0-3.53,3.95v19.62a3.75,3.75,0,0,0,3.53,3.93h7.69a3.76,3.76,0,0,0,3.54-3.93V229.53A3.79,3.79,0,0,0,449.25,225.58Z" transform="translate(0 0)" fill="{secondary}" fill-rule="evenodd"/><path d="M250,73.81A176.19,176.19,0,1,0,426.17,250v0A176.19,176.19,0,0,0,250,73.81Zm0,268.87A92.68,92.68,0,1,1,342.68,250h0A92.79,92.79,0,0,1,250,342.68Z" transform="translate(0 0)" fill="{primary}"/></svg>',
  "volume-r": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 20.68 19.57"><defs><style>.cls-1,.cls-2{fill:{primary};}.cls-2{font-size:14px;font-family:"Roboto", MyriadPro-Regular, Myriad Pro;}</style></defs><path class="cls-1" d="M2,9v6H6l5,5V4L6,9Z" transform="translate(-2 -2.22)"/><text class="cls-2" transform="translate(11 15.07)">R</text></svg>',
  "volume-l": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 20.68 19.57"><defs><style>.cls-1,.cls-2{fill:{primary};}.cls-2{font-size:14px;font-family:"Roboto", MyriadPro-Regular, Myriad Pro;}</style></defs><path class="cls-1" d="M22.68,15V9h-4l-5-5V20l5-5Z" transform="translate(-3 -2.22)"/><text class="cls-2" transform="translate(0 15.07)">L</text></svg>',
  "volume-fade-f": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 20.68 19.57"><defs><style>.cls-1,.cls-2{fill:{primary};}.cls-2{font-size:14px;font-family:"Roboto", MyriadPro-Regular, Myriad Pro;}</style></defs><path class="cls-1" d="M2,9v6H6l5,5V4L6,9Z" transform="translate(-2 -2.22)"/><text class="cls-2" transform="translate(11 15.07)">F</text></svg>',
  "volume-fade-r": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 20.68 19.57"><defs><style>.cls-1,.cls-2{fill:{primary};}.cls-2{font-size:14px;font-family:"Roboto", MyriadPro-Regular, Myriad Pro;}</style></defs><path class="cls-1" d="M22.68,15V9h-4l-5-5V20l5-5Z" transform="translate(-3 -2.22)"/><text class="cls-2" transform="translate(0 15.07)">R</text></svg>',
  "volume-setting": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 97.51 97.52"><g id="uuid-ed5e966f-00a1-478d-a6b3-f625b0ad64c0"><path d="m97.51,48.76c0-11.51-4.09-22.67-11.52-31.46.63-1.05.97-2.25.97-3.48,0-3.73-3.04-6.77-6.78-6.77-1.47,0-2.89.48-4.06,1.36C68.02,2.91,58.57,0,48.76,0s-19.69,3.03-27.9,8.79c-1.24-1.12-2.83-1.74-4.52-1.74-3.74,0-6.77,3.04-6.77,6.77,0,1.5.5,2.94,1.41,4.13C3.89,26.62,0,37.54,0,48.76c0,11.74,4.23,23.05,11.91,31.92-1.48,1.28-2.35,3.15-2.35,5.12,0,3.73,3.04,6.77,6.77,6.77,2.29,0,4.41-1.15,5.66-3.05,7.95,5.24,17.2,8,26.76,8s18.27-2.62,26.08-7.57c1.28,1.65,3.23,2.62,5.34,2.62,3.74,0,6.78-3.04,6.78-6.77,0-1.7-.65-3.34-1.8-4.59,7.98-8.94,12.36-20.44,12.36-32.45Zm-16.33-38.15c1.24,0,2.25,1.01,2.25,2.25s-1.01,2.25-2.25,2.25-2.25-1.01-2.25-2.25,1.01-2.25,2.25-2.25Zm-65.3,0c1.24,0,2.25,1.01,2.25,2.25s-1.01,2.25-2.25,2.25-2.25-1.01-2.25-2.25,1.01-2.25,2.25-2.25Zm-.32,78.54c-1.24,0-2.25-1.01-2.25-2.25s1.01-2.25,2.25-2.25,2.25,1.01,2.25,2.25-1.01,2.25-2.25,2.25Zm65.3,0c-1.24,0-2.25-1.01-2.25-2.25s1.01-2.25,2.25-2.25,2.25,1.01,2.25,2.25-1.01,2.25-2.25,2.25Zm-32.11,1.29c-23.02,0-41.69-18.67-41.69-41.69S25.73,7.07,48.76,7.07s41.69,18.66,41.69,41.69-18.67,41.69-41.69,41.69ZM11.33,44h-1.5c-.38,0-.69.35-.69.77v3.83c0,.42.31.77.69.77h1.5c.38,0,.69-.34.69-.77v-3.83c0-.42-.31-.77-.69-.77ZM50.43,9.17h-3.83c-.42,0-.77.31-.77.69v1.5c0,.38.35.69.77.69h3.83c.42,0,.77-.31.77-.69v-1.5c0-.38-.35-.69-.77-.69Zm0,76.29h-3.83c-.42,0-.77.32-.77.69v1.5c0,.38.35.69.77.69h3.83c.42,0,.77-.31.77-.69v-1.5c0-.38-.35-.69-.77-.69ZM20.58,24.61c.27.27.73.25,1.03-.05l2.54-2.53s0,0,0-.01l.16-.16c.3-.3.32-.76.06-1.03l-1.06-1.06c-.27-.27-.73-.25-1.03.05l-2.53,2.54-.17.17c-.3.3-.32.76-.05,1.03l1.06,1.06Zm55.88,48.29c-.27-.27-.73-.24-1.03.05l-2.53,2.54-.17.17c-.3.3-.32.76-.06,1.03l1.06,1.06c.27.27.73.25,1.03-.05l2.53-2.53s0,0,0,0l.17-.16c.3-.3.32-.76.05-1.03l-1.05-1.06Zm-52.31,2.6s0,0,0,0l-2.54-2.54c-.3-.3-.77-.32-1.03-.05l-1.06,1.06c-.27.27-.25.73.05,1.03l2.54,2.54.17.17c.3.3.77.32,1.03.05l1.06-1.06c.26-.27.24-.73-.06-1.03l-.16-.16Zm48.74-53.49h0s2.54,2.54,2.54,2.54c.3.3.77.32,1.03.05l1.05-1.06c.27-.26.25-.73-.05-1.03l-.17-.17s0,0,0,0l-2.53-2.54c-.3-.3-.77-.32-1.03-.05l-1.06,1.06c-.27.27-.24.73.05,1.03l.17.17Zm14.73,21.98h-1.5c-.38,0-.69.35-.69.77v3.83c0,.42.31.77.69.77h1.5c.37,0,.69-.34.69-.77v-3.83c0-.42-.31-.77-.69-.77Z" style="fill:{secondary}; fill-rule:evenodd;"/></g><g id="uuid-4f4fd268-9ac0-44e5-bdcc-a6fc12268a61"><path d="m78.74,44.38c-.33-2.27-.93-4.51-1.77-6.67-.31-.8-1.44-1.16-2.27-.94-2.68.72-5.48-.22-7.14-2.39-1.69-2.22-1.81-5.31-.3-7.68.47-.74.29-1.73-.41-2.26-1.84-1.38-3.82-2.54-5.89-3.45-.81-.36-1.77-.02-2.18.78-1.23,2.4-4.17,3.96-6.86,3.6-2.8-.39-5.08-2.52-5.66-5.3-.18-.88-1.01-1.46-1.9-1.33-1.62.24-3.21.61-4.76,1.1-.62.2-1.23.41-1.83.64-.55.22-.93.7-1.03,1.25-.05.27-.05.54.03.82.82,2.69-.11,5.63-2.33,7.32-2.13,1.62-5.43,1.74-7.69.29-.74-.48-1.73-.3-2.26.41-1.38,1.85-2.56,3.85-3.48,5.95-.21.48-.18,1.01.05,1.45.16.3.4.56.72.73,2.53,1.3,3.98,4.06,3.6,6.87-.36,2.68-2.45,4.9-5.31,5.67-.94.22-1.43,1.02-1.31,1.89.21,1.44.53,2.86.95,4.26.24.81.52,1.61.83,2.4.31.8,1.47,1.15,2.31.93,2.53-.75,5.4.18,7.1,2.4.45.59.79,1.25,1.01,1.94.62,1.89.4,4.01-.71,5.75-.47.74-.29,1.73.41,2.25.38.28.76.55,1.15.82,1.5,1.02,3.09,1.9,4.73,2.63.82.36,1.77.02,2.18-.77.6-1.17,1.61-2.14,2.79-2.79,1.25-.68,2.69-1,4.06-.81,2.81.38,5.08,2.51,5.66,5.3.13.64.62,1.12,1.21,1.28.22.06.45.08.68.04.09-.01.18-.03.27-.04,1.06-.17,2.12-.39,3.16-.66.83-.22,1.65-.48,2.46-.77.24-.09.47-.17.71-.26.82-.32,1.26-1.22,1-2.07-.83-2.69.11-5.63,2.33-7.32,2.14-1.63,5.44-1.74,7.69-.29.75.48,1.72.3,2.26-.41,1.38-1.84,2.55-3.85,3.48-5.95.36-.82.02-1.77-.77-2.18-2.53-1.3-3.98-4.06-3.6-6.87.36-2.64,2.34-4.88,4.92-5.58l.36-.09c.86-.16,1.46-1.01,1.33-1.9Zm-13.18,9.16l-3.98-2.3-5.39-3.12c.2-1.41.11-2.85-.27-4.26-.74-2.77-2.51-5.08-4.99-6.51-1.11-.64-2.31-1.07-3.53-1.28-1.51-.26-3.07-.2-4.59.21-.71.19-1.39.45-2.05.78-.2.1-.39.2-.58.32-.36.21-.59.62-.59,1.03,0,.43.23.8.62,1.03,0,0,4.63,2.7,6.18,3.6.16.09.24.4.26.51v.08c.04.16.44,3.13.41,3.72-.02.03-.04.06-.06.1-.02.04-.04.07-.06.1-.57.37-2.14,1.05-3.47,1.53h0s-.06.02-.06.02c-.01,0-.03.01-.06.02-.15.04-.38.06-.62-.09-.83-.48-6.05-3.48-6.05-3.48-.4-.23-.74-.21-.95-.15-.5.13-.85.62-.85,1.17,0,3.83,2.05,7.4,5.36,9.32,2.48,1.43,5.36,1.81,8.13,1.07,1.41-.38,2.7-1.03,3.82-1.9l9.41,5.44v.1c-2.16,2.35-4.99,4.14-8.3,5.02-9.32,2.5-18.9-3.04-21.4-12.37-1.54-5.75-.03-11.59,3.54-15.82,2.22-2.63,5.23-4.63,8.81-5.59.24-.07.49-.12.73-.18,1.14-.25,2.29-.39,3.42-.41,1.2-.03,2.38.07,3.53.28,3.89.72,7.43,2.75,10.03,5.73,1.69,1.94,2.98,4.29,3.69,6.95.85,3.17.77,6.36-.07,9.3Z" style="fill:{primary}; fill-rule:evenodd;"/></g></svg>',
  "door": '<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 97.52 91.97"><g id="uuid-bb2e7cca-78f0-4a3f-b687-8d8251cce61f"><path d="m93.14,40.64s-7.47-8.08-17.32-16.57C62.61,12.67,46.01,0,46.01,0H0l.45,7.41,5.61,33.68.45,50.88h86.86s4.21-13.56,4.15-26.19c-.06-12.85-4.38-25.15-4.38-25.15Zm-53.86,8.96h-10.33c-.63,0-1.14.62-1.14,1.39s.51,1.39,1.14,1.39h10.3c-.12.73-.74,1.28-1.5,1.28h-15.35c-.84,0-1.53-.68-1.53-1.53v-2.56c0-.84.68-1.53,1.53-1.53h15.35c.84,0,1.53.68,1.53,1.53v.02Zm26.7-15.07c-1.44,2.36-.44,6.12-.44,6.12l-51.62.67L6.51,5.61l38.38-.22,26.26,26.04s-3.8.84-5.17,3.09Zm-41.67,14.85c-.83,0-1.51.68-1.51,1.51s.68,1.51,1.51,1.51,1.51-.68,1.51-1.51-.68-1.51-1.51-1.51Z" style="fill:{primary}; fill-rule:evenodd;"/></g></svg>',
  "service": '<svg id="a" xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 439.84 500"><g id="b"><path d="m133.44,107.06c-21.41-.88-40.35-11.14-51.71-29.82-2.38,11.94-11.59,55.6-23.02,109.49,18.81,37.29,65.68,32.62,67.92,32.79,4.75.37,7.05,4.17,7.23,8.33.33,7.88-13.54,6.84-9.32,6.61-10.99.62-27.58.86-59.95-16.83-4.2-2.29-7.18-6.27-10.31-10.05-2.7,12.7-5.48,25.79-8.3,39.01,4.86,6.59,17.23,20.2,39.43,25.23,20.52,4.65,42.04,3.51,64.01-1.78,17.72-4.26,35.51-9.98,53.63-15.36,4.71-1.4,9.18-2.31,12.46-7.57,6.02-9.65,12.52-19.2,19.17-28.85,1.67-2.42,4.21-5.23,6.64-6.15,22.44-8.49,45.43-17.33,68.95-28.43,3.76-1.78,4.7-.41,5.74,1.83,2.95,6.34,5.8,12.8,8.67,19.3,1.61,3.65,3.2,7.34,4.77,10.99-1.21,1.03-1.66,1.58-2.14,1.8-23.1,10.09-45.63,18.78-67.76,26.52-4.17,1.46-7.47,3.16-9.95,7.7-14.81,27.2-14.44,20.44-6.99,33.59.75,1.32,3.23,2.51,4.69,2.06,11.52-3.48,23.08-7.58,34.79-11.64,11.69-4.06,23.5-8.19,36.64-13.13-8.31,15.77-14.96,26.01-27.27,42.53-9.99,13.39-26.08,15.55-24.54,15.08-17.37,5.28-34.52,10.26-51.48,15.06-3.14.89-5.05.22-6.38-3.01-3.78-9.16-7.91-18.1-12.18-26.88-.71-1.47-2.94-3.11-4.35-2.83-5.96,1.18-11.85,3.11-17.74,4.59-19.45,4.88-38.43,11.06-57.67,13.85-35.83,5.2-60.97-1.58-82.2-22.59-3.02,14.16-5.99,28.09-8.85,41.5,16.85,20.68,60.43,19.98,68,20.62,5.21.44,8.48,3.82,8.08,8.7-.32,4-3.23,6.31-8.85,6.31-40.55-.02-63.76-13.75-70.84-18.72C11.4,408.76,2.59,449.9.39,460.08c-1.05,4.84,0,8.39,3.07,12.06,18.7,26.3,54.78,25.58,54.78,25.58l290.68,2.28s7.23.14,8.85-9.29c3.86-16.9,82.07-382.43,82.07-382.43,0,0-179.8,3.96-306.4-1.23Z" style="fill:{secondary};"/></g><g id="c"><path d="m304.27,28.79c-3.44-2.55-5.21-4.86-3.92-9.38,1.75-6.16,4.3-19.41,4.3-19.41,0,0-99.07,28.37-205.7,58.03-3.62,1.01-4.55,5.17-3.92,8.55,1.83,9.92,9.62,12.35,19.38,9.67,46.97-12.89,197.61-52.92,165.9-43.4,6.47-1.94,16.6,3.88,19.01,10.6-35.4,9.42-106.11,28.25-106.11,28.25,0,0,46.74-6.77,119.25-18.6,1.57-.26,3.65-.51,4.78.26,8.23,5.65,16.27,11.57,24.38,17.4-.01.8-.03,1.6-.04,2.41-44.69,4.52-134.08,16.66-134.08,16.66,0,0,138.96-5.79,144.61-5.89,3.63-.06,8.4-.17,10.73,1.9,8.59,7.62,18.28,4.27,28.54,4.95-46.78-33.6-61.78-43.26-87.1-61.99Z" style="fill:{primary};"/></g></svg>',
  "save": '<svg id="a" xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 500 413.69"><path d="m249.44,413.37c-62.01,0-124.03-.31-186.04.13-31.59.22-56.16-21.95-61.62-48.81-.96-4.72-1.6-9.6-1.61-14.41-.12-62.38-.33-124.75,0-187.13.17-32.54,21.58-57.5,53.15-62.44,8.45-1.32,17.27-.26,25.93-.27,10.28-.01,20.59.58,30.81-.18,9.14-.67,20.5,7.78,20.89,20.2.35,11.25-9.17,20.9-20.75,21.03-16.04.19-32.09.07-48.13.07-11.21,0-19.75,7.67-19.88,18.9-.33,27.76-.25,55.52-.28,83.27-.03,35.15-.04,70.3,0,105.45.02,12.27,4.33,18.92,14.19,22.01,1.83.57,3.84.75,5.77.75,124.21.03,248.42-.12,372.63.26,13.28.04,24.07-7.26,23.74-23.7-.5-25.23-.13-50.47-.13-75.7,0-35.87-.01-71.74,0-107.61,0-6.98-.32-14.12-6.74-18.36-3.84-2.54-8.62-4.9-13.06-5.07-16.02-.59-32.08-.19-48.13-.22-10.91-.02-19.58-7.88-21.15-19.03-1.2-8.57,5.46-18.36,14.68-21.36,1.65-.54,3.48-.71,5.23-.71,17.13-.04,34.25.02,51.38-.01,29.5-.04,56.46,24.57,58.26,53.22,1.51,23.86,1.19,47.86,1.28,71.79.17,41.46.13,82.93-.02,124.39-.11,31.55-20.01,57.38-52.01,62.86-10,1.71-20.5.68-30.77.69-55.88.04-111.77.02-167.65.02v-.04Z" style="fill:white;"/><path d="m191.39,0h116.88v174.08c2.99,0,5.6,0,8.2,0,9.73,0,19.47-.07,29.2.06,2.66.04,5.43.33,7.96,1.12,5.1,1.61,7.12,6.39,4.64,11.17-1.38,2.66-3.31,5.16-5.44,7.29-30.53,30.65-61.13,61.24-91.74,91.82-7.76,7.75-14.51,7.63-22.36-.22-30.45-30.47-60.93-60.93-91.39-91.39-3.87-3.87-8.4-8.06-6.08-13.93,2.45-6.19,8.8-5.91,14.45-5.92,11.7,0,23.39,0,35.67,0V0Z" style="fill:{primary};"/></svg>'
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/icon-custom/IconCustom.vue?vue&type=script&lang=ts



/* harmony default export */ var IconCustomvue_type_script_lang_ts = ({
  name: "IconCustom",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 26
    },
    color: String,
    colors: {
      type: Object,
      default: () => ({
        primary: "#0b677b",
        secondary: "#25323e"
      })
    }
  },
  setup(props) {
    const {
      name,
      size,
      color,
      colors
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      current
    } = (0,theme/* useTheme */.DP)();
    const getColor = name => current.value.colors?.[name] ?? name;
    const mdi = (0,runtime_core_esm_bundler/* computed */.EW)(() => /^mdi-.*$/i.test(name.value));
    const svg = (0,runtime_core_esm_bundler/* computed */.EW)(() => /^<svg.*\/svg>$/i.test(name.value));
    const html = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      let src = svg.value ? name.value : svg_icon_template[name.value] ?? undefined;
      if (src) {
        src = src.replaceAll("{size}", size.value);
        if (color.value) src = src.replaceAll("{primary}", getColor(color.value));
        if (colors.value) {
          for (const key in colors.value) {
            src = src.replaceAll("{" + key + "}", getColor(colors.value[key]));
          }
        }
        // заменяем значения на дефолтные, если они небыли заменены
        src = src.replaceAll("{primary}", "white");
        src = src.replaceAll("{stroke}", "black");
      }
      return src;
    });
    return {
      mdi,
      svg,
      html
    };
  }
});
;// CONCATENATED MODULE: ./src/components/common/icon-custom/IconCustom.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/common/icon-custom/IconCustom.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(IconCustomvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var IconCustom = (__exports__);

/***/ }),

/***/ 83230:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ AboutDialog; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var VTextField = __webpack_require__(43948);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/AboutDialog.vue?vue&type=template&id=0d6b5d4c&scoped=true&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
                                                      
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  const _component_device_info_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("device-info-dialog");
  const _component_choosing_car_model_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("choosing-car-model-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_dialog_template, {
    "content-class": "about",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.visible = $event),
    title: _ctx.$t('about.title'),
    icon: "on-board",
    width: "400px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.modelInfo, (item, key) => {
        return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
          key: 'info-' + key,
          cols: "12",
          class: "height-48 mb-4"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
            "model-value": item,
            class: "about__text-field",
            label: _ctx.$t('about.' + key),
            variant: "underlined",
            disabled: item.length === 0,
            "append-icon": key === 'carSupport' ? 'mdi-pen' : undefined,
            readonly: "",
            dense: "",
            "onClick:append": $event => $setup.onEditClick(key)
          }, null, 8, ["model-value", "label", "disabled", "append-icon", "onClick:append"])]),
          _: 2
        }, 1024);
      }), 128))]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onDeviceInfoClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.deviceInfo")), 1)]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      "prepend-icon": "mdi-close",
      onClick: _cache[0] || (_cache[0] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.close")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_device_info_dialog, {
    modelValue: $setup.visibleDeviceInfo,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.visibleDeviceInfo = $event)
  }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_choosing_car_model_dialog, {
    modelValue: $setup.visibleCarModel,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.visibleCarModel = $event),
    "car-model": $setup.carModel,
    "onClick:apply": $setup.onCarModelApplyClick
  }, null, 8, ["modelValue", "car-model", "onClick:apply"])], 64);
}

/* Vuetify */





// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(35679);
// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(92089);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/DeviceInfoDialog.vue?vue&type=template&id=1e0a8822&ts=true

function DeviceInfoDialogvue_type_template_id_1e0a8822_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
                                                      
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  const _component_device_reset_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("device-reset-dialog");
  const _component_scanner = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("scanner");
  const _component_test_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("test-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_dialog_template, {
    "content-class": "device-info",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.visible = $event),
    title: _ctx.$t('deviceInfo.title'),
    icon: "on-board",
    width: "400px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.modelDeviceInfo, (item, key) => {
        return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
          key: 'deviceInfo-' + key,
          cols: "12",
          class: "height-48 mb-2"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
            "model-value": item,
            label: _ctx.$t('deviceInfo.' + key),
            variant: "underlined",
            disabled: !$setup.isLoadedValue,
            readonly: "",
            dense: ""
          }, null, 8, ["model-value", "label", "disabled"])]),
          _: 2
        }, 1024);
      }), 128))]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$setup.showButtonTest ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VBtn/* VBtn */.D, {
      key: 0,
      color: "secondary",
      icon: "mdi-ab-testing",
      disabled: !$setup.isLoadedValue,
      onClick: _cache[0] || (_cache[0] = $event => $setup.visibleTest = true)
    }, null, 8, ["disabled"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "secondary",
      icon: "mdi-magnify-scan",
      disabled: !$setup.isLoadedValue,
      onClick: $setup.onScanClick
    }, null, 8, ["disabled", "onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "secondary",
      icon: "mdi-restart",
      disabled: !$setup.isLoadedValue,
      onClick: _cache[1] || (_cache[1] = $event => $setup.visibleReset = true)
    }, null, 8, ["disabled"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      "prepend-icon": "mdi-close",
      onClick: _cache[2] || (_cache[2] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.close")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_device_reset_dialog, {
    modelValue: $setup.visibleReset,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.visibleReset = $event)
  }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_scanner, {
    modelValue: $setup.startedScanner,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.startedScanner = $event)
  }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_test_dialog, {
    modelValue: $setup.visibleTest,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $setup.visibleTest = $event)
  }, null, 8, ["modelValue"])], 64);
}

/* Vuetify */





// EXTERNAL MODULE: ./src/utils/conversion.ts
var conversion = __webpack_require__(77503);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.mjs + 1 modules
var VCheckbox = __webpack_require__(40276);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/DeviceResetDialog.vue?vue&type=template&id=015e9f40&ts=true

function DeviceResetDialogvue_type_template_id_015e9f40_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                
                                                      
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    "content-class": "device-reset",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.visible = $event),
    title: _ctx.$t('deviceReset.title'),
    icon: "mdi-restart",
    width: "600px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCheckbox/* VCheckbox */.a, {
          modelValue: $setup.resetConfig,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.resetConfig = $event),
          label: _ctx.$t('deviceReset.config'),
          "hide-details": ""
        }, null, 8, ["modelValue", "label"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-1"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCheckbox/* VCheckbox */.a, {
          modelValue: $setup.resetView,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.resetView = $event),
          label: _ctx.$t('deviceReset.view'),
          "hide-details": ""
        }, null, 8, ["modelValue", "label"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-1"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCheckbox/* VCheckbox */.a, {
          modelValue: $setup.resetButtons,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.resetButtons = $event),
          label: _ctx.$t('deviceReset.buttons'),
          disabled: $setup.resetConfig,
          "hide-details": ""
        }, null, 8, ["modelValue", "label", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onApply
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1)]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: _cache[3] || (_cache[3] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.cancel")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */





// EXTERNAL MODULE: ./src/api/canbus.ts + 2 modules
var canbus = __webpack_require__(62774);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/DeviceResetDialog.vue?vue&type=script&lang=ts



/* harmony default export */ var DeviceResetDialogvue_type_script_lang_ts = ({
  name: "DeviceResetDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const {
      modelValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => context.emit("update:modelValue", val)
    });
    const resetConfig = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const resetView = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const resetButtons = (0,reactivity_esm_bundler/* ref */.KR)(false);
    (0,runtime_core_esm_bundler/* watch */.wB)(modelValue, val => {
      if (val) {
        resetConfig.value = false;
        resetView.value = false;
        resetButtons.value = false;
      }
    });
    /** Применить */
    const onApply = () => {
      canbus/* default */.A.rebootDevice(!resetConfig.value && !resetView.value && !resetButtons.value, resetConfig.value, resetView.value, resetButtons.value);
      visible.value = false;
    };
    return {
      visible,
      resetConfig,
      resetView,
      resetButtons,
      onApply
    };
  }
});
;// CONCATENATED MODULE: ./src/components/dialogs/DeviceResetDialog.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/dialogs/DeviceResetDialog.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(DeviceResetDialogvue_type_script_lang_ts, [['render',DeviceResetDialogvue_type_template_id_015e9f40_ts_true_render]])

/* harmony default export */ var DeviceResetDialog = (__exports__);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.mjs + 1 modules
var VProgressLinear = __webpack_require__(19336);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Scanner.vue?vue&type=template&id=4b364b22&ts=true

const _hoisted_1 = {
  class: "mb-2"
};
function Scannervue_type_template_id_4b364b22_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                              
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    modelValue: $setup.visibleUploading,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.visibleUploading = $event),
    icon: "mdi-cloud-upload-outline",
    title: _ctx.$t('scanner.upload.title'),
    text: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("scanner.upload.text")), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("scanner.upload.leftToLoad", $setup.leftUploading, {
      n: $setup.leftUploading
    })), 1), (0,runtime_core_esm_bundler/* createVNode */.bF)(VProgressLinear/* VProgressLinear */.Z, {
      color: "primary",
      height: "10",
      indeterminate: "",
      stream: "",
      rounded: ""
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */



;// CONCATENATED MODULE: ./src/components/Scanner.vue?vue&type=template&id=4b364b22&ts=true

// EXTERNAL MODULE: ./node_modules/vue3-toastify/dist/index.mjs
var dist = __webpack_require__(14084);
// EXTERNAL MODULE: ./src/api/google.ts
var google = __webpack_require__(27799);
// EXTERNAL MODULE: ./src/models/pjcan/device/index.ts + 7 modules
var device = __webpack_require__(94027);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Scanner.vue?vue&type=script&lang=ts









/* harmony default export */ var Scannervue_type_script_lang_ts = ({
  name: "Scanner",
  components: {
    DialogTemplate: DialogTemplate/* default */.A
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      modelValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const efuseMac = (0,runtime_core_esm_bundler/* computed */.EW)(() => (0,conversion/* toMac */.hL)(store/* default */.A.getters["config/info"].efuseMac));
    const visibleUploading = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const leftUploading = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const started = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    let scanUploading = false;
    let scanClose = false;
    (0,runtime_core_esm_bundler/* watch */.wB)(started, val => {
      if (!canbus/* default */.A.scanner(val, success => {
        if (val && success) {
          // запускаем диалог
          scanClose = false;
          store/* default */.A.commit("app/messagesClear");
          steps();
        }
      })) {
        dist/* toast */.oR.error(t("scanner.notify.errorStart"));
      }
    });
    /**
     * Шаги
     * @param {number} index Номер шага
     */
    const steps = (index = 0) => {
      const step = "scanner.step." + index;
      const message = {
        title: t(step + ".title"),
        icon: "mdi-magnify-scan",
        text: t(step + ".text"),
        btns: [],
        width: "800px"
      };
      store/* default */.A.commit("value/setScannerBufferTitle", message.title);
      if (index < 4) {
        message.btns?.push({
          title: t("scanner.btn.next"),
          on: () => {
            index++;
            setTimeout(() => steps(index), 400);
          }
        });
        message.btns?.push({
          title: t("btn.cancel"),
          icon: "mdi-close",
          on: () => {
            started.value = false;
            scanClose = true;
          }
        });
      } else {
        message.btns?.push({
          title: t("scanner.btn.finish"),
          on: () => {
            started.value = false;
            if (leftUploading.value) setTimeout(() => visibleUploading.value = true, 400);else dist/* toast */.oR.warning(t("scanner.notify.warningSend"));
          }
        });
      }
      store/* default */.A.commit("app/setMessage", message);
    };
    /** Отправка буфера */
    const sendScannerBuffer = () => {
      if (scanUploading) return;
      leftUploading.value = store/* default */.A.getters["value/scannerBuffer"].length;
      if (!leftUploading.value) {
        if (started.value) dist/* toast */.oR.warning(t("scanner.notify.warningSend"));
        visibleUploading.value = false;
        return;
      }
      scanUploading = true;
      (0,google/* setScanCan */.q)({
        mac: efuseMac.value,
        rows: store/* default */.A.getters["value/scannerBufferRead"]
      }).then(res => {
        store/* default */.A.commit("value/nextScannerBuffer", -1);
        if (res?.success && !scanClose) setTimeout(() => sendScannerBuffer(), 100);else if (res?.error) dist/* toast */.oR.error(res?.message);
      }).catch(() => dist/* toast */.oR.error(t("scanner.notify.errorSend"))).finally(() => {
        scanUploading = false;
      });
    };
    canbus/* default */.A.addListener(device/* API_DEVICE_SCANNER_VALUE_EVENT */.eb, () => sendScannerBuffer());
    return {
      visibleUploading,
      started,
      leftUploading
    };
  }
});
;// CONCATENATED MODULE: ./src/components/Scanner.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/Scanner.vue




;
const Scanner_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Scannervue_type_script_lang_ts, [['render',Scannervue_type_template_id_4b364b22_ts_true_render]])

/* harmony default export */ var Scanner = (Scanner_exports_);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.mjs + 1 modules
var VSelect = __webpack_require__(20105);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/TestDialog.vue?vue&type=template&id=3112a5c2&scoped=true&ts=true

function TestDialogvue_type_template_id_3112a5c2_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
                                                      
                                                            
  const _component_number_field = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("number-field");
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    "content-class": "test",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.visible = $event),
    title: _ctx.$t('test.title'),
    info: _ctx.$t('test.description'),
    icon: "steering-wheel",
    width: "600px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-1"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
          class: "test__text",
          modelValue: $setup.text,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.text = $event),
          label: _ctx.$t('test.text.title'),
          hint: _ctx.$t('test.text.description'),
          variant: "underlined",
          density: "compact",
          rules: [$setup.rules.required, $setup.rules.counter, $setup.rules.english],
          "persistent-hint": "",
          dense: ""
        }, null, 8, ["modelValue", "label", "hint", "rules"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-1"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.style,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.style = $event),
          label: _ctx.$t('onboard.viewSetting.type.title'),
          items: $setup.styleList,
          hint: _ctx.$t('onboard.viewSetting.type.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": ""
        }, null, 8, ["modelValue", "label", "items", "hint"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.time,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.time = $event),
          label: _ctx.$t('onboard.viewSetting.time.title'),
          hint: _ctx.$t('onboard.viewSetting.time.description'),
          max: 60,
          min: 1
        }, null, 8, ["modelValue", "label", "hint"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onShowClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("test.btnShow")), 1)]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      "prepend-icon": "mdi-close",
      onClick: _cache[3] || (_cache[3] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.close")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title", "info"]);
}

/* Vuetify */






// EXTERNAL MODULE: ./src/components/cards/InputCardItem.vue + 6 modules
var InputCardItem = __webpack_require__(40720);
// EXTERNAL MODULE: ./src/components/common/NumberField.vue + 3 modules
var NumberField = __webpack_require__(5076);
// EXTERNAL MODULE: ./src/models/pjcan/test/index.ts + 1 modules
var test = __webpack_require__(62805);
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/TestDialog.vue?vue&type=script&lang=ts








/* harmony default export */ var TestDialogvue_type_script_lang_ts = ({
  name: "TestDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A,
    InputCardItem: InputCardItem/* default */.A,
    NumberField: NumberField/* default */.A
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      modelValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      tm,
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const rules = (0,runtime_core_esm_bundler/* computed */.EW)(() => ({
      required: value => !!value || t("rules.required"),
      // @ts-ignore
      counter: value => value.length <= 32 || t("rules.counter", 32, {
        n: 32
      }),
      english: value => /^[^а-яА-Я]+$/.test(value) || t("rules.english")
    }));
    const text = (0,reactivity_esm_bundler/* ref */.KR)("");
    const style = (0,reactivity_esm_bundler/* ref */.KR)(view/* TViewType */.u.VIEW_TEXT_SIMPLE);
    const time = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const styleList = (0,runtime_core_esm_bundler/* computed */.EW)(() => tm("onboard.viewSetting.type.items")?.map((x, i) => ({
      label: x,
      value: i
    })));
    (0,runtime_core_esm_bundler/* watch */.wB)(modelValue, val => {
      if (val) {
        text.value = store/* default */.A.getters["value/test"].text;
        style.value = view/* TViewType */.u.VIEW_TEXT_TICKER;
        time.value = 6;
      }
    });
    /** Кнопка: "Показать" */
    const onShowClick = () => {
      visible.value = false;
      store/* default */.A.commit("view/setView", {
        exec: test/* API_TEST_VIEW_EXEC */.K_,
        enabled: true,
        type: style.value,
        time: time.value,
        delay: 2
      });
      store/* default */.A.commit("value/setTestText", text.value);
    };
    return {
      visible,
      text,
      rules,
      style,
      styleList,
      time,
      onShowClick
    };
  }
});
;// CONCATENATED MODULE: ./src/components/dialogs/TestDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/TestDialog.vue?vue&type=style&index=0&id=3112a5c2&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/dialogs/TestDialog.vue?vue&type=style&index=0&id=3112a5c2&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/components/dialogs/TestDialog.vue




;


const TestDialog_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(TestDialogvue_type_script_lang_ts, [['render',TestDialogvue_type_template_id_3112a5c2_scoped_true_ts_true_render],['__scopeId',"data-v-3112a5c2"]])

/* harmony default export */ var TestDialog = (TestDialog_exports_);
// EXTERNAL MODULE: ./src/models/pjcan/onboard/index.ts + 3 modules
var onboard = __webpack_require__(32280);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/DeviceInfoDialog.vue?vue&type=script&lang=ts









/* harmony default export */ var DeviceInfoDialogvue_type_script_lang_ts = ({
  name: "DeviceInfoDialog",
  components: {
    TestDialog: TestDialog,
    Scanner: Scanner,
    DialogTemplate: DialogTemplate/* default */.A,
    DeviceResetDialog: DeviceResetDialog
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const {
      modelValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => context.emit("update:modelValue", val)
    });
    const isLoadedValue = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/info"].isData);
    const visibleReset = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const startedScanner = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const visibleTest = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const showButtonTest = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"] !== onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST);
    const modelDeviceInfo = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const info = store/* default */.A.getters["config/info"];
      return {
        hardware: info.hardware,
        temperatureChip: (info.temperatureChip / 100).toFixed(2) + "°C",
        sdkVersion: info.sdkVersion.replaceAll("-", ""),
        efuseMac: (0,conversion/* toMac */.hL)(info.efuseMac),
        sha: (0,conversion/* arrayToHex */.cp)(info.sha)
      };
    });
    /** Циклический запрос данных Info */
    (0,runtime_core_esm_bundler/* watch */.wB)(modelValue, val => {
      store/* default */.A.dispatch("config/infoUpdateLoop", val);
    });
    /** Показать диалог запроса на сканирование can-шины */
    const onScanClick = () => {
      store/* default */.A.commit("app/setMessage", {
        title: t("scanner.dialog.title"),
        icon: "mdi-magnify-scan",
        text: t("scanner.dialog.text"),
        btns: [{
          title: t("scanner.btn.start"),
          on: () => {
            setTimeout(() => visible.value = false, 200);
            setTimeout(() => startedScanner.value = true, 400);
          }
        }, {
          title: t("btn.close"),
          icon: "mdi-close"
        }]
      });
    };
    return {
      visible,
      isLoadedValue,
      modelDeviceInfo,
      visibleReset,
      startedScanner,
      visibleTest,
      showButtonTest,
      onScanClick
    };
  }
});
;// CONCATENATED MODULE: ./src/components/dialogs/DeviceInfoDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/dialogs/DeviceInfoDialog.vue




;
const DeviceInfoDialog_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(DeviceInfoDialogvue_type_script_lang_ts, [['render',DeviceInfoDialogvue_type_template_id_1e0a8822_ts_true_render]])

/* harmony default export */ var DeviceInfoDialog = (DeviceInfoDialog_exports_);
// EXTERNAL MODULE: ./src/components/dialogs/ChoosingCarModelDialog.vue + 3 modules
var ChoosingCarModelDialog = __webpack_require__(33926);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/AboutDialog.vue?vue&type=script&lang=ts






const pkg = __webpack_require__(8330);
/* harmony default export */ var AboutDialogvue_type_script_lang_ts = ({
  name: "AboutDialog",
  components: {
    ChoosingCarModelDialog: ChoosingCarModelDialog/* default */.A,
    DialogTemplate: DialogTemplate/* default */.A,
    DeviceInfoDialog: DeviceInfoDialog
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      modelValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      tm,
      te
    } = (0,vue_i18n/* useI18n */.s9)();
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const visibleDeviceInfo = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const visibleCarModel = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const versionFirmware = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/version"].toString);
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    const carSupport = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const key = "choosingCarModel.carModels." + carModel.value;
      return te(key) ? tm(key) : tm("choosingCarModel.carModels.0");
    });
    const modelInfo = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const result = {
        version: pkg.version,
        versionFirmware: versionFirmware.value,
        carSupport: carSupport.value,
        author: pkg.author
      };
      return result;
    });
    /** Открыть попап технической информации */
    const onDeviceInfoClick = () => {
      visible.value = false;
      visibleDeviceInfo.value = true;
    };
    /**
     * Выбор модели автомобиля
     * @param {string} key Ключ
     */
    const onEditClick = key => {
      if (key === "carSupport") visibleCarModel.value = true;
    };
    /**
     * Применить выбранную модель автомобиля
     * @param {number} id ID модели
     */
    const onCarModelApplyClick = id => {
      visibleCarModel.value = false;
      if (store/* default */.A.getters["config/carModel"] !== id) {
        store/* default */.A.commit("config/setOnboardCarModel", id);
      }
    };
    return {
      visible,
      visibleDeviceInfo,
      visibleCarModel,
      carModel,
      modelInfo,
      onDeviceInfoClick,
      onEditClick,
      onCarModelApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/components/dialogs/AboutDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/AboutDialog.vue?vue&type=style&index=0&id=0d6b5d4c&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/dialogs/AboutDialog.vue?vue&type=style&index=0&id=0d6b5d4c&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/components/dialogs/AboutDialog.vue




;


const AboutDialog_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(AboutDialogvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-0d6b5d4c"]])

/* harmony default export */ var AboutDialog = (AboutDialog_exports_);

/***/ }),

/***/ 33926:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ ChoosingCarModelDialog; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.mjs + 1 modules
var VSelect = __webpack_require__(20105);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/ChoosingCarModelDialog.vue?vue&type=template&id=abe88c2a&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                            
                                                      
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    "content-class": "choosing-car-model",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.visible = $event),
    title: _ctx.$t('choosingCarModel.title'),
    icon: "on-board",
    width: "480px",
    persistent: $props.noClosed,
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.modelCarModel,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.modelCarModel = $event),
          label: _ctx.$t('choosingCarModel.label'),
          items: $setup.carModels,
          hint: _ctx.$t('choosingCarModel.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": ""
        }, null, 8, ["modelValue", "label", "items", "hint"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      disabled: $setup.modelCarModel === 0,
      onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('click:apply', $setup.modelCarModel))
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1)]),
      _: 1
    }, 8, ["disabled"]), !$props.noClosed ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VBtn/* VBtn */.D, {
      key: 0,
      color: "primary",
      "prepend-icon": "mdi-close",
      onClick: _cache[2] || (_cache[2] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.close")), 1)]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
    _: 1
  }, 8, ["modelValue", "title", "persistent"]);
}

/* Vuetify */





// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(92089);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/ChoosingCarModelDialog.vue?vue&type=script&lang=ts




/* harmony default export */ var ChoosingCarModelDialogvue_type_script_lang_ts = ({
  name: "ChoosingCarModelDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    carModel: Number,
    noClosed: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "click:apply"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      carModel
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      tm
    } = (0,vue_i18n/* useI18n */.s9)();
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const carModels = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const list = tm("choosingCarModel.carModels");
      const result = [];
      for (const key in list) result.push({
        label: list[key],
        value: Number(key)
      });
      return result;
    });
    const modelCarModel = (0,reactivity_esm_bundler/* ref */.KR)(carModel.value);
    (0,runtime_core_esm_bundler/* watch */.wB)(modelValue, () => {
      if (modelValue.value) modelCarModel.value = carModel.value;
    });
    (0,runtime_core_esm_bundler/* watch */.wB)(carModel, () => modelCarModel.value = carModel.value);
    return {
      visible,
      carModels,
      modelCarModel
    };
  }
});
;// CONCATENATED MODULE: ./src/components/dialogs/ChoosingCarModelDialog.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/dialogs/ChoosingCarModelDialog.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(ChoosingCarModelDialogvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var ChoosingCarModelDialog = (__exports__);

/***/ }),

/***/ 1635:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ LocaleDialog; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.mjs + 1 modules
var VSelect = __webpack_require__(20105);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/LocaleDialog.vue?vue&type=template&id=2028a80e&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                            
                                                      
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    "content-class": "locale",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.visible = $event),
    title: _ctx.$t('language.title'),
    icon: "service",
    width: "480px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.language,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.language = $event),
          label: _ctx.$t('language.label'),
          items: $setup.locales,
          hint: _ctx.$t('language.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": ""
        }, null, 8, ["modelValue", "label", "items", "hint"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onApplyClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1)]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      "prepend-icon": "mdi-close",
      onClick: _cache[1] || (_cache[1] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.close")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */





// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(35679);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(49148);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(92089);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/LocaleDialog.vue?vue&type=script&lang=ts





/* harmony default export */ var LocaleDialogvue_type_script_lang_ts = ({
  name: "LocaleDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      locale
    } = (0,vue_i18n/* useI18n */.s9)();
    const {
      modelValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const locales = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      label: "Русский",
      value: "ru"
    }, {
      label: "English",
      value: "en"
    }]);
    const language = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["app/language"],
      set: val => store/* default */.A.commit("app/setLanguage", val)
    });
    /** Применить язык интерфейса */
    const onApplyClick = () => {
      locale.value = language.value;
      moment_default().locale(language.value);
      store/* default */.A.dispatch("app/writeLanguage");
      visible.value = false;
    };
    return {
      visible,
      locales,
      language,
      onApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/components/dialogs/LocaleDialog.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/dialogs/LocaleDialog.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(LocaleDialogvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var LocaleDialog = (__exports__);

/***/ }),

/***/ 22885:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ MessageDialog; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/MessageDialog.vue?vue&type=template&id=050de974&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.visible = $event),
    icon: $props.icon,
    title: $props.title,
    text: !!$props.text,
    actions: !!$props.btns,
    width: $props.width
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.text), 1)]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($props.btns, (btn, i) => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VBtn/* VBtn */.D, {
        key: `message-btn_${i}`,
        color: btn?.color ?? 'primary',
        "prepend-icon": btn?.icon,
        onClick: $event => $setup.onClick(btn)
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(btn?.title), 1)]),
        _: 2
      }, 1032, ["color", "prepend-icon", "onClick"]);
    }), 128))]),
    _: 1
  }, 8, ["modelValue", "icon", "title", "text", "actions", "width"]);
}

/* Vuetify */



// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(92089);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/MessageDialog.vue?vue&type=script&lang=ts


/* harmony default export */ var MessageDialogvue_type_script_lang_ts = ({
  name: "Message",
  components: {
    DialogTemplate: DialogTemplate/* default */.A
  },
  props: {
    /** Показать диалог */
    modelValue: Boolean,
    /** Заголовок */
    title: String,
    /** Иконка заголовка */
    icon: String,
    /** Текст */
    text: String,
    /** Список кнопок { title, ?color, on } */
    btns: Array,
    /** Ширина диалога */
    width: [Number, String]
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      modelValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const onClick = btn => {
      if (btn?.on) btn.on();
      visible.value = false;
    };
    return {
      visible,
      onClick
    };
  }
});
;// CONCATENATED MODULE: ./src/components/dialogs/MessageDialog.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/dialogs/MessageDialog.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(MessageDialogvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var MessageDialog = (__exports__);

/***/ }),

/***/ 57128:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ OnboardButtonsDialog; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnGroup/VBtnGroup.mjs + 1 modules
var VBtnGroup = __webpack_require__(8321);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/OnboardButtonsDialog.vue?vue&type=template&id=251e6b5f&scoped=true&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                      
                                                                  
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    "content-class": "onboard-buttons",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $setup.visible = $event),
    title: _ctx.$t('onboardButtons.title'),
    icon: "steering-wheel",
    width: "500px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$setup.visibleClockInfo ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 0,
        cols: "12",
        class: "pb-0 d-flex justify-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtnGroup/* VBtnGroup */._, {
          class: "onboard-buttons__btns-main"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
            color: "primary",
            size: "x-large",
            onClick: _cache[0] || (_cache[0] = $event => $setup.send($options.TButtonExec.BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK))
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("onboardButtons.buttons.clock")), 1)]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
            color: "primary",
            size: "x-large",
            onClick: _cache[1] || (_cache[1] = $event => $setup.send($options.TButtonExec.BUTTON_EXEC_ON_BOARD_BUTTON_INFO))
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("onboardButtons.buttons.info")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.visibleClockInfo ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 1,
        cols: "12",
        class: "pb-0 d-flex justify-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtnGroup/* VBtnGroup */._, {
          class: "onboard-buttons__btns-hold"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
            color: "secondary",
            size: "x-large",
            onClick: _cache[2] || (_cache[2] = $event => $setup.send($options.TButtonExec.BUTTON_EXEC_ON_BOARD_LONG_PRESS_CLOCK)),
            disabled: $setup.disabled
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("onboardButtons.buttons.holdClock")), 1)]),
            _: 1
          }, 8, ["disabled"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
            color: "secondary",
            size: "x-large",
            onClick: _cache[3] || (_cache[3] = $event => $setup.send($options.TButtonExec.BUTTON_EXEC_ON_BOARD_LONG_PRESS_INFO)),
            disabled: $setup.disabled
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("onboardButtons.buttons.holdInfo")), 1)]),
            _: 1
          }, 8, ["disabled"])]),
          _: 1
        })]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.visibleHourMinute ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 2,
        cols: "12",
        class: "d-flex justify-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtnGroup/* VBtnGroup */._, {
          class: "onboard-buttons__btns-added"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
            color: "secondary",
            size: "x-large",
            onClick: _cache[4] || (_cache[4] = $event => $setup.send($options.TButtonExec.BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_H))
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("onboardButtons.buttons.clockH")), 1)]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
            color: "secondary",
            size: "x-large",
            onClick: _cache[5] || (_cache[5] = $event => $setup.send($options.TButtonExec.BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_M))
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("onboardButtons.buttons.clockM")), 1)]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
            color: "secondary",
            size: "x-large",
            onClick: _cache[6] || (_cache[6] = $event => $setup.send($options.TButtonExec.BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_24))
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
              class: (0,shared_esm_bundler/* normalizeClass */.C4)({
                selected: $setup.clock24
              })
            }, "24", 2), _cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" / ")), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
              class: (0,shared_esm_bundler/* normalizeClass */.C4)({
                selected: !$setup.clock24
              })
            }, "12", 2)]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
            color: "secondary",
            size: "x-large",
            onClick: _cache[7] || (_cache[7] = $event => $setup.send($options.TButtonExec.BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_RM))
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("onboardButtons.buttons.clockRM")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      "prepend-icon": "mdi-close",
      onClick: _cache[8] || (_cache[8] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.close")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */





// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(35679);
// EXTERNAL MODULE: ./src/api/canbus.ts + 2 modules
var canbus = __webpack_require__(62774);
// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(92089);
// EXTERNAL MODULE: ./src/models/pjcan/onboard/index.ts + 3 modules
var onboard = __webpack_require__(32280);
// EXTERNAL MODULE: ./src/models/pjcan/buttons/index.ts + 7 modules
var buttons = __webpack_require__(84596);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/OnboardButtonsDialog.vue?vue&type=script&lang=ts






/* harmony default export */ var OnboardButtonsDialogvue_type_script_lang_ts = ({
  name: "OnboardButtonsDialog",
  computed: {
    TButtonExec() {
      return buttons/* TButtonExec */.su;
    }
  },
  components: {
    DialogTemplate: DialogTemplate/* default */.A
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      modelValue
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const clock24 = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/onboard"].lcdClock24);
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    const visibleClockInfo = (0,runtime_core_esm_bundler/* computed */.EW)(() => carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GG || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GH || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7 || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9 || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_5);
    const visibleHourMinute = (0,runtime_core_esm_bundler/* computed */.EW)(() => carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GH || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9 || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST || carModel.value === onboard/* TCarModel */.oB.CAR_MODEL_MAZDA_5);
    const disabled = (0,reactivity_esm_bundler/* ref */.KR)(false);
    /**
     * Отправить нажатие
     * @param {TButtonExec} exec Функция кнопки
     */
    const send = exec => {
      const action = new onboard/* OnboardAction */.iz();
      action.btnExec = exec;
      action.btnEmulation = false;
      canbus/* default */.A.query(action);
      navigator.vibrate(30);
      if (exec === buttons/* TButtonExec */.su.BUTTON_EXEC_ON_BOARD_BUTTON_CLOCK_24) {
        canbus/* default */.A.query(store/* default */.A.getters["config/onboard"], true);
      }
      if (exec === buttons/* TButtonExec */.su.BUTTON_EXEC_ON_BOARD_LONG_PRESS_INFO || exec === buttons/* TButtonExec */.su.BUTTON_EXEC_ON_BOARD_LONG_PRESS_CLOCK) {
        disabled.value = true;
        setTimeout(() => disabled.value = false, 2000);
      }
    };
    return {
      visible,
      visibleClockInfo,
      visibleHourMinute,
      disabled,
      clock24,
      carModel,
      send
    };
  }
});
;// CONCATENATED MODULE: ./src/components/dialogs/OnboardButtonsDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/OnboardButtonsDialog.vue?vue&type=style&index=0&id=251e6b5f&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/dialogs/OnboardButtonsDialog.vue?vue&type=style&index=0&id=251e6b5f&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/dialogs/OnboardButtonsDialog.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(OnboardButtonsDialogvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-251e6b5f"]])

/* harmony default export */ var OnboardButtonsDialog = (__exports__);

/***/ }),

/***/ 66422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ UpdateFirmwareDialog; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.mjs + 1 modules
var VProgressLinear = __webpack_require__(19336);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/UpdateFirmwareDialog.vue?vue&type=template&id=4557876c&ts=true

const _hoisted_1 = {
  key: 0,
  class: "pb-3 d-flex justify-space-between"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
                                                                              
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_dialog_template, {
    modelValue: $setup.visibleUpdate,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.visibleUpdate = $event),
    icon: "mdi-update",
    title: _ctx.$t('update.title'),
    width: "700",
    persistent: !$setup.visibleLater,
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("update.dialog." + (!$props.rollback ? "updateTo" : "rollbackTo"), {
      version: $props.version
    })), 1)]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onUpdateStart
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("update.btn." + (!$props.rollback ? "update" : "rollback"))), 1)]),
      _: 1
    }, 8, ["onClick"]), $setup.visibleLater ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VBtn/* VBtn */.D, {
      key: 0,
      color: "primary",
      onClick: $setup.onCancel
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("update.btn.later")), 1)]),
      _: 1
    }, 8, ["onClick"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
    _: 1
  }, 8, ["modelValue", "title", "persistent"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_dialog_template, {
    modelValue: $setup.visibleProcess,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.visibleProcess = $event),
    icon: "mdi-update",
    title: _ctx.$t('update.title'),
    text: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
      class: (0,shared_esm_bundler/* normalizeClass */.C4)(["d-flex justify-space-between", {
        'pb-3': $setup.progress === 0 || !$setup.timeLeft?.length
      }])
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.message), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.uploading), 1)], 2), $setup.progress > 0 && $setup.timeLeft?.length ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("update.process.timeLeft")), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.timeLeft), 1)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(VProgressLinear/* VProgressLinear */.Z, {
      "model-value": $setup.progress,
      color: "primary",
      height: "10",
      indeterminate: $setup.progress === 0,
      stream: "",
      rounded: ""
    }, null, 8, ["model-value", "indeterminate"])]),
    _: 1
  }, 8, ["modelValue", "title"])], 64);
}

/* Vuetify */




;// CONCATENATED MODULE: ./src/components/dialogs/UpdateFirmwareDialog.vue?vue&type=template&id=4557876c&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vue3-toastify/dist/index.mjs
var dist = __webpack_require__(14084);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(35679);
// EXTERNAL MODULE: ./src/router/index.ts + 98 modules
var router = __webpack_require__(96768);
// EXTERNAL MODULE: ./src/api/canbus.ts + 2 modules
var canbus = __webpack_require__(62774);
// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(92089);
// EXTERNAL MODULE: ./src/models/pjcan/device/index.ts + 7 modules
var device = __webpack_require__(94027);
// EXTERNAL MODULE: ./src/models/pjcan/version/index.ts + 1 modules
var version = __webpack_require__(55800);
// EXTERNAL MODULE: ./src/utils/time.ts
var time = __webpack_require__(22918);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/dialogs/UpdateFirmwareDialog.vue?vue&type=script&lang=ts










/* harmony default export */ var UpdateFirmwareDialogvue_type_script_lang_ts = ({
  name: "UpdateFirmwareDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A
  },
  props: {
    /** Показать диалог */
    modelValue: {
      type: Boolean,
      default: false
    },
    /** Версия прошивки */
    version: String,
    /** Откатит прошивки */
    rollback: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      rollback
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const visibleUpdate = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const visibleProcess = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const visibleLater = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/version"].supported);
    const message = (0,reactivity_esm_bundler/* ref */.KR)("");
    const progress = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const uploading = (0,reactivity_esm_bundler/* ref */.KR)("");
    const timeLeft = (0,reactivity_esm_bundler/* ref */.KR)("");
    (0,runtime_core_esm_bundler/* watch */.wB)(modelValue, val => {
      if (val) {
        visibleProcess.value = false;
        message.value = "";
        progress.value = 0;
        uploading.value = "";
        timeLeft.value = "";
      }
    });
    let remainingTime;
    /** Событие запуска прошивки */
    const onUpdateStart = () => {
      message.value = t("update.process.preparation");
      uploading.value = "";
      progress.value = 0;
      visibleUpdate.value = false;
      visibleProcess.value = true;
      canbus/* default */.A.updateStart(rollback.value);
    };
    /**
     * Событие загрузки прошивки на устройство PJCAN
     * @param {number} error Код ошибки
     */
    const onUpdateStatus = error => {
      if (error === 0) {
        if (canbus/* default */.A.update.offset < canbus/* default */.A.update.total) {
          message.value = t("update.process.upload");
          progress.value = canbus/* default */.A.update.uploading * 100;
          uploading.value = progress.value.toFixed(2) + "%";
          // подсчет оставшегося времени
          if (!remainingTime) {
            remainingTime = new time/* RemainingTime */.K(canbus/* default */.A.update.total);
          } else {
            remainingTime.offset = canbus/* default */.A.update.offset;
            timeLeft.value = remainingTime.get();
          }
        } else {
          message.value = t("update.process.update");
          progress.value = 0;
          uploading.value = "";
          remainingTime = undefined;
          timeLeft.value = "";
          canbus/* default */.A.version.clear();
          if (rollback.value) window.location.reload();
        }
      } else onErrorUpdate(t("update.notify.error"));
    };
    /** Завершение прошивки */
    const onCompletingFirmware = () => {
      if (canbus/* default */.A.update.total > 0) {
        if (canbus/* default */.A.version.is) {
          canbus/* default */.A.checkVersion().then(() => dist/* toast */.oR.error(t("update.notify.warning"))).catch(() => dist/* toast */.oR.success(t("update.notify.completed")));
          setTimeout(() => router/* default */.A.go(0), 5000);
          onCancel();
        } else canbus/* default */.A.bluetooth.disconnect();
      }
    };
    /** Отменить обновление */
    const onCancel = () => {
      visibleUpdate.value = false;
      visibleProcess.value = false;
      canbus/* default */.A.update.clear();
    };
    /** Ошибка обновления */
    const onErrorUpdate = msg => {
      dist/* toast */.oR.error(msg);
      onCancel();
    };
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      canbus/* default */.A.addListener(version/* API_VERSION_EVENT */.dD, onCompletingFirmware);
      canbus/* default */.A.update.addListener(device/* API_DEVICE_UPDATE_EVENT */.BO, onUpdateStatus);
      canbus/* default */.A.addListener(device/* API_DEVICE_UPDATE_EVENT_ERROR */.S, onErrorUpdate);
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.hi)(() => {
      canbus/* default */.A.removeListener(version/* API_VERSION_EVENT */.dD, onCompletingFirmware);
      canbus/* default */.A.update.removeListener(device/* API_DEVICE_UPDATE_EVENT */.BO, onUpdateStatus);
      canbus/* default */.A.removeListener(device/* API_DEVICE_UPDATE_EVENT_ERROR */.S, onErrorUpdate);
    });
    return {
      visibleUpdate,
      visibleProcess,
      visibleLater,
      message,
      uploading,
      timeLeft,
      progress,
      onCancel,
      onUpdateStart
    };
  }
});
;// CONCATENATED MODULE: ./src/components/dialogs/UpdateFirmwareDialog.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/components/dialogs/UpdateFirmwareDialog.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(UpdateFirmwareDialogvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var UpdateFirmwareDialog = (__exports__);

/***/ })

}]);