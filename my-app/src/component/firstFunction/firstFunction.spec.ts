import { addition } from "./firstFunction"

xdescribe("test addition", ()=>{
    it("Testing addition function", ()=>{
        expect(addition(10, 20)).toBe(30);
    })
})

xdescribe("Test Equal", ()=>{
    it("Equal",()=>{
        let equalString = "abc";
        expect(equalString).toEqual("abc");
    });
    it("Not Equal",()=>{
        let equalString = "abc";
        expect(equalString).not.toEqual("abcd");
    })
})

xdescribe("Test contain", ()=>{
    it("contain",()=>{
        let equalString = "abc";
        expect(equalString).toContain( "a");
    });

    it("[1,2,3] contain 1",()=>{
        let a = [1,2,3];
        expect(a).toContain(1);
    })

});

xdescribe("tobe VS toequal", ()=>{
    // Tobe will failed 
    xit("tobe",()=>{
        let a = { val : 10};
        let b = { val : 10};
        expect(a).toBe(b);
    });
    it("toQeual",()=>{
        let a = { val : 10};
        let b = { val : 10};
        expect(a).toEqual(b);
    });

    // Tobe will failed
    xit("tobe [1,2,3]",()=>{
        let a = [1,2,3];
        expect(a).toBe([1,2,3]);
    });

    it("toEqual [1,2,3]",()=>{
        let a = [1,2,3];
        expect(a).toEqual([1,2,3]);
    });
});

xdescribe("toMatch",()=>{
    it("toMatch test",()=>{
        expect("abc").toMatch("abc")
    })
})