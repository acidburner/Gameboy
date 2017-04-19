var Gameboy = {
    _cpu: {
        registers: {
            af: new Uint16Array(16).fill(0),
            bc: new Uint16Array(16).fill(0),
            de: new Uint16Array(16).fill(0),
            hl: new Uint16Array(16).fill(0),
            programCounter: 0x100,
            stackPointer: 0xFFFE,
            m:0, t:0,
        },
        //This bit is set when the result of a math operation
        //is zero or two values match when using the CP
        //instruction.
        setZeroFlag: function() {
            this.CPU.registers['af'][7] = 1;
        },
        //This bit is set if a subtraction was performed in the
        //last math instruction.
        setSubtractFlag: function() {
            this.CPU.registers['af'][6] = 1;
        },
        //This bit is set if a carry occurred from the lower
        //nibble in the last math operation
        setHalfCarryFlag: function() {
            this.CPU.registers['af'][5] = 1;
        },
        //This bit is set if a carry occurred from the last
        //math operation or if register A is the smaller value
        //when executing the CP instruction
        setCarryFlag: function() {
            this.CPU.registers['af'][4] = 1;
        },
        call: function() {

        },
        push: function() {
            
        },
        reset: function() {
            
        },
        pop: function() {
            
        },
        ret: function() {
            
        },
        reti: function() {
            
        }
    },
    dumpRegisters: function() {
        console.log( this.CPU.registers );
    },
    
}

Gameboy.setZeroFlag();
Gameboy.dumpRegisters();