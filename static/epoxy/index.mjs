// node_modules/.pnpm/@mercuryworkshop+epoxy-tls@2.1.6-1/node_modules/@mercuryworkshop/epoxy-tls/full/epoxy-bundled.js
import { object_get, object_set, convert_body_inner, entries_of_object_inner, define_property, ws_key, from_entries } from "data:application/javascript;base64,CmV4cG9ydCBmdW5jdGlvbiBvYmplY3RfZ2V0KG9iaiwgaykgeyAKCXRyeSB7CgkJcmV0dXJuIG9ialtrXQoJfSBjYXRjaCh4KSB7CgkJcmV0dXJuIHVuZGVmaW5lZAoJfQp9OwpleHBvcnQgZnVuY3Rpb24gb2JqZWN0X3NldChvYmosIGssIHYpIHsKCXRyeSB7IG9ialtrXSA9IHYgfSBjYXRjaCB7fQp9OwoKZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRfYm9keV9pbm5lcihib2R5KSB7CglsZXQgcmVxID0gbmV3IFJlcXVlc3QoIiIsIHsgbWV0aG9kOiAiUE9TVCIsIGR1cGxleDogImhhbGYiLCBib2R5IH0pOwoJbGV0IHR5cGUgPSByZXEuaGVhZGVycy5nZXQoImNvbnRlbnQtdHlwZSIpOwoJcmV0dXJuIFtuZXcgVWludDhBcnJheShhd2FpdCByZXEuYXJyYXlCdWZmZXIoKSksIHR5cGVdOwp9CgpleHBvcnQgZnVuY3Rpb24gZW50cmllc19vZl9vYmplY3RfaW5uZXIob2JqKSB7CglyZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoeCA9PiB4Lm1hcChTdHJpbmcpKTsKfQoKZXhwb3J0IGZ1bmN0aW9uIGRlZmluZV9wcm9wZXJ0eShvYmosIGssIHYpIHsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGssIHsgdmFsdWU6IHYsIHdyaXRhYmxlOiBmYWxzZSB9KTsKfQoKZXhwb3J0IGZ1bmN0aW9uIHdzX2tleSgpIHsKCWxldCBrZXkgPSBuZXcgVWludDhBcnJheSgxNik7CgljcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGtleSk7CglyZXR1cm4gYnRvYShBcnJheS5mcm9tKGtleSkubWFwKFN0cmluZy5mcm9tQ2hhckNvZGUpLmpvaW4oJycpKTsKfQoKZXhwb3J0IGZ1bmN0aW9uIGZyb21fZW50cmllcyhlbnRyaWVzKXsKICAgIHZhciByZXQgPSB7fTsKICAgIGZvcih2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSByZXRbZW50cmllc1tpXVswXV0gPSBlbnRyaWVzW2ldWzFdOwogICAgcmV0dXJuIHJldDsKfQo=";
var wasm;
var heap = new Array(128).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var WASM_VECTOR_LEN = 0;
var cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
var cachedTextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} };
var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
var cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
if (typeof TextDecoder !== "undefined") {
  cachedTextDecoder.decode();
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
var heap_next = heap.length;
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function dropObject(idx) {
  if (idx < 132) return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
var CLOSURE_DTORS = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((state) => {
  wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
});
function makeClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    state.cnt++;
    try {
      return f(state.a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
        state.a = 0;
        CLOSURE_DTORS.unregister(state);
      }
    }
  };
  real.original = state;
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function __wbg_adapter_32(arg0, arg1) {
  wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha93c7e91c057b39c(arg0, arg1);
}
function __wbg_adapter_35(arg0, arg1, arg2) {
  wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__haf2e26cdcceabbb4(arg0, arg1, addHeapObject(arg2));
}
function makeMutClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    state.cnt++;
    const a = state.a;
    state.a = 0;
    try {
      return f(a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
        CLOSURE_DTORS.unregister(state);
      } else {
        state.a = a;
      }
    }
  };
  real.original = state;
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function __wbg_adapter_38(arg0, arg1, arg2) {
  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfa57510f461b0187(arg0, arg1, addHeapObject(arg2));
}
function __wbg_adapter_41(arg0, arg1) {
  wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1a974e05892cf4d5(arg0, arg1);
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  const mem = getDataViewMemory0();
  for (let i = 0; i < array.length; i++) {
    mem.setUint32(ptr + 4 * i, addHeapObject(array[i]), true);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function getArrayJsValueFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(takeObject(mem.getUint32(i, true)));
  }
  return result;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance.ptr;
}
function __wbg_adapter_165(arg0, arg1, arg2, arg3) {
  wasm.wasm_bindgen__convert__closures__invoke2_mut__ha7dfcaea398d0329(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
var EpoxyClientFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyclient_free(ptr >>> 0, 1));
var EpoxyClient = class {
  toJSON() {
    return {
      redirect_limit: this.redirect_limit,
      user_agent: this.user_agent
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyClientFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyclient_free(ptr, 0);
  }
  /**
  * @returns {number}
  */
  get redirect_limit() {
    const ret = wasm.__wbg_get_epoxyclient_redirect_limit(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} arg0
  */
  set redirect_limit(arg0) {
    wasm.__wbg_set_epoxyclient_redirect_limit(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {string}
  */
  get user_agent() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_epoxyclient_user_agent(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
  * @param {string} arg0
  */
  set user_agent(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclient_user_agent(this.__wbg_ptr, ptr0, len0);
  }
  /**
  * @param {any} wisp_url
  * @param {EpoxyClientOptions} options
  */
  constructor(wisp_url, options) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(options, EpoxyClientOptions);
      var ptr0 = options.__destroy_into_raw();
      wasm.epoxyclient_new(retptr, addHeapObject(wisp_url), ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      this.__wbg_ptr = r0 >>> 0;
      EpoxyClientFinalization.register(this, this.__wbg_ptr, this);
      return this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @returns {Promise<void>}
  */
  replace_stream_provider() {
    const ret = wasm.epoxyclient_replace_stream_provider(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {EpoxyHandlers} handlers
  * @param {string} url
  * @param {(string)[]} protocols
  * @param {any} headers
  * @returns {Promise<EpoxyWebSocket>}
  */
  connect_websocket(handlers, url, protocols, headers) {
    _assertClass(handlers, EpoxyHandlers);
    var ptr0 = handlers.__destroy_into_raw();
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArrayJsValueToWasm0(protocols, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_connect_websocket(this.__wbg_ptr, ptr0, ptr1, len1, ptr2, len2, addHeapObject(headers));
    return takeObject(ret);
  }
  /**
  * @param {EpoxyHandlers} handlers
  * @param {string} url
  * @returns {Promise<EpoxyIoStream>}
  */
  connect_tcp(handlers, url) {
    _assertClass(handlers, EpoxyHandlers);
    var ptr0 = handlers.__destroy_into_raw();
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_connect_tcp(this.__wbg_ptr, ptr0, ptr1, len1);
    return takeObject(ret);
  }
  /**
  * @param {EpoxyHandlers} handlers
  * @param {string} url
  * @returns {Promise<EpoxyIoStream>}
  */
  connect_tls(handlers, url) {
    _assertClass(handlers, EpoxyHandlers);
    var ptr0 = handlers.__destroy_into_raw();
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_connect_tls(this.__wbg_ptr, ptr0, ptr1, len1);
    return takeObject(ret);
  }
  /**
  * @param {EpoxyHandlers} handlers
  * @param {string} url
  * @returns {Promise<EpoxyUdpStream>}
  */
  connect_udp(handlers, url) {
    _assertClass(handlers, EpoxyHandlers);
    var ptr0 = handlers.__destroy_into_raw();
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_connect_udp(this.__wbg_ptr, ptr0, ptr1, len1);
    return takeObject(ret);
  }
  /**
  * @param {string} url
  * @param {object} options
  * @returns {Promise<Response>}
  */
  fetch(url, options) {
    const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_fetch(this.__wbg_ptr, ptr0, len0, addHeapObject(options));
    return takeObject(ret);
  }
};
var EpoxyClientOptionsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyclientoptions_free(ptr >>> 0, 1));
var EpoxyClientOptions = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyClientOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyclientoptions_free(ptr, 0);
  }
  /**
  * @returns {boolean}
  */
  get wisp_v2() {
    const ret = wasm.__wbg_get_epoxyclientoptions_wisp_v2(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {boolean} arg0
  */
  set wisp_v2(arg0) {
    wasm.__wbg_set_epoxyclientoptions_wisp_v2(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {boolean}
  */
  get udp_extension_required() {
    const ret = wasm.__wbg_get_epoxyclientoptions_udp_extension_required(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {boolean} arg0
  */
  set udp_extension_required(arg0) {
    wasm.__wbg_set_epoxyclientoptions_udp_extension_required(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {boolean}
  */
  get title_case_headers() {
    const ret = wasm.__wbg_get_epoxyclientoptions_title_case_headers(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {boolean} arg0
  */
  set title_case_headers(arg0) {
    wasm.__wbg_set_epoxyclientoptions_title_case_headers(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {(string)[]}
  */
  get websocket_protocols() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_epoxyclientoptions_websocket_protocols(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_free(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {(string)[]} arg0
  */
  set websocket_protocols(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclientoptions_websocket_protocols(this.__wbg_ptr, ptr0, len0);
  }
  /**
  * @returns {number}
  */
  get redirect_limit() {
    const ret = wasm.__wbg_get_epoxyclientoptions_redirect_limit(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} arg0
  */
  set redirect_limit(arg0) {
    wasm.__wbg_set_epoxyclientoptions_redirect_limit(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {string}
  */
  get user_agent() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_epoxyclientoptions_user_agent(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
  * @param {string} arg0
  */
  set user_agent(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclientoptions_user_agent(this.__wbg_ptr, ptr0, len0);
  }
  /**
  * @returns {(string)[]}
  */
  get pem_files() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_epoxyclientoptions_pem_files(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_free(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {(string)[]} arg0
  */
  set pem_files(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclientoptions_pem_files(this.__wbg_ptr, ptr0, len0);
  }
  /**
  * @returns {boolean}
  */
  get disable_certificate_validation() {
    const ret = wasm.__wbg_get_epoxyclientoptions_disable_certificate_validation(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {boolean} arg0
  */
  set disable_certificate_validation(arg0) {
    wasm.__wbg_set_epoxyclientoptions_disable_certificate_validation(this.__wbg_ptr, arg0);
  }
  /**
  */
  constructor() {
    const ret = wasm.epoxyclientoptions_new_default();
    this.__wbg_ptr = ret >>> 0;
    EpoxyClientOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
var EpoxyHandlersFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyhandlers_free(ptr >>> 0, 1));
var EpoxyHandlers = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyHandlersFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyhandlers_free(ptr, 0);
  }
  /**
  * @returns {Function}
  */
  get onopen() {
    const ret = wasm.__wbg_get_epoxyhandlers_onopen(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {Function} arg0
  */
  set onopen(arg0) {
    wasm.__wbg_set_epoxyhandlers_onopen(this.__wbg_ptr, addHeapObject(arg0));
  }
  /**
  * @returns {Function}
  */
  get onclose() {
    const ret = wasm.__wbg_get_epoxyhandlers_onclose(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {Function} arg0
  */
  set onclose(arg0) {
    wasm.__wbg_set_epoxyhandlers_onclose(this.__wbg_ptr, addHeapObject(arg0));
  }
  /**
  * @returns {Function}
  */
  get onerror() {
    const ret = wasm.__wbg_get_epoxyhandlers_onerror(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {Function} arg0
  */
  set onerror(arg0) {
    wasm.__wbg_set_epoxyhandlers_onerror(this.__wbg_ptr, addHeapObject(arg0));
  }
  /**
  * @returns {Function}
  */
  get onmessage() {
    const ret = wasm.__wbg_get_epoxyhandlers_onmessage(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {Function} arg0
  */
  set onmessage(arg0) {
    wasm.__wbg_set_epoxyhandlers_onmessage(this.__wbg_ptr, addHeapObject(arg0));
  }
  /**
  * @param {Function} onopen
  * @param {Function} onclose
  * @param {Function} onerror
  * @param {Function} onmessage
  */
  constructor(onopen, onclose, onerror, onmessage) {
    const ret = wasm.epoxyhandlers_new(addHeapObject(onopen), addHeapObject(onclose), addHeapObject(onerror), addHeapObject(onmessage));
    this.__wbg_ptr = ret >>> 0;
    EpoxyHandlersFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
var EpoxyIoStreamFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyiostream_free(ptr >>> 0, 1));
var EpoxyIoStream = class _EpoxyIoStream {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_EpoxyIoStream.prototype);
    obj.__wbg_ptr = ptr;
    EpoxyIoStreamFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyIoStreamFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyiostream_free(ptr, 0);
  }
  /**
  * @param {any} payload
  * @returns {Promise<void>}
  */
  send(payload) {
    const ret = wasm.epoxyiostream_send(this.__wbg_ptr, addHeapObject(payload));
    return takeObject(ret);
  }
  /**
  * @returns {Promise<void>}
  */
  close() {
    const ret = wasm.epoxyiostream_close(this.__wbg_ptr);
    return takeObject(ret);
  }
};
var EpoxyUdpStreamFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyudpstream_free(ptr >>> 0, 1));
var EpoxyUdpStream = class _EpoxyUdpStream {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_EpoxyUdpStream.prototype);
    obj.__wbg_ptr = ptr;
    EpoxyUdpStreamFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyUdpStreamFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyudpstream_free(ptr, 0);
  }
  /**
  * @param {any} payload
  * @returns {Promise<void>}
  */
  send(payload) {
    const ret = wasm.epoxyudpstream_send(this.__wbg_ptr, addHeapObject(payload));
    return takeObject(ret);
  }
  /**
  * @returns {Promise<void>}
  */
  close() {
    const ret = wasm.epoxyudpstream_close(this.__wbg_ptr);
    return takeObject(ret);
  }
};
var EpoxyWebSocketFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxywebsocket_free(ptr >>> 0, 1));
var EpoxyWebSocket = class _EpoxyWebSocket {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_EpoxyWebSocket.prototype);
    obj.__wbg_ptr = ptr;
    EpoxyWebSocketFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyWebSocketFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxywebsocket_free(ptr, 0);
  }
  /**
  * @param {any} payload
  * @returns {Promise<void>}
  */
  send(payload) {
    const ret = wasm.epoxywebsocket_send(this.__wbg_ptr, addHeapObject(payload));
    return takeObject(ret);
  }
  /**
  * @param {number} code
  * @param {string} reason
  * @returns {Promise<void>}
  */
  close(code, reason) {
    const ptr0 = passStringToWasm0(reason, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.epoxywebsocket_close(this.__wbg_ptr, code, ptr0, len0);
    return takeObject(ret);
  }
};
var IntoUnderlyingByteSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingbytesource_free(ptr >>> 0, 1));
var IntoUnderlyingSinkFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsink_free(ptr >>> 0, 1));
var IntoUnderlyingSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsource_free(ptr >>> 0, 1));
var IntoUnderlyingSource = class _IntoUnderlyingSource {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_IntoUnderlyingSource.prototype);
    obj.__wbg_ptr = ptr;
    IntoUnderlyingSourceFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingSourceFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingsource_free(ptr, 0);
  }
  /**
  * @param {ReadableStreamDefaultController} controller
  * @returns {Promise<any>}
  */
  pull(controller) {
    const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, addHeapObject(controller));
    return takeObject(ret);
  }
  /**
  */
  cancel() {
    const ptr = this.__destroy_into_raw();
    wasm.intounderlyingsource_cancel(ptr);
  }
};
async function __wbg_load(module2, imports) {
  if (typeof Response === "function" && module2 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module2, imports);
      } catch (e) {
        if (module2.headers.get("Content-Type") != "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module2.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module2, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module: module2 };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_get_3baa728f9d58d3f6 = function(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_instanceof_Promise_ae8c7ffdec83f2ae = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof Promise;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_objectget_8532b94a9c11d073 = function(arg0, arg1, arg2) {
    const ret = object_get(getObject(arg0), getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getReader_584431a478f1339c = function() {
    return handleError(function(arg0) {
      const ret = getObject(arg0).getReader();
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_getWriter_300edebcd3c2c126 = function() {
    return handleError(function(arg0) {
      const ret = getObject(arg0).getWriter();
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_instanceof_ArrayBuffer_61dfc3198373c902 = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof ArrayBuffer;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof obj === "string" ? obj : void 0;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbindgen_is_falsy = function(arg0) {
    const ret = !getObject(arg0);
    return ret;
  };
  imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_a220cf903aa02ca2 = function() {
    const ret = new Array();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_of_99c2a118200b1e62 = function(arg0, arg1) {
    const ret = Array.of(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_push_37c89022f34c01ca = function(arg0, arg1) {
    const ret = getObject(arg0).push(getObject(arg1));
    return ret;
  };
  imports.wbg.__wbg_new_525245e2b9901204 = function() {
    const ret = new Object();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_setheaders_941829cd5c0306c9 = function(arg0, arg1) {
    getObject(arg0).headers = getObject(arg1);
  };
  imports.wbg.__wbg_setstatus_ba068e655c071b65 = function(arg0, arg1) {
    getObject(arg0).status = arg1;
  };
  imports.wbg.__wbg_setstatustext_b136c0c131897c74 = function(arg0, arg1, arg2) {
    getObject(arg0).statusText = getStringFromWasm0(arg1, arg2);
  };
  imports.wbg.__wbg_sethighWaterMark_10a9c5bcdaa54044 = function(arg0, arg1) {
    getObject(arg0).highWaterMark = arg1;
  };
  imports.wbg.__wbg_newwithintounderlyingsource_db318e6b93dffa9b = function(arg0, arg1) {
    const ret = new ReadableStream(IntoUnderlyingSource.__wrap(arg0), takeObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_newwithoptreadablestreamandinit_2aa96ef20a8586d8 = function() {
    return handleError(function(arg0, arg1) {
      const ret = new Response(getObject(arg0), getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_defineproperty_a38a805c31d58eaa = function(arg0, arg1, arg2, arg3) {
    define_property(getObject(arg0), getStringFromWasm0(arg1, arg2), takeObject(arg3));
  };
  imports.wbg.__wbindgen_is_array = function(arg0) {
    const ret = Array.isArray(getObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_objectset_2c6be17b4b8e7490 = function(arg0, arg1, arg2, arg3) {
    object_set(getObject(arg0), getStringFromWasm0(arg1, arg2), takeObject(arg3));
  };
  imports.wbg.__wbg_from_0791d740a9d37830 = function(arg0) {
    const ret = Array.from(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_wskey_5c0d03749627b76c = function(arg0) {
    const ret = ws_key();
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg_epoxywebsocket_new = function(arg0) {
    const ret = EpoxyWebSocket.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_epoxyudpstream_new = function(arg0) {
    const ret = EpoxyUdpStream.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
      obj.a = 0;
      return true;
    }
    const ret = false;
    return ret;
  };
  imports.wbg.__wbg_cancel_97a2795574a4f522 = function(arg0) {
    const ret = getObject(arg0).cancel();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_catch_a279b1da46d132d8 = function(arg0, arg1) {
    const ret = getObject(arg0).catch(getObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_clearTimeout_76877dbc010e786d = function(arg0) {
    const ret = clearTimeout(takeObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
  };
  imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_ea1883e1e5e86686 = function(arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_epoxyiostream_new = function(arg0) {
    const ret = EpoxyIoStream.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_setTimeout_75cb9b6991a4031d = function() {
    return handleError(function(arg0, arg1) {
      const ret = setTimeout(getObject(arg0), arg1);
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_log_b3b49a680407b5a7 = function(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbg_convertbodyinner_3f5088bfae138530 = function() {
    return handleError(function(arg0) {
      const ret = convert_body_inner(takeObject(arg0));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_at_5fa66069579ac579 = function(arg0, arg1) {
    const ret = getObject(arg0).at(arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_entriesofobjectinner_1b65c2c1606fc76b = function(arg0, arg1) {
    const ret = entries_of_object_inner(getObject(arg1));
    const ptr1 = passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg_length_ae22078168b726f5 = function(arg0) {
    const ret = getObject(arg0).length;
    return ret;
  };
  imports.wbg.__wbg_data_5c47a6985fefc490 = function(arg0) {
    const ret = getObject(arg0).data;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_instanceof_Error_69bde193b0cc95e3 = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof Error;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_toString_9d18e102ca933e68 = function(arg0) {
    const ret = getObject(arg0).toString();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_b85e72ed1bfd57f9 = function(arg0, arg1) {
    try {
      var state0 = { a: arg0, b: arg1 };
      var cb0 = (arg02, arg12) => {
        const a = state0.a;
        state0.a = 0;
        try {
          return __wbg_adapter_165(a, state0.b, arg02, arg12);
        } finally {
          state0.a = a;
        }
      };
      const ret = new Promise(cb0);
      return addHeapObject(ret);
    } finally {
      state0.a = state0.b = 0;
    }
  };
  imports.wbg.__wbg_read_e48a676fb81ea800 = function(arg0) {
    const ret = getObject(arg0).read();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_done_510de141aaf69a99 = function(arg0) {
    const ret = getObject(arg0).done;
    return ret;
  };
  imports.wbg.__wbg_value_3ef4965e9c7085be = function(arg0) {
    const ret = getObject(arg0).value;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_write_8c6e3bf306db71f2 = function(arg0, arg1) {
    const ret = getObject(arg0).write(getObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_abort_fded1e2bdd89d733 = function(arg0) {
    const ret = getObject(arg0).abort();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_fromentries_2ecc46c1026f7bcc = function() {
    return handleError(function(arg0) {
      const ret = from_entries(getObject(arg0));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_send_1b333b26681a902d = function() {
    return handleError(function(arg0, arg1, arg2) {
      getObject(arg0).send(new Uint8Array(getArrayU8FromWasm0(arg1, arg2)).buffer);
    }, arguments);
  };
  imports.wbg.__wbg_newwithstrsequence_95750c7542ecfdb3 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = new WebSocket(getStringFromWasm0(arg0, arg1), getObject(arg2));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_new_0bf4a5b0632517ed = function() {
    return handleError(function(arg0, arg1) {
      const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_setbinaryType_d164a0be4c212c9c = function(arg0, arg1) {
    getObject(arg0).binaryType = ["blob", "arraybuffer"][arg1];
  };
  imports.wbg.__wbg_setonmessage_b670c12ea34acd8b = function(arg0, arg1) {
    getObject(arg0).onmessage = getObject(arg1);
  };
  imports.wbg.__wbg_setonopen_7e770c87269cae90 = function(arg0, arg1) {
    getObject(arg0).onopen = getObject(arg1);
  };
  imports.wbg.__wbg_setonclose_40f935717ad6ffcd = function(arg0, arg1) {
    getObject(arg0).onclose = getObject(arg1);
  };
  imports.wbg.__wbg_setonerror_5ec4625df3060159 = function(arg0, arg1) {
    getObject(arg0).onerror = getObject(arg1);
  };
  imports.wbg.__wbindgen_is_object = function(arg0) {
    const val = getObject(arg0);
    const ret = typeof val === "object" && val !== null;
    return ret;
  };
  imports.wbg.__wbg_subarray_7c2e3576afe181d1 = function(arg0, arg1, arg2) {
    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).getRandomValues(getObject(arg1));
    }, arguments);
  };
  imports.wbg.__wbindgen_memory = function() {
    const ret = wasm.memory;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_buffer_b7b08af79b0b0974 = function(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9 = function(arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).randomFillSync(takeObject(arg1));
    }, arguments);
  };
  imports.wbg.__wbg_crypto_1d1f22824a6a080c = function(arg0) {
    const ret = getObject(arg0).crypto;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_process_4a72847cc503995b = function(arg0) {
    const ret = getObject(arg0).process;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_versions_f686565e586dd935 = function(arg0) {
    const ret = getObject(arg0).versions;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_node_104a2ff8d6ea03a2 = function(arg0) {
    const ret = getObject(arg0).node;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_is_string = function(arg0) {
    const ret = typeof getObject(arg0) === "string";
    return ret;
  };
  imports.wbg.__wbg_require_cca90b1a94a0255b = function() {
    return handleError(function() {
      const ret = module.require;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_msCrypto_eb05e62b530a1508 = function(arg0) {
    const ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_newwithlength_ec548f448387c968 = function(arg0) {
    const ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_is_function = function(arg0) {
    const ret = typeof getObject(arg0) === "function";
    return ret;
  };
  imports.wbg.__wbg_call_1084a111329e68ce = function() {
    return handleError(function(arg0, arg1) {
      const ret = getObject(arg0).call(getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_self_3093d5d1f7bcb682 = function() {
    return handleError(function() {
      const ret = self.self;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_window_3bcfc4d31bc012f8 = function() {
    return handleError(function() {
      const ret = window.window;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_globalThis_86b222e13bdf32ed = function() {
    return handleError(function() {
      const ret = globalThis.globalThis;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_global_e5a3fe56f8be9485 = function() {
    return handleError(function() {
      const ret = global.global;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbindgen_is_undefined = function(arg0) {
    const ret = getObject(arg0) === void 0;
    return ret;
  };
  imports.wbg.__wbg_newnoargs_76313bd6ff35d0f2 = function(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_call_89af060b4e1523f2 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_set_d1e79e2388520f18 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
  };
  imports.wbg.__wbg_length_8339fcf5d8ecd12e = function(arg0) {
    const ret = getObject(arg0).length;
    return ret;
  };
  imports.wbg.__wbg_now_b7a162010a9e75b4 = function() {
    const ret = Date.now();
    return ret;
  };
  imports.wbg.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg_then_95e6edc0f89b73b1 = function(arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_queueMicrotask_12a30234db4045d3 = function(arg0) {
    queueMicrotask(getObject(arg0));
  };
  imports.wbg.__wbg_then_876bb3c633745cc6 = function(arg0, arg1, arg2) {
    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_queueMicrotask_48421b3cc9052b68 = function(arg0) {
    const ret = getObject(arg0).queueMicrotask;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_resolve_570458cb99d56a43 = function(arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_byobRequest_b32c77640da946ac = function(arg0) {
    const ret = getObject(arg0).byobRequest;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_view_2a901bda0727aeb3 = function(arg0) {
    const ret = getObject(arg0).view;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_byteLength_850664ef28f3e42f = function(arg0) {
    const ret = getObject(arg0).byteLength;
    return ret;
  };
  imports.wbg.__wbg_close_aca7442e6619206b = function() {
    return handleError(function(arg0) {
      getObject(arg0).close();
    }, arguments);
  };
  imports.wbg.__wbg_new_796382978dfd4fb0 = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_buffer_0710d1b9dbe2eea6 = function(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_byteOffset_ea14c35fa6de38cc = function(arg0) {
    const ret = getObject(arg0).byteOffset;
    return ret;
  };
  imports.wbg.__wbg_close_cef2400b120c9c73 = function() {
    return handleError(function(arg0) {
      getObject(arg0).close();
    }, arguments);
  };
  imports.wbg.__wbg_enqueue_6f3d433b5e457aea = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).enqueue(getObject(arg1));
    }, arguments);
  };
  imports.wbg.__wbg_setTimeout_fba1b48a90e30862 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_performance_1430613edb72ce03 = function(arg0) {
    const ret = getObject(arg0).performance;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_now_eab901b1d3b8a295 = function(arg0) {
    const ret = getObject(arg0).now();
    return ret;
  };
  imports.wbg.__wbg_instanceof_Headers_f50b3b9bf4c5d552 = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof Headers;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_respond_a799bab31a44f2d7 = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).respond(arg1 >>> 0);
    }, arguments);
  };
  imports.wbg.__wbg_releaseLock_1d2d93e9dc8d76e2 = function(arg0) {
    getObject(arg0).releaseLock();
  };
  imports.wbg.__wbg_close_99bb12a22f16f79c = function() {
    return handleError(function(arg0) {
      getObject(arg0).close();
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper375 = function(arg0, arg1, arg2) {
    const ret = makeClosure(arg0, arg1, 18, __wbg_adapter_32);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_closure_wrapper377 = function(arg0, arg1, arg2) {
    const ret = makeClosure(arg0, arg1, 18, __wbg_adapter_35);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_closure_wrapper1274 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 113, __wbg_adapter_38);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_closure_wrapper1738 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 113, __wbg_adapter_41);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_closure_wrapper3996 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 113, __wbg_adapter_41);
    return addHeapObject(ret);
  };
  return imports;
}
function __wbg_init_memory(imports, memory) {
}
function __wbg_finalize_init(instance, module2) {
  wasm = instance.exports;
  __wbg_init.__wbindgen_wasm_module = module2;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  return wasm;
}
async function __wbg_init(module_or_path) {
  module_or_path = module_or_path || {};
  if (wasm !== void 0) return;
  if (typeof module_or_path !== "undefined" && Object.getPrototypeOf(module_or_path) === Object.prototype)
    ({ module_or_path } = module_or_path);
  else
    console.warn("using deprecated parameters for the initialization function; pass a single object instead");
  if (typeof module_or_path === "undefined") {
    module_or_path = new URL("epoxy.wasm", import.meta.url);
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  __wbg_init_memory(imports);
  const { instance, module: module2 } = await __wbg_load(await module_or_path, imports);
  __wbg_finalize_init(instance, module2);
}
var epoxy_bundled_default = __wbg_init;

// src/main.ts
var EpoxyTransport = class {
  canstart = true;
  epxclient = null;
  wisp;
  wisp_v2;
  udp_extension_required;
  EpoxyHandlers = null;
  constructor({ wisp, wisp_v2, udp_extension_required }) {
    this.wisp = wisp;
    this.wisp_v2 = wisp_v2 || false;
    this.udp_extension_required = udp_extension_required || false;
  }
  async init() {
    await epoxy_bundled_default();
    let options = new EpoxyClientOptions();
    options.user_agent = navigator.userAgent;
    options.udp_extension_required = this.udp_extension_required;
    options.wisp_v2 = this.wisp_v2;
    this.epxclient = new EpoxyClient(this.wisp, options);
    this.EpoxyHandlers = EpoxyHandlers;
    this.ready = true;
  }
  ready = false;
  async meta() {
  }
  async request(remote, method, body, headers, signal) {
    if (body instanceof Blob)
      body = await body.arrayBuffer();
    try {
      let payload = await this.epxclient.fetch(remote.href, { method, body, headers, redirect: "manual" });
      return {
        body: payload.body,
        headers: payload.rawHeaders,
        status: payload.status,
        statusText: payload.statusText
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  connect(url, origin, protocols, requestHeaders, onopen, onmessage, onclose, onerror) {
    let handlers = new this.EpoxyHandlers(
      onopen,
      onclose,
      onerror,
      (data) => data instanceof Uint8Array ? onmessage(data.buffer) : onmessage(data)
    );
    let epsocket = this.epxclient.connect_websocket(
      handlers,
      url.href,
      protocols,
      { "Origin": origin }
    );
    return [
      async (data) => {
        (await epsocket).send(data);
      },
      async (code, reason) => {
        (await epsocket).close(close, reason);
      }
    ];
  }
};
export {
  EpoxyTransport as default
};