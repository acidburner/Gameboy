var Gameboy = {
    CPU: {
        registers: {
            a: new Int8Array(), b: new Int8Array(),
            c: new Int8Array(), d: new Int8Array(),
            e: new Int8Array(), h: new Int8Array(),
            l: new Int8Array(), flags: new Int8Array(),
            programCounter: new Uint16Array(),
            stackPointer: new Uint16Array(),
            m:0, t:0,
        },
        shorts: {
            // af: this.a.toString() + this.flags.toString(),
            // bc: this.b.toString() + this.c.toString(),
            // de: this.d.toString() + this.e.toString(),
            // hl: this.h.toString() + this.l.toString(),
        }
    },
    dumpRegisters: function() {
        for( var key in this.CPU.registers ) {
            //this.CPU.registers["c"] = String.fromCharCode(1);
            console.debug( key, this.CPU.registers[key].toString() );
        }
        for( var key in this.CPU.shorts ) {
            console.debug( key, this.CPU.shorts[key].toString() );
        }
    }
}